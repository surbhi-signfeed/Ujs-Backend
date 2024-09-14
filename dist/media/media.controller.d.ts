import { Logger } from '@nestjs/common';
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    private readonly logger;
    constructor(mediaService: MediaService, logger: Logger);
    getImage(filename: any, res: any): any;
}
