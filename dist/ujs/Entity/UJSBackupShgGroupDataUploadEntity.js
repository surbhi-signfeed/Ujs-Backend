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
exports.UJSBackupShgGroupDataUploadMonthEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSBackupShgGroupDataUploadMonthEntity = class UJSBackupShgGroupDataUploadMonthEntity {
};
exports.UJSBackupShgGroupDataUploadMonthEntity = UJSBackupShgGroupDataUploadMonthEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_date', type: 'date', nullable: true }),
    __metadata("design:type", String)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "meeting_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_remaining', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "last_remaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tot_saving', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "tot_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'internal_loan', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "internal_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'internal_loan_int', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "internal_loan_int", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_loan_amt', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'penalt_other', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "penalt_other", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fix_loan1', type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "fix_loan1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_loan_amt1', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'special_amt', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "special_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'internal_amt', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "internal_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grp_exp', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "grp_exp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tot_expanse', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "tot_expanse", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_loan_amt_sub', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt_sub", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_saving', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "bank_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cash_inhand', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "cash_inhand", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'federation', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "federation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'others', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UJSBackupShgGroupDataUploadMonthEntity.prototype, "others", void 0);
exports.UJSBackupShgGroupDataUploadMonthEntity = UJSBackupShgGroupDataUploadMonthEntity = __decorate([
    (0, typeorm_1.Entity)('backup_shg_group_data_upload_month')
], UJSBackupShgGroupDataUploadMonthEntity);
//# sourceMappingURL=UJSBackupShgGroupDataUploadEntity.js.map