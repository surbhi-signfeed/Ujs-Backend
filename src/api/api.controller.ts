import {Body, Controller, Get, Inject, Logger, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/admin/auth/jwt-auth.guard';
import { ApiService } from './api.service';
import { MenuBoardDTO } from './dto/MenuBoardDTO';
import { MenuBoardItemLockDTO } from './dto/MenuBoardItemLockDTO';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService:ApiService, @Inject(Logger) private readonly logger:Logger
                )
    {}
    @Post('MenuBoard')
    @UseGuards(JwtAuthGuard)
    async MenuBoard(@Body() menuBoardDTO: MenuBoardDTO[]){
        console.log(menuBoardDTO)
        return this.apiService.MenuBoard(menuBoardDTO)
    }

    @Post('MenuBoardItemLock')
    @UseGuards(JwtAuthGuard)
    async MenuBoardItemLock(@Body() menuBoardItemLockDTO: MenuBoardItemLockDTO){
        return this.apiService.MenuBoardItemLock(menuBoardItemLockDTO)
    }
}
