"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UjsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const UJSDepartmentEntity_1 = require("./Entity/UJSDepartmentEntity");
const UJSShgGroupEntity_1 = require("./Entity/UJSShgGroupEntity");
const UJSShgMemberEntity_1 = require("./Entity/UJSShgMemberEntity");
const UJSUsersEntity_1 = require("./Entity/UJSUsersEntity");
const UJSRoleEntity_1 = require("./Entity/UJSRoleEntity");
const UJSRolePermissionEntity_1 = require("./Entity/UJSRolePermissionEntity");
const UJSBackupShgGroupDataUploadEntity_1 = require("./Entity/UJSBackupShgGroupDataUploadEntity");
const UJSBranchEntity_1 = require("./Entity/UJSBranchEntity");
const UJSFailedJobsEntity_1 = require("./Entity/UJSFailedJobsEntity");
const UJSMigrationEntity_1 = require("./Entity/UJSMigrationEntity");
const UJSPersonalAccessTokenEntity_1 = require("./Entity/UJSPersonalAccessTokenEntity");
const UJSSHGExpansesEntity_1 = require("./Entity/UJSSHGExpansesEntity");
const UJSSHGLoanRepaymentEntity_1 = require("./Entity/UJSSHGLoanRepaymentEntity");
const UJSStateEntity_1 = require("./Entity/UJSStateEntity");
const UJSShgTraningEntity_1 = require("./Entity/UJSShgTraningEntity");
const UJSShgActiveModelFarmerEntity_1 = require("./Entity/UJSShgActiveModelFarmerEntity");
const UJSShgAttendanceEntity_1 = require("./Entity/UJSShgAttendanceEntity");
const UJSShgContactEntity_1 = require("./Entity/UJSShgContactEntity");
const UJSShgDataLockEntity_1 = require("./Entity/UJSShgDataLockEntity");
const UJSBankLoanAllotmentEntity_1 = require("./Entity/UJSBankLoanAllotmentEntity");
const UJSBankLoanEntity_1 = require("./Entity/UJSBankLoanEntity");
const UJSBankEntity_1 = require("./Entity/UJSBankEntity");
const UJSShgAuditingEntity_1 = require("./Entity/UJSShgAuditingEntity");
const UJSShgDataUploadkEntity_1 = require("./Entity/UJSShgDataUploadkEntity");
const UJSShgDigiSakhiEntity_1 = require("./Entity/UJSShgDigiSakhiEntity");
const UJSShgFpoEntity_1 = require("./Entity/UJSShgFpoEntity");
const UJSShgFedrationReportEntity_1 = require("./Entity/UJSShgFedrationReportEntity");
const UJSShgFedrationEntity_1 = require("./Entity/UJSShgFedrationEntity");
const UJSShgMomEntity_1 = require("./Entity/UJSShgMomEntity");
const UJSShgGroupDataUploadMonthEntity_1 = require("./Entity/UJSShgGroupDataUploadMonthEntity");
const UJSShgMemberSavingEntity_1 = require("./Entity/UJSShgMemberSavingEntity");
const UJSShgGroupDetailsInfoEntity_1 = require("./Entity/UJSShgGroupDetailsInfoEntity");
const UJSShgGroupSummaryEntity_1 = require("./Entity/UJSShgGroupSummaryEntity");
const UJSShgInternalLoanSummaryEntity_1 = require("./Entity/UJSShgInternalLoanSummaryEntity");
const UJSShgLoanEntity_1 = require("./Entity/UJSShgLoanEntity");
const UJSShgMeetingTrackEntity_1 = require("./Entity/UJSShgMeetingTrackEntity");
const UJSShgOtherIncomeEntity_1 = require("./Entity/UJSShgOtherIncomeEntity");
const UJSShgTillNowDataEntity_1 = require("./Entity/UJSShgTillNowDataEntity");
const common_2 = require("@nestjs/common");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const crypto = __importStar(require("crypto"));
let UjsService = class UjsService {
    constructor(logger, connection, UJSDepartmentRepository, UJSSghGroupRepository, UJSShgMemberRepository, UJSUserRepository, UJSRoleRepository, UJSRolePermissionRepository, UJSBackupShgGroupDataUploadMonthRepository, UJSBranchRepository, UJSFailedJobRepository, UJSMigrationRepository, UJSPersonalAccessTokenRepository, UJSSHGExpansesRepository, UJSSHGLoanRepaymentRepository, UJSStateRepository, UJSShgTraningRepository, UJSShgActiveModelFarmerRepository, UJSShgAttendanceRepository, UJSShgContactRepository, UJSShgDataLockRepository, UJSShgBankLoanAllotmentRepository, UJSShgBankLoanRepository, UJSShgBankRepository, UJSShgAuditingRepository, UJSShgDataUploadRepository, UJSShgDigiSakhiRepository, UJSShgFpoRepository, UJSShgFedrationReportRepository, UJSShgFedrationRepository, UJSShgMomRepository, UJSShgGroupDataUploadMonthERepository, UJSShgMemberSavingRepository, UJSShgGroupDetailsInfoRepository, UJSShgGroupSummaryRepository, UJSShgInternalLoanSummaryRepository, UJSShgLoanRepository, UJSShgMeetingTrackRepository, UJSShgOtherIncomeRepository, UJSShgTillNowDataRepository) {
        this.logger = logger;
        this.connection = connection;
        this.UJSDepartmentRepository = UJSDepartmentRepository;
        this.UJSSghGroupRepository = UJSSghGroupRepository;
        this.UJSShgMemberRepository = UJSShgMemberRepository;
        this.UJSUserRepository = UJSUserRepository;
        this.UJSRoleRepository = UJSRoleRepository;
        this.UJSRolePermissionRepository = UJSRolePermissionRepository;
        this.UJSBackupShgGroupDataUploadMonthRepository = UJSBackupShgGroupDataUploadMonthRepository;
        this.UJSBranchRepository = UJSBranchRepository;
        this.UJSFailedJobRepository = UJSFailedJobRepository;
        this.UJSMigrationRepository = UJSMigrationRepository;
        this.UJSPersonalAccessTokenRepository = UJSPersonalAccessTokenRepository;
        this.UJSSHGExpansesRepository = UJSSHGExpansesRepository;
        this.UJSSHGLoanRepaymentRepository = UJSSHGLoanRepaymentRepository;
        this.UJSStateRepository = UJSStateRepository;
        this.UJSShgTraningRepository = UJSShgTraningRepository;
        this.UJSShgActiveModelFarmerRepository = UJSShgActiveModelFarmerRepository;
        this.UJSShgAttendanceRepository = UJSShgAttendanceRepository;
        this.UJSShgContactRepository = UJSShgContactRepository;
        this.UJSShgDataLockRepository = UJSShgDataLockRepository;
        this.UJSShgBankLoanAllotmentRepository = UJSShgBankLoanAllotmentRepository;
        this.UJSShgBankLoanRepository = UJSShgBankLoanRepository;
        this.UJSShgBankRepository = UJSShgBankRepository;
        this.UJSShgAuditingRepository = UJSShgAuditingRepository;
        this.UJSShgDataUploadRepository = UJSShgDataUploadRepository;
        this.UJSShgDigiSakhiRepository = UJSShgDigiSakhiRepository;
        this.UJSShgFpoRepository = UJSShgFpoRepository;
        this.UJSShgFedrationReportRepository = UJSShgFedrationReportRepository;
        this.UJSShgFedrationRepository = UJSShgFedrationRepository;
        this.UJSShgMomRepository = UJSShgMomRepository;
        this.UJSShgGroupDataUploadMonthERepository = UJSShgGroupDataUploadMonthERepository;
        this.UJSShgMemberSavingRepository = UJSShgMemberSavingRepository;
        this.UJSShgGroupDetailsInfoRepository = UJSShgGroupDetailsInfoRepository;
        this.UJSShgGroupSummaryRepository = UJSShgGroupSummaryRepository;
        this.UJSShgInternalLoanSummaryRepository = UJSShgInternalLoanSummaryRepository;
        this.UJSShgLoanRepository = UJSShgLoanRepository;
        this.UJSShgMeetingTrackRepository = UJSShgMeetingTrackRepository;
        this.UJSShgOtherIncomeRepository = UJSShgOtherIncomeRepository;
        this.UJSShgTillNowDataRepository = UJSShgTillNowDataRepository;
    }
    async UJSDepartmentAdd(request, ujsDepartmentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                department_name: ujsDepartmentDTO.department_name,
            },
        });
        if (checkDepartment) {
            return {
                message: "Department Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSDepartment = new UJSDepartmentEntity_1.UJSDepartmentEntity();
            addUJSDepartment.department_name = ujsDepartmentDTO.department_name;
            addUJSDepartment.status = ujsDepartmentDTO.status;
            await this.UJSDepartmentRepository.save(addUJSDepartment);
            return { departmentList: addUJSDepartment, message: "success", status: 200 };
        }
    }
    async UJSDepartmentList(request) {
        let departmentList = await this.UJSDepartmentRepository.find({});
        return { department: departmentList, message: "success", status: 200 };
    }
    async UJSDepartmentUpdate(request, ujsDepartmentUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                ID: ujsDepartmentUpdateDTO.ID,
            },
        });
        if (checkDepartment) {
            checkDepartment.department_name = ujsDepartmentUpdateDTO.department_name;
            checkDepartment.status = ujsDepartmentUpdateDTO.status;
            await this.UJSDepartmentRepository.save(checkDepartment);
            return { department: checkDepartment, message: "success", status: 200 };
        }
        else {
            return { message: "Department ID Does Not Exist", status: 400 };
        }
    }
    async UJSDepartmentDelete(request, ujsDepartmentDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                ID: ujsDepartmentDeleteDTO.ID,
            },
        });
        if (checkDepartment) {
            let checkUjsDepartment;
            checkUjsDepartment = this.connection.query(`delete from department where ID='${ujsDepartmentDeleteDTO.ID}'`);
            await this.UJSDepartmentRepository.delete(checkDepartment);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Department Does Not Exist", status: 400 };
        }
    }
    async UJSShgGroupAdd(request, ujsShgGroupDTO) {
        const currentDateTime = new Date();
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkGroup = await this.UJSSghGroupRepository.findOne({
            where: {
                group_name: ujsShgGroupDTO.group_name,
            },
        });
        if (checkGroup) {
            return {
                message: "Shg Group Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgGroup = new UJSShgGroupEntity_1.UJSShgGroupEntity();
            addUJSShgGroup.id = ujsShgGroupDTO.id;
            addUJSShgGroup.group_name = ujsShgGroupDTO.group_name;
            addUJSShgGroup.group_leader = ujsShgGroupDTO.group_leader;
            addUJSShgGroup.state = ujsShgGroupDTO.state;
            addUJSShgGroup.district = ujsShgGroupDTO.district;
            addUJSShgGroup.location = ujsShgGroupDTO.location;
            addUJSShgGroup.village = ujsShgGroupDTO.village;
            addUJSShgGroup.block_taluk = ujsShgGroupDTO.block_taluk;
            addUJSShgGroup.pincode = ujsShgGroupDTO.pincode;
            addUJSShgGroup.animator_id = ujsShgGroupDTO.animator_id;
            addUJSShgGroup.animator = ujsShgGroupDTO.animator;
            addUJSShgGroup.bank_name = ujsShgGroupDTO.bank_name;
            addUJSShgGroup.bank_branch = ujsShgGroupDTO.bank_branch;
            addUJSShgGroup.bank_ac = ujsShgGroupDTO.bank_ac;
            addUJSShgGroup.formationDate = ujsShgGroupDTO.formationDate;
            addUJSShgGroup.fed_amt = ujsShgGroupDTO.fed_amt;
            addUJSShgGroup.cashatbank = ujsShgGroupDTO.cashatbank;
            addUJSShgGroup.amount = ujsShgGroupDTO.amount;
            addUJSShgGroup.totalMember = ujsShgGroupDTO.totalMember;
            addUJSShgGroup.transactionstatus = ujsShgGroupDTO.transactionstatus;
            addUJSShgGroup.month = ujsShgGroupDTO.month;
            addUJSShgGroup.monthlymeeting = ujsShgGroupDTO.monthlymeeting;
            addUJSShgGroup.status = ujsShgGroupDTO.status;
            addUJSShgGroup.updatedAt = currentDateTime;
            ;
            addUJSShgGroup.TotalmonthlySaving = ujsShgGroupDTO.TotalmonthlySaving;
            addUJSShgGroup.totalMeeting = ujsShgGroupDTO.totalMeeting;
            addUJSShgGroup.savingAmt = ujsShgGroupDTO.savingAmt;
            addUJSShgGroup.totalInternalLoan = ujsShgGroupDTO.totalInternalLoan;
            addUJSShgGroup.totalInternalLoanRecover = ujsShgGroupDTO.totalInternalLoanRecover;
            addUJSShgGroup.totalInternalLoanInterest = ujsShgGroupDTO.totalInternalLoanInterest;
            addUJSShgGroup.totalExpanses = ujsShgGroupDTO.totalExpanses;
            addUJSShgGroup.TotalBankLoan = ujsShgGroupDTO.TotalBankLoan;
            addUJSShgGroup.totalbankloanrecover = ujsShgGroupDTO.totalbankloanrecover;
            addUJSShgGroup.TotalBankLoanInterest = ujsShgGroupDTO.TotalBankLoanInterest;
            await this.UJSSghGroupRepository.save(addUJSShgGroup);
            return { shgGroupList: addUJSShgGroup, message: "success", status: 200 };
        }
    }
    async UJSShgGroupList(request) {
        let shgGroupList = await this.UJSSghGroupRepository.find({});
        return { shgGroup: shgGroupList, message: "success", status: 200 };
    }
    async UJSShgGroupUpdate(request, ujsShgGroupUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        let checkGroup = await this.UJSSghGroupRepository.findOne({
            where: {
                id: ujsShgGroupUpdateDTO.id,
            },
        });
        if (checkGroup) {
            checkGroup.group_name = ujsShgGroupUpdateDTO.group_name;
            checkGroup.group_leader = ujsShgGroupUpdateDTO.group_leader;
            checkGroup.state = ujsShgGroupUpdateDTO.state;
            checkGroup.district = ujsShgGroupUpdateDTO.district;
            checkGroup.location = ujsShgGroupUpdateDTO.location;
            checkGroup.village = ujsShgGroupUpdateDTO.village;
            checkGroup.block_taluk = ujsShgGroupUpdateDTO.block_taluk;
            checkGroup.pincode = ujsShgGroupUpdateDTO.pincode;
            checkGroup.animator_id = ujsShgGroupUpdateDTO.animator_id;
            checkGroup.animator = ujsShgGroupUpdateDTO.animator;
            checkGroup.bank_name = ujsShgGroupUpdateDTO.bank_name;
            checkGroup.bank_branch = ujsShgGroupUpdateDTO.bank_branch;
            checkGroup.bank_ac = ujsShgGroupUpdateDTO.bank_ac;
            checkGroup.formationDate = ujsShgGroupUpdateDTO.formationDate;
            checkGroup.fed_amt = ujsShgGroupUpdateDTO.fed_amt;
            checkGroup.cashatbank = ujsShgGroupUpdateDTO.cashatbank;
            checkGroup.amount = ujsShgGroupUpdateDTO.amount;
            checkGroup.totalMember = ujsShgGroupUpdateDTO.totalMember;
            checkGroup.transactionstatus = ujsShgGroupUpdateDTO.transactionstatus;
            checkGroup.month = ujsShgGroupUpdateDTO.month;
            checkGroup.monthlymeeting = ujsShgGroupUpdateDTO.monthlymeeting;
            checkGroup.status = ujsShgGroupUpdateDTO.status;
            checkGroup.updatedAt = currentDateTime;
            checkGroup.TotalmonthlySaving = ujsShgGroupUpdateDTO.TotalmonthlySaving;
            checkGroup.totalMeeting = ujsShgGroupUpdateDTO.totalMeeting;
            checkGroup.savingAmt = ujsShgGroupUpdateDTO.savingAmt;
            checkGroup.totalInternalLoan = ujsShgGroupUpdateDTO.totalInternalLoan;
            checkGroup.totalInternalLoanRecover = ujsShgGroupUpdateDTO.totalInternalLoanRecover;
            checkGroup.totalInternalLoanInterest = ujsShgGroupUpdateDTO.totalInternalLoanInterest;
            checkGroup.totalExpanses = ujsShgGroupUpdateDTO.totalExpanses;
            checkGroup.TotalBankLoan = ujsShgGroupUpdateDTO.TotalBankLoan;
            checkGroup.totalbankloanrecover = ujsShgGroupUpdateDTO.totalbankloanrecover;
            checkGroup.TotalBankLoanInterest = ujsShgGroupUpdateDTO.TotalBankLoanInterest;
            await this.UJSSghGroupRepository.save(checkGroup);
            return { Group: checkGroup, message: "success", status: 200 };
        }
        else {
            return { message: "Group ID Does Not Exist", status: 400 };
        }
    }
    async UJSShgGroupDelete(request, ujsShgGroupDeleteDTO) {
        let checkShgGroupDelete = await this.UJSSghGroupRepository.findOne({
            where: {
                id: ujsShgGroupDeleteDTO.id,
            },
        });
        if (checkShgGroupDelete) {
            let checkUjsShgGroupDelete;
            checkUjsShgGroupDelete = this.connection.query(`delete from shg_groups where id='${ujsShgGroupDeleteDTO.id}'`);
            await this.UJSSghGroupRepository.delete(checkShgGroupDelete);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "ShgGroup Does Not Exist", status: 400 };
        }
    }
    async UJSShgMemberAdd(request, ujsShgMemberDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkMember = await this.UJSShgMemberRepository.findOne({
            where: {
                member_name: ujsShgMemberDTO.member_name,
            },
        });
        if (checkMember) {
            return {
                message: "Shg member Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgMember = new UJSShgMemberEntity_1.UJSShgMemberEntity();
            addUJSShgMember.member_name = ujsShgMemberDTO.member_name;
            addUJSShgMember.member_name_eng = ujsShgMemberDTO.member_name_eng;
            addUJSShgMember.group_name = ujsShgMemberDTO.group_name;
            addUJSShgMember.animator_id = ujsShgMemberDTO.animator_id;
            addUJSShgMember.animator_name = ujsShgMemberDTO.animator_name;
            addUJSShgMember.leader_name = ujsShgMemberDTO.leader_name;
            addUJSShgMember.HusbandFather_Name = ujsShgMemberDTO.HusbandFather_Name;
            addUJSShgMember.village = ujsShgMemberDTO.village;
            addUJSShgMember.mobile = ujsShgMemberDTO.mobile;
            addUJSShgMember.whatsapp_number = ujsShgMemberDTO.whatsapp_number;
            addUJSShgMember.email = ujsShgMemberDTO.email;
            addUJSShgMember.adhaar_number = ujsShgMemberDTO.adhaar_number;
            addUJSShgMember.gender = ujsShgMemberDTO.gender;
            addUJSShgMember.dob = ujsShgMemberDTO.dob;
            addUJSShgMember.education = ujsShgMemberDTO.education;
            addUJSShgMember.primary_occu = ujsShgMemberDTO.primary_occu;
            addUJSShgMember.religion = ujsShgMemberDTO.religion;
            addUJSShgMember.house_num = ujsShgMemberDTO.house_num;
            addUJSShgMember.block_taluk = ujsShgMemberDTO.block_taluk;
            addUJSShgMember.gram_punchayat = ujsShgMemberDTO.gram_punchayat;
            addUJSShgMember.state = ujsShgMemberDTO.state;
            addUJSShgMember.district = ujsShgMemberDTO.district;
            addUJSShgMember.pincode = ujsShgMemberDTO.pincode;
            addUJSShgMember.bank_name = ujsShgMemberDTO.bank_name;
            addUJSShgMember.branch_name = ujsShgMemberDTO.branch_name;
            addUJSShgMember.bank_ac = ujsShgMemberDTO.bank_ac;
            addUJSShgMember.bank_ifsc = ujsShgMemberDTO.bank_ifsc;
            addUJSShgMember.aadhar_seeding_status = ujsShgMemberDTO.aadhar_seeding_status;
            addUJSShgMember.voter_num = ujsShgMemberDTO.voter_num;
            addUJSShgMember.mngrega_num = ujsShgMemberDTO.mngrega_num;
            addUJSShgMember.sub_cat = ujsShgMemberDTO.sub_cat;
            addUJSShgMember.loan_taken = ujsShgMemberDTO.loan_taken;
            addUJSShgMember.mfi_bank_loan = ujsShgMemberDTO.mfi_bank_loan;
            addUJSShgMember.annual_income = ujsShgMemberDTO.annual_income;
            addUJSShgMember.diff_abled = ujsShgMemberDTO.diff_abled;
            addUJSShgMember.total_household_member = ujsShgMemberDTO.total_household_member;
            addUJSShgMember.member_status = ujsShgMemberDTO.member_status;
            addUJSShgMember.social_strata = ujsShgMemberDTO.social_strata;
            addUJSShgMember.house_hold_above = ujsShgMemberDTO.house_hold_above;
            addUJSShgMember.status = ujsShgMemberDTO.status;
            addUJSShgMember.monthlySaving = ujsShgMemberDTO.monthlySaving;
            addUJSShgMember.fedrationSaving = ujsShgMemberDTO.fedrationSaving;
            addUJSShgMember.updated_at = ujsShgMemberDTO.updated_at;
            addUJSShgMember.openingBal = ujsShgMemberDTO.openingBal;
            addUJSShgMember.fix_loan = ujsShgMemberDTO.fix_loan;
            await this.UJSShgMemberRepository.save(addUJSShgMember);
            return { shgMemberList: addUJSShgMember, message: "success", status: 200 };
        }
    }
    async UJSShgMemberList(request) {
        let shgMemberList = await this.UJSShgMemberRepository.find({});
        return { shgMember: shgMemberList, message: "success", status: 200 };
    }
    async UJSShgMemberUpdate(request, ujsShgMemberUpdateDTO) {
        let checkMember = await this.UJSShgMemberRepository.findOne({
            where: {
                id: ujsShgMemberUpdateDTO.id,
            },
        });
        if (checkMember) {
            checkMember.member_name = ujsShgMemberUpdateDTO.member_name;
            checkMember.member_name_eng = ujsShgMemberUpdateDTO.member_name_eng;
            checkMember.group_name = ujsShgMemberUpdateDTO.group_name;
            checkMember.animator_id = ujsShgMemberUpdateDTO.animator_id;
            checkMember.animator_name = ujsShgMemberUpdateDTO.animator_name;
            checkMember.leader_name = ujsShgMemberUpdateDTO.leader_name;
            checkMember.HusbandFather_Name = ujsShgMemberUpdateDTO.HusbandFather_Name;
            checkMember.village = ujsShgMemberUpdateDTO.village;
            checkMember.mobile = ujsShgMemberUpdateDTO.mobile;
            checkMember.whatsapp_number = ujsShgMemberUpdateDTO.whatsapp_number;
            checkMember.email = ujsShgMemberUpdateDTO.email;
            checkMember.adhaar_number = ujsShgMemberUpdateDTO.adhaar_number;
            checkMember.gender = ujsShgMemberUpdateDTO.gender;
            checkMember.dob = ujsShgMemberUpdateDTO.dob;
            checkMember.education = ujsShgMemberUpdateDTO.education;
            checkMember.primary_occu = ujsShgMemberUpdateDTO.primary_occu;
            checkMember.religion = ujsShgMemberUpdateDTO.religion;
            checkMember.house_num = ujsShgMemberUpdateDTO.house_num;
            checkMember.block_taluk = ujsShgMemberUpdateDTO.block_taluk;
            checkMember.gram_punchayat = ujsShgMemberUpdateDTO.gram_punchayat;
            checkMember.state = ujsShgMemberUpdateDTO.state;
            checkMember.district = ujsShgMemberUpdateDTO.district;
            checkMember.pincode = ujsShgMemberUpdateDTO.pincode;
            checkMember.bank_name = ujsShgMemberUpdateDTO.bank_name;
            checkMember.branch_name = ujsShgMemberUpdateDTO.branch_name;
            checkMember.bank_ac = ujsShgMemberUpdateDTO.bank_ac;
            checkMember.bank_ifsc = ujsShgMemberUpdateDTO.bank_ifsc;
            checkMember.aadhar_seeding_status = ujsShgMemberUpdateDTO.aadhar_seeding_status;
            checkMember.voter_num = ujsShgMemberUpdateDTO.voter_num;
            checkMember.mngrega_num = ujsShgMemberUpdateDTO.mngrega_num;
            checkMember.sub_cat = ujsShgMemberUpdateDTO.sub_cat;
            checkMember.loan_taken = ujsShgMemberUpdateDTO.loan_taken;
            checkMember.mfi_bank_loan = ujsShgMemberUpdateDTO.mfi_bank_loan;
            checkMember.annual_income = ujsShgMemberUpdateDTO.annual_income;
            checkMember.diff_abled = ujsShgMemberUpdateDTO.diff_abled;
            checkMember.total_household_member = ujsShgMemberUpdateDTO.total_household_member;
            checkMember.member_status = ujsShgMemberUpdateDTO.member_status;
            checkMember.social_strata = ujsShgMemberUpdateDTO.social_strata;
            checkMember.house_hold_above = ujsShgMemberUpdateDTO.house_hold_above;
            checkMember.status = ujsShgMemberUpdateDTO.status;
            checkMember.monthlySaving = ujsShgMemberUpdateDTO.monthlySaving;
            checkMember.fedrationSaving = ujsShgMemberUpdateDTO.fedrationSaving;
            checkMember.updated_at = ujsShgMemberUpdateDTO.updated_at;
            checkMember.openingBal = ujsShgMemberUpdateDTO.openingBal;
            checkMember.fix_loan = ujsShgMemberUpdateDTO.fix_loan;
            await this.UJSShgMemberRepository.save(checkMember);
            return { Member: checkMember, message: "success", status: 200 };
        }
        else {
            return { message: "Member ID Does Not Exist", status: 400 };
        }
    }
    async UJSShgMemberDelete(request, ujsShgMemberDeleteDTO) {
        let checkShgMemberDelete = await this.UJSShgMemberRepository.findOne({
            where: {
                id: ujsShgMemberDeleteDTO.id,
            },
        });
        if (checkShgMemberDelete) {
            let checkUjsShgMemberDelete;
            checkUjsShgMemberDelete = this.connection.query(`delete from shg_members where id='${ujsShgMemberDeleteDTO.id}'`);
            await this.UJSShgMemberRepository.delete(checkShgMemberDelete);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "ShgMember Does Not Exist", status: 400 };
        }
    }
    async UJSUserAdd(request, ujsUserDTO, student_img) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkUser = await this.UJSUserRepository.findOne({
            where: { name: ujsUserDTO.name },
        });
        if (checkUser) {
            return {
                message: "User Already Exist",
                status: 400,
            };
        }
        const addUJSUser = new UJSUsersEntity_1.UJSUsersEntity();
        addUJSUser.id = ujsUserDTO.id;
        addUJSUser.name = ujsUserDTO.name;
        addUJSUser.email = ujsUserDTO.email;
        addUJSUser.email_verified_at = ujsUserDTO.email_verified_at;
        addUJSUser.password = ujsUserDTO.password;
        addUJSUser.photo = ujsUserDTO.photo;
        addUJSUser.active = ujsUserDTO.active;
        addUJSUser.deleted_at = ujsUserDTO.deleted_at;
        addUJSUser.remember_token = ujsUserDTO.remember_token;
        addUJSUser.created_at = ujsUserDTO.created_at;
        addUJSUser.updated_at = ujsUserDTO.updated_at;
        addUJSUser.created_by = ujsUserDTO.created_by;
        addUJSUser.updated_by = ujsUserDTO.updated_by;
        addUJSUser.department = ujsUserDTO.department;
        addUJSUser.role = ujsUserDTO.role;
        addUJSUser.emp_code = ujsUserDTO.emp_code;
        addUJSUser.mobile = ujsUserDTO.mobile;
        addUJSUser.user_app = ujsUserDTO.user_app;
        addUJSUser.admin_app = ujsUserDTO.admin_app;
        addUJSUser.address = ujsUserDTO.address;
        addUJSUser.dob = ujsUserDTO.dob;
        addUJSUser.gender = ujsUserDTO.gender;
        addUJSUser.fathername = ujsUserDTO.fathername;
        addUJSUser.mothername = ujsUserDTO.mothername;
        addUJSUser.student_email = ujsUserDTO.student_email;
        addUJSUser.organization = ujsUserDTO.organization;
        addUJSUser.EmergencyContact = ujsUserDTO.EmergencyContact;
        addUJSUser.adhaarnumber = ujsUserDTO.adhaarnumber;
        addUJSUser.blood_group = ujsUserDTO.blood_group;
        addUJSUser.mobiletoken = ujsUserDTO.mobiletoken;
        addUJSUser.loggedInStatus = ujsUserDTO.loggedInStatus;
        addUJSUser.appLoginDate = ujsUserDTO.appLoginDate;
        if (student_img) {
            console.log("kj", student_img);
            if (!this.validateFileType(student_img) || !this.validateFileSize(student_img)) {
                throw new common_2.BadRequestException("Invalid file type or size.");
            }
            const randomString = this.generateRandomString(8);
            const fileNameWithoutExtension = path.basename(student_img.originalname, path.extname(student_img.originalname));
            const fileExtension = path.extname(student_img.originalname);
            const filename = `${fileNameWithoutExtension}_${randomString}${fileExtension}`;
            const savedFilePath = await this.saveFileToDirectory(student_img, filename);
            console.log("ss", savedFilePath);
            addUJSUser.student_img = filename;
        }
        await this.UJSUserRepository.save(addUJSUser);
        return { UserList: addUJSUser, message: "success", status: 200 };
    }
    generateRandomString(length) {
        if (length % 2 !== 0) {
            throw new Error("Length must be even for hex encoding.");
        }
        const bytes = crypto.randomBytes(length / 2);
        return bytes.toString("hex");
    }
    validateFileType(file) {
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(file.mimetype);
    }
    validateFileSize(file) {
        const maxSize = 50 * 1024 * 1024;
        return file.size <= maxSize;
    }
    async saveFileToDirectory(file, filename) {
        const uploadDir = process.env.UPLOAD_DIR;
        if (!uploadDir) {
            this._logger.error("UPLOAD_DIR is not defined");
            throw new Error("Upload directory is not configured");
        }
        const filePath = path.join(process.env.UPLOAD_DIR, filename);
        fs.writeFileSync(filePath, file.buffer);
        return filePath;
    }
    async UJSUserList(request) {
        let shgUserList = await this.UJSUserRepository.find({});
        return { shgUser: shgUserList, message: "success", status: 200 };
    }
    async UJSRoleAdd(request, ujsRoleDTO, permissionDTOs) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkRole = await this.UJSRoleRepository.findOne({
            where: { role_name: ujsRoleDTO.role_name },
        });
        if (checkRole) {
            return { message: "Role Already Exists", status: 400 };
        }
        const addUJSRole = new UJSRoleEntity_1.UJSRoleEntity();
        addUJSRole.role_name = ujsRoleDTO.role_name;
        addUJSRole.status = ujsRoleDTO.status;
        await this.UJSRoleRepository.save(addUJSRole);
        let getRole = await this.UJSRoleRepository.findOne({
            where: { role_name: ujsRoleDTO.role_name },
        });
        if (!getRole) {
            return { message: "Failed to retrieve the created role", status: 500 };
        }
        for (const permissionDTO of permissionDTOs) {
            const checkPermission = await this.UJSRolePermissionRepository.findOne({
                where: { permission_name: permissionDTO.permission_name, roll_id: getRole.roll_id },
            });
            if (checkPermission) {
                return { message: `Permission '${permissionDTO.permission_name}' Already Exists for this Role`, status: 400 };
            }
            const addRolePermission = new UJSRolePermissionEntity_1.UJSRolePermissionEntity();
            addRolePermission.roll_id = getRole.roll_id;
            addRolePermission.permission_name = permissionDTO.permission_name;
            addRolePermission.active = permissionDTO.active;
            await this.UJSRolePermissionRepository.save(addRolePermission);
        }
        return { message: "Role and Permissions created successfully", status: 200, role: getRole };
    }
    async UJSRoleList(request) {
        let shgRoleList = await this.UJSRoleRepository.find({});
        return { shgRole: shgRoleList, message: "success", status: 200 };
    }
    async UJSRoleAllList(request) {
        const shgRoleList = await this.UJSRoleRepository
            .createQueryBuilder('role')
            .leftJoinAndSelect('permission_detail', 'permission_detail', 'role.roll_id = permission_detail.roll_id')
            .select([
            'role.roll_id as roll_id',
            'role.role_name as role_name',
            'role.status as role_status',
            `GROUP_CONCAT(CASE WHEN permission_detail.active = 1 THEN permission_detail.permission_name ELSE CONCAT(permission_detail.permission_name, ' (inactive)') END) as permissions`
        ])
            .groupBy('role.roll_id')
            .getRawMany();
        const formattedRoleList = shgRoleList.map(role => ({
            ...role,
            permissions: role.permissions ? role.permissions.split(',') : []
        }));
        return { shgRole: formattedRoleList, message: "success", status: 200 };
    }
    async UJSRolePermissionList(id) {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return { message: "Invalid ID provided", status: 400 };
        }
        let shgRoleList = await this.UJSRolePermissionRepository.find({
            where: { roll_id: numericId },
        });
        if (shgRoleList.length === 0) {
            return { message: "No data found for the provided ID", status: 404 };
        }
        const groupedData = shgRoleList.reduce((acc, item) => {
            const { roll_id, permission_name, active } = item;
            if (!acc[roll_id]) {
                acc[roll_id] = {
                    roll_id,
                    permissions: [],
                };
            }
            acc[roll_id].permissions.push({ permission_name, active });
            return acc;
        }, {});
        const result = Object.values(groupedData);
        return { data: result, message: "success", status: 200 };
    }
    async UJSRolePermissionUpdate(request, ujsRoleDTO, permissionDTOs) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkRole = await this.UJSRoleRepository.findOne({
            where: { roll_id: ujsRoleDTO.roll_id },
        });
        if (!checkRole) {
            return { message: "Role ID Does Not Exist", status: 400 };
        }
        checkRole.role_name = ujsRoleDTO.role_name;
        checkRole.status = ujsRoleDTO.status;
        await this.UJSRoleRepository.save(checkRole);
        const existingPermissions = await this.UJSRolePermissionRepository.find({
            where: { roll_id: ujsRoleDTO.roll_id },
        });
        for (const permissionDTO of permissionDTOs) {
            const existingPermission = existingPermissions.find((perm) => perm.permission_name === permissionDTO.permission_name);
            if (existingPermission) {
                if (!permissionDTO.active) {
                    await this.UJSRolePermissionRepository.remove(existingPermission);
                }
                else {
                    existingPermission.active = permissionDTO.active;
                    await this.UJSRolePermissionRepository.save(existingPermission);
                }
            }
            else {
                if (!permissionDTO.active) {
                    return { message: `You don't have access to permission '${permissionDTO.permission_name}'`, status: 403 };
                }
                if (permissionDTO.active) {
                    const newPermission = new UJSRolePermissionEntity_1.UJSRolePermissionEntity();
                    newPermission.roll_id = checkRole.roll_id;
                    newPermission.permission_name = permissionDTO.permission_name;
                    newPermission.active = permissionDTO.active;
                    await this.UJSRolePermissionRepository.save(newPermission);
                }
            }
        }
        return { message: "Role and Permissions updated successfully", status: 200, role: checkRole };
    }
    async UJSMigrationAdd(request, ujsDepartmentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkMigration = await this.UJSMigrationRepository.findOne({
            where: {
                migration: ujsDepartmentDTO.migration,
            },
        });
        if (checkMigration) {
            return {
                message: "Migration Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSMigration = new UJSMigrationEntity_1.UJSMigrationEntity();
            addUJSMigration.migration = ujsDepartmentDTO.migration;
            addUJSMigration.batch = ujsDepartmentDTO.batch;
            await this.UJSMigrationRepository.save(addUJSMigration);
            return { migrationList: addUJSMigration, message: "success", status: 200 };
        }
    }
    async UJSMigrationList(request) {
        let migrationList = await this.UJSMigrationRepository.find({});
        return { migration: migrationList, message: "success", status: 200 };
    }
    async UJSFailedJobsAdd(request, ujsFailedJobsDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkFailedJob = await this.UJSFailedJobRepository.findOne({
            where: {
                uuid: ujsFailedJobsDTO.uuid,
            },
        });
        if (checkFailedJob) {
            return {
                message: "Jobs Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSFailedJobs = new UJSFailedJobsEntity_1.UJSFailedJobEntity();
            addUJSFailedJobs.uuid = ujsFailedJobsDTO.uuid;
            addUJSFailedJobs.connection = ujsFailedJobsDTO.connection;
            addUJSFailedJobs.queue = ujsFailedJobsDTO.queue;
            addUJSFailedJobs.payload = ujsFailedJobsDTO.payload;
            addUJSFailedJobs.exception = ujsFailedJobsDTO.exception;
            addUJSFailedJobs.failed_at = ujsFailedJobsDTO.failed_at;
            await this.UJSFailedJobRepository.save(addUJSFailedJobs);
            return { FailedJobsList: addUJSFailedJobs, message: "success", status: 200 };
        }
    }
    async UJSFailedJobsList(request) {
        let failedJobsList = await this.UJSFailedJobRepository.find({});
        return { failedJobs: failedJobsList, message: "success", status: 200 };
    }
    async UJSBranchAdd(request, ujsBranchDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkFailedJob = await this.UJSBranchRepository.findOne({
            where: {
                branch_name: ujsBranchDTO.branch_name,
            },
        });
        if (checkFailedJob) {
            return {
                message: "Jobs Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSBranch = new UJSBranchEntity_1.UJSBranchEntity();
            addUJSBranch.branch_name = ujsBranchDTO.branch_name;
            addUJSBranch.branch_code = ujsBranchDTO.branch_code;
            addUJSBranch.director_name = ujsBranchDTO.director_name;
            addUJSBranch.father_name = ujsBranchDTO.father_name;
            addUJSBranch.qualification = ujsBranchDTO.qualification;
            addUJSBranch.village = ujsBranchDTO.village;
            addUJSBranch.block = ujsBranchDTO.block;
            addUJSBranch.state = ujsBranchDTO.state;
            addUJSBranch.district = ujsBranchDTO.district;
            addUJSBranch.po = ujsBranchDTO.po;
            addUJSBranch.pincode = ujsBranchDTO.pincode;
            addUJSBranch.mobile = ujsBranchDTO.mobile;
            addUJSBranch.email = ujsBranchDTO.email;
            addUJSBranch.centerType = ujsBranchDTO.centerType;
            addUJSBranch.center_timing = ujsBranchDTO.center_timing;
            addUJSBranch.no_of_computer = ujsBranchDTO.no_of_computer;
            addUJSBranch.center_area = ujsBranchDTO.center_area;
            addUJSBranch.toilet = ujsBranchDTO.toilet;
            addUJSBranch.scanner = ujsBranchDTO.scanner;
            addUJSBranch.printer_color = ujsBranchDTO.printer_color;
            addUJSBranch.internetconnectivity = ujsBranchDTO.internetconnectivity;
            addUJSBranch.ups_inverter = ujsBranchDTO.ups_inverter;
            addUJSBranch.no_of_chairs = ujsBranchDTO.no_of_chairs;
            addUJSBranch.no_of_white_boards = ujsBranchDTO.no_of_white_boards;
            addUJSBranch.cctv = ujsBranchDTO.cctv;
            addUJSBranch.projecter = ujsBranchDTO.projecter;
            addUJSBranch.status = ujsBranchDTO.status;
            addUJSBranch.created_by = ujsBranchDTO.created_by;
            addUJSBranch.updated_by = ujsBranchDTO.updated_by;
            addUJSBranch.created_at = ujsBranchDTO.created_at;
            addUJSBranch.updated_at = ujsBranchDTO.updated_at;
            await this.UJSBranchRepository.save(addUJSBranch);
            return { BranchList: addUJSBranch, message: "success", status: 200 };
        }
    }
    async UJSBranchList(request) {
        let BranchList = await this.UJSBranchRepository.find({});
        return { Branch: BranchList, message: "success", status: 200 };
    }
    async UJSBackupShgGroupAdd(request, ujsBackupShgGroupDataUploadMonthDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkBackupShgGroupDataUploadMonth = await this.UJSBackupShgGroupDataUploadMonthRepository.findOne({
            where: {
                group_id: ujsBackupShgGroupDataUploadMonthDTO.group_id,
            },
        });
        if (checkBackupShgGroupDataUploadMonth) {
            return {
                message: "Backup Shg Group Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSBackupShgGroupDataUploadMonth = new UJSBackupShgGroupDataUploadEntity_1.UJSBackupShgGroupDataUploadMonthEntity();
            addUJSBackupShgGroupDataUploadMonth.group_id = ujsBackupShgGroupDataUploadMonthDTO.group_id;
            addUJSBackupShgGroupDataUploadMonth.meeting_id = ujsBackupShgGroupDataUploadMonthDTO.meeting_id;
            addUJSBackupShgGroupDataUploadMonth.meeting_date = ujsBackupShgGroupDataUploadMonthDTO.meeting_date;
            addUJSBackupShgGroupDataUploadMonth.last_remaining = ujsBackupShgGroupDataUploadMonthDTO.last_remaining;
            addUJSBackupShgGroupDataUploadMonth.tot_saving = ujsBackupShgGroupDataUploadMonthDTO.tot_saving;
            addUJSBackupShgGroupDataUploadMonth.internal_loan = ujsBackupShgGroupDataUploadMonthDTO.internal_loan;
            addUJSBackupShgGroupDataUploadMonth.internal_loan_int = ujsBackupShgGroupDataUploadMonthDTO.internal_loan_int;
            addUJSBackupShgGroupDataUploadMonth.bank_loan_amt = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt;
            addUJSBackupShgGroupDataUploadMonth.penalt_other = ujsBackupShgGroupDataUploadMonthDTO.penalt_other;
            addUJSBackupShgGroupDataUploadMonth.fix_loan1 = ujsBackupShgGroupDataUploadMonthDTO.fix_loan1;
            addUJSBackupShgGroupDataUploadMonth.bank_loan_amt1 = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt1;
            addUJSBackupShgGroupDataUploadMonth.internal_amt = ujsBackupShgGroupDataUploadMonthDTO.internal_amt;
            addUJSBackupShgGroupDataUploadMonth.grp_exp = ujsBackupShgGroupDataUploadMonthDTO.grp_exp;
            addUJSBackupShgGroupDataUploadMonth.special_amt = ujsBackupShgGroupDataUploadMonthDTO.special_amt;
            addUJSBackupShgGroupDataUploadMonth.tot_expanse = ujsBackupShgGroupDataUploadMonthDTO.tot_expanse;
            addUJSBackupShgGroupDataUploadMonth.bank_loan_amt_sub = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt_sub;
            addUJSBackupShgGroupDataUploadMonth.bank_saving = ujsBackupShgGroupDataUploadMonthDTO.bank_saving;
            addUJSBackupShgGroupDataUploadMonth.cash_inhand = ujsBackupShgGroupDataUploadMonthDTO.cash_inhand;
            addUJSBackupShgGroupDataUploadMonth.federation = ujsBackupShgGroupDataUploadMonthDTO.federation;
            addUJSBackupShgGroupDataUploadMonth.others = ujsBackupShgGroupDataUploadMonthDTO.others;
            await this.UJSBackupShgGroupDataUploadMonthRepository.save(addUJSBackupShgGroupDataUploadMonth);
            return { BackupShgGroupList: addUJSBackupShgGroupDataUploadMonth, message: "success", status: 200 };
        }
    }
    async UJSBackupShgGroupList(request) {
        let UJSBackupShgGroupList = await this.UJSBackupShgGroupDataUploadMonthRepository.find({});
        return { UJSBackupShgGroup: UJSBackupShgGroupList, message: "success", status: 200 };
    }
    async UJSPersonalAccessTokenAdd(request, ujsPersonalAccessTokenDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkPersonalAccessToken = await this.UJSPersonalAccessTokenRepository.findOne({
            where: {
                name: ujsPersonalAccessTokenDTO.name,
            },
        });
        if (checkPersonalAccessToken) {
            return {
                message: "Personal Access Token Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSUJSPersonalAccessToken = new UJSPersonalAccessTokenEntity_1.UJSPersonalAccessTokenEntity();
            addUJSUJSPersonalAccessToken.tokenable_id = ujsPersonalAccessTokenDTO.tokenable_id;
            addUJSUJSPersonalAccessToken.tokenable_type = ujsPersonalAccessTokenDTO.tokenable_type;
            addUJSUJSPersonalAccessToken.name = ujsPersonalAccessTokenDTO.name;
            addUJSUJSPersonalAccessToken.token = ujsPersonalAccessTokenDTO.token;
            addUJSUJSPersonalAccessToken.abilities = ujsPersonalAccessTokenDTO.abilities;
            addUJSUJSPersonalAccessToken.last_used_at = ujsPersonalAccessTokenDTO.last_used_at;
            addUJSUJSPersonalAccessToken.created_at = ujsPersonalAccessTokenDTO.created_at;
            addUJSUJSPersonalAccessToken.updated_at = ujsPersonalAccessTokenDTO.updated_at;
            await this.UJSPersonalAccessTokenRepository.save(addUJSUJSPersonalAccessToken);
            return { PersonalAccessTokenList: addUJSUJSPersonalAccessToken, message: "success", status: 200 };
        }
    }
    async UJSPersonalAccessTokenList(request) {
        let PersonalAccessTokenList = await this.UJSFailedJobRepository.find({});
        return { PersonalAccessToken: PersonalAccessTokenList, message: "success", status: 200 };
    }
    async UJSSHGExpensesAdd(request, ujsSHGExpansesDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkShgExpenses = await this.UJSSHGExpansesRepository.findOne({
            where: {
                group_id: ujsSHGExpansesDTO.group_id,
            },
        });
        if (checkShgExpenses) {
            return {
                message: "SHG Expenses Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSSHGExpenses = new UJSSHGExpansesEntity_1.UJSSHGExpansesEntity();
            addUJSSHGExpenses.group_id = ujsSHGExpansesDTO.group_id;
            addUJSSHGExpenses.meeting_id = ujsSHGExpansesDTO.meeting_id;
            addUJSSHGExpenses.animator_id = ujsSHGExpansesDTO.animator_id;
            addUJSSHGExpenses.transport = ujsSHGExpansesDTO.transport;
            addUJSSHGExpenses.tea = ujsSHGExpansesDTO.tea;
            addUJSSHGExpenses.telephone = ujsSHGExpansesDTO.telephone;
            addUJSSHGExpenses.meeting = ujsSHGExpansesDTO.meeting;
            addUJSSHGExpenses.stationary = ujsSHGExpansesDTO.stationary;
            addUJSSHGExpenses.federation = ujsSHGExpansesDTO.federation;
            addUJSSHGExpenses.other_expanses = ujsSHGExpansesDTO.other_expanses;
            addUJSSHGExpenses.datetime = ujsSHGExpansesDTO.datetime;
            addUJSSHGExpenses.total = ujsSHGExpansesDTO.total;
            await this.UJSSHGExpansesRepository.save(addUJSSHGExpenses);
            return { ShgExpensesList: addUJSSHGExpenses, message: "success", status: 200 };
        }
    }
    async UJSSHGExpensesList(request) {
        let SHGExpensesList = await this.UJSSHGExpansesRepository.find({});
        return { SHGExpenses: SHGExpensesList, message: "success", status: 200 };
    }
    async UJSShgLoanRepaymentAdd(request, ujsSHGLoanRepaymentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkShgExpenses = await this.UJSSHGLoanRepaymentRepository.findOne({
            where: {
                group_id: ujsSHGLoanRepaymentDTO.group_id,
            },
        });
        if (checkShgExpenses) {
            return {
                message: "SHG loan Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSSHGLoanRepayment = new UJSSHGLoanRepaymentEntity_1.UJSSHGLoanRepaymentEntity();
            addUJSSHGLoanRepayment.meeting_id = ujsSHGLoanRepaymentDTO.meeting_id;
            addUJSSHGLoanRepayment.emi_amount = ujsSHGLoanRepaymentDTO.emi_amount;
            addUJSSHGLoanRepayment.interest = ujsSHGLoanRepaymentDTO.interest;
            addUJSSHGLoanRepayment.member_id = ujsSHGLoanRepaymentDTO.member_id;
            addUJSSHGLoanRepayment.member_name = ujsSHGLoanRepaymentDTO.member_name;
            addUJSSHGLoanRepayment.group_id = ujsSHGLoanRepaymentDTO.group_id;
            addUJSSHGLoanRepayment.animator_id = ujsSHGLoanRepaymentDTO.animator_id;
            addUJSSHGLoanRepayment.emi_no = ujsSHGLoanRepaymentDTO.emi_no;
            addUJSSHGLoanRepayment.emi_date = ujsSHGLoanRepaymentDTO.emi_date;
            addUJSSHGLoanRepayment.meetingDate = ujsSHGLoanRepaymentDTO.meetingDate;
            await this.UJSSHGLoanRepaymentRepository.save(addUJSSHGLoanRepayment);
            return { ShgExpensesList: addUJSSHGLoanRepayment, message: "success", status: 200 };
        }
    }
    async UJSShgLoanRepaymentList(request) {
        let SHGLoanRepaymentList = await this.UJSSHGLoanRepaymentRepository.find({});
        return { SHGLoanRepayment: SHGLoanRepaymentList, message: "success", status: 200 };
    }
    async UJSStateAdd(request, ujsStateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkState = await this.UJSStateRepository.findOne({
            where: {
                district: ujsStateDTO.district,
            },
        });
        if (checkState) {
            return {
                message: "State Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSState = new UJSStateEntity_1.UJSStateEntity();
            addUJSState.state = ujsStateDTO.state;
            addUJSState.district = ujsStateDTO.district;
            await this.UJSStateRepository.save(addUJSState);
            return { stateList: addUJSState, message: "success", status: 200 };
        }
    }
    async UJSStateList(request) {
        let stateList = await this.UJSStateRepository.find({});
        return { state: stateList, message: "success", status: 200 };
    }
    async UJSShgTraningAdd(request, ujsShgTraningDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkShgTraning = await this.UJSShgTraningRepository.findOne({
            where: {
                meeting_id: ujsShgTraningDTO.meeting_id,
            },
        });
        if (checkShgTraning) {
            return {
                message: "Shg Traning Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgTraning = new UJSShgTraningEntity_1.UJSShgTraningEntity();
            addUJSShgTraning.meeting_id = ujsShgTraningDTO.meeting_id;
            addUJSShgTraning.group_id = ujsShgTraningDTO.group_id;
            addUJSShgTraning.animator_id = ujsShgTraningDTO.animator_id;
            addUJSShgTraning.traning = ujsShgTraningDTO.traning;
            addUJSShgTraning.traningDate = ujsShgTraningDTO.traningDate;
            addUJSShgTraning.created_Date = ujsShgTraningDTO.created_Date;
            await this.UJSShgTraningRepository.save(addUJSShgTraning);
            return { shgTraning: addUJSShgTraning, message: "success", status: 200 };
        }
    }
    async UJSShgTraningList(request) {
        let shgTraningList = await this.UJSShgTraningRepository.find({});
        return { shgTraning: shgTraningList, message: "success", status: 200 };
    }
    async UJSShgActiveModelFarmerAdd(request, ujsShgActiveModelFarmerDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkModel = await this.UJSShgActiveModelFarmerRepository.findOne({
            where: {
                farmer_name: ujsShgActiveModelFarmerDTO.farmer_name,
            },
        });
        if (checkModel) {
            return {
                message: "Shg Active Framer Model Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgActiveModelActive = new UJSShgActiveModelFarmerEntity_1.UJSShgActiveModelFarmerEntity();
            addUJSShgActiveModelActive.farmer_name = ujsShgActiveModelFarmerDTO.farmer_name;
            addUJSShgActiveModelActive.village = ujsShgActiveModelFarmerDTO.village;
            addUJSShgActiveModelActive.mobile = ujsShgActiveModelFarmerDTO.mobile;
            await this.UJSShgActiveModelFarmerRepository.save(addUJSShgActiveModelActive);
            return { shgActiveModelFarmer: addUJSShgActiveModelActive, message: "success", status: 200 };
        }
    }
    async UJSShgActiveModelFarmerList(request) {
        let shgActiveModelFarmerList = await this.UJSShgActiveModelFarmerRepository.find({});
        return { shgActiveModelFarmer: shgActiveModelFarmerList, message: "success", status: 200 };
    }
    async UJSShgAttendanceAdd(request, ujsShgAttendanceDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkAttendance = await this.UJSShgAttendanceRepository.findOne({
            where: {
                meeting_id: ujsShgAttendanceDTO.meeting_id,
            },
        });
        if (checkAttendance) {
            return {
                message: "Shg Attendance Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgAttendance = new UJSShgAttendanceEntity_1.UJSShgAttendanceEntity();
            addUJSShgAttendance.meeting_id = ujsShgAttendanceDTO.meeting_id;
            addUJSShgAttendance.group_id = ujsShgAttendanceDTO.group_id;
            addUJSShgAttendance.group_name = ujsShgAttendanceDTO.group_name;
            addUJSShgAttendance.animator_id = ujsShgAttendanceDTO.animator_id;
            addUJSShgAttendance.animator_name = ujsShgAttendanceDTO.animator_name;
            addUJSShgAttendance.member_id = ujsShgAttendanceDTO.member_id;
            addUJSShgAttendance.member_name = ujsShgAttendanceDTO.member_name;
            addUJSShgAttendance.attendance = ujsShgAttendanceDTO.attendance;
            addUJSShgAttendance.datetime = ujsShgAttendanceDTO.datetime;
            addUJSShgAttendance.meetingDate = ujsShgAttendanceDTO.meetingDate;
            await this.UJSShgAttendanceRepository.save(addUJSShgAttendance);
            return { shgAttendance: addUJSShgAttendance, message: "success", status: 200 };
        }
    }
    async UJSShgAttendanceList(request) {
        let shgAttendanceList = await this.UJSShgAttendanceRepository.find({});
        return { shgAttendance: shgAttendanceList, message: "success", status: 200 };
    }
    async UJSShgContactAdd(request, ujsShgContactDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkContact = await this.UJSShgContactRepository.findOne({
            where: {
                email: ujsShgContactDTO.email,
            },
        });
        if (checkContact) {
            return {
                message: "contact Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgContact = new UJSShgContactEntity_1.UJSShgContactEntity();
            addUJSShgContact.name = ujsShgContactDTO.name;
            addUJSShgContact.email = ujsShgContactDTO.email;
            addUJSShgContact.mobile = ujsShgContactDTO.mobile;
            addUJSShgContact.subject = ujsShgContactDTO.subject;
            addUJSShgContact.message = ujsShgContactDTO.message;
            addUJSShgContact.contactDate = ujsShgContactDTO.contactDate;
            await this.UJSShgContactRepository.save(addUJSShgContact);
            return { shgContact: addUJSShgContact, message: "success", status: 200 };
        }
    }
    async UJSShgContactList(request) {
        let shgContactList = await this.UJSShgContactRepository.find({});
        return { shgContact: shgContactList, message: "success", status: 200 };
    }
    async UJSShgDataLockAdd(request, ujsShgDataLockDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkdatalock = await this.UJSShgDataLockRepository.findOne({
            where: {
                group_id: ujsShgDataLockDTO.group_id,
            },
        });
        if (checkdatalock) {
            return {
                message: "Data Lock Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgDataLock = new UJSShgDataLockEntity_1.UJSShgDataLockEntity();
            addUJSShgDataLock.group_id = ujsShgDataLockDTO.group_id;
            addUJSShgDataLock.lock_date = ujsShgDataLockDTO.lock_date;
            addUJSShgDataLock.transaction = ujsShgDataLockDTO.transaction;
            addUJSShgDataLock.status = ujsShgDataLockDTO.status;
            addUJSShgDataLock.updatedAt = ujsShgDataLockDTO.updatedAt;
            await this.UJSShgDataLockRepository.save(addUJSShgDataLock);
            return { shgDataLock: addUJSShgDataLock, message: "success", status: 200 };
        }
    }
    async UJSShgDataLockList(request) {
        let shgDataLockList = await this.UJSShgDataLockRepository.find({});
        return { shgDataLock: shgDataLockList, message: "success", status: 200 };
    }
    async UJSShgBankLoanAllotmentAdd(request, ujsShgbankAllotmentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkbankloan = await this.UJSShgBankLoanAllotmentRepository.findOne({
            where: {
                group_id: ujsShgbankAllotmentDTO.group_id,
            },
        });
        if (checkbankloan) {
            return {
                message: "Bank Loan Already Allot",
                status: 400,
            };
        }
        else {
            const addUJSShgBankLoanAllotment = new UJSBankLoanAllotmentEntity_1.UJSBankLoanAllotmentEntity();
            addUJSShgBankLoanAllotment.group_id = ujsShgbankAllotmentDTO.group_id;
            addUJSShgBankLoanAllotment.Start_date = ujsShgbankAllotmentDTO.Start_date;
            addUJSShgBankLoanAllotment.End_date = ujsShgbankAllotmentDTO.End_date;
            addUJSShgBankLoanAllotment.shg_id = ujsShgbankAllotmentDTO.shg_id;
            addUJSShgBankLoanAllotment.group_name = ujsShgbankAllotmentDTO.group_name;
            addUJSShgBankLoanAllotment.bank_name = ujsShgbankAllotmentDTO.bank_name;
            addUJSShgBankLoanAllotment.loan_no = ujsShgbankAllotmentDTO.loan_no;
            addUJSShgBankLoanAllotment.loan_type = ujsShgbankAllotmentDTO.loan_type;
            addUJSShgBankLoanAllotment.totalEmi = ujsShgbankAllotmentDTO.totalEmi;
            addUJSShgBankLoanAllotment.remainingEmi = ujsShgbankAllotmentDTO.remainingEmi;
            addUJSShgBankLoanAllotment.loan_amt = ujsShgbankAllotmentDTO.loan_amt;
            addUJSShgBankLoanAllotment.requested_loan_amt = ujsShgbankAllotmentDTO.requested_loan_amt;
            addUJSShgBankLoanAllotment.interest_rate = ujsShgbankAllotmentDTO.interest_rate;
            addUJSShgBankLoanAllotment.interest = ujsShgbankAllotmentDTO.interest;
            addUJSShgBankLoanAllotment.member_emi_amount = ujsShgbankAllotmentDTO.member_emi_amount;
            addUJSShgBankLoanAllotment.settle_interest = ujsShgbankAllotmentDTO.settle_interest;
            addUJSShgBankLoanAllotment.tenure = ujsShgbankAllotmentDTO.tenure;
            addUJSShgBankLoanAllotment.file_charge = ujsShgbankAllotmentDTO.file_charge;
            addUJSShgBankLoanAllotment.fedration_charge = ujsShgbankAllotmentDTO.fedration_charge;
            addUJSShgBankLoanAllotment.distribution_amt = ujsShgbankAllotmentDTO.distribution_amt;
            addUJSShgBankLoanAllotment.total_int = ujsShgbankAllotmentDTO.total_int;
            addUJSShgBankLoanAllotment.settle_amt = ujsShgbankAllotmentDTO.settle_amt;
            addUJSShgBankLoanAllotment.loan_date = ujsShgbankAllotmentDTO.loan_date;
            addUJSShgBankLoanAllotment.bank_ifsc = ujsShgbankAllotmentDTO.bank_ifsc;
            addUJSShgBankLoanAllotment.meetingDate = ujsShgbankAllotmentDTO.meetingDate;
            addUJSShgBankLoanAllotment.sanctionDate = ujsShgbankAllotmentDTO.sanctionDate;
            addUJSShgBankLoanAllotment.distributionDate = ujsShgbankAllotmentDTO.distributionDate;
            addUJSShgBankLoanAllotment.totalMember = ujsShgbankAllotmentDTO.totalMember;
            addUJSShgBankLoanAllotment.updatedAt = ujsShgbankAllotmentDTO.updatedAt;
            addUJSShgBankLoanAllotment.status = ujsShgbankAllotmentDTO.status;
            addUJSShgBankLoanAllotment.last_emi_collected_date = ujsShgbankAllotmentDTO.last_emi_collected_date;
            await this.UJSShgBankLoanAllotmentRepository.save(addUJSShgBankLoanAllotment);
            return { shgBankLoanAllotment: addUJSShgBankLoanAllotment, message: "success", status: 200 };
        }
    }
    async UJSShgBankLoanAllotmentList(request) {
        let shgbankLoanList = await this.UJSShgBankLoanAllotmentRepository.find({});
        return { shgbankLoan: shgbankLoanList, message: "success", status: 200 };
    }
    async UJSShgBankLoanAdd(request, ujsShgbankAllotmentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkbankloan = await this.UJSShgBankLoanRepository.findOne({
            where: {
                group_id: ujsShgbankAllotmentDTO.group_id,
            },
        });
        if (checkbankloan) {
            return {
                message: "Loan Already Allot",
                status: 400,
            };
        }
        else {
            const addUJSShgBankLoan = new UJSBankLoanEntity_1.UJSBankLoanEntity();
            addUJSShgBankLoan.id = ujsShgbankAllotmentDTO.id;
            addUJSShgBankLoan.loan_no = ujsShgbankAllotmentDTO.loan_no;
            addUJSShgBankLoan.bank_name = ujsShgbankAllotmentDTO.bank_name;
            addUJSShgBankLoan.meeting_id = ujsShgbankAllotmentDTO.meeting_id;
            addUJSShgBankLoan.group_id = ujsShgbankAllotmentDTO.group_id;
            addUJSShgBankLoan.member_id = ujsShgbankAllotmentDTO.member_id;
            addUJSShgBankLoan.animator_id = ujsShgbankAllotmentDTO.animator_id;
            addUJSShgBankLoan.member_name = ujsShgbankAllotmentDTO.member_name;
            addUJSShgBankLoan.group_name = ujsShgbankAllotmentDTO.group_name;
            addUJSShgBankLoan.animator_name = ujsShgbankAllotmentDTO.animator_name;
            addUJSShgBankLoan.loan_amt = ujsShgbankAllotmentDTO.loan_amt;
            addUJSShgBankLoan.interest_rate = ujsShgbankAllotmentDTO.interest_rate;
            addUJSShgBankLoan.interest = ujsShgbankAllotmentDTO.interest;
            addUJSShgBankLoan.settle_interest = ujsShgbankAllotmentDTO.settle_interest;
            addUJSShgBankLoan.loan_period = ujsShgbankAllotmentDTO.loan_period;
            addUJSShgBankLoan.loan_date = ujsShgbankAllotmentDTO.loan_date;
            addUJSShgBankLoan.loan_type = ujsShgbankAllotmentDTO.loan_type;
            addUJSShgBankLoan.settle_amount = ujsShgbankAllotmentDTO.settle_amount;
            addUJSShgBankLoan.total_emi = ujsShgbankAllotmentDTO.total_emi;
            addUJSShgBankLoan.current_emi = ujsShgbankAllotmentDTO.current_emi;
            addUJSShgBankLoan.meetingDate = ujsShgbankAllotmentDTO.meetingDate;
            await this.UJSShgBankLoanRepository.save(addUJSShgBankLoan);
            return { shgBankLoan: addUJSShgBankLoan, message: "success", status: 200 };
        }
    }
    async UJSShgBankLoanList(request) {
        let bankLoanList = await this.UJSShgBankLoanRepository.find({});
        return { bankLoan: bankLoanList, message: "success", status: 200 };
    }
    async UJSBankLoanUpdate(request, ujsBankLoanUpdateDTO) {
        let checkBankLoan = await this.UJSShgBankLoanRepository.findOne({
            where: {
                id: ujsBankLoanUpdateDTO.id,
            },
        });
        if (checkBankLoan) {
            checkBankLoan.loan_no = ujsBankLoanUpdateDTO.loan_no;
            checkBankLoan.bank_name = ujsBankLoanUpdateDTO.bank_name;
            checkBankLoan.meeting_id = ujsBankLoanUpdateDTO.meeting_id;
            checkBankLoan.group_id = ujsBankLoanUpdateDTO.group_id;
            checkBankLoan.member_id = ujsBankLoanUpdateDTO.member_id;
            checkBankLoan.animator_id = ujsBankLoanUpdateDTO.animator_id;
            checkBankLoan.member_name = ujsBankLoanUpdateDTO.member_name;
            checkBankLoan.group_name = ujsBankLoanUpdateDTO.group_name;
            checkBankLoan.animator_name = ujsBankLoanUpdateDTO.animator_name;
            checkBankLoan.loan_amt = ujsBankLoanUpdateDTO.loan_amt;
            checkBankLoan.interest_rate = ujsBankLoanUpdateDTO.interest_rate;
            checkBankLoan.interest = ujsBankLoanUpdateDTO.interest;
            checkBankLoan.settle_interest = ujsBankLoanUpdateDTO.settle_interest;
            checkBankLoan.loan_period = ujsBankLoanUpdateDTO.loan_period;
            checkBankLoan.loan_date = ujsBankLoanUpdateDTO.loan_date;
            checkBankLoan.loan_type = ujsBankLoanUpdateDTO.loan_type;
            checkBankLoan.settle_amount = ujsBankLoanUpdateDTO.settle_amount;
            checkBankLoan.total_emi = ujsBankLoanUpdateDTO.total_emi;
            checkBankLoan.current_emi = ujsBankLoanUpdateDTO.current_emi;
            checkBankLoan.meetingDate = ujsBankLoanUpdateDTO.meetingDate;
            await this.UJSShgBankLoanRepository.save(checkBankLoan);
            return { BankLoan: checkBankLoan, message: "success", status: 200 };
        }
        else {
            return { message: "BankLoan ID Does Not Exist", status: 400 };
        }
    }
    async UJSBankLoanDelete(request, ujsBankLoanDeleteDTO) {
        let checkBankLoan = await this.UJSShgBankLoanRepository.findOne({
            where: {
                id: ujsBankLoanDeleteDTO.id,
            },
        });
        if (checkBankLoan) {
            let checkUjsBankLoan;
            checkUjsBankLoan = this.connection.query(`delete from shg_bank_loan where id='${ujsBankLoanDeleteDTO.id}'`);
            await this.UJSShgBankLoanRepository.delete(checkBankLoan);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Id Does Not Exist", status: 400 };
        }
    }
    async UJSShgBankAdd(request, ujsShgbankDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkbank = await this.UJSShgBankRepository.findOne({
            where: {
                bank_name: ujsShgbankDTO.bank_name,
            },
        });
        if (checkbank) {
            return {
                message: "Bank Already Allot",
                status: 400,
            };
        }
        else {
            const addUJSShgBank = new UJSBankEntity_1.UJSBankEntity();
            addUJSShgBank.bank_name = ujsShgbankDTO.bank_name;
            addUJSShgBank.interest_rate = ujsShgbankDTO.interest_rate;
            addUJSShgBank.filecharge = ujsShgbankDTO.filecharge;
            addUJSShgBank.fedrationcharge = ujsShgbankDTO.fedrationcharge;
            await this.UJSShgBankRepository.save(addUJSShgBank);
            return { shgBank: addUJSShgBank, message: "success", status: 200 };
        }
    }
    async UJSShgBankList(request) {
        let bankList = await this.UJSShgBankRepository.find({});
        return { bank: bankList, message: "success", status: 200 };
    }
    async UJSShgAuditingAdd(request, ujsShgAuditingDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkaudit = await this.UJSShgAuditingRepository.findOne({
            where: {
                auditor_name: ujsShgAuditingDTO.auditor_name,
            },
        });
        if (checkaudit) {
            return {
                message: "shg Auditing Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgAuditing = new UJSShgAuditingEntity_1.UJSShgAuditingEntity();
            addUJSShgAuditing.auditor_name = ujsShgAuditingDTO.auditor_name;
            addUJSShgAuditing.meeting_id = ujsShgAuditingDTO.meeting_id;
            addUJSShgAuditing.animator_id = ujsShgAuditingDTO.animator_id;
            addUJSShgAuditing.group_id = ujsShgAuditingDTO.group_id;
            addUJSShgAuditing.fromdate = ujsShgAuditingDTO.fromdate;
            addUJSShgAuditing.todate = ujsShgAuditingDTO.todate;
            addUJSShgAuditing.auditdate = ujsShgAuditingDTO.auditdate;
            addUJSShgAuditing.created_date = ujsShgAuditingDTO.created_date;
            await this.UJSShgAuditingRepository.save(addUJSShgAuditing);
            return { shgAuditing: addUJSShgAuditing, message: "success", status: 200 };
        }
    }
    async UJSShgAuditingList(request) {
        let AuditingList = await this.UJSShgAuditingRepository.find({});
        return { Auditing: AuditingList, message: "success", status: 200 };
    }
    async UJSShgDataUploadAdd(request, ujsShgDataUploadDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkUpload = await this.UJSShgDataUploadRepository.findOne({
            where: {
                group_id: ujsShgDataUploadDTO.group_id,
            },
        });
        if (checkUpload) {
            return {
                message: " Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgDataUpload = new UJSShgDataUploadkEntity_1.UJSShgDataUploadEntity();
            addUJSShgDataUpload.group_id = ujsShgDataUploadDTO.group_id;
            addUJSShgDataUpload.member_id = ujsShgDataUploadDTO.member_id;
            addUJSShgDataUpload.member_name = ujsShgDataUploadDTO.member_name;
            addUJSShgDataUpload.HusbandFather_Name = ujsShgDataUploadDTO.HusbandFather_Name;
            addUJSShgDataUpload.attendance = ujsShgDataUploadDTO.attendance;
            addUJSShgDataUpload.opening = ujsShgDataUploadDTO.opening;
            addUJSShgDataUpload.saving = ujsShgDataUploadDTO.saving;
            addUJSShgDataUpload.special_saving = ujsShgDataUploadDTO.special_saving;
            addUJSShgDataUpload.installment = ujsShgDataUploadDTO.installment;
            addUJSShgDataUpload.interest = ujsShgDataUploadDTO.interest;
            addUJSShgDataUpload.penalty = ujsShgDataUploadDTO.penalty;
            addUJSShgDataUpload.fix_loan = ujsShgDataUploadDTO.fix_loan;
            addUJSShgDataUpload.bank_loan = ujsShgDataUploadDTO.bank_loan;
            addUJSShgDataUpload.bank_interest = ujsShgDataUploadDTO.bank_interest;
            addUJSShgDataUpload.new_loan = ujsShgDataUploadDTO.new_loan;
            addUJSShgDataUpload.remaining_loan = ujsShgDataUploadDTO.remaining_loan;
            addUJSShgDataUpload.meeting_date = ujsShgDataUploadDTO.meeting_date;
            addUJSShgDataUpload.meeting_id = ujsShgDataUploadDTO.meeting_id;
            addUJSShgDataUpload.datetime = ujsShgDataUploadDTO.datetime;
            addUJSShgDataUpload.openingBal = ujsShgDataUploadDTO.openingBal;
            addUJSShgDataUpload.fixLoan = ujsShgDataUploadDTO.fixLoan;
            await this.UJSShgDataUploadRepository.save(addUJSShgDataUpload);
            return { shgDataUpload: addUJSShgDataUpload, message: "success", status: 200 };
        }
    }
    async UJSShgDataUploadList(request) {
        let DataUploadList = await this.UJSShgDataUploadRepository.find({});
        return { DataUpload: DataUploadList, message: "success", status: 200 };
    }
    async UJSShgDigiSakhiAdd(request, ujsShgDigiSakhiDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkDigiSakhi = await this.UJSShgDigiSakhiRepository.findOne({
            where: {
                gp_name: ujsShgDigiSakhiDTO.gp_name,
            },
        });
        if (checkDigiSakhi) {
            return {
                message: " Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgDigiSakhi = new UJSShgDigiSakhiEntity_1.UJSShgDigiSakhiEntity();
            addUJSShgDigiSakhi.gp_name = ujsShgDigiSakhiDTO.gp_name;
            addUJSShgDigiSakhi.state = ujsShgDigiSakhiDTO.state;
            addUJSShgDigiSakhi.district = ujsShgDigiSakhiDTO.district;
            addUJSShgDigiSakhi.block = ujsShgDigiSakhiDTO.block;
            addUJSShgDigiSakhi.villege_name = ujsShgDigiSakhiDTO.villege_name;
            addUJSShgDigiSakhi.vle_name = ujsShgDigiSakhiDTO.vle_name;
            addUJSShgDigiSakhi.mobile = ujsShgDigiSakhiDTO.mobile;
            addUJSShgDigiSakhi.email = ujsShgDigiSakhiDTO.email;
            addUJSShgDigiSakhi.application_ref_no = ujsShgDigiSakhiDTO.application_ref_no;
            addUJSShgDigiSakhi.cscId = ujsShgDigiSakhiDTO.cscId;
            await this.UJSShgDigiSakhiRepository.save(addUJSShgDigiSakhi);
            return { shgDigiSakhi: addUJSShgDigiSakhi, message: "success", status: 200 };
        }
    }
    async UJSShgDigiSakhiList(request) {
        let DigiSakhiList = await this.UJSShgDigiSakhiRepository.find({});
        return { DigiSakhi: DigiSakhiList, message: "success", status: 200 };
    }
    async UJSShgFpoAdd(request, ujsShgFpoDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkFpo = await this.UJSShgFpoRepository.findOne({
            where: {
                member_sharholder: ujsShgFpoDTO.member_sharholder,
            },
        });
        if (checkFpo) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgFpo = new UJSShgFpoEntity_1.UJSShgFpoEntity();
            addUJSShgFpo.member_sharholder = ujsShgFpoDTO.member_sharholder;
            addUJSShgFpo.husband_name = ujsShgFpoDTO.husband_name;
            addUJSShgFpo.village_name = ujsShgFpoDTO.village_name;
            addUJSShgFpo.gender = ujsShgFpoDTO.gender;
            addUJSShgFpo.share_amt = ujsShgFpoDTO.share_amt;
            addUJSShgFpo.no_of_share = ujsShgFpoDTO.no_of_share;
            addUJSShgFpo.folio_share_distinct_no = ujsShgFpoDTO.folio_share_distinct_no;
            addUJSShgFpo.land_holdeing = ujsShgFpoDTO.land_holdeing;
            addUJSShgFpo.land_record = ujsShgFpoDTO.land_record;
            addUJSShgFpo.mobile = ujsShgFpoDTO.mobile;
            addUJSShgFpo.remarks = ujsShgFpoDTO.remarks;
            await this.UJSShgFpoRepository.save(addUJSShgFpo);
            return { Fpo: addUJSShgFpo, message: "success", status: 200 };
        }
    }
    async UJSShgFpoList(request) {
        let FpoList = await this.UJSShgFpoRepository.find({});
        return { Fpo: FpoList, message: "success", status: 200 };
    }
    async UJSShgFedrationReportAdd(request, ujsShgFedrationReportDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkFedration = await this.UJSShgFedrationReportRepository.findOne({
            where: {
                shg_name: ujsShgFedrationReportDTO.shg_name
            },
        });
        if (checkFedration) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgFedration = new UJSShgFedrationReportEntity_1.UJSSHGFedrationReportEntity();
            addUJSShgFedration.shg_name = ujsShgFedrationReportDTO.shg_name;
            addUJSShgFedration.dhani = ujsShgFedrationReportDTO.dhani;
            addUJSShgFedration.gram_panchayat = ujsShgFedrationReportDTO.gram_panchayat;
            addUJSShgFedration.total_member = ujsShgFedrationReportDTO.total_member;
            addUJSShgFedration.federation_this_month = ujsShgFedrationReportDTO.federation_this_month;
            addUJSShgFedration.federation = ujsShgFedrationReportDTO.federation;
            await this.UJSShgFedrationReportRepository.save(addUJSShgFedration);
            return { Fedration: addUJSShgFedration, message: "success", status: 200 };
        }
    }
    async UJSShgFedrationReportList(request) {
        let FedrationList = await this.UJSShgFedrationReportRepository.find({});
        return { Fedration: FedrationList, message: "success", status: 200 };
    }
    async UJSShgFedrationAdd(request, ujsShgFedrationDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkFedration = await this.UJSShgFedrationRepository.findOne({
            where: {
                group_id: ujsShgFedrationDTO.group_id
            },
        });
        if (checkFedration) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgFedration = new UJSShgFedrationEntity_1.UJSSHGFedrationEntity();
            addUJSShgFedration.meeting_id = ujsShgFedrationDTO.meeting_id;
            addUJSShgFedration.group_id = ujsShgFedrationDTO.group_id;
            addUJSShgFedration.animator_id = ujsShgFedrationDTO.animator_id;
            addUJSShgFedration.animator_name = ujsShgFedrationDTO.animator_name;
            addUJSShgFedration.group_name = ujsShgFedrationDTO.group_name;
            addUJSShgFedration.amount = ujsShgFedrationDTO.amount;
            addUJSShgFedration.datetime = ujsShgFedrationDTO.datetime;
            await this.UJSShgFedrationRepository.save(addUJSShgFedration);
            return { Fedration: addUJSShgFedration, message: "success", status: 200 };
        }
    }
    async UJSShgFedrationList(request) {
        let FedrationList = await this.UJSShgFedrationRepository.find({});
        return { Fedration: FedrationList, message: "success", status: 200 };
    }
    async UJSShgMomAdd(request, ujsShgMomDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkMom = await this.UJSShgMomRepository.findOne({
            where: {
                group_id: ujsShgMomDTO.group_id
            },
        });
        if (checkMom) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgMom = new UJSShgMomEntity_1.UJSShgMomEntity();
            addUJSShgMom.meeting_id = ujsShgMomDTO.meeting_id;
            addUJSShgMom.group_id = ujsShgMomDTO.group_id;
            addUJSShgMom.animator_id = ujsShgMomDTO.animator_id;
            addUJSShgMom.animator_name = ujsShgMomDTO.animator_name;
            addUJSShgMom.group_name = ujsShgMomDTO.group_name;
            addUJSShgMom.mom = ujsShgMomDTO.mom;
            addUJSShgMom.datetime = ujsShgMomDTO.datetime;
            await this.UJSShgMomRepository.save(addUJSShgMom);
            return { ShgMom: addUJSShgMom, message: "success", status: 200 };
        }
    }
    async UJSShgMomList(request) {
        let momList = await this.UJSShgMomRepository.find({});
        return { mom: momList, message: "success", status: 200 };
    }
    async UJSShgGroupDataUploadMonthAdd(request, ujsShgGroupDataUploadMonthDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkGroupDataUploadMonth = await this.UJSShgGroupDataUploadMonthERepository.findOne({
            where: {
                group_id: ujsShgGroupDataUploadMonthDTO.group_id
            },
        });
        if (checkGroupDataUploadMonth) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgGroupDataUploadMonth = new UJSShgGroupDataUploadMonthEntity_1.UJSShgGroupDataUploadMonthEntity();
            addUJSShgGroupDataUploadMonth.meeting_id = ujsShgGroupDataUploadMonthDTO.meeting_id;
            addUJSShgGroupDataUploadMonth.group_id = ujsShgGroupDataUploadMonthDTO.group_id;
            addUJSShgGroupDataUploadMonth.meeting_date = ujsShgGroupDataUploadMonthDTO.meeting_date;
            addUJSShgGroupDataUploadMonth.last_remaining = ujsShgGroupDataUploadMonthDTO.last_remaining;
            addUJSShgGroupDataUploadMonth.tot_saving = ujsShgGroupDataUploadMonthDTO.tot_saving;
            addUJSShgGroupDataUploadMonth.internal_loan = ujsShgGroupDataUploadMonthDTO.internal_loan;
            addUJSShgGroupDataUploadMonth.internal_loan_int = ujsShgGroupDataUploadMonthDTO.internal_loan_int;
            addUJSShgGroupDataUploadMonth.bank_loan_amt = ujsShgGroupDataUploadMonthDTO.bank_loan_amt;
            addUJSShgGroupDataUploadMonth.penalt_other = ujsShgGroupDataUploadMonthDTO.penalt_other;
            addUJSShgGroupDataUploadMonth.fix_loan1 = ujsShgGroupDataUploadMonthDTO.fix_loan1;
            addUJSShgGroupDataUploadMonth.bank_loan_amt1 = ujsShgGroupDataUploadMonthDTO.bank_loan_amt1;
            addUJSShgGroupDataUploadMonth.special_amt = ujsShgGroupDataUploadMonthDTO.special_amt;
            addUJSShgGroupDataUploadMonth.internal_amt = ujsShgGroupDataUploadMonthDTO.internal_amt;
            addUJSShgGroupDataUploadMonth.grp_exp = ujsShgGroupDataUploadMonthDTO.grp_exp;
            addUJSShgGroupDataUploadMonth.tot_expanse = ujsShgGroupDataUploadMonthDTO.tot_expanse;
            addUJSShgGroupDataUploadMonth.bank_loan_amt_sub = ujsShgGroupDataUploadMonthDTO.bank_loan_amt_sub;
            addUJSShgGroupDataUploadMonth.bank_saving = ujsShgGroupDataUploadMonthDTO.bank_saving;
            addUJSShgGroupDataUploadMonth.cash_inhand = ujsShgGroupDataUploadMonthDTO.cash_inhand;
            addUJSShgGroupDataUploadMonth.federation = ujsShgGroupDataUploadMonthDTO.federation;
            addUJSShgGroupDataUploadMonth.others = ujsShgGroupDataUploadMonthDTO.others;
            await this.UJSShgGroupDataUploadMonthERepository.save(addUJSShgGroupDataUploadMonth);
            return { GroupDataUploadMonth: addUJSShgGroupDataUploadMonth, message: "success", status: 200 };
        }
    }
    async UJSShgGroupDataUploadMonthList(request) {
        let GroupDataUploadMonthList = await this.UJSShgGroupDataUploadMonthERepository.find({});
        return { GroupDataUploadMonth: GroupDataUploadMonthList, message: "success", status: 200 };
    }
    async UJSShgMemberSavingAdd(request, ujsShgMemberSavingDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkMemberSaving = await this.UJSShgMemberSavingRepository.findOne({
            where: {
                group_id: ujsShgMemberSavingDTO.group_id
            },
        });
        if (checkMemberSaving) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgMemberSaving = new UJSShgMemberSavingEntity_1.UJSShgMemeberSavingEntity();
            addUJSShgMemberSaving.meeting_id = ujsShgMemberSavingDTO.meeting_id;
            addUJSShgMemberSaving.group_id = ujsShgMemberSavingDTO.group_id;
            addUJSShgMemberSaving.animator_id = ujsShgMemberSavingDTO.animator_id;
            addUJSShgMemberSaving.member_id = ujsShgMemberSavingDTO.member_id;
            addUJSShgMemberSaving.amount = ujsShgMemberSavingDTO.amount;
            addUJSShgMemberSaving.collectionDate = ujsShgMemberSavingDTO.collectionDate;
            addUJSShgMemberSaving.federation_amount = ujsShgMemberSavingDTO.federation_amount;
            addUJSShgMemberSaving.meetingDate = ujsShgMemberSavingDTO.meetingDate;
            await this.UJSShgMemberSavingRepository.save(addUJSShgMemberSaving);
            return { GroupDataUploadMonth: addUJSShgMemberSaving, message: "success", status: 200 };
        }
    }
    async UJSShgMemberSavingList(request) {
        let MemberSavingList = await this.UJSShgMemberSavingRepository.find({});
        return { MemberSaving: MemberSavingList, message: "success", status: 200 };
    }
    async UJSShgGroupDetailInfoAdd(request, ujsShgGroupDetailInfoDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkGroupDetailsInfo = await this.UJSShgGroupDetailsInfoRepository.findOne({
            where: {
                NameOfSHG: ujsShgGroupDetailInfoDTO.NameOfSHG
            },
        });
        if (checkGroupDetailsInfo) {
            return {
                message: "Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSShgGroupDetailsInfo = new UJSShgGroupDetailsInfoEntity_1.UJSShgGroupDetailsInfoEntity();
            addUJSShgGroupDetailsInfo.NameOfSHG = ujsShgGroupDetailInfoDTO.NameOfSHG;
            addUJSShgGroupDetailsInfo.NameOfDhani = ujsShgGroupDetailInfoDTO.NameOfDhani;
            addUJSShgGroupDetailsInfo.NameOfVillage = ujsShgGroupDetailInfoDTO.NameOfVillage;
            addUJSShgGroupDetailsInfo.NameOfGramPanchayat = ujsShgGroupDetailInfoDTO.NameOfGramPanchayat;
            addUJSShgGroupDetailsInfo.DateOfFormation = ujsShgGroupDetailInfoDTO.DateOfFormation;
            addUJSShgGroupDetailsInfo.CordinatorName = ujsShgGroupDetailInfoDTO.CordinatorName;
            addUJSShgGroupDetailsInfo.Date = ujsShgGroupDetailInfoDTO.Date;
            addUJSShgGroupDetailsInfo.Month = ujsShgGroupDetailInfoDTO.Month;
            addUJSShgGroupDetailsInfo.Time = ujsShgGroupDetailInfoDTO.Time;
            addUJSShgGroupDetailsInfo.ProjectIstandIInd = ujsShgGroupDetailInfoDTO.ProjectIstandIInd;
            addUJSShgGroupDetailsInfo.BankLinkedge = ujsShgGroupDetailInfoDTO.BankLinkedge;
            addUJSShgGroupDetailsInfo.BankName = ujsShgGroupDetailInfoDTO.BankName;
            addUJSShgGroupDetailsInfo.BankBranch = ujsShgGroupDetailInfoDTO.BankBranch;
            addUJSShgGroupDetailsInfo.BankAcNo = ujsShgGroupDetailInfoDTO.BankAcNo;
            addUJSShgGroupDetailsInfo.LOANSTATUS = ujsShgGroupDetailInfoDTO.LOANSTATUS;
            addUJSShgGroupDetailsInfo.LoanEmiLastMonth = ujsShgGroupDetailInfoDTO.LoanEmiLastMonth;
            addUJSShgGroupDetailsInfo.Totalmeeting = ujsShgGroupDetailInfoDTO.Totalmeeting;
            addUJSShgGroupDetailsInfo.TotalmemberOfSHG = ujsShgGroupDetailInfoDTO.TotalmemberOfSHG;
            addUJSShgGroupDetailsInfo.ThisMonthSaving = ujsShgGroupDetailInfoDTO.ThisMonthSaving;
            addUJSShgGroupDetailsInfo.Regularsavings = ujsShgGroupDetailInfoDTO.Regularsavings;
            addUJSShgGroupDetailsInfo.Interestincome = ujsShgGroupDetailInfoDTO.Interestincome;
            addUJSShgGroupDetailsInfo.Groupfund = ujsShgGroupDetailInfoDTO.Groupfund;
            addUJSShgGroupDetailsInfo.Penalty = ujsShgGroupDetailInfoDTO.Penalty;
            addUJSShgGroupDetailsInfo.fedretioncharge = ujsShgGroupDetailInfoDTO.fedretioncharge;
            addUJSShgGroupDetailsInfo.fadretionThisMonth = ujsShgGroupDetailInfoDTO.fadretionThisMonth;
            addUJSShgGroupDetailsInfo.fedretion = ujsShgGroupDetailInfoDTO.fedretion;
            addUJSShgGroupDetailsInfo.Total = ujsShgGroupDetailInfoDTO.Total;
            addUJSShgGroupDetailsInfo.interloanLoan = ujsShgGroupDetailInfoDTO.interloanLoan;
            addUJSShgGroupDetailsInfo.GroupExpenses = ujsShgGroupDetailInfoDTO.GroupExpenses;
            addUJSShgGroupDetailsInfo.SHGfixloan = ujsShgGroupDetailInfoDTO.SHGfixloan;
            addUJSShgGroupDetailsInfo.Bank = ujsShgGroupDetailInfoDTO.Bank;
            addUJSShgGroupDetailsInfo.Manch = ujsShgGroupDetailInfoDTO.Manch;
            addUJSShgGroupDetailsInfo.fadretion1 = ujsShgGroupDetailInfoDTO.fadretion1;
            addUJSShgGroupDetailsInfo.Cashinhand = ujsShgGroupDetailInfoDTO.Cashinhand;
            addUJSShgGroupDetailsInfo.Total1 = ujsShgGroupDetailInfoDTO.Total1;
            addUJSShgGroupDetailsInfo.Different = ujsShgGroupDetailInfoDTO.Different;
            addUJSShgGroupDetailsInfo.attendanceExpected = ujsShgGroupDetailInfoDTO.attendanceExpected;
            await this.UJSShgGroupDetailsInfoRepository.save(addUJSShgGroupDetailsInfo);
            return { GroupDataUploadMonth: addUJSShgGroupDetailsInfo, message: "success", status: 200 };
        }
    }
    async UJSShgGroupDetailInfoList(request) {
        let GroupDetailsInfoList = await this.UJSShgGroupDetailsInfoRepository.find({});
        return { GroupDetailsInfo: GroupDetailsInfoList, message: "success", status: 200 };
    }
    async UJSShgGroupSummaryAdd(request, ujsShgGroupSummaryDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addUJSShgGroupSummary = new UJSShgGroupSummaryEntity_1.UJSShgGroupSummaryEntity();
        addUJSShgGroupSummary.total_bank_loan = ujsShgGroupSummaryDTO.total_bank_loan;
        addUJSShgGroupSummary.total_federation = ujsShgGroupSummaryDTO.total_federation;
        addUJSShgGroupSummary.total_internal_loan = ujsShgGroupSummaryDTO.total_internal_loan;
        addUJSShgGroupSummary.total_meeting = ujsShgGroupSummaryDTO.total_meeting;
        addUJSShgGroupSummary.total_saving = ujsShgGroupSummaryDTO.total_saving;
        addUJSShgGroupSummary.total_shg = ujsShgGroupSummaryDTO.total_shg;
        await this.UJSShgGroupSummaryRepository.save(addUJSShgGroupSummary);
        return { GroupSummary: addUJSShgGroupSummary, message: "success", status: 200 };
    }
    async UJSShgGroupSummaryList(request) {
        let GroupSummaryList = await this.UJSShgGroupSummaryRepository.find({});
        return { GroupSummary: GroupSummaryList, message: "success", status: 200 };
    }
    async UJSShgInternalLoanSummaryAdd(request, ujsShgInternalLoanSummaryDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addUJSShgInternalloanSummary = new UJSShgInternalLoanSummaryEntity_1.UJSShgInternalLoanSummaryEntity();
        addUJSShgInternalloanSummary.shg_id = ujsShgInternalLoanSummaryDTO.shg_id;
        addUJSShgInternalloanSummary.group_id = ujsShgInternalLoanSummaryDTO.group_id;
        addUJSShgInternalloanSummary.group_name = ujsShgInternalLoanSummaryDTO.group_name;
        addUJSShgInternalloanSummary.loan_amt = ujsShgInternalLoanSummaryDTO.loan_amt;
        addUJSShgInternalloanSummary.tenure = ujsShgInternalLoanSummaryDTO.tenure;
        addUJSShgInternalloanSummary.interest = ujsShgInternalLoanSummaryDTO.interest;
        addUJSShgInternalloanSummary.recover_amt = ujsShgInternalLoanSummaryDTO.recover_amt;
        addUJSShgInternalloanSummary.datetime = ujsShgInternalLoanSummaryDTO.datetime;
        addUJSShgInternalloanSummary.status = ujsShgInternalLoanSummaryDTO.status;
        await this.UJSShgInternalLoanSummaryRepository.save(addUJSShgInternalloanSummary);
        return { InternalloanSummary: addUJSShgInternalloanSummary, message: "success", status: 200 };
    }
    async UJSShgInternalLoanSummaryList(request) {
        let InternalLoanSummaryList = await this.UJSShgInternalLoanSummaryRepository.find({});
        return { InternalLoanSummary: InternalLoanSummaryList, message: "success", status: 200 };
    }
    async UJSShgInternalLoanUpdate(request, ujsInternalLoanUpdateDTO) {
        let checkInternalLoan = await this.UJSShgInternalLoanSummaryRepository.findOne({
            where: {
                id: ujsInternalLoanUpdateDTO.id,
            },
        });
        if (checkInternalLoan) {
            checkInternalLoan.shg_id = ujsInternalLoanUpdateDTO.shg_id;
            checkInternalLoan.group_id = ujsInternalLoanUpdateDTO.group_id;
            checkInternalLoan.group_name = ujsInternalLoanUpdateDTO.group_name;
            checkInternalLoan.loan_amt = ujsInternalLoanUpdateDTO.loan_amt;
            checkInternalLoan.tenure = ujsInternalLoanUpdateDTO.tenure;
            checkInternalLoan.interest = ujsInternalLoanUpdateDTO.interest;
            checkInternalLoan.recover_amt = ujsInternalLoanUpdateDTO.recover_amt;
            checkInternalLoan.datetime = ujsInternalLoanUpdateDTO.datetime;
            checkInternalLoan.status = ujsInternalLoanUpdateDTO.status;
            await this.UJSShgInternalLoanSummaryRepository.save(checkInternalLoan);
            return { InternalLoan: checkInternalLoan, message: "success", status: 200 };
        }
        else {
            return { message: "ID Does Not Exist", status: 400 };
        }
    }
    async UJSShgInternalLoanDelete(request, ujsShgInternalLoanDeleteDTO) {
        let checkInternalLoan = await this.UJSShgInternalLoanSummaryRepository.findOne({
            where: {
                id: ujsShgInternalLoanDeleteDTO.id,
            },
        });
        if (checkInternalLoan) {
            let checkUjsInternalLoan;
            checkUjsInternalLoan = this.connection.query(`delete from shg_internal_loan_summary where id='${ujsShgInternalLoanDeleteDTO.id}'`);
            await this.UJSShgInternalLoanSummaryRepository.delete(checkInternalLoan);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Id Does Not Exist", status: 400 };
        }
    }
    async UJSShgLoanAdd(request, ujsShgLoanDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addLoan = new UJSShgLoanEntity_1.UJSShgLoanEntity();
        addLoan.id = ujsShgLoanDTO.id;
        addLoan.meeting_id = ujsShgLoanDTO.meeting_id;
        addLoan.loan_id = ujsShgLoanDTO.loan_id;
        addLoan.member_id = ujsShgLoanDTO.member_id;
        addLoan.group_id = ujsShgLoanDTO.group_id;
        addLoan.shg_id = ujsShgLoanDTO.shg_id;
        addLoan.animator_id = ujsShgLoanDTO.animator_id;
        addLoan.member_name = ujsShgLoanDTO.member_name;
        addLoan.group_name = ujsShgLoanDTO.group_name;
        addLoan.animator_name = ujsShgLoanDTO.animator_name;
        addLoan.loan_amt = ujsShgLoanDTO.loan_amt;
        addLoan.interest = ujsShgLoanDTO.interest;
        addLoan.settle_interest = ujsShgLoanDTO.settle_interest;
        addLoan.loan_period = ujsShgLoanDTO.loan_period;
        addLoan.loan_type = ujsShgLoanDTO.loan_type;
        addLoan.loan_date = ujsShgLoanDTO.loan_date;
        addLoan.settle_amount = ujsShgLoanDTO.settle_amount;
        addLoan.total_emi = ujsShgLoanDTO.total_emi;
        addLoan.current_emi = ujsShgLoanDTO.current_emi;
        addLoan.meetingDate = ujsShgLoanDTO.meetingDate;
        addLoan.status = ujsShgLoanDTO.status;
        addLoan.update_at = ujsShgLoanDTO.update_at;
        await this.UJSShgLoanRepository.save(addLoan);
        return { loan: addLoan, message: "success", status: 200 };
    }
    async UJSShgLoanList(request) {
        let ShgLoanList = await this.UJSShgLoanRepository.find({});
        return { ShgLoan: ShgLoanList, message: "success", status: 200 };
    }
    async UJSShgMeetingTrackAdd(request, ujsShgMeetingTrackDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addMeeting = new UJSShgMeetingTrackEntity_1.UJSShgMeetingTrackEntity();
        addMeeting.id = ujsShgMeetingTrackDTO.id;
        addMeeting.group_id = ujsShgMeetingTrackDTO.group_id;
        addMeeting.animator_id = ujsShgMeetingTrackDTO.animator_id;
        addMeeting.datetime = ujsShgMeetingTrackDTO.datetime;
        addMeeting.meetingDate = ujsShgMeetingTrackDTO.meetingDate;
        addMeeting.month = ujsShgMeetingTrackDTO.month;
        addMeeting.meeting_id = ujsShgMeetingTrackDTO.meeting_id;
        addMeeting.Attendance = ujsShgMeetingTrackDTO.Attendance;
        addMeeting.Saving = ujsShgMeetingTrackDTO.Saving;
        addMeeting.InternalLoanRepayment = ujsShgMeetingTrackDTO.InternalLoanRepayment;
        addMeeting.BankLoanRepayment = ujsShgMeetingTrackDTO.BankLoanRepayment;
        addMeeting.InternalLoanDistribution = ujsShgMeetingTrackDTO.InternalLoanDistribution;
        addMeeting.BankLoanDistribution = ujsShgMeetingTrackDTO.BankLoanDistribution;
        addMeeting.SummaryReport = ujsShgMeetingTrackDTO.SummaryReport;
        addMeeting.updatedAt = ujsShgMeetingTrackDTO.updatedAt;
        await this.UJSShgMeetingTrackRepository.save(addMeeting);
        return { MeetingTrack: addMeeting, message: "success", status: 200 };
    }
    async UJSShgMeetingTrackList(request) {
        let ShgMeetingTrackList = await this.UJSShgMeetingTrackRepository.find({});
        return { ShgMeetingTrack: ShgMeetingTrackList, message: "success", status: 200 };
    }
    async UJSShgOtherIncomeAdd(request, ujsShgOtherIncomeDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addOtherIncome = new UJSShgOtherIncomeEntity_1.UJSShgOtherIncomeEntity();
        addOtherIncome.meeting_id = ujsShgOtherIncomeDTO.meeting_id;
        addOtherIncome.group_id = ujsShgOtherIncomeDTO.group_id;
        addOtherIncome.animator_id = ujsShgOtherIncomeDTO.animator_id;
        addOtherIncome.member_id = ujsShgOtherIncomeDTO.member_id;
        addOtherIncome.group_name = ujsShgOtherIncomeDTO.group_name;
        addOtherIncome.animator_name = ujsShgOtherIncomeDTO.animator_name;
        addOtherIncome.member_name = ujsShgOtherIncomeDTO.member_name;
        addOtherIncome.income = ujsShgOtherIncomeDTO.income;
        addOtherIncome.datetime = ujsShgOtherIncomeDTO.datetime;
        await this.UJSShgOtherIncomeRepository.save(addOtherIncome);
        return { OtherIncome: addOtherIncome, message: "success", status: 200 };
    }
    async UJSShgOtherIncomeList(request) {
        let ShgOtherIncomeList = await this.UJSShgOtherIncomeRepository.find({});
        return { ShgOtherIncome: ShgOtherIncomeList, message: "success", status: 200 };
    }
    async UJSShgTillNowDataAdd(request, ujsShgTillNowDataDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const addTillNowData = new UJSShgTillNowDataEntity_1.UJSShgTillNowDataEntity();
        addTillNowData.id = ujsShgTillNowDataDTO.id;
        addTillNowData.group_id = ujsShgTillNowDataDTO.group_id;
        addTillNowData.meeting_id = ujsShgTillNowDataDTO.meeting_id;
        addTillNowData.meeting_date = ujsShgTillNowDataDTO.meeting_date;
        addTillNowData.member_saving = ujsShgTillNowDataDTO.member_saving;
        addTillNowData.internal_income = ujsShgTillNowDataDTO.internal_income;
        addTillNowData.submit_bank_loan = ujsShgTillNowDataDTO.submit_bank_loan;
        addTillNowData.internal_amt1 = ujsShgTillNowDataDTO.internal_amt1;
        addTillNowData.penalty1 = ujsShgTillNowDataDTO.penalty1;
        addTillNowData.fix_loan2 = ujsShgTillNowDataDTO.fix_loan2;
        addTillNowData.special_amt1 = ujsShgTillNowDataDTO.special_amt1;
        addTillNowData.others1 = ujsShgTillNowDataDTO.others1;
        addTillNowData.distributed = ujsShgTillNowDataDTO.distributed;
        addTillNowData.grp_expanses = ujsShgTillNowDataDTO.grp_expanses;
        addTillNowData.tot_submitted = ujsShgTillNowDataDTO.tot_submitted;
        addTillNowData.remaining_loan_amt = ujsShgTillNowDataDTO.remaining_loan_amt;
        addTillNowData.bank_saving_amt = ujsShgTillNowDataDTO.bank_saving_amt;
        addTillNowData.cash_in_hand = ujsShgTillNowDataDTO.cash_in_hand;
        addTillNowData.federation1 = ujsShgTillNowDataDTO.federation1;
        addTillNowData.total_clf_amount = ujsShgTillNowDataDTO.total_clf_amount;
        await this.UJSShgTillNowDataRepository.save(addTillNowData);
        return { TillNowData: addTillNowData, message: "success", status: 200 };
    }
    async UJSShgTillNowDataList(request) {
        let ShgTillNowDataList = await this.UJSShgTillNowDataRepository.find({});
        return { ShgTillNowData: ShgTillNowDataList, message: "success", status: 200 };
    }
};
exports.UjsService = UjsService;
exports.UjsService = UjsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(UJSDepartmentEntity_1.UJSDepartmentEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(UJSShgGroupEntity_1.UJSShgGroupEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(UJSShgMemberEntity_1.UJSShgMemberEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(UJSUsersEntity_1.UJSUsersEntity)),
    __param(6, (0, typeorm_1.InjectRepository)(UJSRoleEntity_1.UJSRoleEntity)),
    __param(7, (0, typeorm_1.InjectRepository)(UJSRolePermissionEntity_1.UJSRolePermissionEntity)),
    __param(8, (0, typeorm_1.InjectRepository)(UJSBackupShgGroupDataUploadEntity_1.UJSBackupShgGroupDataUploadMonthEntity)),
    __param(9, (0, typeorm_1.InjectRepository)(UJSBranchEntity_1.UJSBranchEntity)),
    __param(10, (0, typeorm_1.InjectRepository)(UJSFailedJobsEntity_1.UJSFailedJobEntity)),
    __param(11, (0, typeorm_1.InjectRepository)(UJSMigrationEntity_1.UJSMigrationEntity)),
    __param(12, (0, typeorm_1.InjectRepository)(UJSPersonalAccessTokenEntity_1.UJSPersonalAccessTokenEntity)),
    __param(13, (0, typeorm_1.InjectRepository)(UJSSHGExpansesEntity_1.UJSSHGExpansesEntity)),
    __param(14, (0, typeorm_1.InjectRepository)(UJSSHGLoanRepaymentEntity_1.UJSSHGLoanRepaymentEntity)),
    __param(15, (0, typeorm_1.InjectRepository)(UJSStateEntity_1.UJSStateEntity)),
    __param(16, (0, typeorm_1.InjectRepository)(UJSShgTraningEntity_1.UJSShgTraningEntity)),
    __param(17, (0, typeorm_1.InjectRepository)(UJSShgActiveModelFarmerEntity_1.UJSShgActiveModelFarmerEntity)),
    __param(18, (0, typeorm_1.InjectRepository)(UJSShgAttendanceEntity_1.UJSShgAttendanceEntity)),
    __param(19, (0, typeorm_1.InjectRepository)(UJSShgContactEntity_1.UJSShgContactEntity)),
    __param(20, (0, typeorm_1.InjectRepository)(UJSShgDataLockEntity_1.UJSShgDataLockEntity)),
    __param(21, (0, typeorm_1.InjectRepository)(UJSBankLoanAllotmentEntity_1.UJSBankLoanAllotmentEntity)),
    __param(22, (0, typeorm_1.InjectRepository)(UJSBankLoanEntity_1.UJSBankLoanEntity)),
    __param(23, (0, typeorm_1.InjectRepository)(UJSBankEntity_1.UJSBankEntity)),
    __param(24, (0, typeorm_1.InjectRepository)(UJSShgAuditingEntity_1.UJSShgAuditingEntity)),
    __param(25, (0, typeorm_1.InjectRepository)(UJSShgDataUploadkEntity_1.UJSShgDataUploadEntity)),
    __param(26, (0, typeorm_1.InjectRepository)(UJSShgDigiSakhiEntity_1.UJSShgDigiSakhiEntity)),
    __param(27, (0, typeorm_1.InjectRepository)(UJSShgFpoEntity_1.UJSShgFpoEntity)),
    __param(28, (0, typeorm_1.InjectRepository)(UJSShgFedrationReportEntity_1.UJSSHGFedrationReportEntity)),
    __param(29, (0, typeorm_1.InjectRepository)(UJSShgFedrationEntity_1.UJSSHGFedrationEntity)),
    __param(30, (0, typeorm_1.InjectRepository)(UJSShgMomEntity_1.UJSShgMomEntity)),
    __param(31, (0, typeorm_1.InjectRepository)(UJSShgGroupDataUploadMonthEntity_1.UJSShgGroupDataUploadMonthEntity)),
    __param(32, (0, typeorm_1.InjectRepository)(UJSShgMemberSavingEntity_1.UJSShgMemeberSavingEntity)),
    __param(33, (0, typeorm_1.InjectRepository)(UJSShgGroupDetailsInfoEntity_1.UJSShgGroupDetailsInfoEntity)),
    __param(34, (0, typeorm_1.InjectRepository)(UJSShgGroupSummaryEntity_1.UJSShgGroupSummaryEntity)),
    __param(35, (0, typeorm_1.InjectRepository)(UJSShgInternalLoanSummaryEntity_1.UJSShgInternalLoanSummaryEntity)),
    __param(36, (0, typeorm_1.InjectRepository)(UJSShgLoanEntity_1.UJSShgLoanEntity)),
    __param(37, (0, typeorm_1.InjectRepository)(UJSShgMeetingTrackEntity_1.UJSShgMeetingTrackEntity)),
    __param(38, (0, typeorm_1.InjectRepository)(UJSShgOtherIncomeEntity_1.UJSShgOtherIncomeEntity)),
    __param(39, (0, typeorm_1.InjectRepository)(UJSShgTillNowDataEntity_1.UJSShgTillNowDataEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UjsService);
//# sourceMappingURL=ujs.service.js.map