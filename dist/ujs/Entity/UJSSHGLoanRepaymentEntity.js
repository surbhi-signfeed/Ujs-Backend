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
exports.UJSSHGLoanRepaymentEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSSHGLoanRepaymentEntity = class UJSSHGLoanRepaymentEntity {
};
exports.UJSSHGLoanRepaymentEntity = UJSSHGLoanRepaymentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_id', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UJSSHGLoanRepaymentEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'emi_amount', type: 'decimal', precision: 10, scale: 2, default: '0.00' }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "emi_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'interest', type: 'decimal', precision: 10, scale: 2, default: '0.00' }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'member_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'member_name', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UJSSHGLoanRepaymentEntity.prototype, "member_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'animator_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "animator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'emi_no', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGLoanRepaymentEntity.prototype, "emi_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'emi_date', type: 'datetime' }),
    __metadata("design:type", Date)
], UJSSHGLoanRepaymentEntity.prototype, "emi_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meetingDate', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UJSSHGLoanRepaymentEntity.prototype, "meetingDate", void 0);
exports.UJSSHGLoanRepaymentEntity = UJSSHGLoanRepaymentEntity = __decorate([
    (0, typeorm_1.Entity)('SHG_loan_repayment')
], UJSSHGLoanRepaymentEntity);
//# sourceMappingURL=UJSSHGLoanRepaymentEntity.js.map