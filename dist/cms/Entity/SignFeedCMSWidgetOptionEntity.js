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
exports.SignFeedCMSWidgetOptionEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSWidgetOptionEntity = class SignFeedCMSWidgetOptionEntity {
};
exports.SignFeedCMSWidgetOptionEntity = SignFeedCMSWidgetOptionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSWidgetOptionEntity.prototype, "widgetId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSWidgetOptionEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'option', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSWidgetOptionEntity.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value', type: 'text' }),
    __metadata("design:type", String)
], SignFeedCMSWidgetOptionEntity.prototype, "value", void 0);
exports.SignFeedCMSWidgetOptionEntity = SignFeedCMSWidgetOptionEntity = __decorate([
    (0, typeorm_1.Entity)('widgetoption')
], SignFeedCMSWidgetOptionEntity);
//# sourceMappingURL=SignFeedCMSWidgetOptionEntity.js.map