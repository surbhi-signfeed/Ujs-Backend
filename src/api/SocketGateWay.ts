import {InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {Repository} from "typeorm";
import {Connection} from "mysql2";
import { MenuBoardEntity } from './Entity/MenuBoardEntity';
import { SignFeedCMSDisplayEntity } from 'src/cms/Entity/SignFeedCMSDisplayEntity';

@WebSocketGateway({namespace: 'menuboard', cors: true })
export class SocketGateWay implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        @InjectDataSource() private readonly connection: Connection,
        @InjectRepository(MenuBoardEntity)
        private readonly MenuBoardEntityRepository: Repository<MenuBoardEntity>,
        @InjectRepository(SignFeedCMSDisplayEntity)
        private readonly SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>
    ) {}
    @WebSocketServer() server: Server;

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
        // Notify other clients about the new connection
        this.server.emit('userConnected', `${client.id} connected`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        // Notify other clients about the disconnection
        this.server.emit('userDisconnected', `${client.id} disconnected`);
    }

    @SubscribeMessage('menuboardprice')
    MenuhandleMessage(client: Socket, payload: any) {
      //  console.log('Received priceChange message:', payload);
        const jsonObject = JSON.parse(payload);
       console.log(jsonObject.MacAddress);
        this.fetchDataAndEmit(jsonObject.MacAddress);
        // this.server.emit(`1234`, 'menuItemData')
    }

    @SubscribeMessage('deletemedia')
    DeleteMediahandleMessage(client: Socket, payload: any) {
        //  console.log('Received priceChange message:', payload);
        const jsonObject = JSON.parse(payload);
        console.log(jsonObject.MacAddress);
        this.DeleteMediaDataAndEmit(jsonObject);
        // this.server.emit(`1234`, 'menuItemData')
    }

    async DeleteMediaDataAndEmit(jsonObject): Promise<void> {
        try {
            let displayList = await this.SignFeedCMSDisplayEntityRepository.findOne({
                where: {
                    MacAddress: jsonObject.MacAddress
                }
            })
            if (displayList) {
                let deleteFile = [{'filename': jsonObject.filename, 'type': 'delete'}]
                    this.server.emit(`${displayList.MacAddress}`, deleteFile)

            }
        }
        catch (error) {
            console.error('Error fetching data and emitting:', error);
            // Handle errors accordingly
        }
    }

    async fetchDataAndEmit(macAddress: string): Promise<void> {
        try {
            let displayList = await this.SignFeedCMSDisplayEntityRepository.findOne({
                where: {
                    MacAddress: macAddress
                }
            })
            if (displayList) {
                let menuItemData = await this.MenuBoardEntityRepository.find({
                    where: {
                        store_code: displayList.BroadCastAddress
                    }
                })
                if (menuItemData) {
                    this.server.emit(`${displayList.MacAddress}`, menuItemData)
                }
            }
        }
        catch (error) {
            console.error('Error fetching data and emitting:', error);
            // Handle errors accordingly
        }
    }

}
