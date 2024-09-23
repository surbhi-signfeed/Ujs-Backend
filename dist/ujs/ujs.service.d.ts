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
import { UJSShgActiveModelFarmerEntity } from "./Entity/UJSShgActiveModelFarmerEntity";
import { UJSSHGActiveModelFarmerDTO } from "./dto/UJSShgActiveModelFarmerDTO";
import { UJSShgAttendanceEntity } from "./Entity/UJSShgAttendanceEntity";
import { UJSShgAttendanceDTO } from "./dto/UJSShgAttendanceDTO";
import { UJSShgContactEntity } from "./Entity/UJSShgContactEntity";
import { UJSShgContactDTO } from "./dto/UJSShgContactDTO";
import { UJSShgDataLockEntity } from "./Entity/UJSShgDataLockEntity";
import { UJSShgDataLockDTO } from "./dto/UJSShgDataLockDTO";
import { UJSBankAllotmentDTO } from "./dto/UJSSHgBankAllotmentDTO";
import { UJSBankLoanAllotmentEntity } from "./Entity/UJSBankLoanAllotmentEntity";
import { UJSBankLoanDTO } from "./dto/UJSSBankLoanDTO";
import { UJSBankLoanEntity } from "./Entity/UJSBankLoanEntity";
import { UJSBankEntity } from "./Entity/UJSBankEntity";
import { UJSBankDTO } from "./dto/UJSSBankDTO";
import { UJSShgAuditingDTO } from "./dto/UJSShgAuditingDTO";
import { UJSShgAuditingEntity } from "./Entity/UJSShgAuditingEntity";
import { UJSShgDataUploadEntity } from "./Entity/UJSShgDataUploadkEntity";
import { UJSShgDataUploadDTO } from "./dto/UJSShgDataUploadDTO";
import { UJSShgDigiSakhiEntity } from "./Entity/UJSShgDigiSakhiEntity";
import { UJSShgDigiSakhiDTO } from "./dto/UJSShgDigiSakhiDTO";
import { UJSShgFpoEntity } from "./Entity/UJSShgFpoEntity";
import { UJSShgFpoDTO } from "./dto/UJSShgFpoDTO";
import { UJSSHGFedrationReportDTO } from "./dto/UJSShgFedrationReportDTO";
import { UJSSHGFedrationReportEntity } from "./Entity/UJSShgFedrationReportEntity";
import { UJSSHGFedrationDTO } from "./dto/UJSShgFedrationDTO";
import { UJSSHGFedrationEntity } from "./Entity/UJSShgFedrationEntity";
import { UJSShgMomEntity } from "./Entity/UJSShgMomEntity";
import { UJSShgMomDTO } from "./dto/UJSShgMomDTO";
import { UJSShgGroupDataUploadMonthEntity } from "./Entity/UJSShgGroupDataUploadMonthEntity";
import { UJSShgGroupDataUploadMonthDTO } from "./dto/UJSShgGroupDataUploadMonthDTO";
import { UJSShgMemeberSavingEntity } from "./Entity/UJSShgMemberSavingEntity";
import { UJSShgMemberSavingDTO } from "./dto/UJSSShgMemberSavingDTO";
import { UJSShgGroupDetailsInfoEntity } from "./Entity/UJSShgGroupDetailsInfoEntity";
import { UJSShgGroupDetailsInfoDTO } from "./dto/UJSShgGroupDetailsInfoDTO";
import { UJSShgGroupSummaryEntity } from "./Entity/UJSShgGroupSummaryEntity";
import { UJSShgInternalLoanSummaryEntity } from "./Entity/UJSShgInternalLoanSummaryEntity";
import { UJSShgGroupSummaryDTO } from "./dto/UJSGroupSummaryDTO";
import { UJSShgInternalLoanSummaryDTO } from "./dto/UJSInternalLOanSummaryDTO";
import { UJSShgLoanEntity } from "./Entity/UJSShgLoanEntity";
import { UJSShgLoanDTO } from "./dto/UJSShgLoanDTO";
import { UJSShgMeetingTrackEntity } from "./Entity/UJSShgMeetingTrackEntity";
import { UJSShgMeetingTrackDTO } from "./dto/UJSShgMeetingTrackDTO";
import { UJSShgOtherIncomeEntity } from "./Entity/UJSShgOtherIncomeEntity";
import { UJSShgOtherIncomeDTO } from "./dto/UJSShgOtherIncomeDTO";
import { UJSShgTillNowDataEntity } from "./Entity/UJSShgTillNowDataEntity";
import { UJSShgTillNowDataDTO } from "./dto/UJSShgTillNowDataDTO";
import { Multer } from "multer";
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
    private readonly UJSShgActiveModelFarmerRepository;
    private readonly UJSShgAttendanceRepository;
    private readonly UJSShgContactRepository;
    private readonly UJSShgDataLockRepository;
    private readonly UJSShgBankLoanAllotmentRepository;
    private readonly UJSShgBankLoanRepository;
    private readonly UJSShgBankRepository;
    private readonly UJSShgAuditingRepository;
    private readonly UJSShgDataUploadRepository;
    private readonly UJSShgDigiSakhiRepository;
    private readonly UJSShgFpoRepository;
    private readonly UJSShgFedrationReportRepository;
    private readonly UJSShgFedrationRepository;
    private readonly UJSShgMomRepository;
    private readonly UJSShgGroupDataUploadMonthERepository;
    private readonly UJSShgMemberSavingRepository;
    private readonly UJSShgGroupDetailsInfoRepository;
    private readonly UJSShgGroupSummaryRepository;
    private readonly UJSShgInternalLoanSummaryRepository;
    private readonly UJSShgLoanRepository;
    private readonly UJSShgMeetingTrackRepository;
    private readonly UJSShgOtherIncomeRepository;
    private readonly UJSShgTillNowDataRepository;
    private _logger;
    constructor(logger: Logger, connection: Connection, UJSDepartmentRepository: Repository<UJSDepartmentEntity>, UJSSghGroupRepository: Repository<UJSShgGroupEntity>, UJSShgMemberRepository: Repository<UJSShgMemberEntity>, UJSUserRepository: Repository<UJSUsersEntity>, UJSRoleRepository: Repository<UJSRoleEntity>, UJSRolePermissionRepository: Repository<UJSRolePermissionEntity>, UJSBackupShgGroupDataUploadMonthRepository: Repository<UJSBackupShgGroupDataUploadMonthEntity>, UJSBranchRepository: Repository<UJSBranchEntity>, UJSFailedJobRepository: Repository<UJSFailedJobEntity>, UJSMigrationRepository: Repository<UJSMigrationEntity>, UJSPersonalAccessTokenRepository: Repository<UJSPersonalAccessTokenEntity>, UJSSHGExpansesRepository: Repository<UJSSHGExpansesEntity>, UJSSHGLoanRepaymentRepository: Repository<UJSSHGLoanRepaymentEntity>, UJSStateRepository: Repository<UJSStateEntity>, UJSShgTraningRepository: Repository<UJSShgTraningEntity>, UJSShgActiveModelFarmerRepository: Repository<UJSShgActiveModelFarmerEntity>, UJSShgAttendanceRepository: Repository<UJSShgAttendanceEntity>, UJSShgContactRepository: Repository<UJSShgContactEntity>, UJSShgDataLockRepository: Repository<UJSShgDataLockEntity>, UJSShgBankLoanAllotmentRepository: Repository<UJSBankLoanAllotmentEntity>, UJSShgBankLoanRepository: Repository<UJSBankLoanEntity>, UJSShgBankRepository: Repository<UJSBankEntity>, UJSShgAuditingRepository: Repository<UJSShgAuditingEntity>, UJSShgDataUploadRepository: Repository<UJSShgDataUploadEntity>, UJSShgDigiSakhiRepository: Repository<UJSShgDigiSakhiEntity>, UJSShgFpoRepository: Repository<UJSShgFpoEntity>, UJSShgFedrationReportRepository: Repository<UJSSHGFedrationReportEntity>, UJSShgFedrationRepository: Repository<UJSSHGFedrationEntity>, UJSShgMomRepository: Repository<UJSShgMomEntity>, UJSShgGroupDataUploadMonthERepository: Repository<UJSShgGroupDataUploadMonthEntity>, UJSShgMemberSavingRepository: Repository<UJSShgMemeberSavingEntity>, UJSShgGroupDetailsInfoRepository: Repository<UJSShgGroupDetailsInfoEntity>, UJSShgGroupSummaryRepository: Repository<UJSShgGroupSummaryEntity>, UJSShgInternalLoanSummaryRepository: Repository<UJSShgInternalLoanSummaryEntity>, UJSShgLoanRepository: Repository<UJSShgLoanEntity>, UJSShgMeetingTrackRepository: Repository<UJSShgMeetingTrackEntity>, UJSShgOtherIncomeRepository: Repository<UJSShgOtherIncomeEntity>, UJSShgTillNowDataRepository: Repository<UJSShgTillNowDataEntity>);
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
    UJSUserAdd(request: any, ujsUserDTO: UJSUsersDTO, student_img: Multer.File): Promise<{
        message: string;
        status: number;
        UserList?: undefined;
    } | {
        UserList: UJSUsersEntity;
        message: string;
        status: number;
    }>;
    generateRandomString(length: number): string;
    validateFileType(file: Multer.File): boolean;
    validateFileSize(file: Multer.File): boolean;
    private saveFileToDirectory;
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
    UJSRoleAllList(request: any): Promise<{
        shgRole: any[];
        message: string;
        status: number;
    }>;
    UJSRolePermissionList(id: string): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        data: unknown[];
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
    UJSShgActiveModelFarmerAdd(request: any, ujsShgActiveModelFarmerDTO: UJSSHGActiveModelFarmerDTO): Promise<{
        message: string;
        status: number;
        shgActiveModelFarmer?: undefined;
    } | {
        shgActiveModelFarmer: UJSShgActiveModelFarmerEntity;
        message: string;
        status: number;
    }>;
    UJSShgActiveModelFarmerList(request: any): Promise<{
        shgActiveModelFarmer: UJSShgActiveModelFarmerEntity[];
        message: string;
        status: number;
    }>;
    UJSShgAttendanceAdd(request: any, ujsShgAttendanceDTO: UJSShgAttendanceDTO): Promise<{
        message: string;
        status: number;
        shgAttendance?: undefined;
    } | {
        shgAttendance: UJSShgAttendanceEntity;
        message: string;
        status: number;
    }>;
    UJSShgAttendanceList(request: any): Promise<{
        shgAttendance: UJSShgAttendanceEntity[];
        message: string;
        status: number;
    }>;
    UJSShgContactAdd(request: any, ujsShgContactDTO: UJSShgContactDTO): Promise<{
        message: string;
        status: number;
        shgContact?: undefined;
    } | {
        shgContact: UJSShgContactEntity;
        message: string;
        status: number;
    }>;
    UJSShgContactList(request: any): Promise<{
        shgContact: UJSShgContactEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDataLockAdd(request: any, ujsShgDataLockDTO: UJSShgDataLockDTO): Promise<{
        message: string;
        status: number;
        shgDataLock?: undefined;
    } | {
        shgDataLock: UJSShgDataLockEntity;
        message: string;
        status: number;
    }>;
    UJSShgDataLockList(request: any): Promise<{
        shgDataLock: UJSShgDataLockEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankLoanAllotmentAdd(request: any, ujsShgbankAllotmentDTO: UJSBankAllotmentDTO): Promise<{
        message: string;
        status: number;
        shgBankLoanAllotment?: undefined;
    } | {
        shgBankLoanAllotment: UJSBankLoanAllotmentEntity;
        message: string;
        status: number;
    }>;
    UJSShgBankLoanAllotmentList(request: any): Promise<{
        shgbankLoan: UJSBankLoanAllotmentEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankLoanAdd(request: any, ujsShgbankAllotmentDTO: UJSBankLoanDTO): Promise<{
        message: string;
        status: number;
        shgBankLoan?: undefined;
    } | {
        shgBankLoan: UJSBankLoanEntity;
        message: string;
        status: number;
    }>;
    UJSShgBankLoanList(request: any): Promise<{
        bankLoan: UJSBankLoanEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankAdd(request: any, ujsShgbankDTO: UJSBankDTO): Promise<{
        message: string;
        status: number;
        shgBank?: undefined;
    } | {
        shgBank: UJSBankEntity;
        message: string;
        status: number;
    }>;
    UJSShgBankList(request: any): Promise<{
        bank: UJSBankEntity[];
        message: string;
        status: number;
    }>;
    UJSShgAuditingAdd(request: any, ujsShgAuditingDTO: UJSShgAuditingDTO): Promise<{
        message: string;
        status: number;
        shgAuditing?: undefined;
    } | {
        shgAuditing: UJSShgAuditingEntity;
        message: string;
        status: number;
    }>;
    UJSShgAuditingList(request: any): Promise<{
        Auditing: UJSShgAuditingEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDataUploadAdd(request: any, ujsShgDataUploadDTO: UJSShgDataUploadDTO): Promise<{
        message: string;
        status: number;
        shgDataUpload?: undefined;
    } | {
        shgDataUpload: UJSShgDataUploadEntity;
        message: string;
        status: number;
    }>;
    UJSShgDataUploadList(request: any): Promise<{
        DataUpload: UJSShgDataUploadEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDigiSakhiAdd(request: any, ujsShgDigiSakhiDTO: UJSShgDigiSakhiDTO): Promise<{
        message: string;
        status: number;
        shgDigiSakhi?: undefined;
    } | {
        shgDigiSakhi: UJSShgDigiSakhiEntity;
        message: string;
        status: number;
    }>;
    UJSShgDigiSakhiList(request: any): Promise<{
        DigiSakhi: UJSShgDigiSakhiEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFpoAdd(request: any, ujsShgFpoDTO: UJSShgFpoDTO): Promise<{
        message: string;
        status: number;
        Fpo?: undefined;
    } | {
        Fpo: UJSShgFpoEntity;
        message: string;
        status: number;
    }>;
    UJSShgFpoList(request: any): Promise<{
        Fpo: UJSShgFpoEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFedrationReportAdd(request: any, ujsShgFedrationReportDTO: UJSSHGFedrationReportDTO): Promise<{
        message: string;
        status: number;
        Fedration?: undefined;
    } | {
        Fedration: UJSSHGFedrationReportEntity;
        message: string;
        status: number;
    }>;
    UJSShgFedrationReportList(request: any): Promise<{
        Fedration: UJSSHGFedrationReportEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFedrationAdd(request: any, ujsShgFedrationDTO: UJSSHGFedrationDTO): Promise<{
        message: string;
        status: number;
        Fedration?: undefined;
    } | {
        Fedration: UJSSHGFedrationEntity;
        message: string;
        status: number;
    }>;
    UJSShgFedrationList(request: any): Promise<{
        Fedration: UJSSHGFedrationEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMomAdd(request: any, ujsShgMomDTO: UJSShgMomDTO): Promise<{
        message: string;
        status: number;
        ShgMom?: undefined;
    } | {
        ShgMom: UJSShgMomEntity;
        message: string;
        status: number;
    }>;
    UJSShgMomList(request: any): Promise<{
        mom: UJSShgMomEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupDataUploadMonthAdd(request: any, ujsShgGroupDataUploadMonthDTO: UJSShgGroupDataUploadMonthDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: UJSShgGroupDataUploadMonthEntity;
        message: string;
        status: number;
    }>;
    UJSShgGroupDataUploadMonthList(request: any): Promise<{
        GroupDataUploadMonth: UJSShgGroupDataUploadMonthEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMemberSavingAdd(request: any, ujsShgMemberSavingDTO: UJSShgMemberSavingDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: UJSShgMemeberSavingEntity;
        message: string;
        status: number;
    }>;
    UJSShgMemberSavingList(request: any): Promise<{
        MemberSaving: UJSShgMemeberSavingEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupDetailInfoAdd(request: any, ujsShgGroupDetailInfoDTO: UJSShgGroupDetailsInfoDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: UJSShgGroupDetailsInfoEntity;
        message: string;
        status: number;
    }>;
    UJSShgGroupDetailInfoList(request: any): Promise<{
        GroupDetailsInfo: UJSShgGroupDetailsInfoEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupSummaryAdd(request: any, ujsShgGroupSummaryDTO: UJSShgGroupSummaryDTO): Promise<{
        GroupSummary: UJSShgGroupSummaryEntity;
        message: string;
        status: number;
    }>;
    UJSShgGroupSummaryList(request: any): Promise<{
        GroupSummary: UJSShgGroupSummaryEntity[];
        message: string;
        status: number;
    }>;
    UJSShgInternalLoanSummaryAdd(request: any, ujsShgInternalLoanSummaryDTO: UJSShgInternalLoanSummaryDTO): Promise<{
        InternalloanSummary: UJSShgInternalLoanSummaryEntity;
        message: string;
        status: number;
    }>;
    UJSShgInternalLoanSummaryList(request: any): Promise<{
        InternalLoanSummary: UJSShgInternalLoanSummaryEntity[];
        message: string;
        status: number;
    }>;
    UJSShgLoanAdd(request: any, ujsShgLoanDTO: UJSShgLoanDTO): Promise<{
        loan: UJSShgLoanEntity;
        message: string;
        status: number;
    }>;
    UJSShgLoanList(request: any): Promise<{
        ShgLoan: UJSShgLoanEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMeetingTrackAdd(request: any, ujsShgMeetingTrackDTO: UJSShgMeetingTrackDTO): Promise<{
        MeetingTrack: UJSShgMeetingTrackEntity;
        message: string;
        status: number;
    }>;
    UJSShgMeetingTrackList(request: any): Promise<{
        ShgMeetingTrack: UJSShgMeetingTrackEntity[];
        message: string;
        status: number;
    }>;
    UJSShgOtherIncomeAdd(request: any, ujsShgOtherIncomeDTO: UJSShgOtherIncomeDTO): Promise<{
        OtherIncome: UJSShgOtherIncomeEntity;
        message: string;
        status: number;
    }>;
    UJSShgOtherIncomeList(request: any): Promise<{
        ShgOtherIncome: UJSShgOtherIncomeEntity[];
        message: string;
        status: number;
    }>;
    UJSShgTillNowDataAdd(request: any, ujsShgTillNowDataDTO: UJSShgTillNowDataDTO): Promise<{
        TillNowData: UJSShgTillNowDataEntity;
        message: string;
        status: number;
    }>;
    UJSShgTillNowDataList(request: any): Promise<{
        ShgTillNowData: UJSShgTillNowDataEntity[];
        message: string;
        status: number;
    }>;
}
