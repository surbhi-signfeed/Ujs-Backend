import { Logger } from '@nestjs/common';
import { Connection } from 'mysql2';
import { MenuBoardDTO } from './dto/MenuBoardDTO';
import { MenuBoardEntity } from './Entity/MenuBoardEntity';
import { Repository } from "typeorm";
import { SignFeedCMSDisplayEntity } from 'src/cms/Entity/SignFeedCMSDisplayEntity';
import { SocketGateWay } from './SocketGateWay';
import { MenuBoardItemLockDTO } from './dto/MenuBoardItemLockDTO';
export declare class ApiService {
    private readonly logger;
    private readonly connection;
    private readonly MenuBoardEntityRepository;
    private readonly SignFeedCMSDisplayEntityRepository;
    private readonly socketGateWay;
    constructor(logger: Logger, connection: Connection, MenuBoardEntityRepository: Repository<MenuBoardEntity>, SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>, socketGateWay: SocketGateWay);
    MenuBoard(menuBoardDTO: MenuBoardDTO[]): Promise<{
        message: string;
        status: number;
    }>;
    MenuBoardItemLock(menuBoardItemLockDTO: MenuBoardItemLockDTO): Promise<{
        message: string;
        status: number;
    }>;
}
