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
import { UJSMigrationDTO } from "./dto/UJSMigrationDTO";
import { UJSFailedJobDTO } from "./dto/UJSFailedJobsDTO";
import { UJSBranchDTO } from "./dto/UJSBranchDTO";
import { UJSBackupShgGroupDataUploadMonthDTO } from "./dto/UJSBackupShgGroupDataUploadMonthDTO";
import { UJSPersonalAccessTokenDTO } from "./dto/UJSPersonalAccessTokenDTO";
import { UJSSHGExpansesDTO } from "./dto/UJSSHGExpansesDTO";
import { UJSSHGLoanRepaymentDTO } from "./dto/UJSSHGLoanRepaymentDTO";
import { UJSStateDTO } from "./dto/UJSStateDTO";
import { UJSSHGTraningDTO } from "./dto/UJSShgtraningDTO";
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
    UJSMigrationAdd(request: Request, ujsMigrationDTO: UJSMigrationDTO): Promise<{
        message: string;
        status: number;
        migrationList?: undefined;
    } | {
        migrationList: import("./Entity/UJSMigrationEntity").UJSMigrationEntity;
        message: string;
        status: number;
    }>;
    listMigration(request: Request): Promise<{
        migration: import("./Entity/UJSMigrationEntity").UJSMigrationEntity[];
        message: string;
        status: number;
    }>;
    UJSFailedJobsAdd(request: Request, ujsFailedJobDTO: UJSFailedJobDTO): Promise<{
        message: string;
        status: number;
        FailedJobsList?: undefined;
    } | {
        FailedJobsList: import("./Entity/UJSFailedJobsEntity").UJSFailedJobEntity;
        message: string;
        status: number;
    }>;
    listFailedJobs(request: Request): Promise<{
        failedJobs: import("./Entity/UJSFailedJobsEntity").UJSFailedJobEntity[];
        message: string;
        status: number;
    }>;
    UJSBranchAdd(request: Request, ujsBranchDTO: UJSBranchDTO): Promise<{
        message: string;
        status: number;
        BranchList?: undefined;
    } | {
        BranchList: import("./Entity/UJSBranchEntity").UJSBranchEntity;
        message: string;
        status: number;
    }>;
    listBranch(request: Request): Promise<{
        Branch: import("./Entity/UJSBranchEntity").UJSBranchEntity[];
        message: string;
        status: number;
    }>;
    UJSBackupShgGroupAdd(request: Request, ujsBackupShgGroupDataUploadMonthDTO: UJSBackupShgGroupDataUploadMonthDTO): Promise<{
        message: string;
        status: number;
        BackupShgGroupList?: undefined;
    } | {
        BackupShgGroupList: import("./Entity/UJSBackupShgGroupDataUploadEntity").UJSBackupShgGroupDataUploadMonthEntity;
        message: string;
        status: number;
    }>;
    listBackupShgGroup(request: Request): Promise<{
        UJSBackupShgGroup: import("./Entity/UJSBackupShgGroupDataUploadEntity").UJSBackupShgGroupDataUploadMonthEntity[];
        message: string;
        status: number;
    }>;
    UJSPersonalAccessTokenAdd(request: Request, ujsPersonalAccessTokenDTO: UJSPersonalAccessTokenDTO): Promise<{
        message: string;
        status: number;
        PersonalAccessTokenList?: undefined;
    } | {
        PersonalAccessTokenList: import("./Entity/UJSPersonalAccessTokenEntity").UJSPersonalAccessTokenEntity;
        message: string;
        status: number;
    }>;
    lisPersonalAccessToken(request: Request): Promise<{
        PersonalAccessToken: import("./Entity/UJSFailedJobsEntity").UJSFailedJobEntity[];
        message: string;
        status: number;
    }>;
    UJSSHGExpensesAdd(request: Request, ujsShgExpensesDTO: UJSSHGExpansesDTO): Promise<{
        message: string;
        status: number;
        ShgExpensesList?: undefined;
    } | {
        ShgExpensesList: import("./Entity/UJSSHGExpansesEntity").UJSSHGExpansesEntity;
        message: string;
        status: number;
    }>;
    listSHGExpenses(request: Request): Promise<{
        SHGExpenses: import("./Entity/UJSSHGExpansesEntity").UJSSHGExpansesEntity[];
        message: string;
        status: number;
    }>;
    UJSShgLoanRepaymentAdd(request: Request, ujsShgLoanRepaymentDTO: UJSSHGLoanRepaymentDTO): Promise<{
        message: string;
        status: number;
        ShgExpensesList?: undefined;
    } | {
        ShgExpensesList: import("./Entity/UJSSHGLoanRepaymentEntity").UJSSHGLoanRepaymentEntity;
        message: string;
        status: number;
    }>;
    listShgLoanRepayment(request: Request): Promise<{
        SHGLoanRepayment: import("./Entity/UJSSHGLoanRepaymentEntity").UJSSHGLoanRepaymentEntity[];
        message: string;
        status: number;
    }>;
    UJSStateAdd(request: Request, ujsStateDTO: UJSStateDTO): Promise<{
        message: string;
        status: number;
        stateList?: undefined;
    } | {
        stateList: import("./Entity/UJSStateEntity").UJSStateEntity;
        message: string;
        status: number;
    }>;
    listState(request: Request): Promise<{
        state: import("./Entity/UJSStateEntity").UJSStateEntity[];
        message: string;
        status: number;
    }>;
    UJSShgTraningAdd(request: Request, ujsShgTraningDTO: UJSSHGTraningDTO): Promise<{
        message: string;
        status: number;
        shgTraning?: undefined;
    } | {
        shgTraning: import("./Entity/UJSShgTraningEntity").UJSShgTraningEntity;
        message: string;
        status: number;
    }>;
    listShgTraning(request: Request): Promise<{
        shgTraning: import("./Entity/UJSShgTraningEntity").UJSShgTraningEntity[];
        message: string;
        status: number;
    }>;
}
