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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserInfoEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminUserInfoEntity = class AdminUserInfoEntity {
};
exports.AdminUserInfoEntity = AdminUserInfoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminUserInfoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'active', type: 'boolean' }),
    __metadata("design:type", Boolean)
], AdminUserInfoEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserInfoEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserInfoEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', type: 'int' }),
    __metadata("design:type", Number)
], AdminUserInfoEntity.prototype, "role", void 0);
exports.AdminUserInfoEntity = AdminUserInfoEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], AdminUserInfoEntity);
//# sourceMappingURL=AdminUserInfoEntity.js.map