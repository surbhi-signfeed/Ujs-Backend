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
exports.UJSShgAuditingEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgAuditingEntity = class UJSShgAuditingEntity {
};
exports.UJSShgAuditingEntity = UJSShgAuditingEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgAuditingEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_id', type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgAuditingEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'animator_id', type: 'int' }),
    __metadata("design:type", Number)
], UJSShgAuditingEntity.prototype, "animator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auditor_name', type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgAuditingEntity.prototype, "auditor_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'int' }),
    __metadata("design:type", Number)
], UJSShgAuditingEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fromdate', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgAuditingEntity.prototype, "fromdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'todate', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgAuditingEntity.prototype, "todate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auditdate', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgAuditingEntity.prototype, "auditdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_date', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgAuditingEntity.prototype, "created_date", void 0);
exports.UJSShgAuditingEntity = UJSShgAuditingEntity = __decorate([
    (0, typeorm_1.Entity)('shg_auditing')
], UJSShgAuditingEntity);
//# sourceMappingURL=UJSShgAuditingEntity.js.map