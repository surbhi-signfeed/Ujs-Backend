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
exports.SignFeedCMSDisplayEntity = void 0;
const typeorm_1 = require("typeorm");
let SignFeedCMSDisplayEntity = class SignFeedCMSDisplayEntity {
};
exports.SignFeedCMSDisplayEntity = SignFeedCMSDisplayEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "displayid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auditingUntil', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "auditingUntil", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "display", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'defaultlayoutid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "defaultlayoutid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'license', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'licensed', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "licensed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loggedin', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "loggedin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastaccessed', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "lastaccessed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'inc_schedule', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "inc_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email_alert', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "email_alert", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alert_timeout', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "alert_timeout", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ClientAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "ClientAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'MediaInventoryStatus', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "MediaInventoryStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'MacAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "MacAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LastChanged', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "LastChanged", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NumberOfMacAddressChanges', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "NumberOfMacAddressChanges", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LastWakeOnLanCommandSent', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "LastWakeOnLanCommandSent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'WakeOnLan', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "WakeOnLan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'WakeOnLanTime', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "WakeOnLanTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'BroadCastAddress', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "BroadCastAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SecureOn', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "SecureOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cidr', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "Cidr", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'GeoLocation', type: 'decimal' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "GeoLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_type', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "client_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_version', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "client_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_code', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "client_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'displayprofileid', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "displayprofileid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'screenShotRequested', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "screenShotRequested", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storageAvailableSpace', type: 'bigint' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "storageAvailableSpace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storageTotalSpace', type: 'bigint' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "storageTotalSpace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'xmrChannel', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "xmrChannel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'xmrPubKey', type: 'text' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "xmrPubKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lastCommandSuccess', type: 'int' }),
    __metadata("design:type", Number)
], SignFeedCMSDisplayEntity.prototype, "lastCommandSuccess", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deviceName', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "deviceName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'timeZone', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "timeZone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'overrideConfig', type: 'text' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "overrideConfig", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization', type: 'varchar' }),
    __metadata("design:type", String)
], SignFeedCMSDisplayEntity.prototype, "organization", void 0);
exports.SignFeedCMSDisplayEntity = SignFeedCMSDisplayEntity = __decorate([
    (0, typeorm_1.Entity)('display')
], SignFeedCMSDisplayEntity);
//# sourceMappingURL=SignFeedCMSDisplayEntity.js.map