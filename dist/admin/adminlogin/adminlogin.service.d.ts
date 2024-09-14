import { Connection } from "mysql2";
import { AdminUserDetailDTO } from "./dto/AdminUserDetailDTO";
import { AdminAddUserDTO } from "./dto/AdminAddUserDTO";
import { AdminUserInfoEntity } from "./Entity/AdminUserInfoEntity";
import { Repository } from "typeorm";
import { AdminEditUserDTO } from "./dto/AdminEditUserDTO";
import { AdminResetUserPasswordDTO } from "./dto/AdminResetUserPasswordDTO";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";
import { AdminUserOrganizationEntity } from './Entity/AdminUserOrganizationEntity';
import { MailerService } from "@nestjs-modules/mailer";
export declare class AdminloginService {
    private readonly connection;
    private readonly AdminUserInfoEntityRepository;
    private readonly AdminUserOrganizationRepository;
    private readonly mailerService;
    constructor(connection: Connection, AdminUserInfoEntityRepository: Repository<AdminUserInfoEntity>, AdminUserOrganizationRepository: Repository<AdminUserOrganizationEntity>, mailerService: MailerService);
    AdminUserList(): Promise<{
        userlist: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        status: number;
    }>;
    AdminUserDetail(adminUserdto: AdminUserDetailDTO): Promise<{
        user: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        status: number;
    }>;
    AdminAddUser(adminaddUserdto: AdminAddUserDTO): Promise<{
        message: string;
        status: number;
        UserId?: undefined;
    } | {
        message: string;
        status: number;
        UserId: number;
    }>;
    AdminAddUserByAdmin(adminaddUserdto: AdminAddUserDTO): Promise<{
        message: string;
        status: number;
    }>;
    AdminUserPermission(request: any): Promise<{
        user: any;
        message: string;
        status: number;
    }>;
    AdminEditUser(admineditUserdto: AdminEditUserDTO): Promise<{
        message: string;
        status: number;
    }>;
    updateUserStatus(request: Request, userId: number): Promise<{
        Status: AdminUserInfoEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Status?: undefined;
    }>;
    AdminResetUserPassword(adminresetUserPassworddto: AdminResetUserPasswordDTO): Promise<{
        message: string;
        status: number;
    }>;
    AdminUserLogin(adminUserLogindto: AdminUserLoginDTO): Promise<{
        user: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        accessToken: string;
        status: number;
    }>;
    AdminValidateUserLogin(): Promise<{
        user: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        accessToken: string;
        status: number;
    }>;
    sendMail(usermail: string, userid: string): Promise<void>;
}
