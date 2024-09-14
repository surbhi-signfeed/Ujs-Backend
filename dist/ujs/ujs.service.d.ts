import { Logger } from "@nestjs/common";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentEntity } from "./Entity/UJSDepartmentEntity";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
export declare class UjsService {
    private readonly logger;
    private readonly connection;
    private readonly UJSDepartmentRepository;
    constructor(logger: Logger, connection: Connection, UJSDepartmentRepository: Repository<UJSDepartmentEntity>);
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
}
