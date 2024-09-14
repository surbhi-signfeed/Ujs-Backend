import { Logger } from "@nestjs/common";
import { AdminloginService } from "./adminlogin.service";
import { AdminUserDetailDTO } from "./dto/AdminUserDetailDTO";
import { AdminAddUserDTO } from "./dto/AdminAddUserDTO";
import { AdminEditUserDTO } from "./dto/AdminEditUserDTO";
import { AdminResetUserPasswordDTO } from "./dto/AdminResetUserPasswordDTO";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";
export declare class AdminloginController {
    private readonly adminloginservice;
    private readonly logger;
    constructor(adminloginservice: AdminloginService, logger: Logger);
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
    AdminEditUser(admineditUserdto: AdminEditUserDTO): Promise<{
        message: string;
        status: number;
    }>;
    updateStatus(request: Request, userId: number): Promise<{
        Status: import("./Entity/AdminUserInfoEntity").AdminUserInfoEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Status?: undefined;
    }>;
    AdminUserPermission(request: Request): Promise<{
        user: any;
        message: string;
        status: number;
    }>;
    sendMail(body: {
        usermail: string;
        userid: string;
    }): void;
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
}
