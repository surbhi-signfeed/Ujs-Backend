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
import { UJSSHGActiveModelFarmerDTO } from "./dto/UJSShgActiveModelFarmerDTO";
import { UJSShgAttendanceDTO } from "./dto/UJSShgAttendanceDTO";
import { UJSShgContactDTO } from "./dto/UJSShgContactDTO";
import { UJSShgDataLockDTO } from "./dto/UJSShgDataLockDTO";
import { UJSBankAllotmentDTO } from "./dto/UJSSHgBankAllotmentDTO";
import { UJSBankLoanDTO } from "./dto/UJSSBankLoanDTO";
import { UJSBankDTO } from "./dto/UJSSBankDTO";
import { UJSShgAuditingDTO } from "./dto/UJSShgAuditingDTO";
import { UJSShgDataUploadDTO } from "./dto/UJSShgDataUploadDTO";
import { UJSShgDigiSakhiDTO } from "./dto/UJSShgDigiSakhiDTO";
import { UJSShgFpoDTO } from "./dto/UJSShgFpoDTO";
import { UJSSHGFedrationReportDTO } from "./dto/UJSShgFedrationReportDTO";
import { UJSSHGFedrationDTO } from "./dto/UJSShgFedrationDTO";
import { UJSShgMomDTO } from "./dto/UJSShgMomDTO";
import { UJSShgGroupDataUploadMonthDTO } from "./dto/UJSShgGroupDataUploadMonthDTO";
import { UJSShgMemberSavingDTO } from "./dto/UJSSShgMemberSavingDTO";
import { UJSShgGroupDetailsInfoDTO } from "./dto/UJSShgGroupDetailsInfoDTO";
import { UJSShgGroupSummaryDTO } from "./dto/UJSGroupSummaryDTO";
import { UJSShgInternalLoanSummaryDTO } from "./dto/UJSInternalLOanSummaryDTO";
import { UJSShgLoanDTO } from "./dto/UJSShgLoanDTO";
import { UJSShgMeetingTrackDTO } from "./dto/UJSShgMeetingTrackDTO";
import { UJSShgOtherIncomeDTO } from "./dto/UJSShgOtherIncomeDTO";
import { UJSShgTillNowDataDTO } from "./dto/UJSShgTillNowDataDTO";
import { Multer } from "multer";
import { UJSShgGroupUpdateDTO } from "./dto/UJSShgGroupUpdateDTO";
import { UJSShgGroupDeleteDTO } from "./dto/UJSShgGroupDeleteDTO";
import { UJSShgMemberUpdateDTO } from "./dto/UJSShgMemberUpdateDTO";
import { UJSShgMemberDeleteDTO } from "./dto/UJSShgMemberDeleteDTO";
import { UJSShgInternalLoanUpdateDTO } from "./dto/UJSInternalLoanUpdateDTO";
import { UJSShgInternalLoanDeleteDTO } from "./dto/UJSInternalLoanDeleteDTO";
import { UJSBankLoanUpdateDTO } from "./dto/UJSSBankLoanUpdateDTO";
import { UJSBankLoanDeleteDTO } from "./dto/UJSSBankLoanDeleteDTO";
import { UJSUsersUpdateDTO } from "./dto/UJSUsersUpdateDTO";
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
    listShgMeeting(request: Request): Promise<{
        shgMeetingSummary: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        shgMeetingSummary?: undefined;
    }>;
    UJSShgGroupUpdate(request: Request, ujsShgGroupUpdateDTO: UJSShgGroupUpdateDTO): Promise<{
        Group: import("./Entity/UJSShgGroupEntity").UJSShgGroupEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Group?: undefined;
    }>;
    UJSShgGroupDelete(request: Request, ujsSjhGroupDeleteDTO: UJSShgGroupDeleteDTO): Promise<{
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
    UJSShgMemberUpdate(request: Request, ujsShgMemberUpdateDTO: UJSShgMemberUpdateDTO): Promise<{
        Member: import("./Entity/UJSShgMemberEntity").UJSShgMemberEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Member?: undefined;
    }>;
    UJSShgMemberDelete(request: Request, ujsSjhMemberDeleteDTO: UJSShgMemberDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    UJSUserAdd(student_img: Multer.File, request: Request, ujsUserDTO: UJSUsersDTO): Promise<{
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
    listUserRole(request: Request): Promise<{
        user: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        user?: undefined;
    }>;
    UJSShgUserUpdate(request: Request, ujsUserUpdateDTO: UJSUsersUpdateDTO): Promise<{
        Users: import("./Entity/UJSUsersEntity").UJSUsersEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Users?: undefined;
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
    listRoleAll(request: Request): Promise<{
        shgRole: any[];
        message: string;
        status: number;
    }>;
    listRolePermissionList(id: string, request: Request): Promise<{
        message: string;
        status: number;
        data?: undefined;
    } | {
        data: unknown[];
        message: string;
        status: number;
    }>;
    UJSShgRolePermissionUpdate(request: Request, ujsRoleDTO: UJSRoleDTO, ujsRolePermissionDTOs: UJSRolePermissionDTO[]): Promise<{
        message: string;
        status: number;
        role?: undefined;
    } | {
        message: string;
        status: number;
        role: import("./Entity/UJSRoleEntity").UJSRoleEntity;
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
    UJSShgActiveModelFarmerAdd(request: Request, ujsShgActiveModelFarmerDTO: UJSSHGActiveModelFarmerDTO): Promise<{
        message: string;
        status: number;
        shgActiveModelFarmer?: undefined;
    } | {
        shgActiveModelFarmer: import("./Entity/UJSShgActiveModelFarmerEntity").UJSShgActiveModelFarmerEntity;
        message: string;
        status: number;
    }>;
    listShgActiveModelFarmer(request: Request): Promise<{
        shgActiveModelFarmer: import("./Entity/UJSShgActiveModelFarmerEntity").UJSShgActiveModelFarmerEntity[];
        message: string;
        status: number;
    }>;
    UJSShgAttendanceAdd(request: Request, ujsShgAttendanceDTO: UJSShgAttendanceDTO): Promise<{
        message: string;
        status: number;
        shgAttendance?: undefined;
    } | {
        shgAttendance: import("./Entity/UJSShgAttendanceEntity").UJSShgAttendanceEntity;
        message: string;
        status: number;
    }>;
    listShgAttendance(request: Request): Promise<{
        shgAttendance: import("./Entity/UJSShgAttendanceEntity").UJSShgAttendanceEntity[];
        message: string;
        status: number;
    }>;
    UJSShgContactAdd(request: Request, ujsShgContactDTO: UJSShgContactDTO): Promise<{
        message: string;
        status: number;
        shgContact?: undefined;
    } | {
        shgContact: import("./Entity/UJSShgContactEntity").UJSShgContactEntity;
        message: string;
        status: number;
    }>;
    listShgContact(request: Request): Promise<{
        shgContact: import("./Entity/UJSShgContactEntity").UJSShgContactEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDataLockAdd(request: Request, ujsShgDataLockDTO: UJSShgDataLockDTO): Promise<{
        message: string;
        status: number;
        shgDataLock?: undefined;
    } | {
        shgDataLock: import("./Entity/UJSShgDataLockEntity").UJSShgDataLockEntity;
        message: string;
        status: number;
    }>;
    listShgDataLock(request: Request): Promise<{
        shgDataLock: import("./Entity/UJSShgDataLockEntity").UJSShgDataLockEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankLoanAllotmentAdd(request: Request, ujsShgBankLoanAllotmentDTO: UJSBankAllotmentDTO): Promise<{
        message: string;
        status: number;
        shgBankLoanAllotment?: undefined;
    } | {
        shgBankLoanAllotment: import("./Entity/UJSBankLoanAllotmentEntity").UJSBankLoanAllotmentEntity;
        message: string;
        status: number;
    }>;
    listShgBankLoanAllotment(request: Request): Promise<{
        shgbankLoan: import("./Entity/UJSBankLoanAllotmentEntity").UJSBankLoanAllotmentEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankLoanAdd(request: Request, ujsShgBankLoanDTO: UJSBankLoanDTO): Promise<{
        message: string;
        status: number;
        shgBankLoan?: undefined;
    } | {
        shgBankLoan: import("./Entity/UJSBankLoanEntity").UJSBankLoanEntity;
        message: string;
        status: number;
    }>;
    listShgBankLoan(request: Request): Promise<{
        bankLoan: import("./Entity/UJSBankLoanEntity").UJSBankLoanEntity[];
        message: string;
        status: number;
    }>;
    UJSShgBankLoanUpdate(request: Request, ujsShgBankLoanUpdateDTO: UJSBankLoanUpdateDTO): Promise<{
        BankLoan: import("./Entity/UJSBankLoanEntity").UJSBankLoanEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        BankLoan?: undefined;
    }>;
    UJSShgBankLoanDelete(request: Request, ujsShgBankLoanDeleteDTO: UJSBankLoanDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    UJSShgBankAdd(request: Request, ujsShgBankDTO: UJSBankDTO): Promise<{
        message: string;
        status: number;
        shgBank?: undefined;
    } | {
        shgBank: import("./Entity/UJSBankEntity").UJSBankEntity;
        message: string;
        status: number;
    }>;
    listShgBank(request: Request): Promise<{
        bank: import("./Entity/UJSBankEntity").UJSBankEntity[];
        message: string;
        status: number;
    }>;
    UJSShgAuditingAdd(request: Request, ujsShgAuditingDTO: UJSShgAuditingDTO): Promise<{
        message: string;
        status: number;
        shgAuditing?: undefined;
    } | {
        shgAuditing: import("./Entity/UJSShgAuditingEntity").UJSShgAuditingEntity;
        message: string;
        status: number;
    }>;
    listShgAuditing(request: Request): Promise<{
        Auditing: import("./Entity/UJSShgAuditingEntity").UJSShgAuditingEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDataUploadAdd(request: Request, ujsShgDataUploadDTO: UJSShgDataUploadDTO): Promise<{
        message: string;
        status: number;
        shgDataUpload?: undefined;
    } | {
        shgDataUpload: import("./Entity/UJSShgDataUploadkEntity").UJSShgDataUploadEntity;
        message: string;
        status: number;
    }>;
    listShgDataUpload(request: Request): Promise<{
        DataUpload: import("./Entity/UJSShgDataUploadkEntity").UJSShgDataUploadEntity[];
        message: string;
        status: number;
    }>;
    UJSShgDigiSakhiAdd(request: Request, ujsShgDigiSakhiDTO: UJSShgDigiSakhiDTO): Promise<{
        message: string;
        status: number;
        shgDigiSakhi?: undefined;
    } | {
        shgDigiSakhi: import("./Entity/UJSShgDigiSakhiEntity").UJSShgDigiSakhiEntity;
        message: string;
        status: number;
    }>;
    listShgDigiSakhi(request: Request): Promise<{
        DigiSakhi: import("./Entity/UJSShgDigiSakhiEntity").UJSShgDigiSakhiEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFpoAdd(request: Request, ujsShgFpoDTO: UJSShgFpoDTO): Promise<{
        message: string;
        status: number;
        Fpo?: undefined;
    } | {
        Fpo: import("./Entity/UJSShgFpoEntity").UJSShgFpoEntity;
        message: string;
        status: number;
    }>;
    listShgFpo(request: Request): Promise<{
        Fpo: import("./Entity/UJSShgFpoEntity").UJSShgFpoEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFedrationReportAdd(request: Request, ujsShgFedrationReportDTO: UJSSHGFedrationReportDTO): Promise<{
        message: string;
        status: number;
        Fedration?: undefined;
    } | {
        Fedration: import("./Entity/UJSShgFedrationReportEntity").UJSSHGFedrationReportEntity;
        message: string;
        status: number;
    }>;
    listShgFedrationReport(request: Request): Promise<{
        Fedration: import("./Entity/UJSShgFedrationReportEntity").UJSSHGFedrationReportEntity[];
        message: string;
        status: number;
    }>;
    UJSShgFedrationAdd(request: Request, ujsShgFedrationDTO: UJSSHGFedrationDTO): Promise<{
        message: string;
        status: number;
        Fedration?: undefined;
    } | {
        Fedration: import("./Entity/UJSShgFedrationEntity").UJSSHGFedrationEntity;
        message: string;
        status: number;
    }>;
    listShgFedration(request: Request): Promise<{
        Fedration: import("./Entity/UJSShgFedrationEntity").UJSSHGFedrationEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMomAdd(request: Request, ujsShgMomDTO: UJSShgMomDTO): Promise<{
        message: string;
        status: number;
        ShgMom?: undefined;
    } | {
        ShgMom: import("./Entity/UJSShgMomEntity").UJSShgMomEntity;
        message: string;
        status: number;
    }>;
    listShgMom(request: Request): Promise<{
        mom: import("./Entity/UJSShgMomEntity").UJSShgMomEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupDataUploadMonthAdd(request: Request, ujsShgGroupDataUploadMonthDTO: UJSShgGroupDataUploadMonthDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: import("./Entity/UJSShgGroupDataUploadMonthEntity").UJSShgGroupDataUploadMonthEntity;
        message: string;
        status: number;
    }>;
    listShgGroupDataUploadMonth(request: Request): Promise<{
        GroupDataUploadMonth: import("./Entity/UJSShgGroupDataUploadMonthEntity").UJSShgGroupDataUploadMonthEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMemberSavingAdd(request: Request, ujsShgMemberSavingDTO: UJSShgMemberSavingDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: import("./Entity/UJSShgMemberSavingEntity").UJSShgMemeberSavingEntity;
        message: string;
        status: number;
    }>;
    listShgMemberSaving(request: Request): Promise<{
        MemberSaving: import("./Entity/UJSShgMemberSavingEntity").UJSShgMemeberSavingEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupDetailInfoAdd(request: Request, ujsShgGroupDetailsInfoDTO: UJSShgGroupDetailsInfoDTO): Promise<{
        message: string;
        status: number;
        GroupDataUploadMonth?: undefined;
    } | {
        GroupDataUploadMonth: import("./Entity/UJSShgGroupDetailsInfoEntity").UJSShgGroupDetailsInfoEntity;
        message: string;
        status: number;
    }>;
    listShgGroupDetailInfo(request: Request): Promise<{
        GroupDetailsInfo: import("./Entity/UJSShgGroupDetailsInfoEntity").UJSShgGroupDetailsInfoEntity[];
        message: string;
        status: number;
    }>;
    UJSShgGroupSummaryAdd(request: Request, ujsShgGroupDSummaryDTO: UJSShgGroupSummaryDTO): Promise<{
        GroupSummary: import("./Entity/UJSShgGroupSummaryEntity").UJSShgGroupSummaryEntity;
        message: string;
        status: number;
    }>;
    listShgGroupSummary(request: Request): Promise<{
        GroupSummary: import("./Entity/UJSShgGroupSummaryEntity").UJSShgGroupSummaryEntity[];
        message: string;
        status: number;
    }>;
    UJSShInternalLoanSummaryAdd(request: Request, ujsShgInternalLoanSummaryDTO: UJSShgInternalLoanSummaryDTO): Promise<{
        InternalloanSummary: import("./Entity/UJSShgInternalLoanSummaryEntity").UJSShgInternalLoanSummaryEntity;
        message: string;
        status: number;
    }>;
    listSInternalLoanSummary(request: Request): Promise<{
        InternalLoanSummary: import("./Entity/UJSShgInternalLoanSummaryEntity").UJSShgInternalLoanSummaryEntity[];
        message: string;
        status: number;
    }>;
    UJSShgInternalLoanUpdate(request: Request, ujsShgInternalLoanUpdateDTO: UJSShgInternalLoanUpdateDTO): Promise<{
        InternalLoan: import("./Entity/UJSShgInternalLoanSummaryEntity").UJSShgInternalLoanSummaryEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        InternalLoan?: undefined;
    }>;
    UJSShgInternalLoanDelete(request: Request, ujsShgInternalLoanDeleteDTO: UJSShgInternalLoanDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    UJSShgLoanAdd(request: Request, ujsShggLoanDTO: UJSShgLoanDTO): Promise<{
        loan: import("./Entity/UJSShgLoanEntity").UJSShgLoanEntity;
        message: string;
        status: number;
    }>;
    listSgLoan(request: Request): Promise<{
        ShgLoan: import("./Entity/UJSShgLoanEntity").UJSShgLoanEntity[];
        message: string;
        status: number;
    }>;
    UJSShgMeetingTrackAdd(request: Request, ujsShgMeetingTrackDTO: UJSShgMeetingTrackDTO): Promise<{
        MeetingTrack: import("./Entity/UJSShgMeetingTrackEntity").UJSShgMeetingTrackEntity;
        message: string;
        status: number;
    }>;
    listSgMeetingTrack(request: Request): Promise<{
        ShgMeetingTrack: import("./Entity/UJSShgMeetingTrackEntity").UJSShgMeetingTrackEntity[];
        message: string;
        status: number;
    }>;
    UJSShgOtherIncomeAdd(request: Request, ujsShgOtherIncomeDTO: UJSShgOtherIncomeDTO): Promise<{
        OtherIncome: import("./Entity/UJSShgOtherIncomeEntity").UJSShgOtherIncomeEntity;
        message: string;
        status: number;
    }>;
    listSgOtherIncome(request: Request): Promise<{
        ShgOtherIncome: import("./Entity/UJSShgOtherIncomeEntity").UJSShgOtherIncomeEntity[];
        message: string;
        status: number;
    }>;
    UJSShgTillNowDataAdd(request: Request, ujsShgTillNowDataDTO: UJSShgTillNowDataDTO): Promise<{
        TillNowData: import("./Entity/UJSShgTillNowDataEntity").UJSShgTillNowDataEntity;
        message: string;
        status: number;
    }>;
    listSgTillNowData(request: Request): Promise<{
        ShgTillNowData: import("./Entity/UJSShgTillNowDataEntity").UJSShgTillNowDataEntity[];
        message: string;
        status: number;
    }>;
}
