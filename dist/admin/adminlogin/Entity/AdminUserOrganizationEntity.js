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
exports.AdminUserOrganizationEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminUserOrganizationEntity = class AdminUserOrganizationEntity {
};
exports.AdminUserOrganizationEntity = AdminUserOrganizationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminUserOrganizationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'OrganizationName', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "OrganizationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'OrganizationAddress1', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "OrganizationAddress1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'OrganizationAddress2', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "OrganizationAddress2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'City', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "City", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'State', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "State", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Country', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "Country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'GSTNo', type: 'varchar' }),
    __metadata("design:type", String)
], AdminUserOrganizationEntity.prototype, "GSTNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Status', type: 'boolean' }),
    __metadata("design:type", Boolean)
], AdminUserOrganizationEntity.prototype, "Status", void 0);
exports.AdminUserOrganizationEntity = AdminUserOrganizationEntity = __decorate([
    (0, typeorm_1.Entity)('organization')
], AdminUserOrganizationEntity);
//# sourceMappingURL=AdminUserOrganizationEntity.js.map