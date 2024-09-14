import { Logger } from "@nestjs/common";
import { UjsService } from "./ujs.service";
import { Request } from "express";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";
import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
export declare class UjsController {
    private readonly ujsService;
    private readonly logger;
    constructor(ujsService: UjsService, logger: Logger);
    listResolutions(request: Request): Promise<{
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionAdd(request: Request, cmsResolutionDTO: CMSResolutionDTO): Promise<{
        message: string;
        status: number;
        resolution?: undefined;
    } | {
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionUpdate(request: Request, cmsResolutionUpdateDTO: CMSResolutionUpdateDTO): Promise<{
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        resolution?: undefined;
    }>;
    SignfeedCMSResolutionDelete(request: Request, cmsResolutionDeleteDTO: CMSResolutionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
}
