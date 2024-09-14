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
exports.SignFeedCMSWidgetEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSWidgetEntity = class SignFeedCMSWidgetEntity {
};
exports.SignFeedCMSWidgetEntity = SignFeedCMSWidgetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "widgetId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'playlistId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "playlistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ownerId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSWidgetEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayOrder', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'useDuration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "useDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'calculatedDuration', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "calculatedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdDt', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "createdDt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modifiedDt', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSWidgetEntity.prototype, "modifiedDt", void 0);
exports.SignFeedCMSWidgetEntity = SignFeedCMSWidgetEntity = __decorate([
    (0, typeorm_1.Entity)('widget')
], SignFeedCMSWidgetEntity);
//# sourceMappingURL=SignFeedCMSWidgetEntity.js.map