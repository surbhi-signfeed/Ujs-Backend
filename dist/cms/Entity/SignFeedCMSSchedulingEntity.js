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
exports.SignFeedCMSSchedulingEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSSchedulingEntity = class SignFeedCMSSchedulingEntity {
};
exports.SignFeedCMSSchedulingEntity = SignFeedCMSSchedulingEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "eventID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eventTypeId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CampaignID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "CampaignID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'commandId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "commandId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recurrence_type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "recurrence_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recurrence_detail', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "recurrence_detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_priority', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "is_priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'FromDT', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "FromDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ToDT', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "ToDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recurrence_range', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "recurrence_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DisplayOrder', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "DisplayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSSchedulingEntity.prototype, "displayid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recurrenceRepeatsOn', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "recurrenceRepeatsOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastRecurrenceWatermark', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "lastRecurrenceWatermark", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'syncTimezone', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "syncTimezone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'syncEvent', type: 'boolean' }),
    __metadata("design:type", Boolean)
], SignFeedCMSSchedulingEntity.prototype, "syncEvent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSSchedulingEntity.prototype, "organization", void 0);
exports.SignFeedCMSSchedulingEntity = SignFeedCMSSchedulingEntity = __decorate([
    (0, typeorm_1.Entity)('schedule')
], SignFeedCMSSchedulingEntity);
//# sourceMappingURL=SignFeedCMSSchedulingEntity.js.map