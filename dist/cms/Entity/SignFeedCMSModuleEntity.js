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
exports.SignFeedCMSModuleEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSModuleEntity = class SignFeedCMSModuleEntity {
};
exports.SignFeedCMSModuleEntity = SignFeedCMSModuleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "ModuleID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Module', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "Module", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Enabled', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "Enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'RegionSpecific', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "RegionSpecific", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Description', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ImageUri', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "ImageUri", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SchemaVersion', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "SchemaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ValidExtensions', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "ValidExtensions", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'PreviewEnabled', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "PreviewEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'assignable', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "assignable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'render_as', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "render_as", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'settings', type: 'text' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'viewPath', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "viewPath", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'class', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'defaultDuration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSModuleEntity.prototype, "defaultDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'installName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "installName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSModuleEntity.prototype, "organization", void 0);
exports.SignFeedCMSModuleEntity = SignFeedCMSModuleEntity = __decorate([
    (0, typeorm_1.Entity)('module')
], SignFeedCMSModuleEntity);
//# sourceMappingURL=SignFeedCMSModuleEntity.js.map