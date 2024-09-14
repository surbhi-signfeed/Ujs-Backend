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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../admin/auth/jwt-auth.guard");
const api_service_1 = require("./api.service");
const MenuBoardItemLockDTO_1 = require("./dto/MenuBoardItemLockDTO");
let ApiController = class ApiController {
    constructor(apiService, logger) {
        this.apiService = apiService;
        this.logger = logger;
    }
    async MenuBoard(menuBoardDTO) {
        console.log(menuBoardDTO);
        return this.apiService.MenuBoard(menuBoardDTO);
    }
    async MenuBoardItemLock(menuBoardItemLockDTO) {
        return this.apiService.MenuBoardItemLock(menuBoardItemLockDTO);
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Post)('MenuBoard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "MenuBoard", null);
__decorate([
    (0, common_1.Post)('MenuBoardItemLock'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MenuBoardItemLockDTO_1.MenuBoardItemLockDTO]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "MenuBoardItemLock", null);
exports.ApiController = ApiController = __decorate([
    (0, common_1.Controller)('api'),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [api_service_1.ApiService, common_1.Logger])
], ApiController);
//# sourceMappingURL=api.controller.js.map