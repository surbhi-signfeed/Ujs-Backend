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
exports.UJSShgMemberUpdateDTO = void 0;
const class_validator_1 = require("class-validator");
class UJSShgMemberUpdateDTO {
}
exports.UJSShgMemberUpdateDTO = UJSShgMemberUpdateDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "member_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "member_name_eng", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "group_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "animator_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "animator_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "leader_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "HusbandFather_Name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "village", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "whatsapp_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "adhaar_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "dob", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "education", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "primary_occu", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "religion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "house_num", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "block_taluk", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "gram_punchayat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "pincode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "bank_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "branch_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "bank_ac", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "bank_ifsc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "aadhar_seeding_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "voter_num", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "mngrega_num", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "sub_cat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "loan_taken", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "mfi_bank_loan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "annual_income", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "diff_abled", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "total_household_member", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "member_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "social_strata", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberUpdateDTO.prototype, "house_hold_above", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UJSShgMemberUpdateDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "monthlySaving", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "fedrationSaving", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UJSShgMemberUpdateDTO.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "openingBal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UJSShgMemberUpdateDTO.prototype, "fix_loan", void 0);
//# sourceMappingURL=UJSShgMemberUpdateDTO.js.map