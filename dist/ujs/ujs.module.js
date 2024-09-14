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
const SignFeedCMSResolutionEntity_1 = require("./Entity/SignFeedCMSResolutionEntity");
const UJSDepartmentEntity_1 = require("./Entity/UJSDepartmentEntity");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity, UJSDepartmentEntity_1.UJSDepartmentEntity])],
        controllers: [ujs_controller_1.UjsController],
        providers: [ujs_service_1.UjsService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=ujs.module.js.map