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
exports.SignFeedCMSResolutionEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSResolutionEntity = class SignFeedCMSResolutionEntity {
};
exports.SignFeedCMSResolutionEntity = SignFeedCMSResolutionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "resolutionID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'resolution', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSResolutionEntity.prototype, "resolution", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSResolutionEntity.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'width', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'height', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'intended_width', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "intended_width", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'intended_height', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "intended_height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'version', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'enabled', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSResolutionEntity.prototype, "userId", void 0);
exports.SignFeedCMSResolutionEntity = SignFeedCMSResolutionEntity = __decorate([
    (0, typeorm_1.Entity)('resolution')
], SignFeedCMSResolutionEntity);
//# sourceMappingURL=SignFeedCMSResolutionEntity.js.map