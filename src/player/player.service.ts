import {Inject, Injectable, Logger} from '@nestjs/common';
import {InjectDataSource, InjectRepository} from "@nestjs/typeorm";
import {Connection} from "mysql2";
import {PlayerDTO} from "./dto/playerDTO";
import { SignFeedDisplayEntity } from './Entity/SignFeedDisplayEntity';
import {Repository} from "typeorm";
import { SignFeedSignageSettingEntity } from './Entity/SignFeedSignageSettingEntity';

@Injectable()
export class PlayerService {
    constructor(
       @Inject(Logger) private readonly logger: Logger,
       @InjectDataSource() private readonly connection: Connection,
       @InjectRepository(SignFeedDisplayEntity)
       private readonly SignFeedDisplayEntityRepository: Repository<SignFeedDisplayEntity>,
       @InjectRepository(SignFeedSignageSettingEntity)
       private readonly SignFeedSignageSettingEntityRepository: Repository<SignFeedSignageSettingEntity>

    ) {}

//=================== REGISTER DISPLAY API FOR PLAYER ==============================//
    async RegisterDisplay(request, playerDTO: PlayerDTO) {
        const ipAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

        let checkServerKey = await this.SignFeedSignageSettingEntityRepository.findOne({
            where: {
                server_key: playerDTO.ServerKey
            }
        })
        if (checkServerKey) {
            let checkDisplay = await this.SignFeedDisplayEntityRepository.findOne({
                where: {
                    license: playerDTO.DeviceID
                }
            })
            if (checkDisplay) {
                if (checkDisplay.licensed == 1) {
                    checkDisplay.lastaccessed = unixTimestamp
                    checkDisplay.ClientAddress = ipAddress
                    await this.SignFeedDisplayEntityRepository.save(checkDisplay);

                    return {status: 0, code: 'READY', message: 'Display is active and ready to start.'}
                } else {
                    checkDisplay.lastaccessed = unixTimestamp
                    checkDisplay.ClientAddress = ipAddress
                    await this.SignFeedDisplayEntityRepository.save(checkDisplay);
                    return {
                        status: 2,
                        code: 'WAITING',
                        message: 'Display is awaiting licensing approval from an Administrator.'
                    }
                }
            } else {
                const addNewDisplay: SignFeedDisplayEntity = new SignFeedDisplayEntity();
                addNewDisplay.auditingUntil = 0
                addNewDisplay.display = playerDTO.DeviceName
                addNewDisplay.defaultlayoutid = 1
                addNewDisplay.license = playerDTO.DeviceID
                addNewDisplay.licensed = 0
                addNewDisplay.loggedin = 1
                addNewDisplay.lastaccessed = unixTimestamp
                addNewDisplay.inc_schedule = 0
                addNewDisplay.email_alert = 1
                addNewDisplay.alert_timeout = 0
                addNewDisplay.ClientAddress = ipAddress
                addNewDisplay.MediaInventoryStatus = 0
                addNewDisplay.MacAddress = playerDTO.MacAddress
                addNewDisplay.LastChanged = 0
                addNewDisplay.NumberOfMacAddressChanges = 0
                addNewDisplay.LastWakeOnLanCommandSent = 0
                addNewDisplay.WakeOnLan = 0
                addNewDisplay.screenShotRequested = 0
                addNewDisplay.lastCommandSuccess = 2
                addNewDisplay.deviceName = playerDTO.DeviceName
                await this.SignFeedDisplayEntityRepository.save(addNewDisplay);

                return {
                    status: 1,
                    code: 'ADDED',
                    message: 'Display added and is awaiting licensing approval from an Administrator.'
                }
            }
        }
        else {
            return {
                status: 3,
                code: 'ServerKey',
                message: 'The Server key you entered does not match with the server key at this address'
            }
        }
    }


//=================== END OF REGISTER DISPLAY API FOR PLAYER ==============================//

//=================== DISPLAY SCHEDULE API FOR PLAYER ==============================//

    async DisplaySchedule(request, playerDTO:PlayerDTO){
        const ipAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

        let checkServerKey = await this.SignFeedSignageSettingEntityRepository.findOne({
            where: {
                server_key: playerDTO.ServerKey
            }
        })
        if (checkServerKey) {
            let checkDisplay = await this.SignFeedDisplayEntityRepository.findOne({
                where: {
                    license: playerDTO.DeviceID, licensed: 1
                }
            })
            if (checkDisplay) {
                return true
            }
            else {
                return {
                    status: 4,
                    code: 'NotLicensed',
                    message: 'This display client is not licensed'
                }
            }
        }
        else {
            return {
                status: 3,
                code: 'ServerKey',
                message: 'The Server key you entered does not match with the server key at this address'
            }
        }
    }

}
