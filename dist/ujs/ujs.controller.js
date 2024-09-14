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
exports.UjsController = UjsController = __decorate([
    (0, common_1.Controller)("ujs"),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [ujs_service_1.UjsService,
        common_1.Logger])
], UjsController);
//# sourceMappingURL=ujs.controller.js.map