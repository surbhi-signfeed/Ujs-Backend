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
exports.UJSShgDigiSakhiEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSShgDigiSakhiEntity = class UJSShgDigiSakhiEntity {
};
exports.UJSShgDigiSakhiEntity = UJSShgDigiSakhiEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSShgDigiSakhiEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "block", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "gp_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "villege_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "vle_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "application_ref_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UJSShgDigiSakhiEntity.prototype, "cscId", void 0);
exports.UJSShgDigiSakhiEntity = UJSShgDigiSakhiEntity = __decorate([
    (0, typeorm_1.Entity)('shg_digital_sakhi')
], UJSShgDigiSakhiEntity);
//# sourceMappingURL=UJSShgDigiSakhiEntity.js.map