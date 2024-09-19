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
const UJSUsersEntity_1 = require("./Entity/UJSUsersEntity");
const UJSRoleEntity_1 = require("./Entity/UJSRoleEntity");
const UJSRolePermissionEntity_1 = require("./Entity/UJSRolePermissionEntity");
const UJSBackupShgGroupDataUploadEntity_1 = require("./Entity/UJSBackupShgGroupDataUploadEntity");
const UJSBranchEntity_1 = require("./Entity/UJSBranchEntity");
const UJSFailedJobsEntity_1 = require("./Entity/UJSFailedJobsEntity");
const UJSMigrationEntity_1 = require("./Entity/UJSMigrationEntity");
const UJSPersonalAccessTokenEntity_1 = require("./Entity/UJSPersonalAccessTokenEntity");
const UJSSHGExpansesEntity_1 = require("./Entity/UJSSHGExpansesEntity");
const UJSSHGLoanRepaymentEntity_1 = require("./Entity/UJSSHGLoanRepaymentEntity");
const UJSStateEntity_1 = require("./Entity/UJSStateEntity");
const UJSShgTraningEntity_1 = require("./Entity/UJSShgTraningEntity");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([UJSDepartmentEntity_1.UJSDepartmentEntity, UJSShgGroupEntity_1.UJSShgGroupEntity, UJSShgMemberEntity_1.UJSShgMemberEntity, UJSUsersEntity_1.UJSUsersEntity, UJSRoleEntity_1.UJSRoleEntity, UJSRolePermissionEntity_1.UJSRolePermissionEntity, UJSBackupShgGroupDataUploadEntity_1.UJSBackupShgGroupDataUploadMonthEntity, UJSBranchEntity_1.UJSBranchEntity, UJSFailedJobsEntity_1.UJSFailedJobEntity, UJSMigrationEntity_1.UJSMigrationEntity, UJSPersonalAccessTokenEntity_1.UJSPersonalAccessTokenEntity, UJSSHGExpansesEntity_1.UJSSHGExpansesEntity, UJSSHGLoanRepaymentEntity_1.UJSSHGLoanRepaymentEntity, UJSStateEntity_1.UJSStateEntity, UJSShgTraningEntity_1.UJSShgTraningEntity])],
        controllers: [ujs_controller_1.UjsController],
        providers: [ujs_service_1.UjsService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=ujs.module.js.map