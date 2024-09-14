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
exports.SignFeedCMSRegionPlayListEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSRegionPlayListEntity = class SignFeedCMSRegionPlayListEntity {
};
exports.SignFeedCMSRegionPlayListEntity = SignFeedCMSRegionPlayListEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSRegionPlayListEntity.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'playlistId', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionPlayListEntity.prototype, "playlistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayOrder', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSRegionPlayListEntity.prototype, "displayOrder", void 0);
exports.SignFeedCMSRegionPlayListEntity = SignFeedCMSRegionPlayListEntity = __decorate([
    (0, typeorm_1.Entity)('lkregionplaylist')
], SignFeedCMSRegionPlayListEntity);
//# sourceMappingURL=SignFeedCMSRegionPlayListEntity.js.map