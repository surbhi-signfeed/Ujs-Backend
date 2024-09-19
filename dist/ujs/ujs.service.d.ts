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
import { UJSUsersDTO } from "./dto/UJSUsersDTO";
import { UJSUsersEntity } from "./Entity/UJSUsersEntity";
import { UJSRoleEntity } from "./Entity/UJSRoleEntity";
import { UJSRolePermissionEntity } from "./Entity/UJSRolePermissionEntity";
import { UJSRoleDTO } from "./dto/UJSRoleDTO";
import { UJSRolePermissionDTO } from "./dto/UJSRolePermissionDTO";
import { UJSBackupShgGroupDataUploadMonthEntity } from "./Entity/UJSBackupShgGroupDataUploadEntity";
import { UJSBranchEntity } from "./Entity/UJSBranchEntity";
import { UJSFailedJobEntity } from "./Entity/UJSFailedJobsEntity";
import { UJSMigrationEntity } from "./Entity/UJSMigrationEntity";
import { UJSPersonalAccessTokenEntity } from "./Entity/UJSPersonalAccessTokenEntity";
import { UJSSHGExpansesEntity } from "./Entity/UJSSHGExpansesEntity";
import { UJSSHGLoanRepaymentEntity } from "./Entity/UJSSHGLoanRepaymentEntity";
import { UJSMigrationDTO } from "./dto/UJSMigrationDTO";
import { UJSFailedJobDTO } from "./dto/UJSFailedJobsDTO";
import { UJSBranchDTO } from "./dto/UJSBranchDTO";
import { UJSBackupShgGroupDataUploadMonthDTO } from "./dto/UJSBackupShgGroupDataUploadMonthDTO";
import { UJSPersonalAccessTokenDTO } from "./dto/UJSPersonalAccessTokenDTO";
import { UJSSHGExpansesDTO } from "./dto/UJSSHGExpansesDTO";
import { UJSSHGLoanRepaymentDTO } from "./dto/UJSSHGLoanRepaymentDTO";
import { UJSStateEntity } from "./Entity/UJSStateEntity";
import { UJSStateDTO } from "./dto/UJSStateDTO";
import { UJSShgTraningEntity } from "./Entity/UJSShgTraningEntity";
import { UJSSHGTraningDTO } from "./dto/UJSShgtraningDTO";
export declare class UjsService {
    private readonly logger;
    private readonly connection;
    private readonly UJSDepartmentRepository;
    private readonly UJSSghGroupRepository;
    private readonly UJSShgMemberRepository;
    private readonly UJSUserRepository;
    private readonly UJSRoleRepository;
    private readonly UJSRolePermissionRepository;
    private readonly UJSBackupShgGroupDataUploadMonthRepository;
    private readonly UJSBranchRepository;
    private readonly UJSFailedJobRepository;
    private readonly UJSMigrationRepository;
    private readonly UJSPersonalAccessTokenRepository;
    private readonly UJSSHGExpansesRepository;
    private readonly UJSSHGLoanRepaymentRepository;
    private readonly UJSStateRepository;
    private readonly UJSShgTraningRepository;
    constructor(logger: Logger, connection: Connection, UJSDepartmentRepository: Repository<UJSDepartmentEntity>, UJSSghGroupRepository: Repository<UJSShgGroupEntity>, UJSShgMemberRepository: Repository<UJSShgMemberEntity>, UJSUserRepository: Repository<UJSUsersEntity>, UJSRoleRepository: Repository<UJSRoleEntity>, UJSRolePermissionRepository: Repository<UJSRolePermissionEntity>, UJSBackupShgGroupDataUploadMonthRepository: Repository<UJSBackupShgGroupDataUploadMonthEntity>, UJSBranchRepository: Repository<UJSBranchEntity>, UJSFailedJobRepository: Repository<UJSFailedJobEntity>, UJSMigrationRepository: Repository<UJSMigrationEntity>, UJSPersonalAccessTokenRepository: Repository<UJSPersonalAccessTokenEntity>, UJSSHGExpansesRepository: Repository<UJSSHGExpansesEntity>, UJSSHGLoanRepaymentRepository: Repository<UJSSHGLoanRepaymentEntity>, UJSStateRepository: Repository<UJSStateEntity>, UJSShgTraningRepository: Repository<UJSShgTraningEntity>);
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
    UJSUserAdd(request: any, ujsUserDTO: UJSUsersDTO): Promise<{
        message: string;
        status: number;
        UserList?: undefined;
    } | {
        UserList: UJSUsersEntity;
        message: string;
        status: number;
    }>;
    UJSUserList(request: any): Promise<{
        shgUser: UJSUsersEntity[];
        message: string;
        status: number;
    }>;
    UJSRoleAdd(request: any, ujsRoleDTO: UJSRoleDTO, permissionDTOs: UJSRolePermissionDTO[]): Promise<{
        message: string;
        status: number;
        role?: undefined;
    } | {
        message: string;
        status: number;
        role: UJSRoleEntity;
    }>;
    UJSRoleList(request: any): Promise<{
        shgRole: UJSRoleEntity[];
        message: string;
        status: number;
    }>;
    UJSMigrationAdd(request: any, ujsDepartmentDTO: UJSMigrationDTO): Promise<{
        message: string;
        status: number;
        migrationList?: undefined;
    } | {
        migrationList: UJSMigrationEntity;
        message: string;
        status: number;
    }>;
    UJSMigrationList(request: any): Promise<{
        migration: UJSMigrationEntity[];
        message: string;
        status: number;
    }>;
    UJSFailedJobsAdd(request: any, ujsFailedJobsDTO: UJSFailedJobDTO): Promise<{
        message: string;
        status: number;
        FailedJobsList?: undefined;
    } | {
        FailedJobsList: UJSFailedJobEntity;
        message: string;
        status: number;
    }>;
    UJSFailedJobsList(request: any): Promise<{
        failedJobs: UJSFailedJobEntity[];
        message: string;
        status: number;
    }>;
    UJSBranchAdd(request: any, ujsBranchDTO: UJSBranchDTO): Promise<{
        message: string;
        status: number;
        BranchList?: undefined;
    } | {
        BranchList: UJSBranchEntity;
        message: string;
        status: number;
    }>;
    UJSBranchList(request: any): Promise<{
        Branch: UJSBranchEntity[];
        message: string;
        status: number;
    }>;
    UJSBackupShgGroupAdd(request: any, ujsBackupShgGroupDataUploadMonthDTO: UJSBackupShgGroupDataUploadMonthDTO): Promise<{
        message: string;
        status: number;
        BackupShgGroupList?: undefined;
    } | {
        BackupShgGroupList: UJSBackupShgGroupDataUploadMonthEntity;
        message: string;
        status: number;
    }>;
    UJSBackupShgGroupList(request: any): Promise<{
        UJSBackupShgGroup: UJSBackupShgGroupDataUploadMonthEntity[];
        message: string;
        status: number;
    }>;
    UJSPersonalAccessTokenAdd(request: any, ujsPersonalAccessTokenDTO: UJSPersonalAccessTokenDTO): Promise<{
        message: string;
        status: number;
        PersonalAccessTokenList?: undefined;
    } | {
        PersonalAccessTokenList: UJSPersonalAccessTokenEntity;
        message: string;
        status: number;
    }>;
    UJSPersonalAccessTokenList(request: any): Promise<{
        PersonalAccessToken: UJSFailedJobEntity[];
        message: string;
        status: number;
    }>;
    UJSSHGExpensesAdd(request: any, ujsSHGExpansesDTO: UJSSHGExpansesDTO): Promise<{
        message: string;
        status: number;
        ShgExpensesList?: undefined;
    } | {
        ShgExpensesList: UJSSHGExpansesEntity;
        message: string;
        status: number;
    }>;
    UJSSHGExpensesList(request: any): Promise<{
        SHGExpenses: UJSSHGExpansesEntity[];
        message: string;
        status: number;
    }>;
    UJSShgLoanRepaymentAdd(request: any, ujsSHGLoanRepaymentDTO: UJSSHGLoanRepaymentDTO): Promise<{
        message: string;
        status: number;
        ShgExpensesList?: undefined;
    } | {
        ShgExpensesList: UJSSHGLoanRepaymentEntity;
        message: string;
        status: number;
    }>;
    UJSShgLoanRepaymentList(request: any): Promise<{
        SHGLoanRepayment: UJSSHGLoanRepaymentEntity[];
        message: string;
        status: number;
    }>;
    UJSStateAdd(request: any, ujsStateDTO: UJSStateDTO): Promise<{
        message: string;
        status: number;
        stateList?: undefined;
    } | {
        stateList: UJSStateEntity;
        message: string;
        status: number;
    }>;
    UJSStateList(request: any): Promise<{
        state: UJSStateEntity[];
        message: string;
        status: number;
    }>;
    UJSShgTraningAdd(request: any, ujsShgTraningDTO: UJSSHGTraningDTO): Promise<{
        message: string;
        status: number;
        shgTraning?: undefined;
    } | {
        shgTraning: UJSShgTraningEntity;
        message: string;
        status: number;
    }>;
    UJSShgTraningList(request: any): Promise<{
        shgTraning: UJSShgTraningEntity[];
        message: string;
        status: number;
    }>;
}
