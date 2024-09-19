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
exports.UJSShgDataLockEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgDataLockEntity = class UJSShgDataLockEntity {
};
exports.UJSShgDataLockEntity = UJSShgDataLockEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgDataLockEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'int' }),
    __metadata("design:type", Number)
], UJSShgDataLockEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lock_date', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgDataLockEntity.prototype, "lock_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transaction', type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDataLockEntity.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'boolean' }),
    __metadata("design:type", Boolean)
], UJSShgDataLockEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updatedAt', type: 'date' }),
    __metadata("design:type", Date)
], UJSShgDataLockEntity.prototype, "updatedAt", void 0);
exports.UJSShgDataLockEntity = UJSShgDataLockEntity = __decorate([
    (0, typeorm_1.Entity)('shg_data_lock')
], UJSShgDataLockEntity);
//# sourceMappingURL=UJSShgDataLockEntity.js.map