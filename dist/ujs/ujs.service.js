"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
let UjsService = class UjsService {
    constructor(logger, connection, UJSDepartmentRepository, UJSSghGroupRepository, UJSShgMemberRepository, UJSUserRepository, UJSRoleRepository, UJSRolePermissionRepository, UJSBackupShgGroupDataUploadMonthRepository, UJSBranchRepository, UJSFailedJobRepository, UJSMigrationRepository, UJSPersonalAccessTokenRepository, UJSSHGExpansesRepository, UJSSHGLoanRepaymentRepository, UJSStateRepository, UJSShgTraningRepository, UJSShgActiveModelFarmerRepository, UJSShgAttendanceRepository, UJSShgContactRepository, UJSShgDataLockRepository, UJSShgBankLoanAllotmentRepository, UJSShgBankLoanRepository, UJSShgBankRepository, UJSShgAuditingRepository, UJSShgDataUploadRepository, UJSShgDigiSakhiRepository, UJSShgFpoRepository, UJSShgFedrationReportRepository, UJSShgFedrationRepository, UJSShgMomRepository, UJSShgGroupDataUploadMonthERepository, UJSShgMemberSavingRepository, UJSShgGroupDetailsInfoRepository) {
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
            addUJSShgGroup.group_id = ujsShgGroupDTO.group_id;
            addUJSShgGroup.group_id = ujsShgGroupDTO.group_id;
            addUJSShgGroup.group_name = ujsShgGroupDTO.group_name;
            addUJSShgGroup.group_leader = ujsShgGroupDTO.group_leader;
            addUJSShgGroup.formation_date = ujsShgGroupDTO.formation_date;
            addUJSShgGroup.state_name = ujsShgGroupDTO.state_name;
            addUJSShgGroup.district_name = ujsShgGroupDTO.district_name;
            addUJSShgGroup.location_name = ujsShgGroupDTO.location_name;
            addUJSShgGroup.village_name = ujsShgGroupDTO.village_name;
            addUJSShgGroup.taluka_name = ujsShgGroupDTO.taluka_name;
            addUJSShgGroup.bank_name = ujsShgGroupDTO.bank_name;
            addUJSShgGroup.bank_branch = ujsShgGroupDTO.bank_branch;
            addUJSShgGroup.bank_account = ujsShgGroupDTO.bank_account;
            addUJSShgGroup.cash_in_hand = ujsShgGroupDTO.cash_in_hand;
            addUJSShgGroup.federation_amount = ujsShgGroupDTO.federation_amount;
            addUJSShgGroup.cash_at_bank = ujsShgGroupDTO.cash_at_bank;
            addUJSShgGroup.total_member = ujsShgGroupDTO.total_member;
            addUJSShgGroup.last_meeting_date = ujsShgGroupDTO.last_meeting_date;
            addUJSShgGroup.status = ujsShgGroupDTO.status;
            await this.UJSSghGroupRepository.save(addUJSShgGroup);
            return { shgGroupList: addUJSShgGroup, message: "success", status: 200 };
        }
    }
    async UJSShgGroupList(request) {
        let shgGroupList = await this.UJSSghGroupRepository.find({});
        return { shgGroup: shgGroupList, message: "success", status: 200 };
    }
    async UJSShgMemberAdd(request, ujsShgMemberDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkMember = await this.UJSShgMemberRepository.findOne({
            where: {
                group_name: ujsShgMemberDTO.group_name,
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
            addUJSShgMember.group_name = ujsShgMemberDTO.group_name;
            addUJSShgMember.group_id = ujsShgMemberDTO.group_id;
            addUJSShgMember.group_name = ujsShgMemberDTO.group_name;
            addUJSShgMember.member_name = ujsShgMemberDTO.member_name;
            addUJSShgMember.leader_name = ujsShgMemberDTO.leader_name;
            addUJSShgMember.state_name = ujsShgMemberDTO.state_name;
            addUJSShgMember.district_name = ujsShgMemberDTO.district_name;
            addUJSShgMember.village_name = ujsShgMemberDTO.village_name;
            addUJSShgMember.gender = ujsShgMemberDTO.gender;
            addUJSShgMember.dob = ujsShgMemberDTO.dob;
            addUJSShgMember.husband_or_father_name = ujsShgMemberDTO.husband_or_father_name;
            addUJSShgMember.block_taluka = ujsShgMemberDTO.block_taluka;
            addUJSShgMember.mobile = ujsShgMemberDTO.mobile;
            addUJSShgMember.whatsapp = ujsShgMemberDTO.whatsapp;
            addUJSShgMember.email = ujsShgMemberDTO.email;
            addUJSShgMember.education = ujsShgMemberDTO.education;
            addUJSShgMember.primary_occupation = ujsShgMemberDTO.primary_occupation;
            addUJSShgMember.religion = ujsShgMemberDTO.religion;
            addUJSShgMember.aadhar_number = ujsShgMemberDTO.aadhar_number;
            addUJSShgMember.voter_number = ujsShgMemberDTO.voter_number;
            addUJSShgMember.mnrega_number = ujsShgMemberDTO.mnrega_number;
            addUJSShgMember.house_number = ujsShgMemberDTO.house_number;
            addUJSShgMember.pin_code = ujsShgMemberDTO.pin_code;
            addUJSShgMember.gram_panchayat = ujsShgMemberDTO.gram_panchayat;
            addUJSShgMember.bank_name = ujsShgMemberDTO.bank_name;
            addUJSShgMember.bank_branch = ujsShgMemberDTO.bank_branch;
            addUJSShgMember.bank_account = ujsShgMemberDTO.bank_account;
            addUJSShgMember.bank_ifsc = ujsShgMemberDTO.bank_ifsc;
            addUJSShgMember.aadhar_seeding_status = ujsShgMemberDTO.aadhar_seeding_status;
            addUJSShgMember.loan_taken = ujsShgMemberDTO.loan_taken;
            addUJSShgMember.mfi_bank_loan = ujsShgMemberDTO.mfi_bank_loan;
            addUJSShgMember.annual_income = ujsShgMemberDTO.annual_income;
            addUJSShgMember.total_household_member = ujsShgMemberDTO.total_household_member;
            addUJSShgMember.total_monthly_saving = ujsShgMemberDTO.total_monthly_saving;
            addUJSShgMember.total_federation_saving = ujsShgMemberDTO.total_federation_saving;
            addUJSShgMember.category = ujsShgMemberDTO.category;
            addUJSShgMember.differently_abled = ujsShgMemberDTO.differently_abled;
            addUJSShgMember.status = ujsShgMemberDTO.status;
            await this.UJSShgMemberRepository.save(addUJSShgMember);
            return { shgMemberList: addUJSShgMember, message: "success", status: 200 };
        }
    }
    async UJSShgMemberList(request) {
        let shgMemberList = await this.UJSShgMemberRepository.find({});
        return { shgMember: shgMemberList, message: "success", status: 200 };
    }
    async UJSUserAdd(request, ujsUserDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let checkUser = await this.UJSUserRepository.findOne({
            where: {
                name: ujsUserDTO.name,
            },
        });
        if (checkUser) {
            return {
                message: "User Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSUser = new UJSUsersEntity_1.UJSUsersEntity();
            addUJSUser.name = ujsUserDTO.name;
            addUJSUser.email = ujsUserDTO.email;
            addUJSUser.password = ujsUserDTO.password;
            addUJSUser.shg_grp = ujsUserDTO.shg_grp;
            addUJSUser.active = ujsUserDTO.active;
            addUJSUser.role = ujsUserDTO.role;
            addUJSUser.emp_code = ujsUserDTO.emp_code;
            addUJSUser.mobile = ujsUserDTO.mobile;
            addUJSUser.admin_app = ujsUserDTO.admin_app;
            await this.UJSUserRepository.save(addUJSUser);
            return { UserList: addUJSUser, message: "success", status: 200 };
        }
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
        typeorm_2.Repository])
], UjsService);
//# sourceMappingURL=ujs.service.js.map