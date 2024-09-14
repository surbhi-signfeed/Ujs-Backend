import {Body, Controller, Inject, Logger, Post, Req} from '@nestjs/common';
import {PlayerService} from "./player.service";
import {PlayerDTO} from "./dto/playerDTO";
import { Request } from 'express';

@Controller('player')
export class PlayerController {
    constructor(private readonly playerService: PlayerService, @Inject(Logger) private readonly logger: Logger)
    {}

    @Post('RegisterDisplay')
    async RegisterDisplay(@Req() request: Request, @Body()playerDTO:PlayerDTO){
        this.logger.log('Register Display API Called')
        return this.playerService.RegisterDisplay(request, playerDTO)
    }

    @Post('Schedule')
    async DisplaySchedule(@Req() request: Request, @Body()playerDTO:PlayerDTO){
        this.logger.log('Register Display API Called')
        return this.playerService.DisplaySchedule(request, playerDTO)
    }

}
