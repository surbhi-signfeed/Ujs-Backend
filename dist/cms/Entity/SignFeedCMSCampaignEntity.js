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
exports.SignFeedCMSCampaignEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSCampaignEntity = class SignFeedCMSCampaignEntity {
};
exports.SignFeedCMSCampaignEntity = SignFeedCMSCampaignEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSCampaignEntity.prototype, "CampaignID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Campaign', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSCampaignEntity.prototype, "Campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'IsLayoutSpecific', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSCampaignEntity.prototype, "IsLayoutSpecific", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'UserID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSCampaignEntity.prototype, "UserID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tags', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSCampaignEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSCampaignEntity.prototype, "organization", void 0);
exports.SignFeedCMSCampaignEntity = SignFeedCMSCampaignEntity = __decorate([
    (0, typeorm_1.Entity)('campaign')
], SignFeedCMSCampaignEntity);
//# sourceMappingURL=SignFeedCMSCampaignEntity.js.map