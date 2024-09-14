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
exports.SignFeedCMSMediaEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSMediaEntity = class SignFeedCMSMediaEntity {
};
exports.SignFeedCMSMediaEntity = SignFeedCMSMediaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "mediaID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'originalFilename', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "originalFilename", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storedAs', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "storedAs", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'MD5', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "MD5", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'FileSize', type: 'bigint' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "FileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'retired', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "retired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isEdited', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "isEdited", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'editedMediaID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "editedMediaID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moduleSystemFile', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "moduleSystemFile", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "valid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expires', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "expires", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'released', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSMediaEntity.prototype, "released", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apiRef', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "apiRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdDt', type: 'datetime' }),
    __metadata("design:type", Date)
], SignFeedCMSMediaEntity.prototype, "createdDt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modifiedDt', type: 'datetime' }),
    __metadata("design:type", Date)
], SignFeedCMSMediaEntity.prototype, "modifiedDt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSMediaEntity.prototype, "organization", void 0);
exports.SignFeedCMSMediaEntity = SignFeedCMSMediaEntity = __decorate([
    (0, typeorm_1.Entity)('media')
], SignFeedCMSMediaEntity);
//# sourceMappingURL=SignFeedCMSMediaEntity.js.map