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
exports.UJSBankLoanUpdateDTO = void 0;
const class_validator_1 = require("class-validator");
class UJSBankLoanUpdateDTO {
}
exports.UJSBankLoanUpdateDTO = UJSBankLoanUpdateDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "loan_no", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "bank_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "meeting_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "group_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "member_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "animator_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "member_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "group_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "animator_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "loan_amt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "interest_rate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "interest", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "settle_interest", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "loan_period", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UJSBankLoanUpdateDTO.prototype, "loan_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSBankLoanUpdateDTO.prototype, "loan_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "settle_amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "total_emi", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UJSBankLoanUpdateDTO.prototype, "current_emi", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UJSBankLoanUpdateDTO.prototype, "meetingDate", void 0);
//# sourceMappingURL=UJSSBankLoanUpdateDTO.js.map