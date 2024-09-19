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
exports.UjsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../admin/auth/jwt-auth.guard");
const ujs_service_1 = require("./ujs.service");
const UJSDepartmentDTO_1 = require("./dto/UJSDepartmentDTO");
const UJSDepartmentUpdateDTO_1 = require("./dto/UJSDepartmentUpdateDTO");
const UJSDepartmentDeleteDTO_1 = require("./dto/UJSDepartmentDeleteDTO");
const UJSShgGroupDTO_1 = require("./dto/UJSShgGroupDTO");
const UJSShgMemberDTO_1 = require("./dto/UJSShgMemberDTO");
const UJSUsersDTO_1 = require("./dto/UJSUsersDTO");
const UJSRoleDTO_1 = require("./dto/UJSRoleDTO");
const UJSMigrationDTO_1 = require("./dto/UJSMigrationDTO");
const UJSFailedJobsDTO_1 = require("./dto/UJSFailedJobsDTO");
const UJSBranchDTO_1 = require("./dto/UJSBranchDTO");
const UJSBackupShgGroupDataUploadMonthDTO_1 = require("./dto/UJSBackupShgGroupDataUploadMonthDTO");
const UJSPersonalAccessTokenDTO_1 = require("./dto/UJSPersonalAccessTokenDTO");
const UJSSHGExpansesDTO_1 = require("./dto/UJSSHGExpansesDTO");
const UJSSHGLoanRepaymentDTO_1 = require("./dto/UJSSHGLoanRepaymentDTO");
const UJSStateDTO_1 = require("./dto/UJSStateDTO");
const UJSShgtraningDTO_1 = require("./dto/UJSShgtraningDTO");
const UJSShgActiveModelFarmerDTO_1 = require("./dto/UJSShgActiveModelFarmerDTO");
const UJSShgAttendanceDTO_1 = require("./dto/UJSShgAttendanceDTO");
const UJSShgContactDTO_1 = require("./dto/UJSShgContactDTO");
const UJSShgDataLockDTO_1 = require("./dto/UJSShgDataLockDTO");
const UJSSHgBankAllotmentDTO_1 = require("./dto/UJSSHgBankAllotmentDTO");
const UJSSBankLoanDTO_1 = require("./dto/UJSSBankLoanDTO");
const UJSSBankDTO_1 = require("./dto/UJSSBankDTO");
const UJSShgAuditingDTO_1 = require("./dto/UJSShgAuditingDTO");
const UJSShgDataUploadDTO_1 = require("./dto/UJSShgDataUploadDTO");
const UJSShgDigiSakhiDTO_1 = require("./dto/UJSShgDigiSakhiDTO");
const UJSShgFpoDTO_1 = require("./dto/UJSShgFpoDTO");
const UJSShgFedrationReportDTO_1 = require("./dto/UJSShgFedrationReportDTO");
const UJSShgFedrationDTO_1 = require("./dto/UJSShgFedrationDTO");
const UJSShgMomDTO_1 = require("./dto/UJSShgMomDTO");
const UJSShgGroupDataUploadMonthDTO_1 = require("./dto/UJSShgGroupDataUploadMonthDTO");
const UJSSShgMemberSavingDTO_1 = require("./dto/UJSSShgMemberSavingDTO");
const UJSShgGroupDetailsInfoDTO_1 = require("./dto/UJSShgGroupDetailsInfoDTO");
let UjsController = class UjsController {
    constructor(ujsService, logger) {
        this.ujsService = ujsService;
        this.logger = logger;
    }
    async UJSDepartmentAdd(request, ujsDepartmentDTO) {
        return this.ujsService.UJSDepartmentAdd(request, ujsDepartmentDTO);
    }
    async listDepartment(request) {
        return this.ujsService.UJSDepartmentList(request);
    }
    async UJSDepartmentUpdate(request, ujsDepartmentUpdateDTO) {
        return this.ujsService.UJSDepartmentUpdate(request, ujsDepartmentUpdateDTO);
    }
    async UJSDepartmentDelete(request, ujsDepartmentDeleteDTO) {
        return this.ujsService.UJSDepartmentDelete(request, ujsDepartmentDeleteDTO);
    }
    async UJSShgGroupAdd(request, ujsShgGroupDTO) {
        return this.ujsService.UJSShgGroupAdd(request, ujsShgGroupDTO);
    }
    async listShgGroup(request) {
        return this.ujsService.UJSShgGroupList(request);
    }
    async UJSShgMemberAdd(request, ujsShgMemberDTO) {
        return this.ujsService.UJSShgMemberAdd(request, ujsShgMemberDTO);
    }
    async listShgMember(request) {
        return this.ujsService.UJSShgMemberList(request);
    }
    async UJSUserAdd(request, ujsUserDTO) {
        return this.ujsService.UJSUserAdd(request, ujsUserDTO);
    }
    async listUser(request) {
        return this.ujsService.UJSUserList(request);
    }
    async UJSRoleAdd(request, ujsRoleDTO, ujsRolePermissionDTOs) {
        return this.ujsService.UJSRoleAdd(request, ujsRoleDTO, ujsRolePermissionDTOs);
    }
    async listRole(request) {
        return this.ujsService.UJSRoleList(request);
    }
    async UJSMigrationAdd(request, ujsMigrationDTO) {
        return this.ujsService.UJSMigrationAdd(request, ujsMigrationDTO);
    }
    async listMigration(request) {
        return this.ujsService.UJSMigrationList(request);
    }
    async UJSFailedJobsAdd(request, ujsFailedJobDTO) {
        return this.ujsService.UJSFailedJobsAdd(request, ujsFailedJobDTO);
    }
    async listFailedJobs(request) {
        return this.ujsService.UJSFailedJobsList(request);
    }
    async UJSBranchAdd(request, ujsBranchDTO) {
        return this.ujsService.UJSBranchAdd(request, ujsBranchDTO);
    }
    async listBranch(request) {
        return this.ujsService.UJSBranchList(request);
    }
    async UJSBackupShgGroupAdd(request, ujsBackupShgGroupDataUploadMonthDTO) {
        return this.ujsService.UJSBackupShgGroupAdd(request, ujsBackupShgGroupDataUploadMonthDTO);
    }
    async listBackupShgGroup(request) {
        return this.ujsService.UJSBackupShgGroupList(request);
    }
    async UJSPersonalAccessTokenAdd(request, ujsPersonalAccessTokenDTO) {
        return this.ujsService.UJSPersonalAccessTokenAdd(request, ujsPersonalAccessTokenDTO);
    }
    async lisPersonalAccessToken(request) {
        return this.ujsService.UJSPersonalAccessTokenList(request);
    }
    async UJSSHGExpensesAdd(request, ujsShgExpensesDTO) {
        return this.ujsService.UJSSHGExpensesAdd(request, ujsShgExpensesDTO);
    }
    async listSHGExpenses(request) {
        return this.ujsService.UJSSHGExpensesList(request);
    }
    async UJSShgLoanRepaymentAdd(request, ujsShgLoanRepaymentDTO) {
        return this.ujsService.UJSShgLoanRepaymentAdd(request, ujsShgLoanRepaymentDTO);
    }
    async listShgLoanRepayment(request) {
        return this.ujsService.UJSShgLoanRepaymentList(request);
    }
    async UJSStateAdd(request, ujsStateDTO) {
        return this.ujsService.UJSStateAdd(request, ujsStateDTO);
    }
    async listState(request) {
        return this.ujsService.UJSStateList(request);
    }
    async UJSShgTraningAdd(request, ujsShgTraningDTO) {
        return this.ujsService.UJSShgTraningAdd(request, ujsShgTraningDTO);
    }
    async listShgTraning(request) {
        return this.ujsService.UJSShgTraningList(request);
    }
    async UJSShgActiveModelFarmerAdd(request, ujsShgActiveModelFarmerDTO) {
        return this.ujsService.UJSShgActiveModelFarmerAdd(request, ujsShgActiveModelFarmerDTO);
    }
    async listShgActiveModelFarmer(request) {
        return this.ujsService.UJSShgActiveModelFarmerList(request);
    }
    async UJSShgAttendanceAdd(request, ujsShgAttendanceDTO) {
        return this.ujsService.UJSShgAttendanceAdd(request, ujsShgAttendanceDTO);
    }
    async listShgAttendance(request) {
        return this.ujsService.UJSShgAttendanceList(request);
    }
    async UJSShgContactAdd(request, ujsShgContactDTO) {
        return this.ujsService.UJSShgContactAdd(request, ujsShgContactDTO);
    }
    async listShgContact(request) {
        return this.ujsService.UJSShgContactList(request);
    }
    async UJSShgDataLockAdd(request, ujsShgDataLockDTO) {
        return this.ujsService.UJSShgDataLockAdd(request, ujsShgDataLockDTO);
    }
    async listShgDataLock(request) {
        return this.ujsService.UJSShgDataLockList(request);
    }
    async UJSShgBankLoanAllotmentAdd(request, ujsShgBankLoanAllotmentDTO) {
        return this.ujsService.UJSShgBankLoanAllotmentAdd(request, ujsShgBankLoanAllotmentDTO);
    }
    async listShgBankLoanAllotment(request) {
        return this.ujsService.UJSShgBankLoanAllotmentList(request);
    }
    async UJSShgBankLoanAdd(request, ujsShgBankLoanDTO) {
        return this.ujsService.UJSShgBankLoanAdd(request, ujsShgBankLoanDTO);
    }
    async listShgBankLoan(request) {
        return this.ujsService.UJSShgBankLoanList(request);
    }
    async UJSShgBankAdd(request, ujsShgBankDTO) {
        return this.ujsService.UJSShgBankAdd(request, ujsShgBankDTO);
    }
    async listShgBank(request) {
        return this.ujsService.UJSShgBankList(request);
    }
    async UJSShgAuditingAdd(request, ujsShgAuditingDTO) {
        return this.ujsService.UJSShgAuditingAdd(request, ujsShgAuditingDTO);
    }
    async listShgAuditing(request) {
        return this.ujsService.UJSShgAuditingList(request);
    }
    async UJSShgDataUploadAdd(request, ujsShgDataUploadDTO) {
        return this.ujsService.UJSShgDataUploadAdd(request, ujsShgDataUploadDTO);
    }
    async listShgDataUpload(request) {
        return this.ujsService.UJSShgDataUploadList(request);
    }
    async UJSShgDigiSakhiAdd(request, ujsShgDigiSakhiDTO) {
        return this.ujsService.UJSShgDigiSakhiAdd(request, ujsShgDigiSakhiDTO);
    }
    async listShgDigiSakhi(request) {
        return this.ujsService.UJSShgDigiSakhiList(request);
    }
    async UJSShgFpoAdd(request, ujsShgFpoDTO) {
        return this.ujsService.UJSShgFpoAdd(request, ujsShgFpoDTO);
    }
    async listShgFpo(request) {
        return this.ujsService.UJSShgFpoList(request);
    }
    async UJSShgFedrationReportAdd(request, ujsShgFedrationReportDTO) {
        return this.ujsService.UJSShgFedrationReportAdd(request, ujsShgFedrationReportDTO);
    }
    async listShgFedrationReport(request) {
        return this.ujsService.UJSShgFedrationReportList(request);
    }
    async UJSShgFedrationAdd(request, ujsShgFedrationDTO) {
        return this.ujsService.UJSShgFedrationAdd(request, ujsShgFedrationDTO);
    }
    async listShgFedration(request) {
        return this.ujsService.UJSShgFedrationList(request);
    }
    async UJSShgMomAdd(request, ujsShgMomDTO) {
        return this.ujsService.UJSShgMomAdd(request, ujsShgMomDTO);
    }
    async listShgMom(request) {
        return this.ujsService.UJSShgMomList(request);
    }
    async UJSShgGroupDataUploadMonthAdd(request, ujsShgGroupDataUploadMonthDTO) {
        return this.ujsService.UJSShgGroupDataUploadMonthAdd(request, ujsShgGroupDataUploadMonthDTO);
    }
    async listShgGroupDataUploadMonth(request) {
        return this.ujsService.UJSShgGroupDataUploadMonthList(request);
    }
    async UJSShgMemberSavingAdd(request, ujsShgMemberSavingDTO) {
        return this.ujsService.UJSShgMemberSavingAdd(request, ujsShgMemberSavingDTO);
    }
    async listShgMemberSaving(request) {
        return this.ujsService.UJSShgMemberSavingList(request);
    }
    async UJSShgGroupDetailInfoAdd(request, ujsShgGroupDetailsInfoDTO) {
        return this.ujsService.UJSShgGroupDetailInfoAdd(request, ujsShgGroupDetailsInfoDTO);
    }
    async listShgGroupDetailInfo(request) {
        return this.ujsService.UJSShgGroupDetailInfoList(request);
    }
};
exports.UjsController = UjsController;
__decorate([
    (0, common_1.Post)("AddDepartment"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSDepartmentDTO_1.UJSDepartmentDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSDepartmentAdd", null);
__decorate([
    (0, common_1.Get)('ListDepartment'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listDepartment", null);
__decorate([
    (0, common_1.Post)("UpdateDepartment"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSDepartmentUpdateDTO_1.UJSDepartmentUpdateDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSDepartmentUpdate", null);
__decorate([
    (0, common_1.Post)("DeleteDepartment"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSDepartmentDeleteDTO_1.UJSDepartmentDeleteDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSDepartmentDelete", null);
__decorate([
    (0, common_1.Post)("AddShgGroup"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgGroupDTO_1.UJSShgGroupDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgGroupAdd", null);
__decorate([
    (0, common_1.Get)('ListShgGroup'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgGroup", null);
__decorate([
    (0, common_1.Post)("AddShgMember"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgMemberDTO_1.UJSShgMemberDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgMemberAdd", null);
__decorate([
    (0, common_1.Get)('ListShgMember'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgMember", null);
__decorate([
    (0, common_1.Post)("AddUsers"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSUsersDTO_1.UJSUsersDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSUserAdd", null);
__decorate([
    (0, common_1.Get)('ListUser'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listUser", null);
__decorate([
    (0, common_1.Post)("AddRole"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)('permissions')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSRoleDTO_1.UJSRoleDTO, Array]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSRoleAdd", null);
__decorate([
    (0, common_1.Get)('ListRole'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listRole", null);
__decorate([
    (0, common_1.Post)("AddMigration"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSMigrationDTO_1.UJSMigrationDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSMigrationAdd", null);
__decorate([
    (0, common_1.Get)('ListMigration'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listMigration", null);
__decorate([
    (0, common_1.Post)("AddFailedJobs"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSFailedJobsDTO_1.UJSFailedJobDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSFailedJobsAdd", null);
__decorate([
    (0, common_1.Get)('ListFailedJobs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listFailedJobs", null);
__decorate([
    (0, common_1.Post)("AddBranch"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSBranchDTO_1.UJSBranchDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSBranchAdd", null);
__decorate([
    (0, common_1.Get)('ListBranch'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listBranch", null);
__decorate([
    (0, common_1.Post)("AddBackupShgGroup"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSBackupShgGroupDataUploadMonthDTO_1.UJSBackupShgGroupDataUploadMonthDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSBackupShgGroupAdd", null);
__decorate([
    (0, common_1.Get)('ListBackupShgGroup'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listBackupShgGroup", null);
__decorate([
    (0, common_1.Post)("AddPersonalAccessToken"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSPersonalAccessTokenDTO_1.UJSPersonalAccessTokenDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSPersonalAccessTokenAdd", null);
__decorate([
    (0, common_1.Get)('ListPersonalAccessToken'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "lisPersonalAccessToken", null);
__decorate([
    (0, common_1.Post)("AddShgExpenses"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSHGExpansesDTO_1.UJSSHGExpansesDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSSHGExpensesAdd", null);
__decorate([
    (0, common_1.Get)('ListShgExpenses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listSHGExpenses", null);
__decorate([
    (0, common_1.Post)("AddShgLoanRepayment"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSHGLoanRepaymentDTO_1.UJSSHGLoanRepaymentDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgLoanRepaymentAdd", null);
__decorate([
    (0, common_1.Get)('ListShgLoanRepayment'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgLoanRepayment", null);
__decorate([
    (0, common_1.Post)("AddState"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSStateDTO_1.UJSStateDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSStateAdd", null);
__decorate([
    (0, common_1.Get)('ListState'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listState", null);
__decorate([
    (0, common_1.Post)("AddShgTraning"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgtraningDTO_1.UJSSHGTraningDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgTraningAdd", null);
__decorate([
    (0, common_1.Get)('ListShgTraning'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgTraning", null);
__decorate([
    (0, common_1.Post)("AddShgActiveModelFarmer"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgActiveModelFarmerDTO_1.UJSSHGActiveModelFarmerDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgActiveModelFarmerAdd", null);
__decorate([
    (0, common_1.Get)('ListShgActiveModelFarmer'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgActiveModelFarmer", null);
__decorate([
    (0, common_1.Post)("AddShgAttendance"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgAttendanceDTO_1.UJSShgAttendanceDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgAttendanceAdd", null);
__decorate([
    (0, common_1.Get)('ListShgAttendance'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgAttendance", null);
__decorate([
    (0, common_1.Post)("AddShgContact"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgContactDTO_1.UJSShgContactDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgContactAdd", null);
__decorate([
    (0, common_1.Get)('ListShgContact'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgContact", null);
__decorate([
    (0, common_1.Post)("AddShgDataLock"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgDataLockDTO_1.UJSShgDataLockDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgDataLockAdd", null);
__decorate([
    (0, common_1.Get)('ListShgDataLock'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgDataLock", null);
__decorate([
    (0, common_1.Post)("AddBankLoanAllotment"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSHgBankAllotmentDTO_1.UJSBankAllotmentDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgBankLoanAllotmentAdd", null);
__decorate([
    (0, common_1.Get)('ListBankLoanAllotment'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgBankLoanAllotment", null);
__decorate([
    (0, common_1.Post)("AddBankLoan"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSBankLoanDTO_1.UJSBankLoanDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgBankLoanAdd", null);
__decorate([
    (0, common_1.Get)('ListBankLoan'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgBankLoan", null);
__decorate([
    (0, common_1.Post)("AddShgBank"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSBankDTO_1.UJSBankDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgBankAdd", null);
__decorate([
    (0, common_1.Get)('ListBank'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgBank", null);
__decorate([
    (0, common_1.Post)("AddShgAuditing"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgAuditingDTO_1.UJSShgAuditingDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgAuditingAdd", null);
__decorate([
    (0, common_1.Get)('ListAuditing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgAuditing", null);
__decorate([
    (0, common_1.Post)("AddShgDataUpload"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgDataUploadDTO_1.UJSShgDataUploadDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgDataUploadAdd", null);
__decorate([
    (0, common_1.Get)('ListDataUpload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgDataUpload", null);
__decorate([
    (0, common_1.Post)("AddShgDigiSakhi"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgDigiSakhiDTO_1.UJSShgDigiSakhiDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgDigiSakhiAdd", null);
__decorate([
    (0, common_1.Get)('ListDigiSakhi'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgDigiSakhi", null);
__decorate([
    (0, common_1.Post)("AddShgFpo"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgFpoDTO_1.UJSShgFpoDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgFpoAdd", null);
__decorate([
    (0, common_1.Get)('ListShgFpo'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgFpo", null);
__decorate([
    (0, common_1.Post)("AddShgFedrationReport"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgFedrationReportDTO_1.UJSSHGFedrationReportDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgFedrationReportAdd", null);
__decorate([
    (0, common_1.Get)('ListShgFedrationReport'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgFedrationReport", null);
__decorate([
    (0, common_1.Post)("AddShgFedration"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgFedrationDTO_1.UJSSHGFedrationDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgFedrationAdd", null);
__decorate([
    (0, common_1.Get)('ListShgFedration'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgFedration", null);
__decorate([
    (0, common_1.Post)("AddShgMom"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgMomDTO_1.UJSShgMomDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgMomAdd", null);
__decorate([
    (0, common_1.Get)('ListShgMom'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgMom", null);
__decorate([
    (0, common_1.Post)("AddShgGroupDataUpload"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgGroupDataUploadMonthDTO_1.UJSShgGroupDataUploadMonthDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgGroupDataUploadMonthAdd", null);
__decorate([
    (0, common_1.Get)('ListShgGroupDataUpload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgGroupDataUploadMonth", null);
__decorate([
    (0, common_1.Post)("AddShgMemberSaving"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSSShgMemberSavingDTO_1.UJSShgMemberSavingDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgMemberSavingAdd", null);
__decorate([
    (0, common_1.Get)('ListShgMemberSaving'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgMemberSaving", null);
__decorate([
    (0, common_1.Post)("AddShgGroupDetailInfo"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UJSShgGroupDetailsInfoDTO_1.UJSShgGroupDetailsInfoDTO]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "UJSShgGroupDetailInfoAdd", null);
__decorate([
    (0, common_1.Get)('ListShgGroupDetailInfo'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UjsController.prototype, "listShgGroupDetailInfo", null);
exports.UjsController = UjsController = __decorate([
    (0, common_1.Controller)("ujs"),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [ujs_service_1.UjsService,
        common_1.Logger])
], UjsController);
//# sourceMappingURL=ujs.controller.js.map