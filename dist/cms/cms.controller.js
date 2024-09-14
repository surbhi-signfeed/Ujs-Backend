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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../admin/auth/jwt-auth.guard");
const cms_service_1 = require("./cms.service");
const CMSLayoutDTO_1 = require("./dto/CMSLayoutDTO");
const CMSLayoutUpdateDTO_1 = require("./dto/CMSLayoutUpdateDTO");
const CMSLayoutPublishDTO_1 = require("./dto/CMSLayoutPublishDTO");
const CMSRegionDTO_1 = require("./dto/CMSRegionDTO");
const CMSWidgetDTO_1 = require("./dto/CMSWidgetDTO");
const CMSWidgetOptionsDTO_1 = require("./dto/CMSWidgetOptionsDTO");
const CMSLayoutDeleteDTO_1 = require("./dto/CMSLayoutDeleteDTO");
const CMSResolutionDTO_1 = require("./dto/CMSResolutionDTO");
const CMSResolutionUpdateDTO_1 = require("./dto/CMSResolutionUpdateDTO");
const CMSCampaignLayoutDTO_1 = require("./dto/CMSCampaignLayoutDTO");
const CMSCampaignDTO_1 = require("./dto/CMSCampaignDTO");
const CMSCampaignUpdateDTO_1 = require("./dto/CMSCampaignUpdateDTO");
const CMSLayoutRetireDTO_1 = require("./dto/CMSLayoutRetireDTO");
const CMSCampaignAssignLayoutDTO_1 = require("./dto/CMSCampaignAssignLayoutDTO");
const CMSLayoutDetailDTO_1 = require("./dto/CMSLayoutDetailDTO");
const CMSWidgetDeleteDTO_1 = require("./dto/CMSWidgetDeleteDTO");
const CMSCampaignDeleteDTO_1 = require("./dto/CMSCampaignDeleteDTO");
const CMSCampaignDetailDTO_1 = require("./dto/CMSCampaignDetailDTO");
const platform_express_1 = require("@nestjs/platform-express");
const CMSDisplayUpdateDTO_1 = require("./dto/CMSDisplayUpdateDTO");
const CMSDisplayDeleteDTO_1 = require("./dto/CMSDisplayDeleteDTO");
const CMSDisplayAuthorizeDTO_1 = require("./dto/CMSDisplayAuthorizeDTO");
const CMSResolutionDeleteDTO_1 = require("./dto/CMSResolutionDeleteDTO");
const CMSMediaDeleteDTO_1 = require("./dto/CMSMediaDeleteDTO");
const CMSMediaUpdateDTO_1 = require("./dto/CMSMediaUpdateDTO");
const CMSDisplayDTO_1 = require("./dto/CMSDisplayDTO");
const CMSUsersDeleteDTO_1 = require("./dto/CMSUsersDeleteDTO");
const CMSModuleDTO_1 = require("./dto/CMSModuleDTO");
const CMSModuleDeleteDTO_1 = require("./dto/CMSModuleDeleteDTO");
const CMSModuleUpdateDTO_1 = require("./dto/CMSModuleUpdateDTO");
const CMSUserUpdateDTO_1 = require("./dto/CMSUserUpdateDTO");
const CMSMediaDTO_1 = require("./dto/CMSMediaDTO");
const CMSDaypartDTO_1 = require("./dto/CMSDaypartDTO");
const CMSDaypartUpdateDTO_1 = require("./dto/CMSDaypartUpdateDTO");
const CMSDaypartDeleteDTO_1 = require("./dto/CMSDaypartDeleteDTO");
const CMSDisplayGroupDTO_1 = require("./dto/CMSDisplayGroupDTO");
const CMSDisplayGroupDeleteDTO_1 = require("./dto/CMSDisplayGroupDeleteDTO");
const CMSSchedulingDTO_1 = require("./dto/CMSSchedulingDTO");
const CMSDispalyMemberDTO_1 = require("./dto/CMSDispalyMemberDTO");
const CMSMemberDeleteDTO_1 = require("./dto/CMSMemberDeleteDTO");
const CMSAssignLayoutDeleteDTO_1 = require("./dto/CMSAssignLayoutDeleteDTO");
const CMSEventDetailsUpdateDTO_1 = require("./dto/CMSEventDetailsUpdateDTO");
const CMSPermissionDTO_1 = require("./dto/CMSPermissionDTO");
const CMSLkUserPermissionDeleteDTO_1 = require("./dto/CMSLkUserPermissionDeleteDTO");
const CMSLkPermissionUpdateDTO_1 = require("./dto/CMSLkPermissionUpdateDTO");
const CMSContactUsDTO_1 = require("./dto/CMSContactUsDTO");
let CmsController = class CmsController {
    constructor(cmsService, logger) {
        this.cmsService = cmsService;
        this.logger = logger;
    }
    async initiatePayment(amount) {
        const payment = await this.cmsService.initiatePayment(amount);
        return payment;
    }
    async SignfeedCMSCampaignList(request) {
        return this.cmsService.SignfeedCMSCampaignList(request);
    }
    async SignfeedCMSDaypartList(request) {
        return this.cmsService.SignfeedCMSDaypartList(request);
    }
    async SignfeedCMSCampaignLayoutList(request, cmsCampaignLayoutDTO) {
        return this.cmsService.SignfeedCMSCampaignLayoutList(request, cmsCampaignLayoutDTO);
    }
    async listResolutions(request) {
        return this.cmsService.SignfeedCMSResolutionList(request);
    }
    async SignfeedCMSUsersList(request) {
        return this.cmsService.SignfeedCMSUsersList(request);
    }
    async SignfeedCMSUsersOrgList(request) {
        return this.cmsService.SignfeedCMSUsersOrgList(request);
    }
    async SignfeedCMSUsersOzList(request) {
        return this.cmsService.SignfeedCMSUsersOzList(request);
    }
    async SignfeedCMSMediaList(request) {
        return this.cmsService.SignfeedCMSMediaList(request);
    }
    async SignfeedCMSMediaListSpecific(request) {
        return this.cmsService.SignfeedCMSMediaListSpecific(request);
    }
    async SignfeedCMSWidgetOptionList(request, cmsWidgetOptionsDTO) {
        return this.cmsService.SignfeedCMSWidgetOptionList(request, cmsWidgetOptionsDTO);
    }
    async SignfeedCMSModuleList(request) {
        return this.cmsService.SignfeedCMSModuleList(request);
    }
    async SignfeedCMSLayoutList(request) {
        console.log(request);
        return this.cmsService.SignfeedCMSLayoutList(request);
    }
    async SignfeedCMSAssignLayoutList(request) {
        console.log(request);
        return this.cmsService.SignfeedCMSAssignLayoutList(request);
    }
    async SignfeedCMSDisplayList(request) {
        return this.cmsService.SignfeedCMSDisplayList(request);
    }
    async SignfeedCMSCampaignLayoutPreviewList(request) {
        return this.cmsService.SignfeedCMSCampaignLayoutPreviewList(request);
    }
    async SignfeedCMSDisplayLists(request) {
        return this.cmsService.SignfeedCMSDisplayLists(request);
    }
    async SignfeedCMSDisplayUpdate(request, cmsDisplayUpdateDTO) {
        return this.cmsService.SignfeedCMSDisplayUpdate(request, cmsDisplayUpdateDTO);
    }
    async SignfeedCMSDaypartUpdate(request, cmsDaypartUpdateDTO) {
        return this.cmsService.SignfeedCMSDaypartUpdate(request, cmsDaypartUpdateDTO);
    }
    async SignfeedCMSModuleUpdate(request, cmsModuleUpdateDTO) {
        return this.cmsService.SignfeedCMSModuleUpdate(request, cmsModuleUpdateDTO);
    }
    async SignfeedCMSDisplayAuthorize(request, cmsDisplayAuthorizeDTO) {
        return this.cmsService.SignfeedCMSDisplayAuthorize(request, cmsDisplayAuthorizeDTO);
    }
    async SignfeedCMSDisplayDelete(request, cmsDisplayDeleteDTO) {
        return this.cmsService.SignfeedCMSDisplayDelete(request, cmsDisplayDeleteDTO);
    }
    async SignfeedCMSMemberDelete(request, cmsMemberDeleteDTO) {
        return this.cmsService.SignfeedCMSMemberDelete(request, cmsMemberDeleteDTO);
    }
    async SignfeedCMSAssignLayoutDelete(request, cmsAssignLayoutDeleteDTO) {
        return this.cmsService.SignfeedCMSAssignLayoutDelete(request, cmsAssignLayoutDeleteDTO);
    }
    async SignfeedCMSUsersDelete(request, cmsUsersDeleteDTO) {
        return this.cmsService.SignfeedCMSUsersDelete(request, cmsUsersDeleteDTO);
    }
    async SignfeedCMSLayoutDelete(request, cmsLayoutDeleteDTO) {
        return this.cmsService.SignfeedCMSLayoutDelete(request, cmsLayoutDeleteDTO);
    }
    async SignfeedCMSModuleDelete(request, cmsModuleDeleteDTO) {
        return this.cmsService.SignfeedCMSModuleDelete(request, cmsModuleDeleteDTO);
    }
    async SignfeedCMSLayoutDetail(request, cmsLayoutDetailDTO) {
        console.log(request);
        return this.cmsService.SignfeedCMSLayoutDetail(request, cmsLayoutDetailDTO);
    }
    async SignfeedCMSCampaignAdd(request, cmsCampaignDTO) {
        return this.cmsService.SignfeedCMSCampaignAdd(request, cmsCampaignDTO);
    }
    async SignfeedCMSModuleAdd(request, cmsModuleDTO) {
        return this.cmsService.SignfeedCMSModuleAdd(request, cmsModuleDTO);
    }
    async SignfeedCMDisplaynAdd(request, cmsDisplayDTO) {
        return this.cmsService.SignfeedCMSDisplayAdd(request, cmsDisplayDTO);
    }
    async SignfeedCMSCampaignDelete(request, cmsCampaignDeleteDTO) {
        return this.cmsService.SignfeedCMSCampaignDelete(request, cmsCampaignDeleteDTO);
    }
    async SignfeedCMSDaypartDelete(request, cmsDaypartDeleteDTO) {
        return this.cmsService.SignfeedCMSDaypartDelete(request, cmsDaypartDeleteDTO);
    }
    async SignfeedCMDaypartAdd(request, cmsDaypartDTO) {
        return this.cmsService.SignfeedCMSDaypartAdd(request, cmsDaypartDTO);
    }
    async SignfeedCMSCampaignUpdate(request, cmsCampaignUpdateDTO) {
        return this.cmsService.SignfeedCMSCampaignUpdate(request, cmsCampaignUpdateDTO);
    }
    async SignfeedCMSUserUpdate(request, cmsUserUpdateDTO) {
        return this.cmsService.SignfeedCMSUserUpdate(request, cmsUserUpdateDTO);
    }
    async SignfeedCMSCampaignPreview(request, cmsCampaignDetailDTO) {
        console.log(request);
        return this.cmsService.SignfeedCMSCampaignPreview(request, cmsCampaignDetailDTO);
    }
    async SignfeedCMSResolutionAdd(request, cmsResolutionDTO) {
        return this.cmsService.SignfeedCMSResolutionAdd(request, cmsResolutionDTO);
    }
    async SignfeedCMSResolutionUpdate(request, cmsResolutionUpdateDTO) {
        return this.cmsService.SignfeedCMSResolutionUpdate(request, cmsResolutionUpdateDTO);
    }
    async SignfeedCMSResolutionDelete(request, cmsResolutionDeleteDTO) {
        return this.cmsService.SignfeedCMSResolutionDelete(request, cmsResolutionDeleteDTO);
    }
    async SignfeedCMSLayout(request, cmsLayoutDTO) {
        return this.cmsService.SignfeedCMSLayout(request, cmsLayoutDTO);
    }
    async SignfeedCMSLayoutUpdate(request, cmsLayoutUpdateDTO) {
        return this.cmsService.SignfeedCMSLayoutUpdate(request, cmsLayoutUpdateDTO);
    }
    async SignfeedCMSEventDetailsUpdate(request, cmsEventDetailsUpdateDTO) {
        return this.cmsService.SignfeedCMSEventDetailsUpdate(request, cmsEventDetailsUpdateDTO);
    }
    async SignfeedCMSLayoutRetire(request, cmsLayoutRetireDTO) {
        return this.cmsService.SignfeedCMSLayoutRetire(request, cmsLayoutRetireDTO);
    }
    async SignfeedCMSLayoutAssignToCampaign(request, cmsCampaignAssignLayoutDTO) {
        return this.cmsService.SignfeedCMSLayoutAssignToCampaign(request, cmsCampaignAssignLayoutDTO);
    }
    async SignfeedCMSLayoutRemoveToCampaign(request, cmsCampaignAssignLayoutDTO) {
        return this.cmsService.SignfeedCMSLayoutRemoveToCampaign(request, cmsCampaignAssignLayoutDTO);
    }
    async SignfeedCMSLayoutPublish(request, cmsLayoutPublishDTO) {
        return this.cmsService.SignfeedCMSLayoutPublish(request, cmsLayoutPublishDTO);
    }
    async SignfeedCMSRegionAdd(request, cmsRegionDTO) {
        return this.cmsService.SignfeedCMSRegionAdd(request, cmsRegionDTO);
    }
    async SignfeedCMSRegionUpdate(request, cmsRegionUpdateDTO) {
        return this.cmsService.SignfeedCMSRegionUpdate(request, cmsRegionUpdateDTO);
    }
    async SignfeedCMSWidgetAdd(request, cmsWidgetDTO) {
        return this.cmsService.SignfeedCMSWidgetAdd(request, cmsWidgetDTO);
    }
    async SignfeedCMSWidgetsAdd(request, widgetArray) {
        return this.cmsService.SignfeedCMSWidgetsAdd(request, widgetArray);
    }
    async SignfeedCMSWidgetDelete(request, cmsWidgetDeleteDTO) {
        return this.cmsService.SignfeedCMSWidgetDelete(request, cmsWidgetDeleteDTO);
    }
    async SignfeedCMSMediaAdd(files, body) {
        return this.cmsService.SignfeedCMSMediaAdd(files, body.duration);
    }
    async SignfeedCMSMediaDelete(request, cmsMediaDeleteDTO) {
        return this.cmsService.SignfeedCMSMediaDelete(request, cmsMediaDeleteDTO);
    }
    async SignfeedCMSMediaUpdate(request, cmsMediaUpdateDTO) {
        return this.cmsService.SignfeedCMSMediaUpdate(request, cmsMediaUpdateDTO);
    }
    async SignfeedCMSDisplayGroupAdd(request, cmsDisplayGroupDTO) {
        return this.cmsService.SignfeedCMSDisplayGroupAdd(request, cmsDisplayGroupDTO);
    }
    async SignfeedCMSDisplayGroupList(request) {
        console.log(request);
        return this.cmsService.SignfeedCMSDisplayGroupList(request);
    }
    async SignfeedCMSDisplayGroupDelete(request, cmsDisplayGroupDeleteDTO) {
        return this.cmsService.SignfeedCMSDisplayGroupDelete(request, cmsDisplayGroupDeleteDTO);
    }
    async SignfeedCMSLkPermissionDelete(request, cmsUserPermissionDeleteDTO) {
        return this.cmsService.SignfeedCMSLkPermissionDelete(request, cmsUserPermissionDeleteDTO);
    }
    async SignfeedCMSSchedulingAdd(request, cmsSchedulingDTO) {
        console.log("Data received from frontend:", cmsSchedulingDTO);
        return this.cmsService.SignfeedCMSSchedulingAdd(request, cmsSchedulingDTO);
    }
    async SignfeedCMSPermissionAdd(request, cmsPermissionDTO) {
        return this.cmsService.SignfeedCMSPermissionAdd(request, cmsPermissionDTO);
    }
    async SignfeedCMSPermissionList(request) {
        return this.cmsService.SignfeedCMSPermissionList(request);
    }
    async SignfeedCMSLKPermissionUpdate(request, cmsLkPermissionUpdateDTO) {
        return this.cmsService.SignfeedCMSLKPermissionUpdate(request, cmsLkPermissionUpdateDTO);
    }
    async SignfeedCMSEventList(request) {
        return this.cmsService.SignfeedCMSEventList(request);
    }
    async SignfeedCMSEventsList(request) {
        return this.cmsService.SignfeedCMSEventsList(request);
    }
    async SignfeedCMSEventDateList(request) {
        return this.cmsService.SignfeedCMSEventDateList(request);
    }
    async SignfeedDisplayCMSMemberAdd(request, cmsDispalyMemberDTO) {
        return this.cmsService.SignfeedCMSDisplayMemberAdd(request, cmsDispalyMemberDTO);
    }
    async SignfeedCMSContactAdd(request, cmsContactDTO) {
        return this.cmsService.SignfeedCMSContactAdd(request, cmsContactDTO);
    }
};
exports.CmsController = CmsController;
__decorate([
    (0, common_1.Post)('initiate'),
    __param(0, (0, common_1.Body)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "initiatePayment", null);
__decorate([
    (0, common_1.Get)("ListCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignList", null);
__decorate([
    (0, common_1.Get)("ListDaypart"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDaypartList", null);
__decorate([
    (0, common_1.Get)("ListCampaignLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignLayoutDTO_1.CMSCampaignLayoutDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignLayoutList", null);
__decorate([
    (0, common_1.Get)('ListResolution'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "listResolutions", null);
__decorate([
    (0, common_1.Get)("ListUsers"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSUsersList", null);
__decorate([
    (0, common_1.Get)("ListUserOrg"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSUsersOrgList", null);
__decorate([
    (0, common_1.Get)("ListUsersOz"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSUsersOzList", null);
__decorate([
    (0, common_1.Get)("ListMedia"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMediaList", null);
__decorate([
    (0, common_1.Post)("ListMediaId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMediaListSpecific", null);
__decorate([
    (0, common_1.Get)("ListWidgetOption"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSWidgetOptionsDTO_1.CMSWidgetOptionsDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSWidgetOptionList", null);
__decorate([
    (0, common_1.Get)("ListModule"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSModuleList", null);
__decorate([
    (0, common_1.Get)("ListLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutList", null);
__decorate([
    (0, common_1.Get)("ListAssignLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSAssignLayoutList", null);
__decorate([
    (0, common_1.Get)("ListDisplayGroupMember"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayList", null);
__decorate([
    (0, common_1.Get)("ListCampaignLayoutPreview"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignLayoutPreviewList", null);
__decorate([
    (0, common_1.Get)("ListDisplay"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayLists", null);
__decorate([
    (0, common_1.Post)("UpdateDisplay"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayUpdateDTO_1.CMSDisplayUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayUpdate", null);
__decorate([
    (0, common_1.Post)("UpdateDaypart"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDaypartUpdateDTO_1.CMSDaypartUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDaypartUpdate", null);
__decorate([
    (0, common_1.Post)("UpdateModule"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSModuleUpdateDTO_1.CMSModuleUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSModuleUpdate", null);
__decorate([
    (0, common_1.Post)("AuthorizeDisplay"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayAuthorizeDTO_1.CMSDisplayAuthorizeDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayAuthorize", null);
__decorate([
    (0, common_1.Post)("DeleteDisplay"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayDeleteDTO_1.CMSDisplayDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayDelete", null);
__decorate([
    (0, common_1.Post)("DeleteMember"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSMemberDeleteDTO_1.CMSMemberDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMemberDelete", null);
__decorate([
    (0, common_1.Post)("DeleteAssignLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSAssignLayoutDeleteDTO_1.CMSAssignLayoutDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSAssignLayoutDelete", null);
__decorate([
    (0, common_1.Post)("DeleteUser"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSUsersDeleteDTO_1.CMSUsersDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSUsersDelete", null);
__decorate([
    (0, common_1.Post)("DeleteLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutDeleteDTO_1.CMSLayoutDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutDelete", null);
__decorate([
    (0, common_1.Post)("DeleteModule"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSModuleDeleteDTO_1.CMSModuleDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSModuleDelete", null);
__decorate([
    (0, common_1.Post)("LayoutDetail"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutDetailDTO_1.CMSLayoutDetailDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutDetail", null);
__decorate([
    (0, common_1.Post)("AddCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignDTO_1.CMSCampaignDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignAdd", null);
__decorate([
    (0, common_1.Post)("AddModule"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSModuleDTO_1.CMSModuleDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSModuleAdd", null);
__decorate([
    (0, common_1.Post)("AddDisplay"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayDTO_1.CMSDisplayDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMDisplaynAdd", null);
__decorate([
    (0, common_1.Post)("DeleteCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignDeleteDTO_1.CMSCampaignDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignDelete", null);
__decorate([
    (0, common_1.Post)("DeleteDaypart"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDaypartDeleteDTO_1.CMSDaypartDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDaypartDelete", null);
__decorate([
    (0, common_1.Post)("AddDaypart"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDaypartDTO_1.CMSDaypartDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMDaypartAdd", null);
__decorate([
    (0, common_1.Post)("UpdateCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignUpdateDTO_1.CMSCampaignUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignUpdate", null);
__decorate([
    (0, common_1.Post)("UpdateUser"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSUserUpdateDTO_1.CMSUserUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSUserUpdate", null);
__decorate([
    (0, common_1.Post)("PreviewCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignDetailDTO_1.CMSCampaignDetailDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSCampaignPreview", null);
__decorate([
    (0, common_1.Post)("AddResolution"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSResolutionDTO_1.CMSResolutionDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSResolutionAdd", null);
__decorate([
    (0, common_1.Post)("UpdateResolution"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSResolutionUpdateDTO_1.CMSResolutionUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSResolutionUpdate", null);
__decorate([
    (0, common_1.Post)("DeleteResolution"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSResolutionDeleteDTO_1.CMSResolutionDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSResolutionDelete", null);
__decorate([
    (0, common_1.Post)("AddLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutDTO_1.CMSLayoutDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayout", null);
__decorate([
    (0, common_1.Post)("UpdateLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutUpdateDTO_1.CMSLayoutUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutUpdate", null);
__decorate([
    (0, common_1.Post)("UpdateEventDetails"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSEventDetailsUpdateDTO_1.CMSEventDetailsUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSEventDetailsUpdate", null);
__decorate([
    (0, common_1.Post)("RetireLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutRetireDTO_1.CMSLayoutRetireDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutRetire", null);
__decorate([
    (0, common_1.Post)("AssignLayoutCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutAssignToCampaign", null);
__decorate([
    (0, common_1.Post)("RemoveLayoutCampaign"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSCampaignAssignLayoutDTO_1.CMSCampaignAssignLayoutDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutRemoveToCampaign", null);
__decorate([
    (0, common_1.Post)("PublishLayout"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLayoutPublishDTO_1.CMSLayoutPublishDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLayoutPublish", null);
__decorate([
    (0, common_1.Post)("AddRegion"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSRegionDTO_1.CMSRegionDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSRegionAdd", null);
__decorate([
    (0, common_1.Post)("UpdateRegion"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSRegionUpdate", null);
__decorate([
    (0, common_1.Post)("AddWidget"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSWidgetDTO_1.CMSWidgetDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSWidgetAdd", null);
__decorate([
    (0, common_1.Post)("AddWidgets"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSWidgetsAdd", null);
__decorate([
    (0, common_1.Post)("DeleteWidget"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSWidgetDeleteDTO_1.CMSWidgetDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSWidgetDelete", null);
__decorate([
    (0, common_1.Post)("AddMedia"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("files")),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, CMSMediaDTO_1.CMSMediaDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMediaAdd", null);
__decorate([
    (0, common_1.Post)("DeleteMedia"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSMediaDeleteDTO_1.CMSMediaDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMediaDelete", null);
__decorate([
    (0, common_1.Post)("UpdateMedia"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSMediaUpdateDTO_1.CMSMediaUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSMediaUpdate", null);
__decorate([
    (0, common_1.Post)("AddDisplayGroup"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayGroupDTO_1.CMSDisplayGroupDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayGroupAdd", null);
__decorate([
    (0, common_1.Get)("ListDisplayGroup"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayGroupList", null);
__decorate([
    (0, common_1.Post)("DeleteDisplayGroup"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDisplayGroupDeleteDTO_1.CMSDisplayGroupDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSDisplayGroupDelete", null);
__decorate([
    (0, common_1.Post)("DeletePermission"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLkUserPermissionDeleteDTO_1.CMSLkUserPermissionDeleteDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLkPermissionDelete", null);
__decorate([
    (0, common_1.Post)("AddScheduling"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSSchedulingDTO_1.CMSSchedulingDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSSchedulingAdd", null);
__decorate([
    (0, common_1.Post)("AddPermission"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSPermissionDTO_1.CMSPermissionDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSPermissionAdd", null);
__decorate([
    (0, common_1.Get)("ListPermission"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSPermissionList", null);
__decorate([
    (0, common_1.Post)("UpdatePermission"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSLkPermissionUpdateDTO_1.CMSLkPermissionUpdateDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSLKPermissionUpdate", null);
__decorate([
    (0, common_1.Get)("ListEvent"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSEventList", null);
__decorate([
    (0, common_1.Get)("ListEvents"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSEventsList", null);
__decorate([
    (0, common_1.Get)("ListEventDate"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSEventDateList", null);
__decorate([
    (0, common_1.Post)("AddMember"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSDispalyMemberDTO_1.CMSDispalyMemberDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedDisplayCMSMemberAdd", null);
__decorate([
    (0, common_1.Post)("AddContact"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CMSContactUsDTO_1.CMSContactUsDTO]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "SignfeedCMSContactAdd", null);
exports.CmsController = CmsController = __decorate([
    (0, common_1.Controller)("cms"),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [cms_service_1.CmsService,
        common_1.Logger])
], CmsController);
//# sourceMappingURL=cms.controller.js.map