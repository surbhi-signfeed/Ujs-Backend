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
exports.UJSShgGroupEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgGroupEntity = class UJSShgGroupEntity {
};
exports.UJSShgGroupEntity = UJSShgGroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgGroupEntity.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_leader', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "group_leader", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'formation_date', type: 'date' }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "formation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "state_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'district_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "district_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'location_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "location_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'village_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "village_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'taluka_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "taluka_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "bank_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_branch', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "bank_branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_account', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "bank_account", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cash_in_hand', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "cash_in_hand", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'federation_amount', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "federation_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cash_at_bank', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "cash_at_bank", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_member', type: 'int' }),
    __metadata("design:type", Number)
], UJSShgGroupEntity.prototype, "total_member", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_meeting_date', type: 'date' }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "last_meeting_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgGroupEntity.prototype, "status", void 0);
exports.UJSShgGroupEntity = UJSShgGroupEntity = __decorate([
    (0, typeorm_1.Entity)('SHG_Group')
], UJSShgGroupEntity);
//# sourceMappingURL=UJSShgGroupEntity.js.map