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
const cms_controller_1 = require("./cms.controller");
const cms_service_1 = require("./cms.service");
const SignFeedCMSCampaignEntity_1 = require("./Entity/SignFeedCMSCampaignEntity");
const SignFeedCMSCampaignLayoutEntity_1 = require("./Entity/SignFeedCMSCampaignLayoutEntity");
const SignFeedCMSDisplayEntity_1 = require("./Entity/SignFeedCMSDisplayEntity");
const SignFeedCMSLayoutEntity_1 = require("./Entity/SignFeedCMSLayoutEntity");
const SignFeedCMSMediaEntity_1 = require("./Entity/SignFeedCMSMediaEntity");
const SignFeedCMSModuleEntity_1 = require("./Entity/SignFeedCMSModuleEntity");
const SignFeedCMSPlayListEntity_1 = require("./Entity/SignFeedCMSPlayListEntity");
const SignFeedCMSRegionEntity_1 = require("./Entity/SignFeedCMSRegionEntity");
const SignFeedCMSRegionPlayListEntity_1 = require("./Entity/SignFeedCMSRegionPlayListEntity");
const SignFeedCMSResolutionEntity_1 = require("./Entity/SignFeedCMSResolutionEntity");
const SignFeedCMSTagsEntity_1 = require("./Entity/SignFeedCMSTagsEntity");
const SignFeedCMSUserEntity_1 = require("./Entity/SignFeedCMSUserEntity");
const SignFeedCMSWidgetEntity_1 = require("./Entity/SignFeedCMSWidgetEntity");
const SignFeedCMSWidgetMediaEntity_1 = require("./Entity/SignFeedCMSWidgetMediaEntity");
const SignFeedCMSWidgetOptionEntity_1 = require("./Entity/SignFeedCMSWidgetOptionEntity");
const SignFeedCMSDaypartEntity_1 = require("./Entity/SignFeedCMSDaypartEntity");
const SignFeedCMSDisplayGroupEntity_1 = require("./Entity/SignFeedCMSDisplayGroupEntity");
const SignFeedCMSSchedulingEntity_1 = require("./Entity/SignFeedCMSSchedulingEntity");
const SignFeedCMSDisplayMemberEntity_1 = require("./Entity/SignFeedCMSDisplayMemberEntity");
const SignFeedCMSscheduledisplaygroupEntity_1 = require("./Entity/SignFeedCMSscheduledisplaygroupEntity");
const SignFeedCMSdisplayeventEntity_1 = require("./Entity/SignFeedCMSdisplayeventEntity");
const SignFeedCMSdisplayeventsEntity_1 = require("./Entity/SignFeedCMSdisplayeventsEntity");
const SignFeedCMSLkPermissionEntity_1 = require("./Entity/SignFeedCMSLkPermissionEntity");
const SignFeedCMSPermissionEntity_1 = require("./Entity/SignFeedCMSPermissionEntity");
const SignFeedCMSContactEntity_1 = require("./Entity/SignFeedCMSContactEntity");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([SignFeedCMSLayoutEntity_1.SignFeedCMSLayoutEntity, SignFeedCMSTagsEntity_1.SignFeedCMSTagsEntity,
                SignFeedCMSCampaignEntity_1.SignFeedCMSCampaignEntity, SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity, SignFeedCMSPlayListEntity_1.SignFeedCMSPlayListEntity, SignFeedCMSRegionEntity_1.SignFeedCMSRegionEntity,
                SignFeedCMSRegionPlayListEntity_1.SignFeedCMSRegionPlayListEntity, SignFeedCMSWidgetEntity_1.SignFeedCMSWidgetEntity, SignFeedCMSWidgetMediaEntity_1.SignFeedCMSWidgetMediaEntity, SignFeedCMSMediaEntity_1.SignFeedCMSMediaEntity,
                SignFeedCMSWidgetOptionEntity_1.SignFeedCMSWidgetOptionEntity, SignFeedCMSModuleEntity_1.SignFeedCMSModuleEntity, SignFeedCMSCampaignLayoutEntity_1.SignFeedCMSCampaignLayoutEntity,
                SignFeedCMSUserEntity_1.SignFeedCMSUserEntity, SignFeedCMSDisplayEntity_1.SignFeedCMSDisplayEntity, SignFeedCMSDaypartEntity_1.SignFeedCMSDaypartEntity, SignFeedCMSDisplayGroupEntity_1.SignFeedCMSDisplayGroupEntity, SignFeedCMSSchedulingEntity_1.SignFeedCMSSchedulingEntity, SignFeedCMSDisplayMemberEntity_1.SignFeedCMSDisplayMemberEntity, SignFeedCMSscheduledisplaygroupEntity_1.SignFeedCMSscheduledisplaygroupEntity, SignFeedCMSdisplayeventEntity_1.SignFeedCMSdisplayeventEntity, SignFeedCMSdisplayeventsEntity_1.SignFeedCMSdisplayeventsEntity, SignFeedCMSLkPermissionEntity_1.SignFeedCMSLkPermissionEntity, SignFeedCMSPermissionEntity_1.SignFeedCMSPermissionEntity, SignFeedCMSContactEntity_1.SignFeedCMSContactEntity])],
        controllers: [cms_controller_1.CmsController],
        providers: [cms_service_1.CmsService, common_1.Logger]
    })
], CmsModule);
//# sourceMappingURL=cms.module.js.map