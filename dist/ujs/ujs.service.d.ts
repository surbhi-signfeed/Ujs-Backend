import { Logger } from "@nestjs/common";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentEntity } from "./Entity/UJSDepartmentEntity";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
import { UJSShgGroupEntity } from "./Entity/UJSShgGroupEntity";
import { UJSShgMemberEntity } from "./Entity/UJSShgMemberEntity";
import { UJSShgGroupDTO } from "./dto/UJSShgGroupDTO";
import { UJSShgMemberDTO } from "./dto/UJSShgMemberDTO";
export declare class UjsService {
    private readonly logger;
    private readonly connection;
    private readonly UJSDepartmentRepository;
    private readonly UJSSghGroupRepository;
    private readonly UJSShgMemberRepository;
    constructor(logger: Logger, connection: Connection, UJSDepartmentRepository: Repository<UJSDepartmentEntity>, UJSSghGroupRepository: Repository<UJSShgGroupEntity>, UJSShgMemberRepository: Repository<UJSShgMemberEntity>);
    UJSDepartmentAdd(request: any, ujsDepartmentDTO: UJSDepartmentDTO): Promise<{
        message: string;
        status: number;
        departmentList?: undefined;
    } | {
        departmentList: UJSDepartmentEntity;
        message: string;
        status: number;
    }>;
    UJSDepartmentList(request: any): Promise<{
        department: UJSDepartmentEntity[];
        message: string;
        status: number;
    }>;
    UJSDepartmentUpdate(request: any, ujsDepartmentUpdateDTO: UJSDepartmentUpdateDTO): Promise<{
        department: UJSDepartmentEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        department?: undefined;
    }>;
    UJSDepartmentDelete(request: any, ujsDepartmentDeleteDTO: UJSDepartmentDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    UJSShgGroupAdd(request: any, ujsShgGroupDTO: UJSShgGroupDTO): Promise<{
        message: string;
        status: number;
        shgGroupList?: undefined;
    } | {
        shgGroupList: UJSShgGroupEntity;
        message: string;
        status: number;
    }>;
    UJSShgGroupList(request: any): Promise<{
        shgGroup: UJSShgGroupEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMemberAdd(request: any, ujsShgMemberDTO: UJSShgMemberDTO): Promise<{
        message: string;
        status: number;
        shgMemberList?: undefined;
    } | {
        shgMemberList: UJSShgMemberEntity;
        message: string;
        status: number;
    }>;
    UJSShgMemberList(request: any): Promise<{
        shgMember: UJSShgMemberEntity[];
        message: string;
        status: number;
    }>;
}
