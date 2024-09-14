import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Repository } from "typeorm";
import { Connection } from "mysql2";
import { MenuBoardEntity } from './Entity/MenuBoardEntity';
import { SignFeedCMSDisplayEntity } from 'src/cms/Entity/SignFeedCMSDisplayEntity';
export declare class SocketGateWay implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly connection;
    private readonly MenuBoardEntityRepository;
    private readonly SignFeedCMSDisplayEntityRepository;
    constructor(connection: Connection, MenuBoardEntityRepository: Repository<MenuBoardEntity>, SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>);
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    MenuhandleMessage(client: Socket, payload: any): void;
    DeleteMediahandleMessage(client: Socket, payload: any): void;
    DeleteMediaDataAndEmit(jsonObject: any): Promise<void>;
    fetchDataAndEmit(macAddress: string): Promise<void>;
}
