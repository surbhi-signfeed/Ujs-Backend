import { Logger } from "@nestjs/common";
import { UjsService } from "./ujs.service";
import { Request } from "express";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
import { UJSShgGroupDTO } from "./dto/UJSShgGroupDTO";
import { UJSShgMemberDTO } from "./dto/UJSShgMemberDTO";
import { UJSUsersDTO } from "./dto/UJSUsersDTO";
import { UJSRoleDTO } from "./dto/UJSRoleDTO";
import { UJSRolePermissionDTO } from "./dto/UJSRolePermissionDTO";
export declare class UjsController {
    private readonly ujsService;
    private readonly logger;
    constructor(ujsService: UjsService, logger: Logger);
    UJSDepartmentAdd(request: Request, ujsDepartmentDTO: UJSDepartmentDTO): Promise<{
        message: string;
        status: number;
        departmentList?: undefined;
    } | {
        departmentList: import("./Entity/UJSDepartmentEntity").UJSDepartmentEntity;
        message: string;
        status: number;
    }>;
    listDepartment(request: Request): Promise<{
        department: import("./Entity/UJSDepartmentEntity").UJSDepartmentEntity[];
        message: string;
        status: number;
    }>;
    UJSDepartmentUpdate(request: Request, ujsDepartmentUpdateDTO: UJSDepartmentUpdateDTO): Promise<{
        department: import("./Entity/UJSDepartmentEntity").UJSDepartmentEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        department?: undefined;
    }>;
    UJSDepartmentDelete(request: Request, ujsDepartmentDeleteDTO: UJSDepartmentDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    UJSShgGroupAdd(request: Request, ujsShgGroupDTO: UJSShgGroupDTO): Promise<{
        message: string;
        status: number;
        shgGroupList?: undefined;
    } | {
        shgGroupList: import("./Entity/UJSShgGroupEntity").UJSShgGroupEntity;
        message: string;
        status: number;
    }>;
    listShgGroup(request: Request): Promise<{
        shgGroup: import("./Entity/UJSShgGroupEntity").UJSShgGroupEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMemberAdd(request: Request, ujsShgMemberDTO: UJSShgMemberDTO): Promise<{
        message: string;
        status: number;
        shgMemberList?: undefined;
    } | {
        shgMemberList: import("./Entity/UJSShgMemberEntity").UJSShgMemberEntity;
        message: string;
        status: number;
    }>;
    listShgMember(request: Request): Promise<{
        shgMember: import("./Entity/UJSShgMemberEntity").UJSShgMemberEntity[];
        message: string;
        status: number;
    }>;
    UJSUserAdd(request: Request, ujsUserDTO: UJSUsersDTO): Promise<{
        message: string;
        status: number;
        UserList?: undefined;
    } | {
        UserList: import("./Entity/UJSUsersEntity").UJSUsersEntity;
        message: string;
        status: number;
    }>;
    listUser(request: Request): Promise<{
        shgUser: import("./Entity/UJSUsersEntity").UJSUsersEntity[];
        message: string;
        status: number;
    }>;
    UJSRoleAdd(request: Request, ujsRoleDTO: UJSRoleDTO, ujsRolePermissionDTOs: UJSRolePermissionDTO[]): Promise<{
        message: string;
        status: number;
        role?: undefined;
    } | {
        message: string;
        status: number;
        role: import("./Entity/UJSRoleEntity").UJSRoleEntity;
    }>;
    listRole(request: Request): Promise<{
        shgRole: import("./Entity/UJSRoleEntity").UJSRoleEntity[];
        message: string;
        status: number;
    }>;
}
