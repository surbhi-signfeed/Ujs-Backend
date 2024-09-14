import { Logger } from '@nestjs/common';
import { ApiService } from './api.service';
import { MenuBoardDTO } from './dto/MenuBoardDTO';
import { MenuBoardItemLockDTO } from './dto/MenuBoardItemLockDTO';
export declare class ApiController {
    private readonly apiService;
    private readonly logger;
    constructor(apiService: ApiService, logger: Logger);
    MenuBoard(menuBoardDTO: MenuBoardDTO[]): Promise<{
        message: string;
        status: number;
    }>;
    MenuBoardItemLock(menuBoardItemLockDTO: MenuBoardItemLockDTO): Promise<{
        message: string;
        status: number;
    }>;
}
