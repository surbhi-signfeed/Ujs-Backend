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
exports.SignFeedCMSDisplayMemberEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSDisplayMemberEntity = class SignFeedCMSDisplayMemberEntity {
};
exports.SignFeedCMSDisplayMemberEntity = SignFeedCMSDisplayMemberEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSDisplayMemberEntity.prototype, "LkDisplayDGID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DisplayGroupID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayMemberEntity.prototype, "DisplayGroupID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DisplayID', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayMemberEntity.prototype, "DisplayID", void 0);
exports.SignFeedCMSDisplayMemberEntity = SignFeedCMSDisplayMemberEntity = __decorate([
    (0, typeorm_1.Entity)('lkdisplaydg')
], SignFeedCMSDisplayMemberEntity);
//# sourceMappingURL=SignFeedCMSDisplayMemberEntity.js.map