"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketGateWay = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const typeorm_2 = require("typeorm");
const MenuBoardEntity_1 = require("./Entity/MenuBoardEntity");
const SignFeedCMSDisplayEntity_1 = require("../cms/Entity/SignFeedCMSDisplayEntity");
let SocketGateWay = class SocketGateWay {
    constructor(connection, MenuBoardEntityRepository, SignFeedCMSDisplayEntityRepository) {
        this.connection = connection;
        this.MenuBoardEntityRepository = MenuBoardEntityRepository;
        this.SignFeedCMSDisplayEntityRepository = SignFeedCMSDisplayEntityRepository;
    }
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
        this.server.emit('userConnected', `${client.id} connected`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        this.server.emit('userDisconnected', `${client.id} disconnected`);
    }
    MenuhandleMessage(client, payload) {
        const jsonObject = JSON.parse(payload);
        console.log(jsonObject.MacAddress);
        this.fetchDataAndEmit(jsonObject.MacAddress);
    }
    DeleteMediahandleMessage(client, payload) {
        const jsonObject = JSON.parse(payload);
        console.log(jsonObject.MacAddress);
        this.DeleteMediaDataAndEmit(jsonObject);
    }
    async DeleteMediaDataAndEmit(jsonObject) {
        try {
            let displayList = await this.SignFeedCMSDisplayEntityRepository.findOne({
                where: {
                    MacAddress: jsonObject.MacAddress
                }
            });
            if (displayList) {
                let deleteFile = [{ 'filename': jsonObject.filename, 'type': 'delete' }];
                this.server.emit(`${displayList.MacAddress}`, deleteFile);
            }
        }
        catch (error) {
            console.error('Error fetching data and emitting:', error);
        }
    }
    async fetchDataAndEmit(macAddress) {
        try {
            let displayList = await this.SignFeedCMSDisplayEntityRepository.findOne({
                where: {
                    MacAddress: macAddress
                }
            });
            if (displayList) {
                let menuItemData = await this.MenuBoardEntityRepository.find({
                    where: {
                        store_code: displayList.BroadCastAddress
                    }
                });
                if (menuItemData) {
                    this.server.emit(`${displayList.MacAddress}`, menuItemData);
                }
            }
        }
        catch (error) {
            console.error('Error fetching data and emitting:', error);
        }
    }
};
exports.SocketGateWay = SocketGateWay;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('menuboardprice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], SocketGateWay.prototype, "MenuhandleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('deletemedia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], SocketGateWay.prototype, "DeleteMediahandleMessage", null);
exports.SocketGateWay = SocketGateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'menuboard', cors: true }),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(MenuBoardEntity_1.MenuBoardEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(SignFeedCMSDisplayEntity_1.SignFeedCMSDisplayEntity)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository,
        typeorm_2.Repository])
], SocketGateWay);
//# sourceMappingURL=SocketGateWay.js.map