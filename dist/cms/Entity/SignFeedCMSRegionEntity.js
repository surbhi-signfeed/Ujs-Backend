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
exports.SignFeedCMSRegionEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSRegionEntity = class SignFeedCMSRegionEntity {
};
exports.SignFeedCMSRegionEntity = SignFeedCMSRegionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'layoutId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "layoutId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ownerId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSRegionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'width', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'height', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'top', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "top", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'left', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "left", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zIndex', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "zIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionEntity.prototype, "duration", void 0);
exports.SignFeedCMSRegionEntity = SignFeedCMSRegionEntity = __decorate([
    (0, typeorm_1.Entity)('region')
], SignFeedCMSRegionEntity);
//# sourceMappingURL=SignFeedCMSRegionEntity.js.map