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
exports.SignFeedCMSDaypartEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSDaypartEntity = class SignFeedCMSDaypartEntity {
};
exports.SignFeedCMSDaypartEntity = SignFeedCMSDaypartEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "dayPartId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDaypartEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDaypartEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'startTime', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endTime', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isRetired', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "isRetired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'exceptions', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDaypartEntity.prototype, "exceptions", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isAlways', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDaypartEntity.prototype, "isAlways", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isCustom', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDaypartEntity.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDaypartEntity.prototype, "organization", void 0);
exports.SignFeedCMSDaypartEntity = SignFeedCMSDaypartEntity = __decorate([
    (0, typeorm_1.Entity)('daypart')
], SignFeedCMSDaypartEntity);
//# sourceMappingURL=SignFeedCMSDaypartEntity.js.map