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
exports.SignFeedCMSDisplayGroupEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSDisplayGroupEntity = class SignFeedCMSDisplayGroupEntity {
};
exports.SignFeedCMSDisplayGroupEntity = SignFeedCMSDisplayGroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSDisplayGroupEntity.prototype, "DisplayGroupID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DisplayGroup', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayGroupEntity.prototype, "DisplayGroup", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Description', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayGroupEntity.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayGroupEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'IsDisplaySpecific', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayGroupEntity.prototype, "IsDisplaySpecific", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isDynamic', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayGroupEntity.prototype, "isDynamic", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dynamicCriteria', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayGroupEntity.prototype, "dynamicCriteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayGroupEntity.prototype, "organization", void 0);
exports.SignFeedCMSDisplayGroupEntity = SignFeedCMSDisplayGroupEntity = __decorate([
    (0, typeorm_1.Entity)('displayGroup')
], SignFeedCMSDisplayGroupEntity);
//# sourceMappingURL=SignFeedCMSDisplayGroupEntity.js.map