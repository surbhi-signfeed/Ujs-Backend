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
exports.UJSShgGroupSummaryEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgGroupSummaryEntity = class UJSShgGroupSummaryEntity {
};
exports.UJSShgGroupSummaryEntity = UJSShgGroupSummaryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_shg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_meeting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_saving", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_federation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_internal_loan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: true }),
    __metadata("design:type", Number)
], UJSShgGroupSummaryEntity.prototype, "total_bank_loan", void 0);
exports.UJSShgGroupSummaryEntity = UJSShgGroupSummaryEntity = __decorate([
    (0, typeorm_1.Entity)('shg_group_summary')
], UJSShgGroupSummaryEntity);
//# sourceMappingURL=UJSShgGroupSummaryEntity.js.map