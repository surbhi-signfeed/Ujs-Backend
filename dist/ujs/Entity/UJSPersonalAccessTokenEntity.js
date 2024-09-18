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
exports.UJSPersonalAccessTokenEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSPersonalAccessTokenEntity = class UJSPersonalAccessTokenEntity {
};
exports.UJSPersonalAccessTokenEntity = UJSPersonalAccessTokenEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UJSPersonalAccessTokenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tokenable_type', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSPersonalAccessTokenEntity.prototype, "tokenable_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tokenable_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UJSPersonalAccessTokenEntity.prototype, "tokenable_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UJSPersonalAccessTokenEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token', type: 'varchar', length: 64, unique: true }),
    __metadata("design:type", String)
], UJSPersonalAccessTokenEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'abilities', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UJSPersonalAccessTokenEntity.prototype, "abilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_used_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], UJSPersonalAccessTokenEntity.prototype, "last_used_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], UJSPersonalAccessTokenEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], UJSPersonalAccessTokenEntity.prototype, "updated_at", void 0);
exports.UJSPersonalAccessTokenEntity = UJSPersonalAccessTokenEntity = __decorate([
    (0, typeorm_1.Entity)('personal_access_tokens'),
    (0, typeorm_1.Index)('personal_access_tokens_tokenable_type_tokenable_id_index', ['tokenable_type', 'tokenable_id'])
], UJSPersonalAccessTokenEntity);
//# sourceMappingURL=UJSPersonalAccessTokenEntity.js.map