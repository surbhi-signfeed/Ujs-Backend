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
exports.SignFeedCMSdisplayeventEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSdisplayeventEntity = class SignFeedCMSdisplayeventEntity {
};
exports.SignFeedCMSdisplayeventEntity = SignFeedCMSdisplayeventEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSdisplayeventEntity.prototype, "displayEventId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eventDate', type: 'date' }),
    __metadata("design:type", Date)
], SignFeedCMSdisplayeventEntity.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSdisplayeventEntity.prototype, "displayid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSdisplayeventEntity.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSdisplayeventEntity.prototype, "end", void 0);
exports.SignFeedCMSdisplayeventEntity = SignFeedCMSdisplayeventEntity = __decorate([
    (0, typeorm_1.Entity)('displayevent')
], SignFeedCMSdisplayeventEntity);
//# sourceMappingURL=SignFeedCMSdisplayeventEntity.js.map