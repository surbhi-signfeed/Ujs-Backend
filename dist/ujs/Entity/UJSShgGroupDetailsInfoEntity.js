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
exports.UJSShgGroupDetailsInfoEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgGroupDetailsInfoEntity = class UJSShgGroupDetailsInfoEntity {
};
exports.UJSShgGroupDetailsInfoEntity = UJSShgGroupDetailsInfoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgGroupDetailsInfoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "NameOfSHG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "NameOfDhani", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "NameOfVillage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "NameOfGramPanchayat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "DateOfFormation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "CordinatorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UJSShgGroupDetailsInfoEntity.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Month", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "ProjectIstandIInd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "BankLinkedge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "BankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "BankBranch", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "BankAcNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "LOANSTATUS", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "LoanEmiLastMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Totalmeeting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "TotalmemberOfSHG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "ThisMonthSaving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Regularsavings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Interestincome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Groupfund", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Penalty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "fedretioncharge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "fadretionThisMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "fedretion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "interloanLoan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "GroupExpenses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "SHGfixloan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Bank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Manch", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "fadretion1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Cashinhand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Total1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "Different", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSShgGroupDetailsInfoEntity.prototype, "attendanceExpected", void 0);
exports.UJSShgGroupDetailsInfoEntity = UJSShgGroupDetailsInfoEntity = __decorate([
    (0, typeorm_1.Entity)('shg_group_details_info')
], UJSShgGroupDetailsInfoEntity);
//# sourceMappingURL=UJSShgGroupDetailsInfoEntity.js.map