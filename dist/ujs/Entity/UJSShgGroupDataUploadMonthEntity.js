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
exports.UJSShgGroupDataUploadMonthEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgGroupDataUploadMonthEntity = class UJSShgGroupDataUploadMonthEntity {
};
exports.UJSShgGroupDataUploadMonthEntity = UJSShgGroupDataUploadMonthEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UJSShgGroupDataUploadMonthEntity.prototype, "meeting_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "last_remaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "tot_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "internal_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "internal_loan_int", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "penalt_other", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "fix_loan1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "special_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "internal_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "grp_exp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "tot_expanse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "bank_loan_amt_sub", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "bank_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "cash_inhand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "federation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgGroupDataUploadMonthEntity.prototype, "others", void 0);
exports.UJSShgGroupDataUploadMonthEntity = UJSShgGroupDataUploadMonthEntity = __decorate([
    (0, typeorm_1.Entity)('shg_data_upload')
], UJSShgGroupDataUploadMonthEntity);
//# sourceMappingURL=UJSShgGroupDataUploadMonthEntity.js.map