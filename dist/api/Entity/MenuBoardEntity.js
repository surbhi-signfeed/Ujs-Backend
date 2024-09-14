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
exports.MenuBoardEntity = void 0;
const typeorm_1 = require("typeorm");
let MenuBoardEntity = class MenuBoardEntity {
};
exports.MenuBoardEntity = MenuBoardEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MenuBoardEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'item_no', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "item_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'item_category', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "item_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'item_description', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "item_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group_description', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "group_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sales_uom', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "sales_uom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_qty', type: 'integer' }),
    __metadata("design:type", Number)
], MenuBoardEntity.prototype, "display_qty", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_price', type: 'decimal' }),
    __metadata("design:type", Number)
], MenuBoardEntity.prototype, "display_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_description', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "display_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sub_description', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "sub_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'store_code', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "store_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_item_disable', type: 'boolean' }),
    __metadata("design:type", Boolean)
], MenuBoardEntity.prototype, "is_item_disable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_remarks', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "category_remarks", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sub_category', type: 'varchar' }),
    __metadata("design:type", String)
], MenuBoardEntity.prototype, "sub_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_sequence', type: 'integer' }),
    __metadata("design:type", Number)
], MenuBoardEntity.prototype, "category_sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sub_category_sequence', type: 'integer' }),
    __metadata("design:type", Number)
], MenuBoardEntity.prototype, "sub_category_sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_start_time', type: 'time' }),
    __metadata("design:type", Date)
], MenuBoardEntity.prototype, "display_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_end_time', type: 'time' }),
    __metadata("design:type", Date)
], MenuBoardEntity.prototype, "display_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_temp_disable', type: 'boolean' }),
    __metadata("design:type", Boolean)
], MenuBoardEntity.prototype, "is_temp_disable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'temp_disable_func', type: 'boolean' }),
    __metadata("design:type", Boolean)
], MenuBoardEntity.prototype, "temp_disable_func", void 0);
exports.MenuBoardEntity = MenuBoardEntity = __decorate([
    (0, typeorm_1.Entity)('menu_board')
], MenuBoardEntity);
//# sourceMappingURL=MenuBoardEntity.js.map