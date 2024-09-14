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
exports.AdminloginController = void 0;
const common_1 = require("@nestjs/common");
const adminlogin_service_1 = require("./adminlogin.service");
const AdminUserDetailDTO_1 = require("./dto/AdminUserDetailDTO");
const AdminAddUserDTO_1 = require("./dto/AdminAddUserDTO");
const AdminEditUserDTO_1 = require("./dto/AdminEditUserDTO");
const AdminResetUserPasswordDTO_1 = require("./dto/AdminResetUserPasswordDTO");
const AdminUserLoginDTO_1 = require("./dto/AdminUserLoginDTO");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AdminloginController = class AdminloginController {
    constructor(adminloginservice, logger) {
        this.adminloginservice = adminloginservice;
        this.logger = logger;
    }
    async AdminUserList() {
        this.logger.log("Admin UserList");
        return this.adminloginservice.AdminUserList();
    }
    async AdminUserDetail(adminUserdto) {
        this.logger.log("Admin Single User Details");
        return this.adminloginservice.AdminUserDetail(adminUserdto);
    }
    async AdminAddUser(adminaddUserdto) {
        return this.adminloginservice.AdminAddUser(adminaddUserdto);
    }
    async AdminAddUserByAdmin(adminaddUserdto) {
        return this.adminloginservice.AdminAddUserByAdmin(adminaddUserdto);
    }
    async AdminEditUser(admineditUserdto) {
        return this.adminloginservice.AdminEditUser(admineditUserdto);
    }
    async updateStatus(request, userId) {
        return this.adminloginservice.updateUserStatus(request, userId);
    }
    async AdminUserPermission(request) {
        return this.adminloginservice.AdminUserPermission(request);
    }
    sendMail(body) {
        const { usermail, userid } = body;
        this.adminloginservice.sendMail(usermail, userid);
    }
    async AdminResetUserPassword(adminresetUserPassworddto) {
        return this.adminloginservice.AdminResetUserPassword(adminresetUserPassworddto);
    }
    async AdminUserLogin(adminUserLogindto) {
        return this.adminloginservice.AdminUserLogin(adminUserLogindto);
    }
    async AdminValidateUserLogin() {
        return this.adminloginservice.AdminValidateUserLogin();
    }
};
exports.AdminloginController = AdminloginController;
__decorate([
    (0, common_1.Get)('UserList'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminUserList", null);
__decorate([
    (0, common_1.Get)('UserDetail'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminUserDetailDTO_1.AdminUserDetailDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminUserDetail", null);
__decorate([
    (0, common_1.Post)('AddUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminAddUserDTO_1.AdminAddUserDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminAddUser", null);
__decorate([
    (0, common_1.Post)('AddUserByAdmin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminAddUserDTO_1.AdminAddUserDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminAddUserByAdmin", null);
__decorate([
    (0, common_1.Post)('EditUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminEditUserDTO_1.AdminEditUserDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminEditUser", null);
__decorate([
    (0, common_1.Post)('/update-status/:userId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Number]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)("ListUserPermission"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminUserPermission", null);
__decorate([
    (0, common_1.Post)('SendMail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminloginController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Post)('ResetUserPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminResetUserPasswordDTO_1.AdminResetUserPasswordDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminResetUserPassword", null);
__decorate([
    (0, common_1.Post)('UserLogin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminUserLoginDTO_1.AdminUserLoginDTO]),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminUserLogin", null);
__decorate([
    (0, common_1.Get)('AuthMe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminloginController.prototype, "AdminValidateUserLogin", null);
exports.AdminloginController = AdminloginController = __decorate([
    (0, common_1.Controller)('admin'),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [adminlogin_service_1.AdminloginService, common_1.Logger])
], AdminloginController);
//# sourceMappingURL=adminlogin.controller.js.map