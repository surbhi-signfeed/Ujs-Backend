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
const UJSShgActiveModelFarmerEntity_1 = require("./Entity/UJSShgActiveModelFarmerEntity");
const UJSShgAttendanceEntity_1 = require("./Entity/UJSShgAttendanceEntity");
const UJSShgContactEntity_1 = require("./Entity/UJSShgContactEntity");
const UJSShgDataLockEntity_1 = require("./Entity/UJSShgDataLockEntity");
const UJSBankLoanAllotmentEntity_1 = require("./Entity/UJSBankLoanAllotmentEntity");
const UJSBankLoanEntity_1 = require("./Entity/UJSBankLoanEntity");
const UJSBankEntity_1 = require("./Entity/UJSBankEntity");
const UJSShgAuditingEntity_1 = require("./Entity/UJSShgAuditingEntity");
const UJSShgDataUploadkEntity_1 = require("./Entity/UJSShgDataUploadkEntity");
const UJSShgDigiSakhiEntity_1 = require("./Entity/UJSShgDigiSakhiEntity");
const UJSShgFpoEntity_1 = require("./Entity/UJSShgFpoEntity");
const UJSShgFedrationReportEntity_1 = require("./Entity/UJSShgFedrationReportEntity");
const UJSShgFedrationEntity_1 = require("./Entity/UJSShgFedrationEntity");
const UJSShgMomEntity_1 = require("./Entity/UJSShgMomEntity");
const UJSShgGroupDataUploadMonthEntity_1 = require("./Entity/UJSShgGroupDataUploadMonthEntity");
const UJSShgMemberSavingEntity_1 = require("./Entity/UJSShgMemberSavingEntity");
const UJSShgGroupDetailsInfoEntity_1 = require("./Entity/UJSShgGroupDetailsInfoEntity");
const UJSShgGroupSummaryEntity_1 = require("./Entity/UJSShgGroupSummaryEntity");
const UJSShgInternalLoanSummaryEntity_1 = require("./Entity/UJSShgInternalLoanSummaryEntity");
const UJSShgLoanEntity_1 = require("./Entity/UJSShgLoanEntity");
const UJSShgMeetingTrackEntity_1 = require("./Entity/UJSShgMeetingTrackEntity");
const UJSShgOtherIncomeEntity_1 = require("./Entity/UJSShgOtherIncomeEntity");
const UJSShgTillNowDataEntity_1 = require("./Entity/UJSShgTillNowDataEntity");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/ujs/uploads',
            }),
            typeorm_1.TypeOrmModule.forFeature([UJSDepartmentEntity_1.UJSDepartmentEntity, UJSShgGroupEntity_1.UJSShgGroupEntity, UJSShgMemberEntity_1.UJSShgMemberEntity, UJSUsersEntity_1.UJSUsersEntity, UJSRoleEntity_1.UJSRoleEntity, UJSRolePermissionEntity_1.UJSRolePermissionEntity, UJSBackupShgGroupDataUploadEntity_1.UJSBackupShgGroupDataUploadMonthEntity, UJSBranchEntity_1.UJSBranchEntity, UJSFailedJobsEntity_1.UJSFailedJobEntity, UJSMigrationEntity_1.UJSMigrationEntity, UJSPersonalAccessTokenEntity_1.UJSPersonalAccessTokenEntity, UJSSHGExpansesEntity_1.UJSSHGExpansesEntity, UJSSHGLoanRepaymentEntity_1.UJSSHGLoanRepaymentEntity, UJSStateEntity_1.UJSStateEntity, UJSShgTraningEntity_1.UJSShgTraningEntity, UJSShgActiveModelFarmerEntity_1.UJSShgActiveModelFarmerEntity, UJSShgAttendanceEntity_1.UJSShgAttendanceEntity, UJSShgContactEntity_1.UJSShgContactEntity, UJSShgContactEntity_1.UJSShgContactEntity, UJSShgDataLockEntity_1.UJSShgDataLockEntity, UJSBankLoanAllotmentEntity_1.UJSBankLoanAllotmentEntity, UJSBankLoanEntity_1.UJSBankLoanEntity, UJSBankEntity_1.UJSBankEntity, UJSShgAuditingEntity_1.UJSShgAuditingEntity, UJSShgDataUploadkEntity_1.UJSShgDataUploadEntity, UJSShgDigiSakhiEntity_1.UJSShgDigiSakhiEntity, UJSShgFpoEntity_1.UJSShgFpoEntity, UJSShgFedrationReportEntity_1.UJSSHGFedrationReportEntity, UJSShgFedrationEntity_1.UJSSHGFedrationEntity, UJSShgMomEntity_1.UJSShgMomEntity, UJSShgGroupDataUploadMonthEntity_1.UJSShgGroupDataUploadMonthEntity, UJSShgMemberSavingEntity_1.UJSShgMemeberSavingEntity, UJSShgGroupDetailsInfoEntity_1.UJSShgGroupDetailsInfoEntity, UJSShgGroupSummaryEntity_1.UJSShgGroupSummaryEntity, UJSShgInternalLoanSummaryEntity_1.UJSShgInternalLoanSummaryEntity, UJSShgLoanEntity_1.UJSShgLoanEntity, UJSShgMeetingTrackEntity_1.UJSShgMeetingTrackEntity, UJSShgOtherIncomeEntity_1.UJSShgOtherIncomeEntity, UJSShgTillNowDataEntity_1.UJSShgTillNowDataEntity])],
        controllers: [ujs_controller_1.UjsController],
        providers: [ujs_service_1.UjsService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=ujs.module.js.map