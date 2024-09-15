import { Logger } from "@nestjs/common";
import { UjsService } from "./ujs.service";
import { Request } from "express";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
import { UJSShgGroupDTO } from "./dto/UJSShgGroupDTO";
import { UJSShgMemberDTO } from "./dto/UJSShgMemberDTO";
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
}
