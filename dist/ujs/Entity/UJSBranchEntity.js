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
exports.UJSBranchEntity = void 0;
const typeorm_1 = require("typeorm");
let UJSBranchEntity = class UJSBranchEntity {
};
exports.UJSBranchEntity = UJSBranchEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'branch_name', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'branch_code', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "branch_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'director_name', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "director_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'father_name', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "father_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qualification', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'village', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "village", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'block', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "block", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'district', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'po', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "po", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pincode', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "pincode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mobile', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'centerType', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "centerType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'center_timing', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "center_timing", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_of_computer', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "no_of_computer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'center_area', type: 'varchar', length: 300, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "center_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'toilet', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "toilet", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'scanner', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "scanner", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'printer_color', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "printer_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'internetconnectivity', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "internetconnectivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ups_inverter', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "ups_inverter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_of_chairs', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "no_of_chairs", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_of_white_boards', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "no_of_white_boards", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cctv', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "cctv", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'projecter', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UJSBranchEntity.prototype, "projecter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'int', default: 1 }),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'int' }),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_by', type: 'int' }),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'int' }),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_by', type: 'int' }),
    __metadata("design:type", Number)
], UJSBranchEntity.prototype, "updated_by", void 0);
exports.UJSBranchEntity = UJSBranchEntity = __decorate([
    (0, typeorm_1.Entity)('branchs')
], UJSBranchEntity);
//# sourceMappingURL=UJSBranchEntity.js.map