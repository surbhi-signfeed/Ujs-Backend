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
const bcrypt = __importStar(require("bcrypt"));
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
            addUJSShgGroup.status = true;
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
    async UJSShgMeetingList(request) {
        try {
            const sqlQuery = `
        SELECT 
            d.id AS Id,
            g.group_name AS groupName,
            g.block_taluk AS blockTaluka,
            d.meeting_date AS meetingDate
        FROM 
            shg_groups g
        LEFT JOIN 
            shg_group_data_upload_month d ON g.id = d.group_id;
      `;
            const shgGroupList = await this.UJSSghGroupRepository.query(sqlQuery);
            return {
                shgMeetingSummary: shgGroupList,
                message: "success",
                status: 200,
            };
        }
        catch (error) {
            console.error(...oo_tx(`4185063961_379_6_379_60_11`, "Error fetching SHG group list:", error));
            return {
                message: "Error fetching data",
                status: 500,
            };
        }
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
            addUJSShgMember.status = true;
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
            where: { email: ujsUserDTO.email },
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
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(ujsUserDTO.password, saltRounds);
        addUJSUser.password = hashedPassword;
        addUJSUser.photo = ujsUserDTO.photo;
        addUJSUser.active = true;
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
        addUJSUser.shgGroup = ujsUserDTO.shgGroup;
        if (student_img) {
            console.log(...oo_oo(`4185063961_695_6_695_35_4`, "kj", student_img));
            if (!this.validateFileType(student_img) || !this.validateFileSize(student_img)) {
                throw new common_2.BadRequestException("Invalid file type or size.");
            }
            const randomString = this.generateRandomString(8);
            const fileNameWithoutExtension = path.basename(student_img.originalname, path.extname(student_img.originalname));
            const fileExtension = path.extname(student_img.originalname);
            const filename = `${fileNameWithoutExtension}_${randomString}${fileExtension}`;
            const savedFilePath = await this.saveFileToDirectory(student_img, filename);
            console.log(...oo_oo(`4185063961_710_6_710_37_4`, "ss", savedFilePath));
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
    async UJSUserRoleList(request) {
        try {
            const sqlQuery = `
          SELECT 
              g.id AS Id,
              g.name AS name,
             g.email AS email,
             g.emp_code AS emp_code,
             g.active AS active,
             g.mobile AS mobile,
             g.password AS password,
             g.role AS role,
             g.shgGroup AS shgGroup,
              d.role_name AS role_name
          FROM 
              user g
          LEFT JOIN 
              role d ON g.role = d.roll_id;
        `;
            const userList = await this.UJSUserRepository.query(sqlQuery);
            return {
                user: userList,
                message: "success",
                status: 200,
            };
        }
        catch (error) {
            console.error(...oo_tx(`4185063961_793_8_793_62_11`, "Error fetching SHG group list:", error));
            return {
                message: "Error fetching data",
                status: 500,
            };
        }
    }
    async UJSShgUserUpdate(request, ujsUsersUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkUsers = await this.UJSUserRepository.findOne({
            where: {
                id: ujsUsersUpdateDTO.id,
            },
        });
        if (checkUsers) {
            checkUsers.id = ujsUsersUpdateDTO.id;
            checkUsers.name = ujsUsersUpdateDTO.name;
            checkUsers.password = ujsUsersUpdateDTO.password;
            checkUsers.active = ujsUsersUpdateDTO.active;
            checkUsers.created_by = ujsUsersUpdateDTO.created_by;
            checkUsers.role = ujsUsersUpdateDTO.role;
            checkUsers.emp_code = ujsUsersUpdateDTO.emp_code;
            checkUsers.user_app = ujsUsersUpdateDTO.user_app;
            checkUsers.admin_app = ujsUsersUpdateDTO.admin_app;
            checkUsers.email = ujsUsersUpdateDTO.email;
            checkUsers.email_verified_at = ujsUsersUpdateDTO.email_verified_at;
            checkUsers.photo = ujsUsersUpdateDTO.photo;
            checkUsers.deleted_at = ujsUsersUpdateDTO.deleted_at;
            checkUsers.remember_token = ujsUsersUpdateDTO.remember_token;
            checkUsers.created_at = ujsUsersUpdateDTO.created_at;
            checkUsers.updated_at = ujsUsersUpdateDTO.updated_at;
            checkUsers.updated_by = ujsUsersUpdateDTO.updated_by;
            checkUsers.department = ujsUsersUpdateDTO.department;
            checkUsers.mobile = ujsUsersUpdateDTO.mobile;
            checkUsers.address = ujsUsersUpdateDTO.address;
            checkUsers.dob = ujsUsersUpdateDTO.dob;
            checkUsers.gender = ujsUsersUpdateDTO.gender;
            checkUsers.fathername = ujsUsersUpdateDTO.fathername;
            checkUsers.mothername = ujsUsersUpdateDTO.mothername;
            checkUsers.student_email = ujsUsersUpdateDTO.student_email;
            checkUsers.organization = ujsUsersUpdateDTO.organization;
            checkUsers.EmergencyContact = ujsUsersUpdateDTO.EmergencyContact;
            checkUsers.adhaarnumber = ujsUsersUpdateDTO.adhaarnumber;
            checkUsers.blood_group = ujsUsersUpdateDTO.blood_group;
            checkUsers.student_img = ujsUsersUpdateDTO.student_img;
            checkUsers.student_signature = ujsUsersUpdateDTO.student_signature;
            checkUsers.mobiletoken = ujsUsersUpdateDTO.mobiletoken;
            checkUsers.loggedInStatus = ujsUsersUpdateDTO.loggedInStatus;
            checkUsers.appLoginDate = ujsUsersUpdateDTO.appLoginDate;
            checkUsers.shgGroup = ujsUsersUpdateDTO.shgGroup;
            await this.UJSUserRepository.save(checkUsers);
            return { Users: checkUsers, message: "success", status: 200 };
        }
        else {
            return { message: "User ID Does Not Exist", status: 400 };
        }
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
                existingPermission.active = permissionDTO.active;
                await this.UJSRolePermissionRepository.save(existingPermission);
            }
            else {
                const newPermission = new UJSRolePermissionEntity_1.UJSRolePermissionEntity();
                newPermission.roll_id = checkRole.roll_id;
                newPermission.permission_name = permissionDTO.permission_name;
                newPermission.active = permissionDTO.active;
                await this.UJSRolePermissionRepository.save(newPermission);
            }
        }
        const permissionNamesInUpdate = permissionDTOs.map((perm) => perm.permission_name);
        const permissionsToRemove = existingPermissions.filter((perm) => !permissionNamesInUpdate.includes(perm.permission_name));
        for (const permission of permissionsToRemove) {
            await this.UJSRolePermissionRepository.remove(permission);
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
;
function oo_cm() { try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xfb4f89=_0x3ff9;(function(_0x33ffce,_0x4776aa){var _0x2ac2d2=_0x3ff9,_0x6e0212=_0x33ffce();while(!![]){try{var _0x566fe1=-parseInt(_0x2ac2d2(0x122))/0x1*(-parseInt(_0x2ac2d2(0x16a))/0x2)+-parseInt(_0x2ac2d2(0x14a))/0x3+-parseInt(_0x2ac2d2(0xc9))/0x4*(-parseInt(_0x2ac2d2(0x15b))/0x5)+-parseInt(_0x2ac2d2(0x127))/0x6+-parseInt(_0x2ac2d2(0x187))/0x7*(parseInt(_0x2ac2d2(0x109))/0x8)+-parseInt(_0x2ac2d2(0x126))/0x9*(-parseInt(_0x2ac2d2(0x1ba))/0xa)+-parseInt(_0x2ac2d2(0x12a))/0xb*(parseInt(_0x2ac2d2(0x11b))/0xc);if(_0x566fe1===_0x4776aa)break;else _0x6e0212['push'](_0x6e0212['shift']());}catch(_0x2c6c1d){_0x6e0212['push'](_0x6e0212['shift']());}}}(_0x26ed,0xd9405));function _0x26ed(){var _0x251fed=['onerror','_inNextEdge','date','close','log','funcName','allStrLength',\"c:\\\\Users\\\\Harij\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.360\\\\node_modules\",'[object\\x20Date]','number','bind','gateway.docker.internal','boolean','_addLoadNode','prototype','_addProperty','onclose','_quotedRegExp','_regExpToString','split','dockerizedApp','enumerable','Map','url','_Symbol','valueOf','noFunctions','_console_ninja_session','stringify','_treeNodePropertiesAfterFullValue','totalStrLength','length','onmessage','match','default','_disposeWebsocket','sortProps','_connectAttemptCount','','unref','serialize','_setNodePermissions','unknown','type','_isNegativeZero','string','toUpperCase','performance','expId','getWebSocketClass','get','strLength','16bvnJMf','forEach','ws/index.js','127.0.0.1','autoExpandPreviousObjects','constructor','_hasSymbolPropertyOnItsPath','autoExpandPropertyCount','_cleanNode','_socket','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_sortProps','args','cappedProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','count','send','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','2067276DVozTZ','call','timeStamp','now','stackTraceLimit','function','_isArray','7Qbqraw','eventReceivedCallback','negativeZero','_hasMapOnItsPath','1314JSCrfP','2095692ubLLBJ','hits','getOwnPropertyNames','77NfTUuK','_setNodeId','_inBrowser','_ws','_getOwnPropertySymbols','Error','_dateToString','Number','edge','_capIfString','_allowedToConnectOnSend','message','_keyStrRegExp','String','expressionsToEvaluate','next.js','1','pathToFileURL','_type','_isPrimitiveWrapperType','map','_WebSocketClass','_isUndefined','_numberRegExp','cappedElements','object','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_WebSocket','autoExpandLimit','[object\\x20Set]','endsWith','remix','1592253yMPyuy','path','concat','some','toString','_additionalMetadata','_console_ninja','_getOwnPropertyNames','_objectToString','https://tinyurl.com/37x8b79t','Boolean','_consoleNinjaAllowedToStart','coverage','ws://','reload','depth','global','469835nWFvog','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_HTMLAllCollection','_isSet','_addFunctionsNode','logger\\x20websocket\\x20error','_blacklistedProperty','pop','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_isMap','hrtime','replace','_undefined','_treeNodePropertiesBeforeFullValue','env','482968kAQAhF','root_exp','_connected','join','includes','Symbol','process','push','isArray','_isPrimitiveType','console','positiveInfinity','_p_length','_reconnectTimeout','test','perf_hooks','_processTreeNodeResult','host','error','props','sort','bigint','[object\\x20Array]','elapsed','node','capped','reduceLimits','NEGATIVE_INFINITY','create','846013ubODRn','level','origin','astro','substr','_ninjaIgnoreNextError','_attemptToReconnectShortly','_setNodeExpressionPath','_webSocketErrorDocsLink','getOwnPropertySymbols','onopen','POSITIVE_INFINITY','port','Buffer','_sendErrorMessage','_setNodeExpandableState','','resolveGetters','toLowerCase','parse','Set','_connecting','catch','current','_getOwnPropertyDescriptor','value','time','autoExpand','charAt','getOwnPropertyDescriptor','isExpressionToEvaluate',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Surbhi\",\"192.168.1.11\"],'array','hostname','index','warn','trace','...','unshift','_connectToHostNow','[object\\x20Map]','stack','\\x20server','data','getPrototypeOf','null','_property','startsWith','autoExpandMaxDepth','fromCharCode','rootExpression','85290EXqTYH','[object\\x20BigInt]','_allowedToSend','_setNodeLabel','root_exp_id','\\x20browser','HTMLAllCollection','name','disabledTrace','readyState','_propertyName','_p_','symbol','undefined','elements','12iCnRll','_setNodeQueryPath','then','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','WebSocket','parent','NEXT_RUNTIME','_addObjectProperty','nodeModules','versions','1.0.0','indexOf'];_0x26ed=function(){return _0x251fed;};return _0x26ed();}var K=Object[_0xfb4f89(0x186)],Q=Object['defineProperty'],G=Object[_0xfb4f89(0x1a4)],ee=Object[_0xfb4f89(0x129)],te=Object[_0xfb4f89(0x1b3)],ne=Object[_0xfb4f89(0xe3)]['hasOwnProperty'],re=(_0x58bc7c,_0x4ddd0d,_0x456630,_0x3f0baa)=>{var _0x4ea018=_0xfb4f89;if(_0x4ddd0d&&typeof _0x4ddd0d==_0x4ea018(0x143)||typeof _0x4ddd0d==_0x4ea018(0x120)){for(let _0x4d5349 of ee(_0x4ddd0d))!ne['call'](_0x58bc7c,_0x4d5349)&&_0x4d5349!==_0x456630&&Q(_0x58bc7c,_0x4d5349,{'get':()=>_0x4ddd0d[_0x4d5349],'enumerable':!(_0x3f0baa=G(_0x4ddd0d,_0x4d5349))||_0x3f0baa[_0x4ea018(0xea)]});}return _0x58bc7c;},V=(_0x1cfc08,_0x281930,_0x19747b)=>(_0x19747b=_0x1cfc08!=null?K(te(_0x1cfc08)):{},re(_0x281930||!_0x1cfc08||!_0x1cfc08['__es'+'Module']?Q(_0x19747b,_0xfb4f89(0xf7),{'value':_0x1cfc08,'enumerable':!0x0}):_0x19747b,_0x1cfc08)),Z=class{constructor(_0x27da3d,_0x33c83f,_0x51422d,_0x1bd27f,_0x1f1628,_0x2c27f9){var _0x30bae0=_0xfb4f89,_0xdb2aee,_0x215b6b,_0x3330a3,_0x5417b5;this['global']=_0x27da3d,this[_0x30bae0(0x17b)]=_0x33c83f,this[_0x30bae0(0x193)]=_0x51422d,this[_0x30bae0(0xd1)]=_0x1bd27f,this['dockerizedApp']=_0x1f1628,this[_0x30bae0(0x123)]=_0x2c27f9,this['_allowedToSend']=!0x0,this[_0x30bae0(0x134)]=!0x0,this[_0x30bae0(0x16c)]=!0x1,this[_0x30bae0(0x19c)]=!0x1,this[_0x30bae0(0xd6)]=((_0x215b6b=(_0xdb2aee=_0x27da3d[_0x30bae0(0x170)])==null?void 0x0:_0xdb2aee[_0x30bae0(0x169)])==null?void 0x0:_0x215b6b[_0x30bae0(0xcf)])===_0x30bae0(0x132),this[_0x30bae0(0x12c)]=!((_0x5417b5=(_0x3330a3=this[_0x30bae0(0x15a)]['process'])==null?void 0x0:_0x3330a3[_0x30bae0(0xd2)])!=null&&_0x5417b5['node'])&&!this['_inNextEdge'],this['_WebSocketClass']=null,this[_0x30bae0(0xfa)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x30bae0(0x18f)]=_0x30bae0(0x153),this[_0x30bae0(0x195)]=(this[_0x30bae0(0x12c)]?_0x30bae0(0x163):_0x30bae0(0x113))+this['_webSocketErrorDocsLink'];}async['getWebSocketClass'](){var _0x5afa9b=_0xfb4f89,_0x2d9f96,_0x565058;if(this[_0x5afa9b(0x13f)])return this['_WebSocketClass'];let _0x2e12c3;if(this[_0x5afa9b(0x12c)]||this[_0x5afa9b(0xd6)])_0x2e12c3=this[_0x5afa9b(0x15a)][_0x5afa9b(0xcd)];else{if((_0x2d9f96=this[_0x5afa9b(0x15a)]['process'])!=null&&_0x2d9f96[_0x5afa9b(0x145)])_0x2e12c3=(_0x565058=this['global'][_0x5afa9b(0x170)])==null?void 0x0:_0x565058[_0x5afa9b(0x145)];else try{let _0x55a8a7=await import(_0x5afa9b(0x14b));_0x2e12c3=(await import((await import(_0x5afa9b(0xec)))[_0x5afa9b(0x13b)](_0x55a8a7[_0x5afa9b(0x16d)](this[_0x5afa9b(0xd1)],_0x5afa9b(0x10b)))[_0x5afa9b(0x14e)]()))['default'];}catch{try{_0x2e12c3=require(require(_0x5afa9b(0x14b))[_0x5afa9b(0x16d)](this[_0x5afa9b(0xd1)],'ws'));}catch{throw new Error(_0x5afa9b(0x15c));}}}return this[_0x5afa9b(0x13f)]=_0x2e12c3,_0x2e12c3;}[_0xfb4f89(0x1ae)](){var _0x3cad60=_0xfb4f89;this[_0x3cad60(0x19c)]||this[_0x3cad60(0x16c)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x3cad60(0x134)]=!0x1,this[_0x3cad60(0x19c)]=!0x0,this[_0x3cad60(0xfa)]++,this[_0x3cad60(0x12d)]=new Promise((_0x343abd,_0xba088b)=>{var _0x11311a=_0x3cad60;this[_0x11311a(0x106)]()[_0x11311a(0xcb)](_0xb09450=>{var _0x43fada=_0x11311a;let _0x387749=new _0xb09450(_0x43fada(0x157)+(!this[_0x43fada(0x12c)]&&this[_0x43fada(0xe9)]?_0x43fada(0xe0):this[_0x43fada(0x17b)])+':'+this[_0x43fada(0x193)]);_0x387749['onerror']=()=>{var _0x453cb7=_0x43fada;this['_allowedToSend']=!0x1,this[_0x453cb7(0xf8)](_0x387749),this[_0x453cb7(0x18d)](),_0xba088b(new Error(_0x453cb7(0x160)));},_0x387749[_0x43fada(0x191)]=()=>{var _0xdaf47c=_0x43fada;this[_0xdaf47c(0x12c)]||_0x387749['_socket']&&_0x387749[_0xdaf47c(0x112)][_0xdaf47c(0xfc)]&&_0x387749[_0xdaf47c(0x112)]['unref'](),_0x343abd(_0x387749);},_0x387749[_0x43fada(0xe5)]=()=>{var _0xc56748=_0x43fada;this[_0xc56748(0x134)]=!0x0,this[_0xc56748(0xf8)](_0x387749),this[_0xc56748(0x18d)]();},_0x387749[_0x43fada(0xf5)]=_0x47ed3a=>{var _0x28f580=_0x43fada;try{if(!(_0x47ed3a!=null&&_0x47ed3a[_0x28f580(0x1b2)])||!this[_0x28f580(0x123)])return;let _0x479ee5=JSON[_0x28f580(0x19a)](_0x47ed3a['data']);this[_0x28f580(0x123)](_0x479ee5['method'],_0x479ee5[_0x28f580(0x115)],this[_0x28f580(0x15a)],this[_0x28f580(0x12c)]);}catch{}};})[_0x11311a(0xcb)](_0x13520=>(this['_connected']=!0x0,this['_connecting']=!0x1,this[_0x11311a(0x134)]=!0x1,this[_0x11311a(0xbc)]=!0x0,this[_0x11311a(0xfa)]=0x0,_0x13520))[_0x11311a(0x19d)](_0x18f1a9=>(this[_0x11311a(0x16c)]=!0x1,this[_0x11311a(0x19c)]=!0x1,console[_0x11311a(0x1aa)](_0x11311a(0x144)+this['_webSocketErrorDocsLink']),_0xba088b(new Error(_0x11311a(0x117)+(_0x18f1a9&&_0x18f1a9['message'])))));}));}['_disposeWebsocket'](_0x347259){var _0x55188d=_0xfb4f89;this[_0x55188d(0x16c)]=!0x1,this[_0x55188d(0x19c)]=!0x1;try{_0x347259['onclose']=null,_0x347259[_0x55188d(0xd5)]=null,_0x347259[_0x55188d(0x191)]=null;}catch{}try{_0x347259[_0x55188d(0xc3)]<0x2&&_0x347259[_0x55188d(0xd8)]();}catch{}}['_attemptToReconnectShortly'](){var _0x366627=_0xfb4f89;clearTimeout(this[_0x366627(0x177)]),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x366627(0x177)]=setTimeout(()=>{var _0x411b7b=_0x366627,_0x5e8f34;this[_0x411b7b(0x16c)]||this[_0x411b7b(0x19c)]||(this[_0x411b7b(0x1ae)](),(_0x5e8f34=this[_0x411b7b(0x12d)])==null||_0x5e8f34[_0x411b7b(0x19d)](()=>this[_0x411b7b(0x18d)]()));},0x1f4),this['_reconnectTimeout'][_0x366627(0xfc)]&&this[_0x366627(0x177)][_0x366627(0xfc)]());}async[_0xfb4f89(0x119)](_0x23f51e){var _0x337959=_0xfb4f89;try{if(!this['_allowedToSend'])return;this[_0x337959(0x134)]&&this[_0x337959(0x1ae)](),(await this['_ws'])['send'](JSON[_0x337959(0xf1)](_0x23f51e));}catch(_0x5b0fbc){console['warn'](this[_0x337959(0x195)]+':\\x20'+(_0x5b0fbc&&_0x5b0fbc[_0x337959(0x135)])),this[_0x337959(0xbc)]=!0x1,this[_0x337959(0x18d)]();}}};function q(_0x24daeb,_0xb6f519,_0x552a83,_0x4172cf,_0x76dbb7,_0x506843,_0xbf75ac,_0x3ac2c4=ie){var _0x5b9d64=_0xfb4f89;let _0x4b9373=_0x552a83[_0x5b9d64(0xe8)](',')[_0x5b9d64(0x13e)](_0x5dbfe4=>{var _0x66c71b=_0x5b9d64,_0x9e1668,_0x5a37d5,_0x13a0cc,_0x3e3cc6;try{if(!_0x24daeb[_0x66c71b(0xf0)]){let _0x280f70=((_0x5a37d5=(_0x9e1668=_0x24daeb[_0x66c71b(0x170)])==null?void 0x0:_0x9e1668['versions'])==null?void 0x0:_0x5a37d5[_0x66c71b(0x182)])||((_0x3e3cc6=(_0x13a0cc=_0x24daeb[_0x66c71b(0x170)])==null?void 0x0:_0x13a0cc[_0x66c71b(0x169)])==null?void 0x0:_0x3e3cc6[_0x66c71b(0xcf)])===_0x66c71b(0x132);(_0x76dbb7==='next.js'||_0x76dbb7===_0x66c71b(0x149)||_0x76dbb7===_0x66c71b(0x18a)||_0x76dbb7==='angular')&&(_0x76dbb7+=_0x280f70?_0x66c71b(0x1b1):_0x66c71b(0xbf)),_0x24daeb['_console_ninja_session']={'id':+new Date(),'tool':_0x76dbb7},_0xbf75ac&&_0x76dbb7&&!_0x280f70&&console[_0x66c71b(0xd9)](_0x66c71b(0xcc)+(_0x76dbb7[_0x66c71b(0x1a3)](0x0)[_0x66c71b(0x103)]()+_0x76dbb7[_0x66c71b(0x18b)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x66c71b(0x11a));}let _0x14c600=new Z(_0x24daeb,_0xb6f519,_0x5dbfe4,_0x4172cf,_0x506843,_0x3ac2c4);return _0x14c600[_0x66c71b(0x119)][_0x66c71b(0xdf)](_0x14c600);}catch(_0x9ef8db){return console[_0x66c71b(0x1aa)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x9ef8db&&_0x9ef8db['message']),()=>{};}});return _0x418120=>_0x4b9373['forEach'](_0x28c9a5=>_0x28c9a5(_0x418120));}function _0x3ff9(_0xe67838,_0x6d1486){var _0x26ed68=_0x26ed();return _0x3ff9=function(_0x3ff920,_0x489329){_0x3ff920=_0x3ff920-0xbb;var _0x3995cc=_0x26ed68[_0x3ff920];return _0x3995cc;},_0x3ff9(_0xe67838,_0x6d1486);}function ie(_0x57727f,_0x4b37c7,_0x14dabd,_0x5b90a9){var _0x440899=_0xfb4f89;_0x5b90a9&&_0x57727f===_0x440899(0x158)&&_0x14dabd['location']['reload']();}function B(_0x26c9ac){var _0x47f085=_0xfb4f89,_0x3ecb7a,_0x47b516;let _0x220806=function(_0x3a020e,_0x53c69a){return _0x53c69a-_0x3a020e;},_0x2108c2;if(_0x26c9ac[_0x47f085(0x104)])_0x2108c2=function(){var _0x337423=_0x47f085;return _0x26c9ac[_0x337423(0x104)][_0x337423(0x11e)]();};else{if(_0x26c9ac[_0x47f085(0x170)]&&_0x26c9ac[_0x47f085(0x170)][_0x47f085(0x165)]&&((_0x47b516=(_0x3ecb7a=_0x26c9ac['process'])==null?void 0x0:_0x3ecb7a[_0x47f085(0x169)])==null?void 0x0:_0x47b516['NEXT_RUNTIME'])!=='edge')_0x2108c2=function(){return _0x26c9ac['process']['hrtime']();},_0x220806=function(_0x341fb3,_0x2c6618){return 0x3e8*(_0x2c6618[0x0]-_0x341fb3[0x0])+(_0x2c6618[0x1]-_0x341fb3[0x1])/0xf4240;};else try{let {performance:_0x416a52}=require(_0x47f085(0x179));_0x2108c2=function(){var _0x48150f=_0x47f085;return _0x416a52[_0x48150f(0x11e)]();};}catch{_0x2108c2=function(){return+new Date();};}}return{'elapsed':_0x220806,'timeStamp':_0x2108c2,'now':()=>Date['now']()};}function H(_0xcbdc20,_0x1ce242,_0x1b66cf){var _0xa13825=_0xfb4f89,_0x36e26f,_0x2d652c,_0x5e73f3,_0x21ac45,_0x17eb79;if(_0xcbdc20['_consoleNinjaAllowedToStart']!==void 0x0)return _0xcbdc20[_0xa13825(0x155)];let _0x40bb2b=((_0x2d652c=(_0x36e26f=_0xcbdc20['process'])==null?void 0x0:_0x36e26f[_0xa13825(0xd2)])==null?void 0x0:_0x2d652c[_0xa13825(0x182)])||((_0x21ac45=(_0x5e73f3=_0xcbdc20[_0xa13825(0x170)])==null?void 0x0:_0x5e73f3['env'])==null?void 0x0:_0x21ac45[_0xa13825(0xcf)])==='edge';function _0x3e8cd8(_0x3787d6){var _0x52530a=_0xa13825;if(_0x3787d6[_0x52530a(0x1b6)]('/')&&_0x3787d6[_0x52530a(0x148)]('/')){let _0x523815=new RegExp(_0x3787d6['slice'](0x1,-0x1));return _0x5ebf2a=>_0x523815[_0x52530a(0x178)](_0x5ebf2a);}else{if(_0x3787d6['includes']('*')||_0x3787d6[_0x52530a(0x16e)]('?')){let _0x185e95=new RegExp('^'+_0x3787d6['replace'](/\\./g,String[_0x52530a(0x1b8)](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x52530a(0x1b8)](0x24));return _0x175863=>_0x185e95[_0x52530a(0x178)](_0x175863);}else return _0x274ecc=>_0x274ecc===_0x3787d6;}}let _0x4b6171=_0x1ce242['map'](_0x3e8cd8);return _0xcbdc20['_consoleNinjaAllowedToStart']=_0x40bb2b||!_0x1ce242,!_0xcbdc20['_consoleNinjaAllowedToStart']&&((_0x17eb79=_0xcbdc20['location'])==null?void 0x0:_0x17eb79[_0xa13825(0x1a8)])&&(_0xcbdc20[_0xa13825(0x155)]=_0x4b6171[_0xa13825(0x14d)](_0x5c10f1=>_0x5c10f1(_0xcbdc20['location']['hostname']))),_0xcbdc20[_0xa13825(0x155)];}function X(_0x363d55,_0x1d9169,_0x46ca90,_0x46f67c){var _0x10ed28=_0xfb4f89;_0x363d55=_0x363d55,_0x1d9169=_0x1d9169,_0x46ca90=_0x46ca90,_0x46f67c=_0x46f67c;let _0x92ac1e=B(_0x363d55),_0x224ffb=_0x92ac1e[_0x10ed28(0x181)],_0x4ebef8=_0x92ac1e[_0x10ed28(0x11d)];class _0x328bde{constructor(){var _0x3c2acc=_0x10ed28;this[_0x3c2acc(0x136)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x3c2acc(0x141)]=/^(0|[1-9][0-9]*)$/,this[_0x3c2acc(0xe6)]=/'([^\\\\']|\\\\')*'/,this[_0x3c2acc(0x167)]=_0x363d55[_0x3c2acc(0xc7)],this[_0x3c2acc(0x15d)]=_0x363d55['HTMLAllCollection'],this[_0x3c2acc(0x19f)]=Object[_0x3c2acc(0x1a4)],this['_getOwnPropertyNames']=Object[_0x3c2acc(0x129)],this[_0x3c2acc(0xed)]=_0x363d55[_0x3c2acc(0x16f)],this['_regExpToString']=RegExp['prototype'][_0x3c2acc(0x14e)],this[_0x3c2acc(0x130)]=Date[_0x3c2acc(0xe3)][_0x3c2acc(0x14e)];}[_0x10ed28(0xfd)](_0x5863e0,_0x563675,_0x25dde8,_0x4235ab){var _0x5eac97=_0x10ed28,_0x15d2ae=this,_0x48a558=_0x25dde8[_0x5eac97(0x1a2)];function _0x34c0d4(_0x2959d0,_0x3e333c,_0x6ec96e){var _0x29ad7b=_0x5eac97;_0x3e333c[_0x29ad7b(0x100)]=_0x29ad7b(0xff),_0x3e333c[_0x29ad7b(0x17c)]=_0x2959d0[_0x29ad7b(0x135)],_0x2a098b=_0x6ec96e[_0x29ad7b(0x182)][_0x29ad7b(0x19e)],_0x6ec96e[_0x29ad7b(0x182)][_0x29ad7b(0x19e)]=_0x3e333c,_0x15d2ae[_0x29ad7b(0x168)](_0x3e333c,_0x6ec96e);}try{_0x25dde8['level']++,_0x25dde8['autoExpand']&&_0x25dde8[_0x5eac97(0x10d)][_0x5eac97(0x171)](_0x563675);var _0x5e937d,_0x4d4837,_0x7a94ce,_0x12e437,_0x54273c=[],_0x3076d3=[],_0x4a27d5,_0x1f1aa0=this[_0x5eac97(0x13c)](_0x563675),_0x1fe8fc=_0x1f1aa0==='array',_0x1d9d33=!0x1,_0x1f7cfe=_0x1f1aa0===_0x5eac97(0x120),_0x3084ae=this[_0x5eac97(0x173)](_0x1f1aa0),_0xc35bc7=this[_0x5eac97(0x13d)](_0x1f1aa0),_0x48d9e1=_0x3084ae||_0xc35bc7,_0x590449={},_0x29fc28=0x0,_0x31b022=!0x1,_0x2a098b,_0x14e2a6=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x25dde8[_0x5eac97(0x159)]){if(_0x1fe8fc){if(_0x4d4837=_0x563675[_0x5eac97(0xf4)],_0x4d4837>_0x25dde8[_0x5eac97(0xc8)]){for(_0x7a94ce=0x0,_0x12e437=_0x25dde8['elements'],_0x5e937d=_0x7a94ce;_0x5e937d<_0x12e437;_0x5e937d++)_0x3076d3['push'](_0x15d2ae[_0x5eac97(0xe4)](_0x54273c,_0x563675,_0x1f1aa0,_0x5e937d,_0x25dde8));_0x5863e0[_0x5eac97(0x142)]=!0x0;}else{for(_0x7a94ce=0x0,_0x12e437=_0x4d4837,_0x5e937d=_0x7a94ce;_0x5e937d<_0x12e437;_0x5e937d++)_0x3076d3[_0x5eac97(0x171)](_0x15d2ae[_0x5eac97(0xe4)](_0x54273c,_0x563675,_0x1f1aa0,_0x5e937d,_0x25dde8));}_0x25dde8[_0x5eac97(0x110)]+=_0x3076d3[_0x5eac97(0xf4)];}if(!(_0x1f1aa0==='null'||_0x1f1aa0===_0x5eac97(0xc7))&&!_0x3084ae&&_0x1f1aa0!==_0x5eac97(0x137)&&_0x1f1aa0!==_0x5eac97(0x194)&&_0x1f1aa0!==_0x5eac97(0x17f)){var _0x3a0092=_0x4235ab[_0x5eac97(0x17d)]||_0x25dde8[_0x5eac97(0x17d)];if(this[_0x5eac97(0x15e)](_0x563675)?(_0x5e937d=0x0,_0x563675[_0x5eac97(0x10a)](function(_0x4b3319){var _0x3d2aa8=_0x5eac97;if(_0x29fc28++,_0x25dde8[_0x3d2aa8(0x110)]++,_0x29fc28>_0x3a0092){_0x31b022=!0x0;return;}if(!_0x25dde8['isExpressionToEvaluate']&&_0x25dde8[_0x3d2aa8(0x1a2)]&&_0x25dde8['autoExpandPropertyCount']>_0x25dde8['autoExpandLimit']){_0x31b022=!0x0;return;}_0x3076d3[_0x3d2aa8(0x171)](_0x15d2ae[_0x3d2aa8(0xe4)](_0x54273c,_0x563675,_0x3d2aa8(0x19b),_0x5e937d++,_0x25dde8,function(_0x5e7ebe){return function(){return _0x5e7ebe;};}(_0x4b3319)));})):this[_0x5eac97(0x164)](_0x563675)&&_0x563675[_0x5eac97(0x10a)](function(_0x789f9,_0x40bfed){var _0x595515=_0x5eac97;if(_0x29fc28++,_0x25dde8[_0x595515(0x110)]++,_0x29fc28>_0x3a0092){_0x31b022=!0x0;return;}if(!_0x25dde8['isExpressionToEvaluate']&&_0x25dde8[_0x595515(0x1a2)]&&_0x25dde8[_0x595515(0x110)]>_0x25dde8['autoExpandLimit']){_0x31b022=!0x0;return;}var _0x14d096=_0x40bfed[_0x595515(0x14e)]();_0x14d096[_0x595515(0xf4)]>0x64&&(_0x14d096=_0x14d096['slice'](0x0,0x64)+_0x595515(0x1ac)),_0x3076d3[_0x595515(0x171)](_0x15d2ae[_0x595515(0xe4)](_0x54273c,_0x563675,_0x595515(0xeb),_0x14d096,_0x25dde8,function(_0x8448c2){return function(){return _0x8448c2;};}(_0x789f9)));}),!_0x1d9d33){try{for(_0x4a27d5 in _0x563675)if(!(_0x1fe8fc&&_0x14e2a6['test'](_0x4a27d5))&&!this['_blacklistedProperty'](_0x563675,_0x4a27d5,_0x25dde8)){if(_0x29fc28++,_0x25dde8[_0x5eac97(0x110)]++,_0x29fc28>_0x3a0092){_0x31b022=!0x0;break;}if(!_0x25dde8[_0x5eac97(0x1a5)]&&_0x25dde8[_0x5eac97(0x1a2)]&&_0x25dde8[_0x5eac97(0x110)]>_0x25dde8[_0x5eac97(0x146)]){_0x31b022=!0x0;break;}_0x3076d3[_0x5eac97(0x171)](_0x15d2ae[_0x5eac97(0xd0)](_0x54273c,_0x590449,_0x563675,_0x1f1aa0,_0x4a27d5,_0x25dde8));}}catch{}if(_0x590449[_0x5eac97(0x176)]=!0x0,_0x1f7cfe&&(_0x590449['_p_name']=!0x0),!_0x31b022){var _0x18c0f5=[][_0x5eac97(0x14c)](this[_0x5eac97(0x151)](_0x563675))[_0x5eac97(0x14c)](this[_0x5eac97(0x12e)](_0x563675));for(_0x5e937d=0x0,_0x4d4837=_0x18c0f5['length'];_0x5e937d<_0x4d4837;_0x5e937d++)if(_0x4a27d5=_0x18c0f5[_0x5e937d],!(_0x1fe8fc&&_0x14e2a6[_0x5eac97(0x178)](_0x4a27d5[_0x5eac97(0x14e)]()))&&!this[_0x5eac97(0x161)](_0x563675,_0x4a27d5,_0x25dde8)&&!_0x590449[_0x5eac97(0xc5)+_0x4a27d5[_0x5eac97(0x14e)]()]){if(_0x29fc28++,_0x25dde8['autoExpandPropertyCount']++,_0x29fc28>_0x3a0092){_0x31b022=!0x0;break;}if(!_0x25dde8[_0x5eac97(0x1a5)]&&_0x25dde8[_0x5eac97(0x1a2)]&&_0x25dde8[_0x5eac97(0x110)]>_0x25dde8[_0x5eac97(0x146)]){_0x31b022=!0x0;break;}_0x3076d3['push'](_0x15d2ae[_0x5eac97(0xd0)](_0x54273c,_0x590449,_0x563675,_0x1f1aa0,_0x4a27d5,_0x25dde8));}}}}}if(_0x5863e0[_0x5eac97(0x100)]=_0x1f1aa0,_0x48d9e1?(_0x5863e0['value']=_0x563675[_0x5eac97(0xee)](),this[_0x5eac97(0x133)](_0x1f1aa0,_0x5863e0,_0x25dde8,_0x4235ab)):_0x1f1aa0===_0x5eac97(0xd7)?_0x5863e0[_0x5eac97(0x1a0)]=this[_0x5eac97(0x130)][_0x5eac97(0x11c)](_0x563675):_0x1f1aa0===_0x5eac97(0x17f)?_0x5863e0[_0x5eac97(0x1a0)]=_0x563675[_0x5eac97(0x14e)]():_0x1f1aa0==='RegExp'?_0x5863e0[_0x5eac97(0x1a0)]=this[_0x5eac97(0xe7)][_0x5eac97(0x11c)](_0x563675):_0x1f1aa0===_0x5eac97(0xc6)&&this[_0x5eac97(0xed)]?_0x5863e0[_0x5eac97(0x1a0)]=this['_Symbol'][_0x5eac97(0xe3)][_0x5eac97(0x14e)]['call'](_0x563675):!_0x25dde8['depth']&&!(_0x1f1aa0==='null'||_0x1f1aa0===_0x5eac97(0xc7))&&(delete _0x5863e0['value'],_0x5863e0['capped']=!0x0),_0x31b022&&(_0x5863e0[_0x5eac97(0x116)]=!0x0),_0x2a098b=_0x25dde8[_0x5eac97(0x182)][_0x5eac97(0x19e)],_0x25dde8[_0x5eac97(0x182)][_0x5eac97(0x19e)]=_0x5863e0,this[_0x5eac97(0x168)](_0x5863e0,_0x25dde8),_0x3076d3[_0x5eac97(0xf4)]){for(_0x5e937d=0x0,_0x4d4837=_0x3076d3[_0x5eac97(0xf4)];_0x5e937d<_0x4d4837;_0x5e937d++)_0x3076d3[_0x5e937d](_0x5e937d);}_0x54273c[_0x5eac97(0xf4)]&&(_0x5863e0[_0x5eac97(0x17d)]=_0x54273c);}catch(_0x5b6a62){_0x34c0d4(_0x5b6a62,_0x5863e0,_0x25dde8);}return this[_0x5eac97(0x14f)](_0x563675,_0x5863e0),this['_treeNodePropertiesAfterFullValue'](_0x5863e0,_0x25dde8),_0x25dde8['node'][_0x5eac97(0x19e)]=_0x2a098b,_0x25dde8['level']--,_0x25dde8[_0x5eac97(0x1a2)]=_0x48a558,_0x25dde8['autoExpand']&&_0x25dde8[_0x5eac97(0x10d)][_0x5eac97(0x162)](),_0x5863e0;}[_0x10ed28(0x12e)](_0x5e7e45){var _0x111dd1=_0x10ed28;return Object[_0x111dd1(0x190)]?Object[_0x111dd1(0x190)](_0x5e7e45):[];}[_0x10ed28(0x15e)](_0x5b69a9){var _0x55ac27=_0x10ed28;return!!(_0x5b69a9&&_0x363d55[_0x55ac27(0x19b)]&&this[_0x55ac27(0x152)](_0x5b69a9)===_0x55ac27(0x147)&&_0x5b69a9[_0x55ac27(0x10a)]);}['_blacklistedProperty'](_0x28b15f,_0x581dd6,_0x32226c){var _0x247a74=_0x10ed28;return _0x32226c[_0x247a74(0xef)]?typeof _0x28b15f[_0x581dd6]==_0x247a74(0x120):!0x1;}[_0x10ed28(0x13c)](_0x352136){var _0x47498e=_0x10ed28,_0x456822='';return _0x456822=typeof _0x352136,_0x456822===_0x47498e(0x143)?this[_0x47498e(0x152)](_0x352136)===_0x47498e(0x180)?_0x456822=_0x47498e(0x1a7):this[_0x47498e(0x152)](_0x352136)===_0x47498e(0xdd)?_0x456822='date':this['_objectToString'](_0x352136)===_0x47498e(0xbb)?_0x456822=_0x47498e(0x17f):_0x352136===null?_0x456822=_0x47498e(0x1b4):_0x352136[_0x47498e(0x10e)]&&(_0x456822=_0x352136[_0x47498e(0x10e)][_0x47498e(0xc1)]||_0x456822):_0x456822==='undefined'&&this[_0x47498e(0x15d)]&&_0x352136 instanceof this[_0x47498e(0x15d)]&&(_0x456822=_0x47498e(0xc0)),_0x456822;}['_objectToString'](_0x1de66c){var _0x473e65=_0x10ed28;return Object[_0x473e65(0xe3)]['toString'][_0x473e65(0x11c)](_0x1de66c);}[_0x10ed28(0x173)](_0x1b731a){var _0xb60b14=_0x10ed28;return _0x1b731a===_0xb60b14(0xe1)||_0x1b731a===_0xb60b14(0x102)||_0x1b731a===_0xb60b14(0xde);}['_isPrimitiveWrapperType'](_0x331b09){var _0x16d7d9=_0x10ed28;return _0x331b09===_0x16d7d9(0x154)||_0x331b09===_0x16d7d9(0x137)||_0x331b09===_0x16d7d9(0x131);}[_0x10ed28(0xe4)](_0x29c99b,_0x2f4876,_0x1d2f4f,_0x3076bc,_0x178327,_0x2eec49){var _0x458f4f=this;return function(_0x530f99){var _0x374746=_0x3ff9,_0x60df83=_0x178327[_0x374746(0x182)][_0x374746(0x19e)],_0x25a209=_0x178327[_0x374746(0x182)][_0x374746(0x1a9)],_0x290e99=_0x178327[_0x374746(0x182)]['parent'];_0x178327[_0x374746(0x182)][_0x374746(0xce)]=_0x60df83,_0x178327[_0x374746(0x182)][_0x374746(0x1a9)]=typeof _0x3076bc==_0x374746(0xde)?_0x3076bc:_0x530f99,_0x29c99b[_0x374746(0x171)](_0x458f4f[_0x374746(0x1b5)](_0x2f4876,_0x1d2f4f,_0x3076bc,_0x178327,_0x2eec49)),_0x178327['node'][_0x374746(0xce)]=_0x290e99,_0x178327[_0x374746(0x182)][_0x374746(0x1a9)]=_0x25a209;};}[_0x10ed28(0xd0)](_0x83b0e,_0x4dbfb7,_0x57825e,_0x50f25e,_0xf742cb,_0x5e0402,_0x2df415){var _0x4ff80c=_0x10ed28,_0x3c23d4=this;return _0x4dbfb7[_0x4ff80c(0xc5)+_0xf742cb['toString']()]=!0x0,function(_0x3abd65){var _0x4ac95e=_0x4ff80c,_0x2c9c3f=_0x5e0402[_0x4ac95e(0x182)]['current'],_0x2635bd=_0x5e0402[_0x4ac95e(0x182)][_0x4ac95e(0x1a9)],_0xc2e0d=_0x5e0402['node'][_0x4ac95e(0xce)];_0x5e0402['node'][_0x4ac95e(0xce)]=_0x2c9c3f,_0x5e0402[_0x4ac95e(0x182)]['index']=_0x3abd65,_0x83b0e[_0x4ac95e(0x171)](_0x3c23d4[_0x4ac95e(0x1b5)](_0x57825e,_0x50f25e,_0xf742cb,_0x5e0402,_0x2df415)),_0x5e0402['node'][_0x4ac95e(0xce)]=_0xc2e0d,_0x5e0402['node'][_0x4ac95e(0x1a9)]=_0x2635bd;};}[_0x10ed28(0x1b5)](_0xf38ac3,_0x5bdcfd,_0x290e62,_0x7990cf,_0x48e604){var _0x1aa57e=_0x10ed28,_0x2bff8c=this;_0x48e604||(_0x48e604=function(_0x43ba8f,_0x597d26){return _0x43ba8f[_0x597d26];});var _0x48a20e=_0x290e62[_0x1aa57e(0x14e)](),_0xd6873d=_0x7990cf[_0x1aa57e(0x138)]||{},_0x7426f3=_0x7990cf[_0x1aa57e(0x159)],_0x3f3199=_0x7990cf[_0x1aa57e(0x1a5)];try{var _0x18b702=this['_isMap'](_0xf38ac3),_0x5a1ae4=_0x48a20e;_0x18b702&&_0x5a1ae4[0x0]==='\\x27'&&(_0x5a1ae4=_0x5a1ae4['substr'](0x1,_0x5a1ae4[_0x1aa57e(0xf4)]-0x2));var _0x6af1a1=_0x7990cf[_0x1aa57e(0x138)]=_0xd6873d['_p_'+_0x5a1ae4];_0x6af1a1&&(_0x7990cf[_0x1aa57e(0x159)]=_0x7990cf[_0x1aa57e(0x159)]+0x1),_0x7990cf[_0x1aa57e(0x1a5)]=!!_0x6af1a1;var _0x2333d7=typeof _0x290e62==_0x1aa57e(0xc6),_0x22cba0={'name':_0x2333d7||_0x18b702?_0x48a20e:this['_propertyName'](_0x48a20e)};if(_0x2333d7&&(_0x22cba0[_0x1aa57e(0xc6)]=!0x0),!(_0x5bdcfd===_0x1aa57e(0x1a7)||_0x5bdcfd===_0x1aa57e(0x12f))){var _0x156b6d=this[_0x1aa57e(0x19f)](_0xf38ac3,_0x290e62);if(_0x156b6d&&(_0x156b6d['set']&&(_0x22cba0['setter']=!0x0),_0x156b6d[_0x1aa57e(0x107)]&&!_0x6af1a1&&!_0x7990cf[_0x1aa57e(0x198)]))return _0x22cba0['getter']=!0x0,this[_0x1aa57e(0x17a)](_0x22cba0,_0x7990cf),_0x22cba0;}var _0x36fd25;try{_0x36fd25=_0x48e604(_0xf38ac3,_0x290e62);}catch(_0x210082){return _0x22cba0={'name':_0x48a20e,'type':_0x1aa57e(0xff),'error':_0x210082[_0x1aa57e(0x135)]},this[_0x1aa57e(0x17a)](_0x22cba0,_0x7990cf),_0x22cba0;}var _0x15c01e=this[_0x1aa57e(0x13c)](_0x36fd25),_0x1aab99=this[_0x1aa57e(0x173)](_0x15c01e);if(_0x22cba0['type']=_0x15c01e,_0x1aab99)this[_0x1aa57e(0x17a)](_0x22cba0,_0x7990cf,_0x36fd25,function(){var _0x4f8d75=_0x1aa57e;_0x22cba0[_0x4f8d75(0x1a0)]=_0x36fd25['valueOf'](),!_0x6af1a1&&_0x2bff8c[_0x4f8d75(0x133)](_0x15c01e,_0x22cba0,_0x7990cf,{});});else{var _0x335f59=_0x7990cf[_0x1aa57e(0x1a2)]&&_0x7990cf['level']<_0x7990cf['autoExpandMaxDepth']&&_0x7990cf[_0x1aa57e(0x10d)][_0x1aa57e(0xd4)](_0x36fd25)<0x0&&_0x15c01e!==_0x1aa57e(0x120)&&_0x7990cf[_0x1aa57e(0x110)]<_0x7990cf['autoExpandLimit'];_0x335f59||_0x7990cf[_0x1aa57e(0x188)]<_0x7426f3||_0x6af1a1?(this['serialize'](_0x22cba0,_0x36fd25,_0x7990cf,_0x6af1a1||{}),this[_0x1aa57e(0x14f)](_0x36fd25,_0x22cba0)):this[_0x1aa57e(0x17a)](_0x22cba0,_0x7990cf,_0x36fd25,function(){var _0x53d000=_0x1aa57e;_0x15c01e===_0x53d000(0x1b4)||_0x15c01e===_0x53d000(0xc7)||(delete _0x22cba0[_0x53d000(0x1a0)],_0x22cba0[_0x53d000(0x183)]=!0x0);});}return _0x22cba0;}finally{_0x7990cf[_0x1aa57e(0x138)]=_0xd6873d,_0x7990cf[_0x1aa57e(0x159)]=_0x7426f3,_0x7990cf[_0x1aa57e(0x1a5)]=_0x3f3199;}}['_capIfString'](_0x96020c,_0x4e4cc3,_0xaeab36,_0x1e5657){var _0x2356e4=_0x10ed28,_0x2bbfa6=_0x1e5657['strLength']||_0xaeab36[_0x2356e4(0x108)];if((_0x96020c===_0x2356e4(0x102)||_0x96020c===_0x2356e4(0x137))&&_0x4e4cc3['value']){let _0x2e0d21=_0x4e4cc3['value'][_0x2356e4(0xf4)];_0xaeab36['allStrLength']+=_0x2e0d21,_0xaeab36['allStrLength']>_0xaeab36[_0x2356e4(0xf3)]?(_0x4e4cc3[_0x2356e4(0x183)]='',delete _0x4e4cc3['value']):_0x2e0d21>_0x2bbfa6&&(_0x4e4cc3[_0x2356e4(0x183)]=_0x4e4cc3[_0x2356e4(0x1a0)][_0x2356e4(0x18b)](0x0,_0x2bbfa6),delete _0x4e4cc3[_0x2356e4(0x1a0)]);}}[_0x10ed28(0x164)](_0x3efef3){var _0x3488ac=_0x10ed28;return!!(_0x3efef3&&_0x363d55[_0x3488ac(0xeb)]&&this[_0x3488ac(0x152)](_0x3efef3)===_0x3488ac(0x1af)&&_0x3efef3[_0x3488ac(0x10a)]);}[_0x10ed28(0xc4)](_0x11c35b){var _0x23453d=_0x10ed28;if(_0x11c35b[_0x23453d(0xf6)](/^\\d+$/))return _0x11c35b;var _0x4f6a03;try{_0x4f6a03=JSON[_0x23453d(0xf1)](''+_0x11c35b);}catch{_0x4f6a03='\\x22'+this[_0x23453d(0x152)](_0x11c35b)+'\\x22';}return _0x4f6a03[_0x23453d(0xf6)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4f6a03=_0x4f6a03['substr'](0x1,_0x4f6a03['length']-0x2):_0x4f6a03=_0x4f6a03[_0x23453d(0x166)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x4f6a03;}[_0x10ed28(0x17a)](_0x55cc47,_0x11bab3,_0x41718f,_0x163b6a){var _0x47c902=_0x10ed28;this[_0x47c902(0x168)](_0x55cc47,_0x11bab3),_0x163b6a&&_0x163b6a(),this['_additionalMetadata'](_0x41718f,_0x55cc47),this['_treeNodePropertiesAfterFullValue'](_0x55cc47,_0x11bab3);}[_0x10ed28(0x168)](_0x3f8b3a,_0x4d5884){var _0x49c69e=_0x10ed28;this[_0x49c69e(0x12b)](_0x3f8b3a,_0x4d5884),this[_0x49c69e(0xca)](_0x3f8b3a,_0x4d5884),this[_0x49c69e(0x18e)](_0x3f8b3a,_0x4d5884),this['_setNodePermissions'](_0x3f8b3a,_0x4d5884);}[_0x10ed28(0x12b)](_0x24d5f8,_0x14eaea){}[_0x10ed28(0xca)](_0x576a32,_0x687c5){}[_0x10ed28(0xbd)](_0x489c9e,_0xf76957){}[_0x10ed28(0x140)](_0x40bd6c){return _0x40bd6c===this['_undefined'];}[_0x10ed28(0xf2)](_0x59dbd7,_0x39b993){var _0x4aab34=_0x10ed28;this[_0x4aab34(0xbd)](_0x59dbd7,_0x39b993),this[_0x4aab34(0x196)](_0x59dbd7),_0x39b993[_0x4aab34(0xf9)]&&this['_sortProps'](_0x59dbd7),this[_0x4aab34(0x15f)](_0x59dbd7,_0x39b993),this[_0x4aab34(0xe2)](_0x59dbd7,_0x39b993),this[_0x4aab34(0x111)](_0x59dbd7);}[_0x10ed28(0x14f)](_0x251965,_0x9b93cd){var _0x83cbd4=_0x10ed28;let _0xcd393f;try{_0x363d55[_0x83cbd4(0x174)]&&(_0xcd393f=_0x363d55[_0x83cbd4(0x174)]['error'],_0x363d55[_0x83cbd4(0x174)][_0x83cbd4(0x17c)]=function(){}),_0x251965&&typeof _0x251965[_0x83cbd4(0xf4)]==_0x83cbd4(0xde)&&(_0x9b93cd[_0x83cbd4(0xf4)]=_0x251965[_0x83cbd4(0xf4)]);}catch{}finally{_0xcd393f&&(_0x363d55[_0x83cbd4(0x174)][_0x83cbd4(0x17c)]=_0xcd393f);}if(_0x9b93cd[_0x83cbd4(0x100)]===_0x83cbd4(0xde)||_0x9b93cd[_0x83cbd4(0x100)]===_0x83cbd4(0x131)){if(isNaN(_0x9b93cd[_0x83cbd4(0x1a0)]))_0x9b93cd['nan']=!0x0,delete _0x9b93cd[_0x83cbd4(0x1a0)];else switch(_0x9b93cd[_0x83cbd4(0x1a0)]){case Number[_0x83cbd4(0x192)]:_0x9b93cd[_0x83cbd4(0x175)]=!0x0,delete _0x9b93cd[_0x83cbd4(0x1a0)];break;case Number[_0x83cbd4(0x185)]:_0x9b93cd['negativeInfinity']=!0x0,delete _0x9b93cd[_0x83cbd4(0x1a0)];break;case 0x0:this[_0x83cbd4(0x101)](_0x9b93cd[_0x83cbd4(0x1a0)])&&(_0x9b93cd[_0x83cbd4(0x124)]=!0x0);break;}}else _0x9b93cd[_0x83cbd4(0x100)]===_0x83cbd4(0x120)&&typeof _0x251965[_0x83cbd4(0xc1)]==_0x83cbd4(0x102)&&_0x251965[_0x83cbd4(0xc1)]&&_0x9b93cd[_0x83cbd4(0xc1)]&&_0x251965['name']!==_0x9b93cd[_0x83cbd4(0xc1)]&&(_0x9b93cd[_0x83cbd4(0xda)]=_0x251965['name']);}[_0x10ed28(0x101)](_0xdc72f6){var _0x396f32=_0x10ed28;return 0x1/_0xdc72f6===Number[_0x396f32(0x185)];}[_0x10ed28(0x114)](_0xc49f59){var _0x15d31a=_0x10ed28;!_0xc49f59[_0x15d31a(0x17d)]||!_0xc49f59[_0x15d31a(0x17d)]['length']||_0xc49f59[_0x15d31a(0x100)]===_0x15d31a(0x1a7)||_0xc49f59[_0x15d31a(0x100)]===_0x15d31a(0xeb)||_0xc49f59[_0x15d31a(0x100)]===_0x15d31a(0x19b)||_0xc49f59[_0x15d31a(0x17d)][_0x15d31a(0x17e)](function(_0x521a66,_0x3037b9){var _0x19b3c8=_0x15d31a,_0x30740f=_0x521a66[_0x19b3c8(0xc1)][_0x19b3c8(0x199)](),_0x377ff1=_0x3037b9[_0x19b3c8(0xc1)]['toLowerCase']();return _0x30740f<_0x377ff1?-0x1:_0x30740f>_0x377ff1?0x1:0x0;});}['_addFunctionsNode'](_0x24f146,_0x304fda){var _0x2a0f15=_0x10ed28;if(!(_0x304fda[_0x2a0f15(0xef)]||!_0x24f146[_0x2a0f15(0x17d)]||!_0x24f146[_0x2a0f15(0x17d)][_0x2a0f15(0xf4)])){for(var _0x14c9f5=[],_0x4d9ee4=[],_0x488f79=0x0,_0x101a34=_0x24f146[_0x2a0f15(0x17d)][_0x2a0f15(0xf4)];_0x488f79<_0x101a34;_0x488f79++){var _0x19651f=_0x24f146[_0x2a0f15(0x17d)][_0x488f79];_0x19651f[_0x2a0f15(0x100)]===_0x2a0f15(0x120)?_0x14c9f5[_0x2a0f15(0x171)](_0x19651f):_0x4d9ee4['push'](_0x19651f);}if(!(!_0x4d9ee4[_0x2a0f15(0xf4)]||_0x14c9f5['length']<=0x1)){_0x24f146['props']=_0x4d9ee4;var _0x230bec={'functionsNode':!0x0,'props':_0x14c9f5};this[_0x2a0f15(0x12b)](_0x230bec,_0x304fda),this[_0x2a0f15(0xbd)](_0x230bec,_0x304fda),this[_0x2a0f15(0x196)](_0x230bec),this[_0x2a0f15(0xfe)](_0x230bec,_0x304fda),_0x230bec['id']+='\\x20f',_0x24f146['props'][_0x2a0f15(0x1ad)](_0x230bec);}}}[_0x10ed28(0xe2)](_0x468e99,_0x4388f0){}['_setNodeExpandableState'](_0x5eb717){}[_0x10ed28(0x121)](_0x38c05c){var _0x1aee1a=_0x10ed28;return Array[_0x1aee1a(0x172)](_0x38c05c)||typeof _0x38c05c==_0x1aee1a(0x143)&&this[_0x1aee1a(0x152)](_0x38c05c)===_0x1aee1a(0x180);}['_setNodePermissions'](_0x4eefa0,_0x1705a9){}[_0x10ed28(0x111)](_0x516906){var _0x236906=_0x10ed28;delete _0x516906[_0x236906(0x10f)],delete _0x516906['_hasSetOnItsPath'],delete _0x516906[_0x236906(0x125)];}[_0x10ed28(0x18e)](_0x23c1c2,_0x29a21b){}}let _0x4e7d7d=new _0x328bde(),_0x3886ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x30c557={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x586d36(_0x54f3be,_0x181b1a,_0x2b7eb5,_0x1dd634,_0x49c07c,_0x397446){var _0x2f18dd=_0x10ed28;let _0x4e7f72,_0x1de5a1;try{_0x1de5a1=_0x4ebef8(),_0x4e7f72=_0x46ca90[_0x181b1a],!_0x4e7f72||_0x1de5a1-_0x4e7f72['ts']>0x1f4&&_0x4e7f72[_0x2f18dd(0x118)]&&_0x4e7f72['time']/_0x4e7f72[_0x2f18dd(0x118)]<0x64?(_0x46ca90[_0x181b1a]=_0x4e7f72={'count':0x0,'time':0x0,'ts':_0x1de5a1},_0x46ca90[_0x2f18dd(0x128)]={}):_0x1de5a1-_0x46ca90[_0x2f18dd(0x128)]['ts']>0x32&&_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x118)]&&_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x1a1)]/_0x46ca90[_0x2f18dd(0x128)]['count']<0x64&&(_0x46ca90[_0x2f18dd(0x128)]={});let _0x4ddd3d=[],_0x2c1b45=_0x4e7f72[_0x2f18dd(0x184)]||_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x184)]?_0x30c557:_0x3886ea,_0x398af5=_0x30c84c=>{var _0x988e3b=_0x2f18dd;let _0x14b3dc={};return _0x14b3dc[_0x988e3b(0x17d)]=_0x30c84c['props'],_0x14b3dc[_0x988e3b(0xc8)]=_0x30c84c['elements'],_0x14b3dc[_0x988e3b(0x108)]=_0x30c84c[_0x988e3b(0x108)],_0x14b3dc[_0x988e3b(0xf3)]=_0x30c84c[_0x988e3b(0xf3)],_0x14b3dc[_0x988e3b(0x146)]=_0x30c84c[_0x988e3b(0x146)],_0x14b3dc[_0x988e3b(0x1b7)]=_0x30c84c[_0x988e3b(0x1b7)],_0x14b3dc[_0x988e3b(0xf9)]=!0x1,_0x14b3dc[_0x988e3b(0xef)]=!_0x1d9169,_0x14b3dc[_0x988e3b(0x159)]=0x1,_0x14b3dc[_0x988e3b(0x188)]=0x0,_0x14b3dc[_0x988e3b(0x105)]=_0x988e3b(0xbe),_0x14b3dc[_0x988e3b(0x1b9)]=_0x988e3b(0x16b),_0x14b3dc[_0x988e3b(0x1a2)]=!0x0,_0x14b3dc[_0x988e3b(0x10d)]=[],_0x14b3dc[_0x988e3b(0x110)]=0x0,_0x14b3dc[_0x988e3b(0x198)]=!0x0,_0x14b3dc[_0x988e3b(0xdb)]=0x0,_0x14b3dc[_0x988e3b(0x182)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x14b3dc;};for(var _0x4e8b46=0x0;_0x4e8b46<_0x49c07c[_0x2f18dd(0xf4)];_0x4e8b46++)_0x4ddd3d[_0x2f18dd(0x171)](_0x4e7d7d[_0x2f18dd(0xfd)]({'timeNode':_0x54f3be===_0x2f18dd(0x1a1)||void 0x0},_0x49c07c[_0x4e8b46],_0x398af5(_0x2c1b45),{}));if(_0x54f3be===_0x2f18dd(0x1ab)||_0x54f3be===_0x2f18dd(0x17c)){let _0x38886c=Error[_0x2f18dd(0x11f)];try{Error['stackTraceLimit']=0x1/0x0,_0x4ddd3d[_0x2f18dd(0x171)](_0x4e7d7d['serialize']({'stackNode':!0x0},new Error()[_0x2f18dd(0x1b0)],_0x398af5(_0x2c1b45),{'strLength':0x1/0x0}));}finally{Error[_0x2f18dd(0x11f)]=_0x38886c;}}return{'method':_0x2f18dd(0xd9),'version':_0x46f67c,'args':[{'ts':_0x2b7eb5,'session':_0x1dd634,'args':_0x4ddd3d,'id':_0x181b1a,'context':_0x397446}]};}catch(_0x14cd18){return{'method':_0x2f18dd(0xd9),'version':_0x46f67c,'args':[{'ts':_0x2b7eb5,'session':_0x1dd634,'args':[{'type':_0x2f18dd(0xff),'error':_0x14cd18&&_0x14cd18[_0x2f18dd(0x135)]}],'id':_0x181b1a,'context':_0x397446}]};}finally{try{if(_0x4e7f72&&_0x1de5a1){let _0xa0025=_0x4ebef8();_0x4e7f72['count']++,_0x4e7f72['time']+=_0x224ffb(_0x1de5a1,_0xa0025),_0x4e7f72['ts']=_0xa0025,_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x118)]++,_0x46ca90['hits'][_0x2f18dd(0x1a1)]+=_0x224ffb(_0x1de5a1,_0xa0025),_0x46ca90[_0x2f18dd(0x128)]['ts']=_0xa0025,(_0x4e7f72[_0x2f18dd(0x118)]>0x32||_0x4e7f72['time']>0x64)&&(_0x4e7f72[_0x2f18dd(0x184)]=!0x0),(_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x118)]>0x3e8||_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x1a1)]>0x12c)&&(_0x46ca90[_0x2f18dd(0x128)][_0x2f18dd(0x184)]=!0x0);}}catch{}}}return _0x586d36;}((_0x17891e,_0x4f4b9c,_0x3fd6d5,_0x1c5422,_0x479ca2,_0x4b0ac8,_0x5246af,_0x42bfac,_0x4ca82f,_0x123580,_0x18969d)=>{var _0x407242=_0xfb4f89;if(_0x17891e[_0x407242(0x150)])return _0x17891e[_0x407242(0x150)];if(!H(_0x17891e,_0x42bfac,_0x479ca2))return _0x17891e['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x17891e[_0x407242(0x150)];let _0x37610e=B(_0x17891e),_0x3437ca=_0x37610e['elapsed'],_0x25b5e5=_0x37610e['timeStamp'],_0x4bf76b=_0x37610e[_0x407242(0x11e)],_0x125c7d={'hits':{},'ts':{}},_0x15b46a=X(_0x17891e,_0x4ca82f,_0x125c7d,_0x4b0ac8),_0xd5486b=_0x4d30e1=>{_0x125c7d['ts'][_0x4d30e1]=_0x25b5e5();},_0x2d07e6=(_0x5bc355,_0xe34fe)=>{var _0x2339ce=_0x407242;let _0x59fb6a=_0x125c7d['ts'][_0xe34fe];if(delete _0x125c7d['ts'][_0xe34fe],_0x59fb6a){let _0x5921a6=_0x3437ca(_0x59fb6a,_0x25b5e5());_0x2cf290(_0x15b46a(_0x2339ce(0x1a1),_0x5bc355,_0x4bf76b(),_0x253536,[_0x5921a6],_0xe34fe));}},_0x49bcec=_0x43e72f=>{var _0x2e47bf=_0x407242,_0x55d95d;return _0x479ca2===_0x2e47bf(0x139)&&_0x17891e['origin']&&((_0x55d95d=_0x43e72f==null?void 0x0:_0x43e72f['args'])==null?void 0x0:_0x55d95d['length'])&&(_0x43e72f['args'][0x0][_0x2e47bf(0x189)]=_0x17891e['origin']),_0x43e72f;};_0x17891e[_0x407242(0x150)]={'consoleLog':(_0x31c92e,_0x24488d)=>{var _0x93e67e=_0x407242;_0x17891e['console']['log'][_0x93e67e(0xc1)]!=='disabledLog'&&_0x2cf290(_0x15b46a(_0x93e67e(0xd9),_0x31c92e,_0x4bf76b(),_0x253536,_0x24488d));},'consoleTrace':(_0x3b66a7,_0xba880e)=>{var _0x567e13=_0x407242,_0x31716e,_0x5a9c60;_0x17891e[_0x567e13(0x174)]['log'][_0x567e13(0xc1)]!==_0x567e13(0xc2)&&((_0x5a9c60=(_0x31716e=_0x17891e[_0x567e13(0x170)])==null?void 0x0:_0x31716e[_0x567e13(0xd2)])!=null&&_0x5a9c60[_0x567e13(0x182)]&&(_0x17891e[_0x567e13(0x18c)]=!0x0),_0x2cf290(_0x49bcec(_0x15b46a(_0x567e13(0x1ab),_0x3b66a7,_0x4bf76b(),_0x253536,_0xba880e))));},'consoleError':(_0x3fa736,_0x121a3b)=>{var _0x12dfb8=_0x407242;_0x17891e[_0x12dfb8(0x18c)]=!0x0,_0x2cf290(_0x49bcec(_0x15b46a('error',_0x3fa736,_0x4bf76b(),_0x253536,_0x121a3b)));},'consoleTime':_0x1848a7=>{_0xd5486b(_0x1848a7);},'consoleTimeEnd':(_0x31ae65,_0x3d104a)=>{_0x2d07e6(_0x3d104a,_0x31ae65);},'autoLog':(_0x37808,_0x2ad558)=>{var _0x22938b=_0x407242;_0x2cf290(_0x15b46a(_0x22938b(0xd9),_0x2ad558,_0x4bf76b(),_0x253536,[_0x37808]));},'autoLogMany':(_0x161d7e,_0x43dedb)=>{var _0x379506=_0x407242;_0x2cf290(_0x15b46a(_0x379506(0xd9),_0x161d7e,_0x4bf76b(),_0x253536,_0x43dedb));},'autoTrace':(_0x1217e6,_0x446707)=>{var _0x3a5252=_0x407242;_0x2cf290(_0x49bcec(_0x15b46a(_0x3a5252(0x1ab),_0x446707,_0x4bf76b(),_0x253536,[_0x1217e6])));},'autoTraceMany':(_0x5b77c4,_0x4fc43a)=>{var _0x5bfbf2=_0x407242;_0x2cf290(_0x49bcec(_0x15b46a(_0x5bfbf2(0x1ab),_0x5b77c4,_0x4bf76b(),_0x253536,_0x4fc43a)));},'autoTime':(_0x24183a,_0x442759,_0x296a4c)=>{_0xd5486b(_0x296a4c);},'autoTimeEnd':(_0x2927a9,_0x243d30,_0x5bd63b)=>{_0x2d07e6(_0x243d30,_0x5bd63b);},'coverage':_0x519fc2=>{var _0x452554=_0x407242;_0x2cf290({'method':_0x452554(0x156),'version':_0x4b0ac8,'args':[{'id':_0x519fc2}]});}};let _0x2cf290=q(_0x17891e,_0x4f4b9c,_0x3fd6d5,_0x1c5422,_0x479ca2,_0x123580,_0x18969d),_0x253536=_0x17891e[_0x407242(0xf0)];return _0x17891e['_console_ninja'];})(globalThis,_0xfb4f89(0x10c),'49955',_0xfb4f89(0xdc),'nest.js',_0xfb4f89(0xd3),'1727352634996',_0xfb4f89(0x1a6),_0xfb4f89(0xfb),_0xfb4f89(0x197),_0xfb4f89(0x13a));");
}
catch (e) { } }
;
function oo_oo(i, ...v) { try {
    oo_cm().consoleLog(i, v);
}
catch (e) { } return v; }
;
oo_oo;
function oo_tr(i, ...v) { try {
    oo_cm().consoleTrace(i, v);
}
catch (e) { } return v; }
;
oo_tr;
function oo_tx(i, ...v) { try {
    oo_cm().consoleError(i, v);
}
catch (e) { } return v; }
;
oo_tx;
function oo_ts(v) { try {
    oo_cm().consoleTime(v);
}
catch (e) { } return v; }
;
oo_ts;
function oo_te(v, i) { try {
    oo_cm().consoleTimeEnd(v, i);
}
catch (e) { } return v; }
;
oo_te;
//# sourceMappingURL=ujs.service.js.map