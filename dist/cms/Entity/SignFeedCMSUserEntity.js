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
exports.SignFeedCMSUserEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSUserEntity = class SignFeedCMSUserEntity {
};
exports.SignFeedCMSUserEntity = SignFeedCMSUserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSUserEntity.prototype, "UserID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UserType', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "UserType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UserName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "UserName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UserPassword', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "UserPassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isPasswordChangeRequired', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSUserEntity.prototype, "isPasswordChangeRequired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastaccessed', type: 'datetime' }),
    __metadata("design:type", Date)
], SignFeedCMSUserEntity.prototype, "lastaccessed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'homePageId', type: 'int' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "homePageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Retired', type: 'int' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "Retired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CSPRNG', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSUserEntity.prototype, "CSPRNG", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newUserWizard', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSUserEntity.prototype, "newUserWizard", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'firstName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ref1', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "ref1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ref2', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "ref2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ref3', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "ref3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ref4', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "ref4", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ref5', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "ref5", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'OrganizationId', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSUserEntity.prototype, "OrganizationId", void 0);
exports.SignFeedCMSUserEntity = SignFeedCMSUserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], SignFeedCMSUserEntity);
//# sourceMappingURL=SignFeedCMSUserEntity.js.map