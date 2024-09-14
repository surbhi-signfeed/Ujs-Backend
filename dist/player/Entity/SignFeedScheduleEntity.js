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
exports.SignFeedScheduleEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedScheduleEntity = class SignFeedScheduleEntity {
};
exports.SignFeedScheduleEntity = SignFeedScheduleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "displayid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auditingUntil', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "auditingUntil", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "display", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'defaultlayoutid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "defaultlayoutid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'license', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'licensed', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "licensed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loggedin', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "loggedin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastaccessed', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "lastaccessed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'inc_schedule', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "inc_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email_alert', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "email_alert", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alert_timeout', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "alert_timeout", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ClientAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "ClientAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'MediaInventoryStatus', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "MediaInventoryStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'MacAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "MacAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LastChanged', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "LastChanged", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NumberOfMacAddressChanges', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "NumberOfMacAddressChanges", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LastWakeOnLanCommandSent', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "LastWakeOnLanCommandSent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'WakeOnLan', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "WakeOnLan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'WakeOnLanTime', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "WakeOnLanTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'BroadCastAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "BroadCastAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SecureOn', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "SecureOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cidr', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "Cidr", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'GeoLocation', type: 'point' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "GeoLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "client_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_version', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "client_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_code', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "client_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayprofileid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "displayprofileid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'screenShotRequested', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "screenShotRequested", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storageAvailableSpace', type: 'bigint' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "storageAvailableSpace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storageTotalSpace', type: 'bigint' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "storageTotalSpace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'xmrChannel', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "xmrChannel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'xmrPubKey', type: 'text' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "xmrPubKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastCommandSuccess', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedScheduleEntity.prototype, "lastCommandSuccess", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deviceName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "deviceName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'timeZone', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "timeZone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'overrideConfig', type: 'text' }),
    __metadata("design:type", String)
], SignFeedScheduleEntity.prototype, "overrideConfig", void 0);
exports.SignFeedScheduleEntity = SignFeedScheduleEntity = __decorate([
    (0, typeorm_1.Entity)('display')
], SignFeedScheduleEntity);
//# sourceMappingURL=SignFeedScheduleEntity.js.map