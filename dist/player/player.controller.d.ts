import { Logger } from '@nestjs/common';
import { PlayerService } from "./player.service";
import { PlayerDTO } from "./dto/playerDTO";
import { Request } from 'express';
export declare class PlayerController {
    private readonly playerService;
    private readonly logger;
    constructor(playerService: PlayerService, logger: Logger);
    RegisterDisplay(request: Request, playerDTO: PlayerDTO): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    DisplaySchedule(request: Request, playerDTO: PlayerDTO): Promise<true | {
        status: number;
        code: string;
        message: string;
    }>;
}
