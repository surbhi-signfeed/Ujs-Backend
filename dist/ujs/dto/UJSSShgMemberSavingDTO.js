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
exports.UJSShgMemberSavingDTO = void 0;
const class_validator_1 = require("class-validator");
class UJSShgMemberSavingDTO {
}
exports.UJSShgMemberSavingDTO = UJSShgMemberSavingDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UJSShgMemberSavingDTO.prototype, "meeting_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "group_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "animator_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "member_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UJSShgMemberSavingDTO.prototype, "collectionDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UJSShgMemberSavingDTO.prototype, "federation_amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UJSShgMemberSavingDTO.prototype, "meetingDate", void 0);
//# sourceMappingURL=UJSSShgMemberSavingDTO.js.map