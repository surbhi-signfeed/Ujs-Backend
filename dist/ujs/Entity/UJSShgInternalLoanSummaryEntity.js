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
exports.UJSShgInternalLoanSummaryEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgInternalLoanSummaryEntity = class UJSShgInternalLoanSummaryEntity {
};
exports.UJSShgInternalLoanSummaryEntity = UJSShgInternalLoanSummaryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgInternalLoanSummaryEntity.prototype, "shg_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgInternalLoanSummaryEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "loan_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "tenure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "recover_amt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UJSShgInternalLoanSummaryEntity.prototype, "datetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgInternalLoanSummaryEntity.prototype, "status", void 0);
exports.UJSShgInternalLoanSummaryEntity = UJSShgInternalLoanSummaryEntity = __decorate([
    (0, typeorm_1.Entity)('shg_internal_loan_summary')
], UJSShgInternalLoanSummaryEntity);
//# sourceMappingURL=UJSShgInternalLoanSummaryEntity.js.map