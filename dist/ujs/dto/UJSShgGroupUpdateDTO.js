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
exports.UJSShgGroupUpdateDTO = void 0;
const class_validator_1 = require("class-validator");
class UJSShgGroupUpdateDTO {
}
exports.UJSShgGroupUpdateDTO = UJSShgGroupUpdateDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "group_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "group_leader", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "village", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "block_taluk", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "pincode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UJSShgGroupUpdateDTO.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "animator_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "animator", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "bank_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "bank_branch", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "bank_ac", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "formationDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "fed_amt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "cashatbank", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgGroupUpdateDTO.prototype, "totalMember", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "transactionstatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UJSShgGroupUpdateDTO.prototype, "monthlymeeting", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UJSShgGroupUpdateDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "TotalmonthlySaving", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalMeeting", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "savingAmt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalInternalLoan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalInternalLoanRecover", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalInternalLoanInterest", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalExpanses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "TotalBankLoan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "totalbankloanrecover", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgGroupUpdateDTO.prototype, "TotalBankLoanInterest", void 0);
//# sourceMappingURL=UJSShgGroupUpdateDTO.js.map