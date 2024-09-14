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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const SignFeedDisplayEntity_1 = require("./Entity/SignFeedDisplayEntity");
const typeorm_2 = require("typeorm");
const SignFeedSignageSettingEntity_1 = require("./Entity/SignFeedSignageSettingEntity");
let PlayerService = class PlayerService {
    constructor(logger, connection, SignFeedDisplayEntityRepository, SignFeedSignageSettingEntityRepository) {
        this.logger = logger;
        this.connection = connection;
        this.SignFeedDisplayEntityRepository = SignFeedDisplayEntityRepository;
        this.SignFeedSignageSettingEntityRepository = SignFeedSignageSettingEntityRepository;
    }
    async RegisterDisplay(request, playerDTO) {
        const ipAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkServerKey = await this.SignFeedSignageSettingEntityRepository.findOne({
            where: {
                server_key: playerDTO.ServerKey
            }
        });
        if (checkServerKey) {
            let checkDisplay = await this.SignFeedDisplayEntityRepository.findOne({
                where: {
                    license: playerDTO.DeviceID
                }
            });
            if (checkDisplay) {
                if (checkDisplay.licensed == 1) {
                    checkDisplay.lastaccessed = unixTimestamp;
                    checkDisplay.ClientAddress = ipAddress;
                    await this.SignFeedDisplayEntityRepository.save(checkDisplay);
                    return { status: 0, code: 'READY', message: 'Display is active and ready to start.' };
                }
                else {
                    checkDisplay.lastaccessed = unixTimestamp;
                    checkDisplay.ClientAddress = ipAddress;
                    await this.SignFeedDisplayEntityRepository.save(checkDisplay);
                    return {
                        status: 2,
                        code: 'WAITING',
                        message: 'Display is awaiting licensing approval from an Administrator.'
                    };
                }
            }
            else {
                const addNewDisplay = new SignFeedDisplayEntity_1.SignFeedDisplayEntity();
                addNewDisplay.auditingUntil = 0;
                addNewDisplay.display = playerDTO.DeviceName;
                addNewDisplay.defaultlayoutid = 1;
                addNewDisplay.license = playerDTO.DeviceID;
                addNewDisplay.licensed = 0;
                addNewDisplay.loggedin = 1;
                addNewDisplay.lastaccessed = unixTimestamp;
                addNewDisplay.inc_schedule = 0;
                addNewDisplay.email_alert = 1;
                addNewDisplay.alert_timeout = 0;
                addNewDisplay.ClientAddress = ipAddress;
                addNewDisplay.MediaInventoryStatus = 0;
                addNewDisplay.MacAddress = playerDTO.MacAddress;
                addNewDisplay.LastChanged = 0;
                addNewDisplay.NumberOfMacAddressChanges = 0;
                addNewDisplay.LastWakeOnLanCommandSent = 0;
                addNewDisplay.WakeOnLan = 0;
                addNewDisplay.screenShotRequested = 0;
                addNewDisplay.lastCommandSuccess = 2;
                addNewDisplay.deviceName = playerDTO.DeviceName;
                await this.SignFeedDisplayEntityRepository.save(addNewDisplay);
                return {
                    status: 1,
                    code: 'ADDED',
                    message: 'Display added and is awaiting licensing approval from an Administrator.'
                };
            }
        }
        else {
            return {
                status: 3,
                code: 'ServerKey',
                message: 'The Server key you entered does not match with the server key at this address'
            };
        }
    }
    async DisplaySchedule(request, playerDTO) {
        const ipAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkServerKey = await this.SignFeedSignageSettingEntityRepository.findOne({
            where: {
                server_key: playerDTO.ServerKey
            }
        });
        if (checkServerKey) {
            let checkDisplay = await this.SignFeedDisplayEntityRepository.findOne({
                where: {
                    license: playerDTO.DeviceID, licensed: 1
                }
            });
            if (checkDisplay) {
                return true;
            }
            else {
                return {
                    status: 4,
                    code: 'NotLicensed',
                    message: 'This display client is not licensed'
                };
            }
        }
        else {
            return {
                status: 3,
                code: 'ServerKey',
                message: 'The Server key you entered does not match with the server key at this address'
            };
        }
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(SignFeedDisplayEntity_1.SignFeedDisplayEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(SignFeedSignageSettingEntity_1.SignFeedSignageSettingEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository,
        typeorm_2.Repository])
], PlayerService);
//# sourceMappingURL=player.service.js.map