import { Logger } from "@nestjs/common";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { SignFeedCMSResolutionEntity } from "./Entity/SignFeedCMSResolutionEntity";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";
import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
export declare class UjsService {
    private readonly logger;
    private readonly connection;
    private readonly SignFeedCMSResolutionEntityRepository;
    constructor(logger: Logger, connection: Connection, SignFeedCMSResolutionEntityRepository: Repository<SignFeedCMSResolutionEntity>);
    SignfeedCMSResolutionList(request: any): Promise<{
        resolution: SignFeedCMSResolutionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionAdd(request: any, cmsResolutionDTO: CMSResolutionDTO): Promise<{
        message: string;
        status: number;
        resolution?: undefined;
    } | {
        resolution: SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionUpdate(request: any, cmsResolutionUpdateDTO: CMSResolutionUpdateDTO): Promise<{
        resolution: SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        resolution?: undefined;
    }>;
    SignfeedCMSResolutionDelete(request: any, cmsResolutionDeleteDTO: CMSResolutionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
}
