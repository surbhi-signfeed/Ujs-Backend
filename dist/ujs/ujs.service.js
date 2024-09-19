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
let UjsService = class UjsService {
    constructor(logger, connection, UJSDepartmentRepository, UJSSghGroupRepository, UJSShgMemberRepository, UJSUserRepository, UJSRoleRepository, UJSRolePermissionRepository, UJSBackupShgGroupDataUploadMonthRepository, UJSBranchRepository, UJSFailedJobRepository, UJSMigrationRepository, UJSPersonalAccessTokenRepository, UJSSHGExpansesRepository, UJSSHGLoanRepaymentRepository, UJSStateRepository, UJSShgTraningRepository) {
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
        let checkState = await this.UJSShgTraningRepository.findOne({
            where: {
                meeting_id: ujsShgTraningDTO.meeting_id,
            },
        });
        if (checkState) {
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
        typeorm_2.Repository])
], UjsService);
//# sourceMappingURL=ujs.service.js.map