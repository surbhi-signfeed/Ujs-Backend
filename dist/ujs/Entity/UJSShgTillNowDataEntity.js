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
exports.UJSShgTillNowDataEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgTillNowDataEntity = class UJSShgTillNowDataEntity {
};
exports.UJSShgTillNowDataEntity = UJSShgTillNowDataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UJSShgTillNowDataEntity.prototype, "meeting_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "member_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "internal_income", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "submit_bank_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "internal_amt1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "penalty1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "fix_loan2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "special_amt1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "others1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "distributed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "grp_expanses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "tot_submitted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "remaining_loan_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "bank_saving_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "cash_in_hand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "federation1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], UJSShgTillNowDataEntity.prototype, "total_clf_amount", void 0);
exports.UJSShgTillNowDataEntity = UJSShgTillNowDataEntity = __decorate([
    (0, typeorm_1.Entity)('Shg_till_now_data')
], UJSShgTillNowDataEntity);
//# sourceMappingURL=UJSShgTillNowDataEntity.js.map