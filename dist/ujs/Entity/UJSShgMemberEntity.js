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
exports.UJSShgMemberEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgMemberEntity = class UJSShgMemberEntity {
};
exports.UJSShgMemberEntity = UJSShgMemberEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgMemberEntity.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'member_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "member_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'leader_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "leader_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "state_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'district_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "district_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'village_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "village_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dob', type: 'date' }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'husband_or_father_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "husband_or_father_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'block_taluka', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "block_taluka", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mobile', type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'whatsapp', type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'education', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "education", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'primary_occupation', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "primary_occupation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'religion', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "religion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aadhar_number', type: 'varchar', length: 12 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "aadhar_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'voter_number', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "voter_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mnrega_number', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "mnrega_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'house_number', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "house_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pin_code', type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "pin_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gram_panchayat', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "gram_panchayat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "bank_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_branch', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "bank_branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_account', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "bank_account", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_ifsc', type: 'varchar', length: 11 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "bank_ifsc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aadhar_seeding_status', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "aadhar_seeding_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loan_taken', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "loan_taken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mfi_bank_loan', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "mfi_bank_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'annual_income', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UJSShgMemberEntity.prototype, "annual_income", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_household_member', type: 'int' }),
    __metadata("design:type", Number)
], UJSShgMemberEntity.prototype, "total_household_member", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_monthly_saving', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UJSShgMemberEntity.prototype, "total_monthly_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_federation_saving', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UJSShgMemberEntity.prototype, "total_federation_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'differently_abled', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "differently_abled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], UJSShgMemberEntity.prototype, "status", void 0);
exports.UJSShgMemberEntity = UJSShgMemberEntity = __decorate([
    (0, typeorm_1.Entity)('SHG_Member')
], UJSShgMemberEntity);
//# sourceMappingURL=UJSShgMemberEntity.js.map