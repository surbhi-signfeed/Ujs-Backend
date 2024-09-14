import { Logger } from '@nestjs/common';
import { Connection } from "mysql2";
import { PlayerDTO } from "./dto/playerDTO";
import { SignFeedDisplayEntity } from './Entity/SignFeedDisplayEntity';
import { Repository } from "typeorm";
import { SignFeedSignageSettingEntity } from './Entity/SignFeedSignageSettingEntity';
export declare class PlayerService {
    private readonly logger;
    private readonly connection;
    private readonly SignFeedDisplayEntityRepository;
    private readonly SignFeedSignageSettingEntityRepository;
    constructor(logger: Logger, connection: Connection, SignFeedDisplayEntityRepository: Repository<SignFeedDisplayEntity>, SignFeedSignageSettingEntityRepository: Repository<SignFeedSignageSettingEntity>);
    RegisterDisplay(request: any, playerDTO: PlayerDTO): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    DisplaySchedule(request: any, playerDTO: PlayerDTO): Promise<true | {
        status: number;
        code: string;
        message: string;
    }>;
}
