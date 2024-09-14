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
exports.SignFeedCMSLayoutEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSLayoutEntity = class SignFeedCMSLayoutEntity {
};
exports.SignFeedCMSLayoutEntity = SignFeedCMSLayoutEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "layoutID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'layout', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "layout", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdDT', type: 'datetime' }),
    __metadata("design:type", Date)
], SignFeedCMSLayoutEntity.prototype, "createdDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modifiedDT', type: 'datetime' }),
    __metadata("design:type", Date)
], SignFeedCMSLayoutEntity.prototype, "modifiedDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tags', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'retired', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "retired", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'backgroundImageId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "backgroundImageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'width', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'height', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'backgroundColor', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "backgroundColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'backgroundzIndex', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "backgroundzIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'schemaVersion', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSLayoutEntity.prototype, "schemaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'statusMessage', type: 'text' }),
    __metadata("design:type", String)
], SignFeedCMSLayoutEntity.prototype, "statusMessage", void 0);
exports.SignFeedCMSLayoutEntity = SignFeedCMSLayoutEntity = __decorate([
    (0, typeorm_1.Entity)('layout')
], SignFeedCMSLayoutEntity);
//# sourceMappingURL=SignFeedCMSLayoutEntity.js.map