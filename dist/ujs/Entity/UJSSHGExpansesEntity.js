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
exports.UJSSHGExpansesEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSSHGExpansesEntity = class UJSSHGExpansesEntity {
};
exports.UJSSHGExpansesEntity = UJSSHGExpansesEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_id', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UJSSHGExpansesEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'animator_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "animator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transport', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tea', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "tea", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telephone', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "meeting", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'stationary', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "stationary", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'federation', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "federation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'other_expanses', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "other_expanses", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'datetime', type: 'datetime' }),
    __metadata("design:type", Date)
], UJSSHGExpansesEntity.prototype, "datetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSSHGExpansesEntity.prototype, "total", void 0);
exports.UJSSHGExpansesEntity = UJSSHGExpansesEntity = __decorate([
    (0, typeorm_1.Entity)('SHG_expanses')
], UJSSHGExpansesEntity);
//# sourceMappingURL=UJSSHGExpansesEntity.js.map