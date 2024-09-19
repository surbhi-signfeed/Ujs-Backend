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
exports.UJSShgDataUploadEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgDataUploadEntity = class UJSShgDataUploadEntity {
};
exports.UJSShgDataUploadEntity = UJSShgDataUploadEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDataUploadEntity.prototype, "member_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDataUploadEntity.prototype, "HusbandFather_Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDataUploadEntity.prototype, "attendance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "opening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "special_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "installment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "penalty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "fix_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "bank_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "bank_interest", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "new_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "remaining_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UJSShgDataUploadEntity.prototype, "meeting_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDataUploadEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], UJSShgDataUploadEntity.prototype, "datetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "openingBal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', }),
    __metadata("design:type", Number)
], UJSShgDataUploadEntity.prototype, "fixLoan", void 0);
exports.UJSShgDataUploadEntity = UJSShgDataUploadEntity = __decorate([
    (0, typeorm_1.Entity)('shg_data_upload')
], UJSShgDataUploadEntity);
//# sourceMappingURL=UJSShgDataUploadkEntity.js.map