"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ujs_controller_1 = require("./ujs.controller");
const ujs_service_1 = require("./ujs.service");
const UJSDepartmentEntity_1 = require("./Entity/UJSDepartmentEntity");
const UJSShgGroupEntity_1 = require("./Entity/UJSShgGroupEntity");
const UJSShgMemberEntity_1 = require("./Entity/UJSShgMemberEntity");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([UJSDepartmentEntity_1.UJSDepartmentEntity, UJSShgGroupEntity_1.UJSShgGroupEntity, UJSShgMemberEntity_1.UJSShgMemberEntity])],
        controllers: [ujs_controller_1.UjsController],
        providers: [ujs_service_1.UjsService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=ujs.module.js.map