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
exports.UJSShgTraningEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgTraningEntity = class UJSShgTraningEntity {
};
exports.UJSShgTraningEntity = UJSShgTraningEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgTraningEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meeting_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTraningEntity.prototype, "meeting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "animator_id", type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTraningEntity.prototype, "animator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "group_id", type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UJSShgTraningEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'traning', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSShgTraningEntity.prototype, "traning", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'traningDate', type: 'date', nullable: true }),
    __metadata("design:type", String)
], UJSShgTraningEntity.prototype, "traningDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_date', type: 'int' }),
    __metadata("design:type", String)
], UJSShgTraningEntity.prototype, "created_Date", void 0);
exports.UJSShgTraningEntity = UJSShgTraningEntity = __decorate([
    (0, typeorm_1.Entity)('shg_traning')
], UJSShgTraningEntity);
//# sourceMappingURL=UJSShgTraningEntity.js.map