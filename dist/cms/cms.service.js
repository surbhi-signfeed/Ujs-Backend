"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const typeorm_1 = require("@nestjs/typeorm");
const SignFeedCMSLayoutEntity_1 = require("./Entity/SignFeedCMSLayoutEntity");
const typeorm_2 = require("typeorm");
const SignFeedCMSTagsEntity_1 = require("./Entity/SignFeedCMSTagsEntity");
const SignFeedCMSCampaignEntity_1 = require("./Entity/SignFeedCMSCampaignEntity");
const SignFeedCMSResolutionEntity_1 = require("./Entity/SignFeedCMSResolutionEntity");
const SignFeedCMSPlayListEntity_1 = require("./Entity/SignFeedCMSPlayListEntity");
const SignFeedCMSRegionPlayListEntity_1 = require("./Entity/SignFeedCMSRegionPlayListEntity");
const SignFeedCMSRegionEntity_1 = require("./Entity/SignFeedCMSRegionEntity");
const SignFeedCMSWidgetEntity_1 = require("./Entity/SignFeedCMSWidgetEntity");
const SignFeedCMSWidgetMediaEntity_1 = require("./Entity/SignFeedCMSWidgetMediaEntity");
const SignFeedCMSMediaEntity_1 = require("./Entity/SignFeedCMSMediaEntity");
const SignFeedCMSWidgetOptionEntity_1 = require("./Entity/SignFeedCMSWidgetOptionEntity");
const SignFeedCMSModuleEntity_1 = require("./Entity/SignFeedCMSModuleEntity");
const SignFeedCMSCampaignLayoutEntity_1 = require("./Entity/SignFeedCMSCampaignLayoutEntity");
const SignFeedCMSUserEntity_1 = require("./Entity/SignFeedCMSUserEntity");
const CMSLayoutRegionPlaylistDetailDTO_1 = require("./dto/CMSLayoutRegionPlaylistDetailDTO");
const CMSCampaignPreviewDTO_1 = require("./dto/CMSCampaignPreviewDTO");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const appRoot = __importStar(require("app-root-path"));
const crypto = __importStar(require("crypto"));
const SignFeedCMSDisplayEntity_1 = require("./Entity/SignFeedCMSDisplayEntity");
const SignFeedCMSDaypartEntity_1 = require("./Entity/SignFeedCMSDaypartEntity");
const SignFeedCMSDisplayGroupEntity_1 = require("./Entity/SignFeedCMSDisplayGroupEntity");
const SignFeedCMSSchedulingEntity_1 = require("./Entity/SignFeedCMSSchedulingEntity");
const SignFeedCMSDisplayMemberEntity_1 = require("./Entity/SignFeedCMSDisplayMemberEntity");
const SignFeedCMSscheduledisplaygroupEntity_1 = require("./Entity/SignFeedCMSscheduledisplaygroupEntity");
const SignFeedCMSdisplayeventEntity_1 = require("./Entity/SignFeedCMSdisplayeventEntity");
const SignFeedCMSdisplayeventsEntity_1 = require("./Entity/SignFeedCMSdisplayeventsEntity");
const SignFeedCMSPermissionEntity_1 = require("./Entity/SignFeedCMSPermissionEntity");
const SignFeedCMSLkPermissionEntity_1 = require("./Entity/SignFeedCMSLkPermissionEntity");
const SignFeedCMSContactEntity_1 = require("./Entity/SignFeedCMSContactEntity");
const razorpay_1 = __importDefault(require("razorpay"));
let CmsService = class CmsService {
    constructor(logger, connection, SignFeedCMSLayoutEntityRepository, SignFeedCMSTagsEntityRepository, SignFeedCMSCampaignEntityRepository, SignFeedCMSResolutionEntityRepository, SignFeedCMSPlayListEntityRepository, SignFeedCMSRegionEntityRepository, SignFeedCMSRegionPlayListEntityRepository, SignFeedCMSWidgetEntityRepository, SignFeedCMSWidgetMediaEntityRepository, SignFeedCMSMediaEntityRepository, SignFeedCMSWidgetOptionEntityRepository, SignFeedCMSModuleEntityRepository, SignFeedCMSCampaignLayoutEntityRepository, SignFeedCMSUserEntityRepository, SignFeedCMSDisplayEntityRepository, SignFeedCMSDaypartEntityRepository, SignFeedCMSDisplayGroupEntityRepository, SignFeedCMSSchedulingEntityRepository, SignFeedCMSDisplayMemberEntityRepository, SignFeedCMSscheduledisplaygroupEntityRepository, SignFeedCMSdisplayeventEntityRepository, SignFeedCMSdisplayeventsEntityRepository, SignFeedCMSPermissionEntityRepository, SignFeedCMSLkPermissionEntityRepository, SignFeedCMSContactEntityRepository, mailerService) {
        this.logger = logger;
        this.connection = connection;
        this.SignFeedCMSLayoutEntityRepository = SignFeedCMSLayoutEntityRepository;
        this.SignFeedCMSTagsEntityRepository = SignFeedCMSTagsEntityRepository;
        this.SignFeedCMSCampaignEntityRepository = SignFeedCMSCampaignEntityRepository;
        this.SignFeedCMSResolutionEntityRepository = SignFeedCMSResolutionEntityRepository;
        this.SignFeedCMSPlayListEntityRepository = SignFeedCMSPlayListEntityRepository;
        this.SignFeedCMSRegionEntityRepository = SignFeedCMSRegionEntityRepository;
        this.SignFeedCMSRegionPlayListEntityRepository = SignFeedCMSRegionPlayListEntityRepository;
        this.SignFeedCMSWidgetEntityRepository = SignFeedCMSWidgetEntityRepository;
        this.SignFeedCMSWidgetMediaEntityRepository = SignFeedCMSWidgetMediaEntityRepository;
        this.SignFeedCMSMediaEntityRepository = SignFeedCMSMediaEntityRepository;
        this.SignFeedCMSWidgetOptionEntityRepository = SignFeedCMSWidgetOptionEntityRepository;
        this.SignFeedCMSModuleEntityRepository = SignFeedCMSModuleEntityRepository;
        this.SignFeedCMSCampaignLayoutEntityRepository = SignFeedCMSCampaignLayoutEntityRepository;
        this.SignFeedCMSUserEntityRepository = SignFeedCMSUserEntityRepository;
        this.SignFeedCMSDisplayEntityRepository = SignFeedCMSDisplayEntityRepository;
        this.SignFeedCMSDaypartEntityRepository = SignFeedCMSDaypartEntityRepository;
        this.SignFeedCMSDisplayGroupEntityRepository = SignFeedCMSDisplayGroupEntityRepository;
        this.SignFeedCMSSchedulingEntityRepository = SignFeedCMSSchedulingEntityRepository;
        this.SignFeedCMSDisplayMemberEntityRepository = SignFeedCMSDisplayMemberEntityRepository;
        this.SignFeedCMSscheduledisplaygroupEntityRepository = SignFeedCMSscheduledisplaygroupEntityRepository;
        this.SignFeedCMSdisplayeventEntityRepository = SignFeedCMSdisplayeventEntityRepository;
        this.SignFeedCMSdisplayeventsEntityRepository = SignFeedCMSdisplayeventsEntityRepository;
        this.SignFeedCMSPermissionEntityRepository = SignFeedCMSPermissionEntityRepository;
        this.SignFeedCMSLkPermissionEntityRepository = SignFeedCMSLkPermissionEntityRepository;
        this.SignFeedCMSContactEntityRepository = SignFeedCMSContactEntityRepository;
        this.mailerService = mailerService;
        this.razorpay = new razorpay_1.default({
            key_id: 'rzp_test_atSnWEBps48dIi',
            key_secret: '64o837Z4r7jYP4CRibDApODX',
        });
    }
    async initiatePayment(amount) {
        const options = {
            amount: amount * 1,
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
        };
        try {
            const payment = await this.razorpay.orders.create(options);
            return payment;
        }
        catch (error) {
            throw new Error('Payment initiation failed');
        }
    }
    async SignfeedCMSCampaignList(request) {
        let campaignList;
        campaignList = await this.connection.query(`SELECT a.*, count(b.LayoutID) as total_layout FROM campaign a left JOIN lkcampaignlayout b on a.CampaignID = b.CampaignID group by a.CampaignID;`);
        return { campaign: campaignList, message: "success", status: 200 };
    }
    async SignfeedCMSCampaignLayoutList(request, cmsCampaignLayoutDTO) {
        let campaignLayoutList;
        campaignLayoutList = await this.connection
            .query(`SELECT CampaignID, a.LayoutID, b.layout 
                            FROM lkcampaignlayout a join layout b on a.LayoutID = b.layoutID 
                            where CampaignID = '${cmsCampaignLayoutDTO.id}'`);
        return { layout: campaignLayoutList, message: "success", status: 200 };
    }
    async SignfeedCMSResolutionList(request) {
        let resolutionList = await this.SignFeedCMSResolutionEntityRepository.find({});
        return { resolution: resolutionList, message: "success", status: 200 };
    }
    async SignfeedCMSUsersList(request) {
        let usersList = await this.SignFeedCMSUserEntityRepository.find({});
        return { user: usersList, message: "success", status: 200 };
    }
    async SignfeedCMSUsersOrgList(request) {
        let usersList = await this.SignFeedCMSUserEntityRepository.find({});
        return { user: usersList, message: "success", status: 200 };
    }
    async SignfeedCMSUsersOzList(request) {
        const { organization } = request.query;
        let userList;
        if (organization) {
            userList = await this.connection.query(`SELECT *
       FROM user
       WHERE user.OrganizationId = ?`, [organization]);
        }
        return { user: userList, message: "success", status: 200 };
    }
    async SignfeedCMSMediaList(request) {
        let mediaList = await this.SignFeedCMSMediaEntityRepository.find({
            select: [
                "mediaID",
                "name",
                "type",
                "duration",
                "originalFilename",
                "storedAs",
                "FileSize",
                "retired",
                "userID",
                "valid",
                "expires",
                "createdDt",
                "modifiedDt",
                "organization",
            ],
        });
        return { media: mediaList, message: "success", status: 200 };
    }
    async SignfeedCMSMediaListSpecific(request) {
        const { mediaID, newName } = request.body;
        if (!mediaID || !newName) {
            return { message: "MediaID and newName are required", status: 400 };
        }
        let media = await this.SignFeedCMSMediaEntityRepository.findOne({
            where: { mediaID },
        });
        if (!media) {
            return { message: "Media not found", status: 404 };
        }
        try {
            const newMedia = new SignFeedCMSMediaEntity_1.SignFeedCMSMediaEntity();
            newMedia.name = newName;
            newMedia.type = media.type;
            newMedia.duration = media.duration;
            newMedia.originalFilename = media.originalFilename;
            newMedia.storedAs = media.storedAs;
            newMedia.FileSize = media.FileSize;
            newMedia.retired = media.retired;
            newMedia.userID = media.userID;
            newMedia.valid = media.valid;
            newMedia.expires = media.expires;
            newMedia.createdDt = media.createdDt;
            newMedia.modifiedDt = media.modifiedDt;
            const savedMedia = await this.SignFeedCMSMediaEntityRepository.save(newMedia);
            return { media: savedMedia, message: "success", status: 200 };
        }
        catch (error) {
            return { message: "Error saving media", status: 500 };
        }
    }
    async SignfeedCMSWidgetOptionList(request, cmsWidgetOptionsDTO) {
        let widgetOptionList = await this.SignFeedCMSWidgetOptionEntityRepository.find({
            where: {
                widgetId: cmsWidgetOptionsDTO.id,
            },
        });
        return { WidgetOption: widgetOptionList, message: "success", status: 200 };
    }
    async SignfeedCMSModuleList(request) {
        let moduleList = await this.SignFeedCMSModuleEntityRepository.find({
            select: [
                "ModuleID",
                "Module",
                "Name",
                "viewPath",
                "class",
                "SchemaVersion",
                "Enabled",
                "RegionSpecific",
                "Description",
                "ImageUri",
                "ValidExtensions",
                "PreviewEnabled",
                "assignable",
                "render_as",
                "settings",
                "defaultDuration",
                "installName",
                "organization",
            ],
        });
        return { module: moduleList, message: "success", status: 200 };
    }
    async SignfeedCMSLayoutList(request) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let layoutList = await this.SignFeedCMSLayoutEntityRepository.find({
            where: {
                retired: 0,
            },
        });
        return { layout: layoutList, message: "success", status: 200 };
    }
    async SignfeedCMSDisplayLists(request) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let displayList = await this.SignFeedCMSDisplayEntityRepository.find({});
        return { display: displayList, message: "success", status: 200 };
    }
    async SignfeedCMSDisplayList(request) {
        try {
            const { DisplayGroupID } = request.query;
            console.log("DisplayGroupID", DisplayGroupID);
            let displayList;
            displayList = await this.connection.query(`SELECT *
            FROM display
            LEFT JOIN lkdisplaydg ON display.displayid = lkdisplaydg.DisplayID 
            AND lkdisplaydg.DisplayGroupID = ?`, [DisplayGroupID]);
            return { display: displayList, message: "success", status: 200 };
        }
        catch (error) {
            console.error("Error fetching data:", error);
            return { message: "An error occurred", status: 500 };
        }
    }
    async SignfeedCMSAssignLayoutList(request) {
        try {
            const { CampaignID } = request.query;
            console.log("CampaignID", CampaignID);
            let layoutList;
            layoutList = await this.connection.query(`SELECT *
        FROM layout
        LEFT JOIN lkcampaignlayout ON layout.layoutID = lkcampaignlayout.layoutID
        AND lkcampaignlayout.CampaignID = ?`, [CampaignID]);
            return { layout: layoutList, message: "success", status: 200 };
        }
        catch (error) {
            console.error("Error fetching data:", error);
            return { message: "An error occurred", status: 500 };
        }
    }
    async SignfeedCMSCampaignLayoutPreviewList(request) {
        try {
            const { CampaignID } = request.query;
            console.log("CampaignID", CampaignID);
            const CampaignLayoutPreviewList = await this.connection.query(`SELECT *
       FROM layout
       INNER JOIN lkcampaignlayout ON layout.layoutID = lkcampaignlayout.LayoutID
       WHERE lkcampaignlayout.CampaignID = ?`, [CampaignID]);
            return {
                CampaignLayoutPreview: CampaignLayoutPreviewList,
                message: "success",
                status: 200,
            };
        }
        catch (error) {
            console.error("Error fetching data:", error);
            return { message: "An error occurred", status: 500 };
        }
    }
    async SignfeedCMSDisplayUpdate(request, cmsDisplayUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        this.logger.log(cmsDisplayUpdateDTO);
        let checkDisplay = await this.SignFeedCMSDisplayEntityRepository.findOne({
            where: {
                displayid: cmsDisplayUpdateDTO.displayid,
            },
        });
        if (checkDisplay) {
            let checkDisplayGroup = await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
                where: {
                    DisplayGroup: checkDisplay.display,
                },
            });
            checkDisplay.display = cmsDisplayUpdateDTO.display;
            checkDisplay.lastaccessed = cmsDisplayUpdateDTO.lastaccessed;
            checkDisplay.license = cmsDisplayUpdateDTO.license;
            checkDisplay.MacAddress = cmsDisplayUpdateDTO.MacAddress;
            checkDisplay.defaultlayoutid = cmsDisplayUpdateDTO.defaultlayoutid;
            checkDisplay.auditingUntil = cmsDisplayUpdateDTO.auditingUntil;
            checkDisplay.loggedin = cmsDisplayUpdateDTO.loggedin;
            checkDisplay.inc_schedule = cmsDisplayUpdateDTO.inc_schedule;
            checkDisplay.email_alert = cmsDisplayUpdateDTO.email_alert;
            checkDisplay.alert_timeout = cmsDisplayUpdateDTO.alert_timeout;
            checkDisplay.ClientAddress = cmsDisplayUpdateDTO.ClientAddress;
            checkDisplay.MediaInventoryStatus =
                cmsDisplayUpdateDTO.MediaInventoryStatus;
            checkDisplay.LastChanged = cmsDisplayUpdateDTO.LastChanged;
            checkDisplay.NumberOfMacAddressChanges =
                cmsDisplayUpdateDTO.NumberOfMacAddressChanges;
            checkDisplay.LastWakeOnLanCommandSent =
                cmsDisplayUpdateDTO.LastWakeOnLanCommandSent;
            checkDisplay.WakeOnLan = cmsDisplayUpdateDTO.WakeOnLan;
            checkDisplay.WakeOnLanTime = cmsDisplayUpdateDTO.WakeOnLanTime;
            checkDisplay.BroadCastAddress = cmsDisplayUpdateDTO.BroadCastAddress;
            checkDisplay.SecureOn = cmsDisplayUpdateDTO.SecureOn;
            checkDisplay.Cidr = cmsDisplayUpdateDTO.Cidr;
            checkDisplay.GeoLocation = cmsDisplayUpdateDTO.GeoLocation;
            checkDisplay.client_type = cmsDisplayUpdateDTO.client_type;
            checkDisplay.client_version = cmsDisplayUpdateDTO.client_version;
            checkDisplay.client_code = cmsDisplayUpdateDTO.client_code;
            checkDisplay.displayprofileid = cmsDisplayUpdateDTO.displayprofileid;
            checkDisplay.screenShotRequested =
                cmsDisplayUpdateDTO.screenShotRequested;
            checkDisplay.storageAvailableSpace =
                cmsDisplayUpdateDTO.storageAvailableSpace;
            checkDisplay.storageTotalSpace = cmsDisplayUpdateDTO.storageTotalSpace;
            checkDisplay.xmrChannel = cmsDisplayUpdateDTO.xmrChannel;
            checkDisplay.xmrPubKey = cmsDisplayUpdateDTO.xmrPubKey;
            checkDisplay.lastCommandSuccess = cmsDisplayUpdateDTO.lastCommandSuccess;
            checkDisplay.deviceName = cmsDisplayUpdateDTO.deviceName;
            checkDisplay.timeZone = cmsDisplayUpdateDTO.timeZone;
            checkDisplay.overrideConfig = cmsDisplayUpdateDTO.overrideConfig;
            await this.SignFeedCMSDisplayEntityRepository.save(checkDisplay);
            if (checkDisplayGroup) {
                this.logger.log(checkDisplayGroup.DisplayGroup);
                checkDisplayGroup.DisplayGroup = cmsDisplayUpdateDTO.display;
                await this.SignFeedCMSDisplayGroupEntityRepository.save(checkDisplayGroup);
            }
            return { display: checkDisplay, message: "success", status: 200 };
        }
        else {
            return { message: "Display Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSModuleUpdate(request, cmsModuleUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkModule = await this.SignFeedCMSModuleEntityRepository.findOne({
            where: {
                ModuleID: cmsModuleUpdateDTO.ModuleID,
            },
        });
        if (checkModule) {
            checkModule.Module = cmsModuleUpdateDTO.Module;
            checkModule.Name = cmsModuleUpdateDTO.Name;
            checkModule.Enabled = cmsModuleUpdateDTO.Enabled;
            checkModule.RegionSpecific = cmsModuleUpdateDTO.RegionSpecific;
            checkModule.Description = cmsModuleUpdateDTO.Description;
            checkModule.ImageUri = cmsModuleUpdateDTO.ImageUri;
            checkModule.SchemaVersion = cmsModuleUpdateDTO.SchemaVersion;
            checkModule.ValidExtensions = cmsModuleUpdateDTO.ValidExtensions;
            checkModule.PreviewEnabled = cmsModuleUpdateDTO.PreviewEnabled;
            checkModule.assignable = cmsModuleUpdateDTO.assignable;
            checkModule.render_as = cmsModuleUpdateDTO.render_as;
            checkModule.settings = cmsModuleUpdateDTO.settings;
            checkModule.viewPath = cmsModuleUpdateDTO.viewPath;
            checkModule.class = cmsModuleUpdateDTO.class;
            checkModule.defaultDuration = cmsModuleUpdateDTO.defaultDuration;
            checkModule.installName = cmsModuleUpdateDTO.installName;
            await this.SignFeedCMSModuleEntityRepository.save(checkModule);
            return { module: checkModule, message: "success", status: 200 };
        }
        else {
            return { message: "Module Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSDisplayAuthorize(request, cmsDisplayAuthorizeDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplay = await this.SignFeedCMSDisplayEntityRepository.findOne({
            where: {
                displayid: cmsDisplayAuthorizeDTO.displayId,
            },
        });
        if (checkDisplay) {
            checkDisplay.licensed = cmsDisplayAuthorizeDTO.licensed;
            await this.SignFeedCMSDisplayEntityRepository.save(checkDisplay);
            return { display: checkDisplay, message: "success", status: 200 };
        }
        else {
            return { message: "Display Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSDisplayDelete(request, cmsDisplayDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplay = await this.SignFeedCMSDisplayEntityRepository.findOne({
            where: {
                displayid: cmsDisplayDeleteDTO.displayid,
            },
        });
        if (checkDisplay) {
            let checkLayoutDisplay;
            checkLayoutDisplay = this.connection.query(`delete from display where displayid='${cmsDisplayDeleteDTO.displayid}'`);
            await this.SignFeedCMSDisplayEntityRepository.delete(checkDisplay);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Display Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSLayoutDelete(request, cmsLayoutDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsLayoutDeleteDTO.layoutID,
            },
        });
        if (checkLayout) {
            let checkLayoutDisplay;
            checkLayoutDisplay = this.connection.query(`delete from layout where layoutID='${cmsLayoutDeleteDTO.layoutID}'`);
            await this.SignFeedCMSLayoutEntityRepository.delete(checkLayout);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Layout Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSUsersDelete(request, cmsUsersDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkUser = await this.SignFeedCMSUserEntityRepository.findOne({
            where: {
                UserID: cmsUsersDeleteDTO.UserID,
            },
        });
        if (checkUser) {
            let checkLayoutUser;
            checkLayoutUser = this.connection.query(`delete from user where UserID='${cmsUsersDeleteDTO.UserID}'`);
            await this.SignFeedCMSUserEntityRepository.delete(checkUser);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "User Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSModuleDelete(request, cmsModuleDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkModule = await this.SignFeedCMSModuleEntityRepository.findOne({
            where: {
                ModuleID: cmsModuleDeleteDTO.ModuleID,
            },
        });
        if (checkModule) {
            let checkLayoutUser;
            checkLayoutUser = this.connection.query(`delete from module where ModuleID='${cmsModuleDeleteDTO.ModuleID}'`);
            await this.SignFeedCMSModuleEntityRepository.delete(checkModule);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "User Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSLayoutDetail(request, cmsLayoutDetailDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let cmsLayoutRegionPlaylistDetailDTO = new CMSLayoutRegionPlaylistDetailDTO_1.CMSLayoutRegionPlaylistDetailDTO();
        let layout_region = [];
        let layoutList = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                retired: 0,
                layoutID: cmsLayoutDetailDTO.layoutid,
            },
        });
        cmsLayoutRegionPlaylistDetailDTO.layoutID = layoutList.layoutID;
        cmsLayoutRegionPlaylistDetailDTO.layout = layoutList.layout;
        cmsLayoutRegionPlaylistDetailDTO.backgroundColor =
            layoutList.backgroundColor;
        cmsLayoutRegionPlaylistDetailDTO.width = Number(layoutList.width);
        cmsLayoutRegionPlaylistDetailDTO.height = Number(layoutList.height);
        let regionList = await this.SignFeedCMSRegionEntityRepository.find({
            where: {
                layoutId: cmsLayoutDetailDTO.layoutid,
            },
        });
        for (let regionitem of regionList) {
            let region = new CMSLayoutRegionPlaylistDetailDTO_1.layoutregion();
            region.regionId = regionitem.regionId;
            region.name = regionitem.name;
            region.width = Number(regionitem.width);
            region.height = Number(regionitem.height);
            region.top = Number(regionitem.top);
            region.left = Number(regionitem.left);
            region.zIndex = Number(regionitem.zIndex);
            let checkplaylist = await this.SignFeedCMSRegionPlayListEntityRepository.findOne({
                where: {
                    regionId: regionitem.regionId,
                },
            });
            let playlist = await this.SignFeedCMSPlayListEntityRepository.findOne({
                where: {
                    playlistId: checkplaylist.playlistId,
                },
            });
            let widgetList = await this.SignFeedCMSWidgetEntityRepository.find({
                where: {
                    playlistId: playlist.playlistId,
                },
            });
            let playlist_widgetd = [];
            for (let widgetitem of widgetList) {
                let medialist = await this.SignFeedCMSWidgetMediaEntityRepository.find({
                    where: {
                        widgetId: widgetitem.widgetId,
                    },
                });
                let widget_media = [];
                for (let mediaitems of medialist) {
                    let checkMedia = await this.SignFeedCMSMediaEntityRepository.findOne({
                        where: {
                            mediaID: mediaitems.mediaId,
                        },
                    });
                    let media_det = new CMSLayoutRegionPlaylistDetailDTO_1.media();
                    media_det.mediaID = checkMedia.mediaID;
                    media_det.name = checkMedia.name;
                    media_det.type = checkMedia.type;
                    media_det.duration = checkMedia.duration;
                    media_det.originalFilename = checkMedia.originalFilename;
                    media_det.storedAs = checkMedia.storedAs;
                    media_det.FileSize = checkMedia.FileSize;
                    media_det.valid = checkMedia.valid;
                    media_det.storedAs = checkMedia.storedAs;
                    widget_media.push(media_det);
                }
                let widget_list = new CMSLayoutRegionPlaylistDetailDTO_1.widget();
                widget_list.widgetId = widgetitem.widgetId;
                widget_list.duration = widgetitem.duration;
                widget_list.calculatedDuration = widgetitem.calculatedDuration;
                widget_list.displayOrder = widgetitem.displayOrder;
                widget_list.media = widget_media;
                playlist_widgetd.push(widget_list);
            }
            let play_list = [];
            let regionPlayList = new CMSLayoutRegionPlaylistDetailDTO_1.regionplaylist();
            regionPlayList.playlistId = playlist.playlistId;
            regionPlayList.name = playlist.name;
            layout_region.push(region);
            regionPlayList.widget = playlist_widgetd;
            play_list.push(regionPlayList);
            region.playlist = play_list;
        }
        cmsLayoutRegionPlaylistDetailDTO.region = layout_region;
        return {
            layout: cmsLayoutRegionPlaylistDetailDTO,
            message: "success",
            status: 200,
        };
    }
    async SignfeedCMSCampaignAdd(request, cmsCampaignDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
            where: {
                Campaign: cmsCampaignDTO.name,
            },
        });
        if (checkCampaign) {
            return { message: "Campaign Name Already Exist", status: 400 };
        }
        else {
            const addCMSCampaign = new SignFeedCMSCampaignEntity_1.SignFeedCMSCampaignEntity();
            addCMSCampaign.Campaign = cmsCampaignDTO.name;
            addCMSCampaign.organization = cmsCampaignDTO.organization;
            addCMSCampaign.IsLayoutSpecific = 0;
            addCMSCampaign.UserID = userid;
            addCMSCampaign.tags = cmsCampaignDTO.tags;
            await this.SignFeedCMSCampaignEntityRepository.save(addCMSCampaign);
            return { campaign: addCMSCampaign, message: "success", status: 200 };
        }
    }
    async SignfeedCMSDisplayAdd(request, cmsDisplayDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplay = await this.SignFeedCMSDisplayEntityRepository.findOne({
            where: {
                display: cmsDisplayDTO.display,
            },
        });
        if (checkDisplay) {
            return { message: "Display Name Already Exist", status: 400 };
        }
        else {
            const addCMSDisplay = new SignFeedCMSDisplayEntity_1.SignFeedCMSDisplayEntity();
            addCMSDisplay.display = cmsDisplayDTO.display;
            addCMSDisplay.organization = cmsDisplayDTO.organization;
            addCMSDisplay.auditingUntil = cmsDisplayDTO.auditingUntil;
            addCMSDisplay.defaultlayoutid = cmsDisplayDTO.defaultlayoutid;
            addCMSDisplay.license = cmsDisplayDTO.license;
            addCMSDisplay.licensed = cmsDisplayDTO.licensed;
            addCMSDisplay.loggedin = cmsDisplayDTO.loggedin;
            addCMSDisplay.lastaccessed = cmsDisplayDTO.lastaccessed;
            addCMSDisplay.inc_schedule = cmsDisplayDTO.inc_schedule;
            addCMSDisplay.email_alert = cmsDisplayDTO.email_alert;
            addCMSDisplay.alert_timeout = cmsDisplayDTO.alert_timeout;
            addCMSDisplay.ClientAddress = cmsDisplayDTO.ClientAddress;
            addCMSDisplay.MediaInventoryStatus = cmsDisplayDTO.MediaInventoryStatus;
            addCMSDisplay.MacAddress = cmsDisplayDTO.MacAddress;
            addCMSDisplay.LastChanged = cmsDisplayDTO.LastChanged;
            addCMSDisplay.NumberOfMacAddressChanges =
                cmsDisplayDTO.NumberOfMacAddressChanges;
            addCMSDisplay.LastWakeOnLanCommandSent =
                cmsDisplayDTO.LastWakeOnLanCommandSent;
            addCMSDisplay.WakeOnLan = cmsDisplayDTO.WakeOnLan;
            addCMSDisplay.WakeOnLanTime = cmsDisplayDTO.WakeOnLanTime;
            addCMSDisplay.BroadCastAddress = cmsDisplayDTO.BroadCastAddress;
            addCMSDisplay.SecureOn = cmsDisplayDTO.SecureOn;
            addCMSDisplay.Cidr = cmsDisplayDTO.Cidr;
            addCMSDisplay.GeoLocation = cmsDisplayDTO.GeoLocation;
            addCMSDisplay.client_type = cmsDisplayDTO.client_type;
            addCMSDisplay.client_version = cmsDisplayDTO.client_version;
            addCMSDisplay.client_code = cmsDisplayDTO.client_code;
            addCMSDisplay.displayprofileid = cmsDisplayDTO.displayprofileid;
            addCMSDisplay.screenShotRequested = cmsDisplayDTO.screenShotRequested;
            addCMSDisplay.storageAvailableSpace = cmsDisplayDTO.storageAvailableSpace;
            addCMSDisplay.storageTotalSpace = cmsDisplayDTO.storageTotalSpace;
            addCMSDisplay.xmrChannel = cmsDisplayDTO.xmrChannel;
            addCMSDisplay.xmrPubKey = cmsDisplayDTO.xmrPubKey;
            addCMSDisplay.lastCommandSuccess = cmsDisplayDTO.lastCommandSuccess;
            addCMSDisplay.deviceName = cmsDisplayDTO.deviceName;
            addCMSDisplay.timeZone = cmsDisplayDTO.timeZone;
            addCMSDisplay.overrideConfig = cmsDisplayDTO.overrideConfig;
            await this.SignFeedCMSDisplayEntityRepository.save(addCMSDisplay);
            let getDisplayID = await this.SignFeedCMSDisplayEntityRepository.findOne({
                where: {
                    display: cmsDisplayDTO.display,
                },
            });
            const addDisplayGroup = new SignFeedCMSDisplayGroupEntity_1.SignFeedCMSDisplayGroupEntity();
            addDisplayGroup.DisplayGroup = cmsDisplayDTO.display;
            addDisplayGroup.IsDisplaySpecific = 1;
            addDisplayGroup.userId = 1;
            await this.SignFeedCMSDisplayGroupEntityRepository.save(addDisplayGroup);
            return { display: addCMSDisplay, message: "success", status: 200 };
        }
    }
    async SignfeedCMSDaypartAdd(request, cmsDaypartDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDaypart = await this.SignFeedCMSDaypartEntityRepository.findOne({
            where: {
                name: cmsDaypartDTO.name,
            },
        });
        if (checkDaypart) {
            return { message: "Daypart Name Already Exist", status: 400 };
        }
        else {
            const addCMSDaypart = new SignFeedCMSDaypartEntity_1.SignFeedCMSDaypartEntity();
            addCMSDaypart.organization = cmsDaypartDTO.organization;
            addCMSDaypart.name = cmsDaypartDTO.name;
            addCMSDaypart.description = cmsDaypartDTO.description;
            addCMSDaypart.userid = cmsDaypartDTO.userid;
            addCMSDaypart.exceptions = cmsDaypartDTO.exceptions;
            addCMSDaypart.startTime = cmsDaypartDTO.startTime;
            addCMSDaypart.endTime = cmsDaypartDTO.endTime;
            addCMSDaypart.isAlways = cmsDaypartDTO.isAlways;
            addCMSDaypart.isCustom = cmsDaypartDTO.isCustom;
            addCMSDaypart.isRetired = cmsDaypartDTO.isRetired;
            await this.SignFeedCMSDaypartEntityRepository.save(addCMSDaypart);
            return { daypart: addCMSDaypart, message: "success", status: 200 };
        }
    }
    async SignfeedCMSDaypartList(request) {
        let daypartList = await this.SignFeedCMSDaypartEntityRepository.find({});
        return { daypart: daypartList, message: "success", status: 200 };
    }
    async SignfeedCMSDaypartUpdate(request, cmsDaypartUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDaypart = await this.SignFeedCMSDaypartEntityRepository.findOne({
            where: {
                dayPartId: cmsDaypartUpdateDTO.dayPartId,
            },
        });
        if (checkDaypart) {
            checkDaypart.name = cmsDaypartUpdateDTO.name;
            checkDaypart.description = cmsDaypartUpdateDTO.description;
            checkDaypart.userid = cmsDaypartUpdateDTO.userid;
            checkDaypart.exceptions = cmsDaypartUpdateDTO.exceptions;
            checkDaypart.startTime = cmsDaypartUpdateDTO.startTime;
            checkDaypart.endTime = cmsDaypartUpdateDTO.endTime;
            checkDaypart.isAlways = cmsDaypartUpdateDTO.isAlways;
            checkDaypart.isCustom = cmsDaypartUpdateDTO.isCustom;
            checkDaypart.isRetired = cmsDaypartUpdateDTO.isRetired;
            await this.SignFeedCMSDaypartEntityRepository.save(checkDaypart);
            return { daypart: checkDaypart, message: "success", status: 200 };
        }
        else {
            return { message: "Daypart Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSDaypartDelete(request, cmsdaypartDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDaypart = await this.SignFeedCMSDaypartEntityRepository.findOne({
            where: {
                dayPartId: cmsdaypartDeleteDTO.dayPartId,
            },
        });
        if (checkDaypart) {
            let checkDaypartTable;
            checkDaypartTable = this.connection.query(`delete from daypart where dayPartId='${cmsdaypartDeleteDTO.dayPartId}'`);
            await this.SignFeedCMSDaypartEntityRepository.delete(checkDaypart);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "daypart Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSCampaignDelete(request, cmsCampaignDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
            where: {
                CampaignID: cmsCampaignDeleteDTO.CampaignID,
                IsLayoutSpecific: 0,
            },
        });
        if (checkCampaign) {
            let checkLayouCampaign;
            checkLayouCampaign = this.connection.query(`delete from lkcampaignlayout where CampaignID='${cmsCampaignDeleteDTO.CampaignID}'`);
            await this.SignFeedCMSCampaignEntityRepository.delete(checkCampaign);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Campaign Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSCampaignUpdate(request, cmsCampaignUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
            where: {
                CampaignID: cmsCampaignUpdateDTO.id,
            },
        });
        if (checkCampaign) {
            checkCampaign.Campaign = cmsCampaignUpdateDTO.name;
            checkCampaign.IsLayoutSpecific = 0;
            checkCampaign.UserID = userid;
            checkCampaign.tags = cmsCampaignUpdateDTO.tags;
            await this.SignFeedCMSCampaignEntityRepository.save(checkCampaign);
            return { campaign: checkCampaign, message: "success", status: 200 };
        }
        else {
            return { message: "Campaign Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSUserUpdate(request, cmsUserUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkUser = await this.SignFeedCMSUserEntityRepository.findOne({
            where: {
                UserID: cmsUserUpdateDTO.UserID,
            },
        });
        if (checkUser) {
            checkUser.firstName = cmsUserUpdateDTO.firstName;
            checkUser.lastName = cmsUserUpdateDTO.lastName;
            checkUser.email = cmsUserUpdateDTO.email;
            checkUser.phone = cmsUserUpdateDTO.phone;
            await this.SignFeedCMSUserEntityRepository.save(checkUser);
            return { users: checkUser, message: "success", status: 200 };
        }
        else {
            return { message: "user Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSCampaignPreview(request, cmsCampaignDetailDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let cmsCampaignPreviewDTO = new CMSCampaignPreviewDTO_1.CMSCampaignPreviewDTO();
        let campaignlist = await this.SignFeedCMSCampaignLayoutEntityRepository.find({
            where: {
                CampaignID: cmsCampaignDetailDTO.CampaignID,
            },
        });
        cmsCampaignPreviewDTO.CampaignID = cmsCampaignDetailDTO.CampaignID;
        for (let campaignItem of campaignlist) {
            let layout_region = [];
            let layoutList = await this.SignFeedCMSLayoutEntityRepository.findOne({
                where: {
                    retired: 0,
                    layoutID: campaignItem.LayoutID,
                },
            });
            let regionList = await this.SignFeedCMSRegionEntityRepository.find({
                where: {
                    layoutId: campaignItem.LayoutID,
                },
            });
            for (let regionitem of regionList) {
                let region = new CMSLayoutRegionPlaylistDetailDTO_1.layoutregion();
                region.regionId = regionitem.regionId;
                region.name = regionitem.name;
                let checkplaylist = await this.SignFeedCMSRegionPlayListEntityRepository.findOne({
                    where: {
                        regionId: regionitem.regionId,
                    },
                });
                let playlist = await this.SignFeedCMSPlayListEntityRepository.findOne({
                    where: {
                        playlistId: checkplaylist.playlistId,
                    },
                });
                let widgetList = await this.SignFeedCMSWidgetEntityRepository.find({
                    where: {
                        playlistId: playlist.playlistId,
                    },
                });
                let playlist_widgetd = [];
                for (let widgetitem of widgetList) {
                    let medialist = await this.SignFeedCMSWidgetMediaEntityRepository.find({
                        where: {
                            widgetId: widgetitem.widgetId,
                        },
                    });
                    let widget_media = [];
                    for (let mediaitems of medialist) {
                        let checkMedia = await this.SignFeedCMSMediaEntityRepository.findOne({
                            where: {
                                mediaID: mediaitems.mediaId,
                            },
                        });
                        let media_det = new CMSLayoutRegionPlaylistDetailDTO_1.media();
                        media_det.mediaID = checkMedia.mediaID;
                        media_det.name = checkMedia.name;
                        media_det.type = checkMedia.type;
                        media_det.duration = checkMedia.duration;
                        media_det.originalFilename = checkMedia.originalFilename;
                        media_det.storedAs = checkMedia.storedAs;
                        media_det.FileSize = checkMedia.FileSize;
                        media_det.valid = checkMedia.valid;
                        widget_media.push(media_det);
                    }
                    let widget_list = new CMSLayoutRegionPlaylistDetailDTO_1.widget();
                    widget_list.widgetId = widgetitem.widgetId;
                    widget_list.duration = widgetitem.duration;
                    widget_list.calculatedDuration = widgetitem.calculatedDuration;
                    widget_list.displayOrder = widgetitem.displayOrder;
                    widget_list.media = widget_media;
                    playlist_widgetd.push(widget_list);
                }
                let play_list = [];
                let regionPlayList = new CMSLayoutRegionPlaylistDetailDTO_1.regionplaylist();
                regionPlayList.playlistId = playlist.playlistId;
                regionPlayList.name = playlist.name;
                layout_region.push(region);
                regionPlayList.widget = playlist_widgetd;
                play_list.push(regionPlayList);
                region.playlist = play_list;
            }
            let layout_list = [];
            let layout_det = new CMSCampaignPreviewDTO_1.layout();
            layout_det.layoutID = layoutList.layoutID;
            layout_det.layout = layoutList.layout;
            layout_det.userID = layoutList.userID;
            layout_det.createdDT = layoutList.createdDT;
            layout_det.modifiedDT = layoutList.modifiedDT;
            layout_det.description = layoutList.description;
            layout_det.retired = layoutList.retired;
            layout_det.region = layout_region;
            layout_list.push(layout_det);
            cmsCampaignPreviewDTO.layout = layout_list;
        }
        return { campaign: cmsCampaignPreviewDTO, message: "success", status: 200 };
    }
    async SignfeedCMSResolutionAdd(request, cmsResolutionDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                intended_width: cmsResolutionDTO.width,
                intended_height: cmsResolutionDTO.height,
            },
        });
        if (checkResolution) {
            return {
                message: "Resolution with Height & Width Already Exist",
                status: 400,
            };
        }
        else {
            const addCMSResolution = new SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity();
            addCMSResolution.resolution = cmsResolutionDTO.name;
            addCMSResolution.organization = cmsResolutionDTO.organization;
            addCMSResolution.width = cmsResolutionDTO.width;
            addCMSResolution.height = cmsResolutionDTO.height;
            addCMSResolution.intended_width = cmsResolutionDTO.width;
            addCMSResolution.intended_height = cmsResolutionDTO.height;
            addCMSResolution.version = 2;
            addCMSResolution.enabled = cmsResolutionDTO.enabled;
            addCMSResolution.userId = userid;
            await this.SignFeedCMSResolutionEntityRepository.save(addCMSResolution);
            return { resolution: addCMSResolution, message: "success", status: 200 };
        }
    }
    async SignfeedCMSResolutionUpdate(request, cmsResolutionUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                resolutionID: cmsResolutionUpdateDTO.id,
            },
        });
        if (checkResolution) {
            checkResolution.resolution = cmsResolutionUpdateDTO.name;
            checkResolution.width = cmsResolutionUpdateDTO.width;
            checkResolution.height = cmsResolutionUpdateDTO.height;
            checkResolution.intended_width = cmsResolutionUpdateDTO.width;
            checkResolution.intended_height = cmsResolutionUpdateDTO.height;
            checkResolution.enabled = cmsResolutionUpdateDTO.enabled;
            await this.SignFeedCMSResolutionEntityRepository.save(checkResolution);
            return { resolution: checkResolution, message: "success", status: 200 };
        }
        else {
            return { message: "Resolution ID Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSResolutionDelete(request, cmsResolutionDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                resolutionID: cmsResolutionDeleteDTO.resolutionID,
            },
        });
        if (checkResolution) {
            let checkLayouCampaign;
            checkLayouCampaign = this.connection.query(`delete from resolution where resolutionID='${cmsResolutionDeleteDTO.resolutionID}'`);
            await this.SignFeedCMSResolutionEntityRepository.delete(checkResolution);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Resolution Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSMediaDelete(request, cmsMediaDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkMedia = await this.SignFeedCMSMediaEntityRepository.findOne({
            where: {
                mediaID: cmsMediaDeleteDTO.mediaID,
            },
        });
        if (checkMedia) {
            let checkMedia;
            checkMedia = this.connection.query(`delete from media where mediaID='${cmsMediaDeleteDTO.mediaID}'`);
            await this.SignFeedCMSMediaEntityRepository.delete(checkMedia);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Campaign Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSMediaUpdate(request, cmsMediaUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkMedia = await this.SignFeedCMSMediaEntityRepository.findOne({
            where: {
                mediaID: cmsMediaUpdateDTO.mediaID,
            },
        });
        if (checkMedia) {
            checkMedia.name = cmsMediaUpdateDTO.name;
            checkMedia.duration = cmsMediaUpdateDTO.duration;
            await this.SignFeedCMSMediaEntityRepository.save(checkMedia);
            return { media: checkMedia, message: "success", status: 200 };
        }
        else {
            return { message: "Media ID Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSModuleAdd(request, cmsModuleDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkModule = await this.SignFeedCMSModuleEntityRepository.findOne({
            where: {
                Module: cmsModuleDTO.Module,
            },
        });
        if (checkModule) {
            return { message: "Module Name Already Exist", status: 400 };
        }
        else {
            const addCMSModule = new SignFeedCMSModuleEntity_1.SignFeedCMSModuleEntity();
            addCMSModule.Module = cmsModuleDTO.Module;
            addCMSModule.Name = cmsModuleDTO.Name;
            addCMSModule.organization = cmsModuleDTO.organization;
            addCMSModule.Enabled = cmsModuleDTO.Enabled;
            addCMSModule.RegionSpecific = cmsModuleDTO.RegionSpecific;
            addCMSModule.Description = cmsModuleDTO.Description;
            addCMSModule.ImageUri = cmsModuleDTO.ImageUri;
            addCMSModule.SchemaVersion = cmsModuleDTO.SchemaVersion;
            addCMSModule.ValidExtensions = cmsModuleDTO.ValidExtensions;
            addCMSModule.PreviewEnabled = cmsModuleDTO.PreviewEnabled;
            addCMSModule.assignable = cmsModuleDTO.assignable;
            addCMSModule.render_as = cmsModuleDTO.render_as;
            addCMSModule.settings = cmsModuleDTO.settings;
            addCMSModule.viewPath = cmsModuleDTO.viewPath;
            addCMSModule.class = cmsModuleDTO.class;
            addCMSModule.defaultDuration = cmsModuleDTO.defaultDuration;
            addCMSModule.installName = cmsModuleDTO.installName;
            await this.SignFeedCMSModuleEntityRepository.save(addCMSModule);
            return { Module: addCMSModule, message: "success", status: 200 };
        }
    }
    async SignfeedCMSLayout(request, cmsLayoutDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layout: cmsLayoutDTO.name,
            },
        });
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                resolutionID: cmsLayoutDTO.resolutionId,
            },
        });
        if (!checkResolution) {
            return { message: "Region ID Not Exist", status: 400 };
        }
        if (checkLayout) {
            return { message: "Layout Name Already Exist", status: 400 };
        }
        else {
            const addCMSLayout = new SignFeedCMSLayoutEntity_1.SignFeedCMSLayoutEntity();
            addCMSLayout.layout = cmsLayoutDTO.name;
            addCMSLayout.userID = userid;
            addCMSLayout.createdDT = currentDateTime;
            addCMSLayout.organization = cmsLayoutDTO.organization;
            addCMSLayout.modifiedDT = currentDateTime;
            addCMSLayout.description = cmsLayoutDTO.description;
            addCMSLayout.tags = cmsLayoutDTO.tags;
            addCMSLayout.retired = 0;
            addCMSLayout.duration = 0;
            addCMSLayout.status = 0;
            addCMSLayout.width = checkResolution.intended_width;
            addCMSLayout.height = checkResolution.intended_height;
            addCMSLayout.backgroundColor = "#000000";
            addCMSLayout.backgroundzIndex = 0;
            addCMSLayout.schemaVersion = 3;
            await this.SignFeedCMSLayoutEntityRepository.save(addCMSLayout);
            let getLayoutID = await this.SignFeedCMSLayoutEntityRepository.findOne({
                where: {
                    layout: cmsLayoutDTO.name,
                },
            });
            const addCampaign = new SignFeedCMSCampaignEntity_1.SignFeedCMSCampaignEntity();
            addCampaign.Campaign = cmsLayoutDTO.name;
            addCampaign.IsLayoutSpecific = 1;
            addCampaign.UserID = 1;
            await this.SignFeedCMSCampaignEntityRepository.save(addCampaign);
            const addPlaylist = new SignFeedCMSPlayListEntity_1.SignFeedCMSPlayListEntity();
            addPlaylist.name = cmsLayoutDTO.name + "-1";
            addPlaylist.ownerId = 1;
            await this.SignFeedCMSPlayListEntityRepository.save(addPlaylist);
            const addRegion = new SignFeedCMSRegionEntity_1.SignFeedCMSRegionEntity();
            addRegion.layoutId = getLayoutID.layoutID;
            addRegion.ownerId = 1;
            addRegion.name = cmsLayoutDTO.name + "-1";
            addRegion.width = checkResolution.intended_width;
            addRegion.height = checkResolution.intended_height;
            addRegion.top = 0;
            addRegion.left = 0;
            addRegion.zIndex = 0;
            addRegion.duration = 0;
            await this.SignFeedCMSRegionEntityRepository.save(addRegion);
            let getPlaylistID = await this.SignFeedCMSPlayListEntityRepository.findOne({
                where: {
                    name: cmsLayoutDTO.name + "-1",
                },
            });
            let getRegionID = await this.SignFeedCMSRegionEntityRepository.findOne({
                where: {
                    name: cmsLayoutDTO.name + "-1",
                },
            });
            const addRegionPlaylist = new SignFeedCMSRegionPlayListEntity_1.SignFeedCMSRegionPlayListEntity();
            addRegionPlaylist.regionId = getRegionID.regionId;
            addRegionPlaylist.playlistId = getPlaylistID.playlistId;
            addRegionPlaylist.displayOrder = 1;
            await this.SignFeedCMSRegionPlayListEntityRepository.save(addRegionPlaylist);
            let checkTag = await this.SignFeedCMSTagsEntityRepository.findOne({
                where: {
                    tag: "",
                },
            });
            return {
                layout: addCMSLayout,
                region: addRegion,
                message: "success",
                status: 200,
            };
        }
    }
    async SignfeedCMSLayoutUpdate(request, cmsLayoutUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        this.logger.log(cmsLayoutUpdateDTO);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsLayoutUpdateDTO.layoutID,
            },
        });
        if (checkLayout) {
            let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
                where: {
                    Campaign: checkLayout.layout,
                },
            });
            this.logger.log(checkCampaign.Campaign);
            checkLayout.layout = cmsLayoutUpdateDTO.layout;
            checkLayout.tags = cmsLayoutUpdateDTO.tags;
            checkLayout.description = cmsLayoutUpdateDTO.description;
            checkLayout.backgroundColor = cmsLayoutUpdateDTO.backgroundColor;
            await this.SignFeedCMSLayoutEntityRepository.save(checkLayout);
            if (checkCampaign) {
                this.logger.log(checkCampaign.Campaign);
                checkCampaign.Campaign = cmsLayoutUpdateDTO.layout;
                await this.SignFeedCMSCampaignEntityRepository.save(checkCampaign);
            }
            return { users: checkLayout, message: "success", status: 200 };
        }
        else {
            return { message: "user Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSEventDetailsUpdate(request, cmsEventDetailsUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        this.logger.log(cmsEventDetailsUpdateDTO);
        let checkscheduling = await this.SignFeedCMSSchedulingEntityRepository.findOne({
            where: {
                eventID: cmsEventDetailsUpdateDTO.eventID,
            },
        });
        if (checkscheduling) {
            let checkDisplayGroup = await this.SignFeedCMSscheduledisplaygroupEntityRepository.findOne({
                where: {
                    eventId: checkscheduling.eventID,
                },
            });
            checkscheduling.FromDT = cmsEventDetailsUpdateDTO.FromDT;
            checkscheduling.ToDT = cmsEventDetailsUpdateDTO.ToDT;
            checkscheduling.DisplayOrder = cmsEventDetailsUpdateDTO.DisplayOrder;
            checkscheduling.displayid = cmsEventDetailsUpdateDTO.displayid;
            checkscheduling.CampaignID = cmsEventDetailsUpdateDTO.CampaignID;
            const gg = await this.SignFeedCMSSchedulingEntityRepository.save(checkscheduling);
            console.log("jj", gg);
            if (checkDisplayGroup) {
                let checkDisplayEvents = await this.SignFeedCMSdisplayeventsEntityRepository.findOne({
                    where: {
                        eventID: checkscheduling.eventID,
                    },
                });
                checkDisplayGroup.displayGroupId = cmsEventDetailsUpdateDTO.displayid;
                await this.SignFeedCMSscheduledisplaygroupEntityRepository.save(checkDisplayGroup);
                if (checkDisplayEvents) {
                    checkDisplayEvents.start = cmsEventDetailsUpdateDTO.start;
                    checkDisplayEvents.end = cmsEventDetailsUpdateDTO.end;
                    await this.SignFeedCMSdisplayeventsEntityRepository.save(checkDisplayEvents);
                }
            }
            return {
                updateEvent: checkscheduling,
                checkDisplayGroup,
                message: "success",
                status: 200,
            };
        }
        else {
            return { message: " Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSLayoutRetire(request, cmsLayoutRetireDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsLayoutRetireDTO.id,
            },
        });
        checkLayout.retired = 1;
        await this.SignFeedCMSLayoutEntityRepository.save(checkLayout);
        return { layout: checkLayout, message: "success", status: 200 };
    }
    async SignfeedCMSLayoutAssignToCampaign(request, cmsCampaignAssignLayoutDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        for (let campaignItem of cmsCampaignAssignLayoutDTO) {
            let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
                where: {
                    layoutID: campaignItem.layoutid,
                },
            });
            console.log("l", checkLayout);
            if (checkLayout) {
                let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
                    where: {
                        CampaignID: campaignItem.campaignid,
                    },
                });
                if (checkCampaign) {
                    let checkCampaignLayout = await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
                        where: {
                            CampaignID: campaignItem.campaignid,
                            LayoutID: campaignItem.layoutid,
                        },
                    });
                    console.log("loo", checkCampaignLayout);
                    if (checkCampaignLayout) {
                        checkCampaignLayout.DisplayOrder = campaignItem.displayorder;
                    }
                    else {
                        const addCampaignLayout = new SignFeedCMSCampaignLayoutEntity_1.SignFeedCMSCampaignLayoutEntity();
                        addCampaignLayout.CampaignID = campaignItem.campaignid;
                        addCampaignLayout.LayoutID = campaignItem.layoutid;
                        addCampaignLayout.DisplayOrder = 1;
                        await this.SignFeedCMSCampaignLayoutEntityRepository.save(addCampaignLayout);
                    }
                }
            }
        }
        return { message: "success", status: 200 };
    }
    async SignfeedCMSLayoutRemoveToCampaign(request, cmsCampaignAssignLayoutDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsCampaignAssignLayoutDTO.layoutid,
            },
        });
        if (checkLayout) {
            let checkCampaign = await this.SignFeedCMSCampaignEntityRepository.findOne({
                where: {
                    CampaignID: cmsCampaignAssignLayoutDTO.campaignid,
                },
            });
            if (checkCampaign) {
                let checkCampaignLayout = await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
                    where: {
                        CampaignID: cmsCampaignAssignLayoutDTO.campaignid,
                        LayoutID: cmsCampaignAssignLayoutDTO.layoutid,
                    },
                });
                if (checkCampaignLayout) {
                    checkCampaignLayout.DisplayOrder =
                        cmsCampaignAssignLayoutDTO.displayorder;
                    return { message: "success", status: 200 };
                }
                else {
                    const addCampaignLayout = new SignFeedCMSCampaignLayoutEntity_1.SignFeedCMSCampaignLayoutEntity();
                    addCampaignLayout.CampaignID = cmsCampaignAssignLayoutDTO.campaignid;
                    addCampaignLayout.LayoutID = cmsCampaignAssignLayoutDTO.layoutid;
                    addCampaignLayout.DisplayOrder = 1;
                    await this.SignFeedCMSCampaignLayoutEntityRepository.save(addCampaignLayout);
                    return { message: "success", status: 200 };
                }
            }
        }
        return { message: "success", status: 200 };
    }
    async SignfeedCMSLayoutPublish(request, cmsLayoutPublishDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsLayoutPublishDTO.layoutId,
            },
        });
        return { message: "success", status: 200 };
    }
    async SignfeedCMSRegionAdd(request, cmsRegionDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
            where: {
                layoutID: cmsRegionDTO.layoutid,
            },
        });
        if (checkLayout) {
            let checkRegion = await this.SignFeedCMSRegionEntityRepository.count({
                where: {
                    layoutId: cmsRegionDTO.layoutid,
                },
            });
            let regionCount = checkRegion + 1;
            let regionName = checkLayout.layout + "-" + regionCount;
            const addPlaylist = new SignFeedCMSPlayListEntity_1.SignFeedCMSPlayListEntity();
            addPlaylist.name = checkLayout.layout + "-" + regionCount;
            addPlaylist.ownerId = userid;
            await this.SignFeedCMSPlayListEntityRepository.save(addPlaylist);
            const addRegion = new SignFeedCMSRegionEntity_1.SignFeedCMSRegionEntity();
            addRegion.layoutId = cmsRegionDTO.layoutid;
            addRegion.ownerId = userid;
            addRegion.name = checkLayout.layout + "-" + regionCount;
            addRegion.width = cmsRegionDTO.width;
            addRegion.height = cmsRegionDTO.height;
            addRegion.top = cmsRegionDTO.top;
            addRegion.left = cmsRegionDTO.left;
            addRegion.zIndex = 0;
            addRegion.duration = 0;
            await this.SignFeedCMSRegionEntityRepository.save(addRegion);
            let getPlaylistID = await this.SignFeedCMSPlayListEntityRepository.findOne({
                where: {
                    name: regionName,
                },
            });
            let getRegionID = await this.SignFeedCMSRegionEntityRepository.findOne({
                where: {
                    name: regionName,
                },
            });
            const addRegionPlaylist = new SignFeedCMSRegionPlayListEntity_1.SignFeedCMSRegionPlayListEntity();
            addRegionPlaylist.regionId = getRegionID.regionId;
            addRegionPlaylist.playlistId = getPlaylistID.playlistId;
            addRegionPlaylist.displayOrder = 1;
            await this.SignFeedCMSRegionPlayListEntityRepository.save(addRegionPlaylist);
            return {
                region: getRegionID,
                playlist: getPlaylistID,
                message: "success",
                status: 200,
            };
        }
        else {
            return { message: "Layout Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSRegionUpdate(request, cmsRegionUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        for (let regionitem of cmsRegionUpdateDTO) {
            let checkRegion = await this.SignFeedCMSRegionEntityRepository.findOne({
                where: {
                    regionId: regionitem.regionid,
                },
            });
            let checkPlaylist = await this.SignFeedCMSPlayListEntityRepository.findOne({
                where: {
                    name: checkRegion.name,
                },
            });
            if (checkRegion) {
                checkRegion.width = regionitem.width;
                checkRegion.height = regionitem.height;
                checkRegion.top = regionitem.top;
                checkRegion.left = regionitem.left;
                checkRegion.zIndex = regionitem.zIndex;
                await this.SignFeedCMSRegionEntityRepository.save(checkRegion);
            }
            else {
                return { region: [], message: "Region Does Not Exist", status: 400 };
            }
        }
        return { message: "success", status: 200 };
    }
    async SignfeedCMSWidgetAdd(request, cmsWidgetDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkPlaylist = await this.SignFeedCMSPlayListEntityRepository.findOne({
            where: {
                playlistId: cmsWidgetDTO.playlistId,
            },
        });
        if (checkPlaylist) {
            const addWidget = new SignFeedCMSWidgetEntity_1.SignFeedCMSWidgetEntity();
            addWidget.playlistId = cmsWidgetDTO.playlistId;
            addWidget.ownerId = userid;
            addWidget.type = cmsWidgetDTO.type;
            addWidget.duration = cmsWidgetDTO.duration;
            addWidget.displayOrder = cmsWidgetDTO.displayOrder;
            addWidget.calculatedDuration = cmsWidgetDTO.duration;
            addWidget.useDuration = 1;
            addWidget.createdDt = unixTimestamp;
            addWidget.modifiedDt = unixTimestamp;
            await this.SignFeedCMSWidgetEntityRepository.save(addWidget);
            let checkLastWidget = await this.SignFeedCMSWidgetEntityRepository.findOne({
                where: {
                    playlistId: cmsWidgetDTO.playlistId,
                },
                order: {
                    widgetId: "desc",
                },
            });
            const addWidgetMedia = new SignFeedCMSWidgetMediaEntity_1.SignFeedCMSWidgetMediaEntity();
            addWidgetMedia.widgetId = checkLastWidget.widgetId;
            addWidgetMedia.mediaId = cmsWidgetDTO.mediaId;
            await this.SignFeedCMSWidgetMediaEntityRepository.save(addWidgetMedia);
            return {
                widget: addWidget,
                media: addWidgetMedia,
                message: "success",
                status: 200,
            };
        }
    }
    async SignfeedCMSWidgetsAdd(request, widgetArray) {
        try {
            const response = [];
            for (const cmsWidgetDTO of widgetArray) {
                const ipAddress = request.headers["x-forwarded-for"] ||
                    request.connection.remoteAddress;
                const username = request.user.username;
                let userid = await this.SignfeedCMSGetUserID(username);
                const currentDateTime = new Date();
                const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
                let checkPlaylist = await this.SignFeedCMSPlayListEntityRepository.findOne({
                    where: {
                        playlistId: cmsWidgetDTO.playlistId,
                    },
                });
                if (checkPlaylist) {
                    const addWidget = new SignFeedCMSWidgetEntity_1.SignFeedCMSWidgetEntity();
                    addWidget.playlistId = cmsWidgetDTO.playlistId;
                    addWidget.ownerId = userid;
                    addWidget.type = cmsWidgetDTO.type;
                    addWidget.duration = cmsWidgetDTO.duration;
                    addWidget.displayOrder = cmsWidgetDTO.displayOrder;
                    addWidget.calculatedDuration = cmsWidgetDTO.duration;
                    addWidget.useDuration = 1;
                    addWidget.createdDt = unixTimestamp;
                    addWidget.modifiedDt = unixTimestamp;
                    await this.SignFeedCMSWidgetEntityRepository.save(addWidget);
                    let checkLastWidget = await this.SignFeedCMSWidgetEntityRepository.findOne({
                        where: {
                            playlistId: cmsWidgetDTO.playlistId,
                        },
                        order: {
                            widgetId: "desc",
                        },
                    });
                    const addWidgetMedia = new SignFeedCMSWidgetMediaEntity_1.SignFeedCMSWidgetMediaEntity();
                    addWidgetMedia.widgetId = checkLastWidget.widgetId;
                    addWidgetMedia.mediaId = cmsWidgetDTO.mediaId;
                    await this.SignFeedCMSWidgetMediaEntityRepository.save(addWidgetMedia);
                    response.push({
                        widget: addWidget,
                        media: addWidgetMedia,
                        message: "success",
                        status: 200,
                    });
                }
            }
            return response;
        }
        catch (error) {
            console.error("Error during widget addition:", error);
            throw new common_1.InternalServerErrorException("Internal Server Error");
        }
    }
    async SignfeedCMSWidgetDelete(request, cmsWidgetDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkWidgetMedia = await this.SignFeedCMSWidgetMediaEntityRepository.findOne({
            where: {
                widgetId: cmsWidgetDeleteDTO.widgetId,
                mediaId: cmsWidgetDeleteDTO.mediaId,
            },
        });
        if (checkWidgetMedia) {
            let checkWidget = await this.SignFeedCMSWidgetEntityRepository.findOne({
                where: {
                    widgetId: cmsWidgetDeleteDTO.widgetId,
                },
            });
            await this.SignFeedCMSWidgetMediaEntityRepository.delete(checkWidgetMedia);
            await this.SignFeedCMSWidgetEntityRepository.delete(checkWidget);
            return { message: "success", status: 200 };
        }
    }
    async SignfeedCMSMediaAdd(files, duration) {
        console.log("guri", duration);
        console.log("Start Upload");
        const uploadedMediaData = [];
        for (const file of files) {
            const currentDateTime = new Date();
            const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
            if (!this.validateFileType(file) || !this.validateFileSize(file)) {
                throw new common_1.BadRequestException("Invalid file type or size.");
            }
            let checkmedia = await this.SignFeedCMSMediaEntityRepository.findOne({
                where: {
                    name: file.originalname,
                },
            });
            let filename;
            if (checkmedia) {
                const randomString = this.generateRandomString(8);
                const fileNameWithoutExtension = path.basename(file.originalname, path.extname(file.originalname));
                const fileExtension = path.extname(file.originalname).substring(1);
                filename =
                    fileNameWithoutExtension + "_" + randomString + "." + fileExtension;
            }
            else {
                filename = file.originalname;
            }
            let maxMediaRecord = await this.SignFeedCMSMediaEntityRepository.findOne({
                where: {
                    released: 1,
                },
                order: {
                    mediaID: "DESC",
                },
            });
            let maxMediaID;
            if (maxMediaRecord) {
                maxMediaID = maxMediaRecord.mediaID + 1;
            }
            else {
                maxMediaID = 1;
            }
            const fileData = {
                originalFilename: filename,
                size: file.size,
                mimeType: file.mimetype,
                mediaid: maxMediaID,
            };
            let fileExtension = path.extname(filename);
            let durationInSeconds;
            const ffmpeg = require("fluent-ffmpeg");
            const tmp = require("tmp");
            const getVideoDuration = (fileBuffer) => {
                return new Promise((resolve, reject) => {
                    const tempFilePath = tmp.tmpNameSync({ postfix: ".mp4" });
                    console.log("fileTemp", tempFilePath);
                    console.log("filebuffer", fileBuffer);
                    ffmpeg()
                        .input(fileBuffer)
                        .save(tempFilePath)
                        .on("end", () => {
                        ffmpeg.ffprobe(tempFilePath, (err, metadata) => {
                            if (err) {
                                reject(err);
                            }
                            else {
                                console.log("Metadata:", metadata);
                                console.log("ll", metadata.format.duration);
                                resolve(metadata.format.duration);
                            }
                            fs.unlinkSync(tempFilePath);
                        });
                    })
                        .on("error", (err) => {
                        reject(err);
                    });
                });
            };
            console.log("File extension:", fileExtension);
            console.log("File buffer length:", file.buffer.length);
            if (fileExtension === ".mp4" || fileExtension === ".mp3") {
                console.log("kl", file.buffer);
                try {
                    durationInSeconds = await getVideoDuration(file.buffer);
                    console.log("suru", durationInSeconds);
                }
                catch (error) {
                    console.error("Error getting video duration:", error);
                }
            }
            let filetype;
            if (fileExtension == ".png" ||
                fileExtension == ".jpeg" ||
                fileExtension == ".jpg") {
                filetype = "image";
            }
            else if (fileExtension == ".mp4") {
                filetype = "video";
            }
            else {
                filetype = "audio";
            }
            const addMedia = new SignFeedCMSMediaEntity_1.SignFeedCMSMediaEntity();
            addMedia.name = filename;
            addMedia.type = filetype;
            addMedia.duration = duration;
            addMedia.originalFilename = filename;
            addMedia.storedAs = maxMediaID.toString() + fileExtension;
            addMedia.FileSize = file.size;
            addMedia.userID = 1;
            addMedia.retired = 0;
            addMedia.isEdited = 0;
            addMedia.editedMediaID = 0;
            addMedia.moduleSystemFile = 0;
            addMedia.valid = 1;
            addMedia.released = 1;
            addMedia.createdDt = currentDateTime;
            await this.SignFeedCMSMediaEntityRepository.save(addMedia);
            let storedasfilename = maxMediaID.toString() + fileExtension;
            const savedFilePath = await this.saveFileToDirectory(file, storedasfilename);
            console.log(savedFilePath);
            uploadedMediaData.push({ mediaid: maxMediaID });
        }
        console.log("================FILE UPLOADED SUCCESSFULLY================");
        return [{ media: uploadedMediaData, message: "success", status: 200 }];
    }
    generateRandomString(length) {
        if (length % 2 !== 0) {
            throw new Error("Length must be even for hex encoding.");
        }
        const bytes = crypto.randomBytes(length / 2);
        return bytes.toString("hex");
    }
    validateFileType(file) {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf",
            "video/mp4",
        ];
        return allowedTypes.includes(file.mimetype);
    }
    validateFileSize(file) {
        const maxSize = 50 * 1024 * 1024;
        return file.size <= maxSize;
    }
    async saveFileToDirectory(file, filename) {
        const uploadDir = path.join(appRoot.toString(), "uploads");
        await fs.ensureDir(uploadDir);
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, file.buffer);
        return filePath;
    }
    async SignfeedCMSGetUserID(username) {
        let checkUser = await this.SignFeedCMSUserEntityRepository.findOne({
            where: {
                UserName: username,
            },
        });
        if (checkUser) {
            return checkUser.UserID;
        }
        else {
            return null;
        }
    }
    async SignfeedCMSDisplayGroupAdd(request, cmsDisplayGroupDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplayGroup = await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
            where: {
                DisplayGroup: cmsDisplayGroupDTO.DisplayGroup,
            },
        });
        if (checkDisplayGroup) {
            return { message: "DisplayGroup Name Already Exist", status: 400 };
        }
        else {
            const addCMSDisplayGroup = new SignFeedCMSDisplayGroupEntity_1.SignFeedCMSDisplayGroupEntity();
            addCMSDisplayGroup.DisplayGroup = cmsDisplayGroupDTO.DisplayGroup;
            addCMSDisplayGroup.organization = cmsDisplayGroupDTO.organization;
            addCMSDisplayGroup.Description = cmsDisplayGroupDTO.Description;
            addCMSDisplayGroup.userId = cmsDisplayGroupDTO.userId;
            addCMSDisplayGroup.IsDisplaySpecific =
                cmsDisplayGroupDTO.IsDisplaySpecific;
            addCMSDisplayGroup.isDynamic = cmsDisplayGroupDTO.isDynamic;
            addCMSDisplayGroup.dynamicCriteria = cmsDisplayGroupDTO.dynamicCriteria;
            await this.SignFeedCMSDisplayGroupEntityRepository.save(addCMSDisplayGroup);
            return {
                displayGroup: addCMSDisplayGroup,
                message: "success",
                status: 200,
            };
        }
    }
    async SignfeedCMSDisplayGroupList(request) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let displayGroupList = await this.SignFeedCMSDisplayGroupEntityRepository.find({});
        return { displayGroup: displayGroupList, message: "success", status: 200 };
    }
    async SignfeedCMSDisplayGroupDelete(request, cmsDisplayGroupDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplayGroup = await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
            where: {
                DisplayGroupID: cmsDisplayGroupDeleteDTO.DisplayGroupID,
            },
        });
        if (checkDisplayGroup) {
            let checkDisplayGroup;
            checkDisplayGroup = this.connection.query(`delete from displaygroup where DisplayGroupID='${cmsDisplayGroupDeleteDTO.DisplayGroupID}'`);
            await this.SignFeedCMSDisplayGroupEntityRepository.delete(checkDisplayGroup);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "displayGroup Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSSchedulingAdd(request, cmsSchedulingDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        const addCMSScheduling = new SignFeedCMSSchedulingEntity_1.SignFeedCMSSchedulingEntity();
        addCMSScheduling.eventTypeId = cmsSchedulingDTO.eventTypeId;
        addCMSScheduling.organization = cmsSchedulingDTO.organization;
        addCMSScheduling.CampaignID = cmsSchedulingDTO.CampaignID;
        addCMSScheduling.commandId = cmsSchedulingDTO.commandId;
        addCMSScheduling.recurrence_type = cmsSchedulingDTO.recurrence_type;
        addCMSScheduling.recurrence_range = cmsSchedulingDTO.recurrence_range;
        addCMSScheduling.recurrence_detail = cmsSchedulingDTO.recurrence_detail;
        addCMSScheduling.userID = cmsSchedulingDTO.userID;
        addCMSScheduling.is_priority = cmsSchedulingDTO.is_priority;
        addCMSScheduling.FromDT = cmsSchedulingDTO.FromDT;
        addCMSScheduling.ToDT = cmsSchedulingDTO.ToDT;
        addCMSScheduling.DisplayOrder = cmsSchedulingDTO.DisplayOrder;
        addCMSScheduling.displayid = cmsSchedulingDTO.displayid;
        addCMSScheduling.recurrenceRepeatsOn = cmsSchedulingDTO.recurrenceRepeatsOn;
        addCMSScheduling.lastRecurrenceWatermark =
            cmsSchedulingDTO.lastRecurrenceWatermark;
        addCMSScheduling.syncTimezone = cmsSchedulingDTO.syncTimezone;
        addCMSScheduling.syncEvent = cmsSchedulingDTO.syncEvent;
        const addedScheduling = await this.SignFeedCMSSchedulingEntityRepository.save(addCMSScheduling);
        const addDisplayGroup = new SignFeedCMSscheduledisplaygroupEntity_1.SignFeedCMSscheduledisplaygroupEntity();
        addDisplayGroup.eventId = addedScheduling.eventID;
        addDisplayGroup.displayGroupId = cmsSchedulingDTO.displayid;
        await this.SignFeedCMSscheduledisplaygroupEntityRepository.save(addDisplayGroup);
        const addDisplayGroup1 = new SignFeedCMSdisplayeventsEntity_1.SignFeedCMSdisplayeventsEntity();
        addDisplayGroup1.displayid = cmsSchedulingDTO.displayid;
        addDisplayGroup1.eventDate = currentDateTime;
        addDisplayGroup1.start = cmsSchedulingDTO.FromTm;
        addDisplayGroup1.end = cmsSchedulingDTO.ToTm;
        addDisplayGroup1.eventID = addedScheduling.eventID;
        await this.SignFeedCMSdisplayeventsEntityRepository.save(addDisplayGroup1);
        return { Scheduling: addCMSScheduling, message: "success", status: 200 };
    }
    async SignfeedCMSPermissionAdd(request, cmsPermissionDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        const addCMSPermission = new SignFeedCMSPermissionEntity_1.SignFeedCMSPermissionEntity();
        addCMSPermission.PermissionName = cmsPermissionDTO.PermissionName;
        const addedPermission = await this.SignFeedCMSPermissionEntityRepository.save(addCMSPermission);
        const addLkPermission = new SignFeedCMSLkPermissionEntity_1.SignFeedCMSLkPermissionEntity();
        addLkPermission.UserID = cmsPermissionDTO.UserID;
        addLkPermission.Pid = addedPermission.id;
        addLkPermission.Status = 0;
        await this.SignFeedCMSLkPermissionEntityRepository.save(addLkPermission);
        return { Permission: addLkPermission, message: "success", status: 200 };
    }
    async SignfeedCMSPermissionList(request) {
        const { UserID } = request.query;
        let PermissionsList;
        if (UserID) {
            PermissionsList = await this.connection.query(`SELECT user.UserID, user.UserName, lk.status, up.id, up.PermissionName
FROM suru.user 
INNER JOIN suru.lkuserpermission lk ON user.UserID = lk.UserID
INNER JOIN suru.userpermission up ON lk.Pid = up.id
WHERE user.userID= ?`, [UserID]);
        }
        return { Permissions: PermissionsList, message: "success", status: 200 };
    }
    async SignfeedCMSLkPermissionDelete(request, cmsUserPermissionDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkUserPermission = await this.SignFeedCMSLkPermissionEntityRepository.findOne({
            where: {
                Pid: cmsUserPermissionDeleteDTO.Pid,
                UserID: cmsUserPermissionDeleteDTO.UserID,
            },
        });
        let checkUserPermissions = await this.SignFeedCMSPermissionEntityRepository.findOne({
            where: {
                id: cmsUserPermissionDeleteDTO.Pid,
            },
        });
        if (checkUserPermission && checkUserPermissions) {
            await this.connection.query(`DELETE FROM lkuserpermission WHERE Pid='${cmsUserPermissionDeleteDTO.Pid}'`);
            await this.SignFeedCMSLkPermissionEntityRepository.delete(checkUserPermission);
            await this.connection.query(`DELETE FROM userpermission WHERE id='${cmsUserPermissionDeleteDTO.Pid}'`);
            await this.SignFeedCMSPermissionEntityRepository.delete(checkUserPermissions);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSLKPermissionUpdate(request, cmsLkPermissionUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkPermission = await this.SignFeedCMSLkPermissionEntityRepository.findOne({
            where: {
                id: cmsLkPermissionUpdateDTO.id,
            },
        });
        if (checkPermission) {
            checkPermission.Status = cmsLkPermissionUpdateDTO.status;
            await this.SignFeedCMSLkPermissionEntityRepository.save(checkPermission);
            return { Permission: checkPermission, message: "success", status: 200 };
        }
        else {
            return { message: "Permission ID Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSDisplayMemberAdd(request, cmsDispalyMemberDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplayMember = await this.SignFeedCMSDisplayMemberEntityRepository.findOne({
            where: {
                DisplayGroupID: cmsDispalyMemberDTO.DisplayGroupID,
                DisplayID: cmsDispalyMemberDTO.DisplayID,
            },
        });
        if (checkDisplayMember) {
            return { message: "Already Exist", status: 400 };
        }
        else {
            const addCMSDisplayMember = new SignFeedCMSDisplayMemberEntity_1.SignFeedCMSDisplayMemberEntity();
            addCMSDisplayMember.DisplayGroupID = cmsDispalyMemberDTO.DisplayGroupID;
            addCMSDisplayMember.DisplayID = cmsDispalyMemberDTO.DisplayID;
            await this.SignFeedCMSDisplayMemberEntityRepository.save(addCMSDisplayMember);
            return { Member: addCMSDisplayMember, message: "success", status: 200 };
        }
    }
    async SignfeedCMSMemberDelete(request, cmsMemberDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDisplayMember = await this.SignFeedCMSDisplayMemberEntityRepository.findOne({
            where: {
                LkDisplayDGID: cmsMemberDeleteDTO.LkDisplayDGID,
            },
        });
        if (checkDisplayMember) {
            let checkDisplayMembers;
            checkDisplayMembers = this.connection.query(`DELETE FROM lkdisplaydg 
        WHERE LkDisplayDGID = '${cmsMemberDeleteDTO.LkDisplayDGID}'`);
            await this.SignFeedCMSDisplayMemberEntityRepository.delete(checkDisplayMember);
            return { message: "success", status: 200 };
        }
        else {
            return { message: " Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSEventList(request) {
        const { displayid } = request.query;
        let eventList;
        if (displayid) {
            eventList = await this.connection.query(`SELECT *
         FROM schedule
         WHERE displayid = ?`, [displayid]);
        }
        return { event: eventList, message: "success", status: 200 };
    }
    async SignfeedCMSEventDateList(request) {
        const { displayid } = request.query;
        let eventList;
        if (displayid) {
            eventList = await this.connection.query(`SELECT schedule.FromDT,schedule.ToDT,
        displayevents.start,displayevents.end
       FROM schedule
       JOIN displayevents ON schedule.eventid = displayevents.eventid
       WHERE schedule.displayid  = ?`, [displayid]);
        }
        return { eventDate: eventList, message: "success", status: 200 };
    }
    async SignfeedCMSEventsList(request) {
        const { eventID } = request.query;
        let eventList;
        if (eventID) {
            eventList = await this.connection.query(`SELECT schedule.eventID,schedule.eventTypeId,schedule.FromDT,schedule.ToDT,schedule.displayid,schedule.DisplayOrder,schedule.CampaignID,
        displayevents.start,displayevents.end
       FROM schedule
       JOIN displayevents ON schedule.eventid = displayevents.eventid
       WHERE schedule.eventid = ?`, [eventID]);
        }
        return { events: eventList, message: "success", status: 200 };
    }
    async SignfeedCMSAssignLayoutDelete(request, cmsAssignLayoutDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkCampaignLayout = await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
            where: {
                LkCampaignLayoutID: cmsAssignLayoutDeleteDTO.LkCampaignLayoutID,
            },
        });
        if (checkCampaignLayout) {
            let checkCampaignLayouts;
            checkCampaignLayouts = this.connection.query(`DELETE FROM lkcampaignlayout
        WHERE LkCampaignLayoutID = '${cmsAssignLayoutDeleteDTO.LkCampaignLayoutID}'`);
            await this.SignFeedCMSCampaignLayoutEntityRepository.delete(checkCampaignLayout);
            return { message: "success", status: 200 };
        }
        else {
            return { message: " Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSContactAdd(request, cmsContactDTO) {
        const addCMSContact = new SignFeedCMSContactEntity_1.SignFeedCMSContactEntity();
        addCMSContact.name = cmsContactDTO.name;
        addCMSContact.email = cmsContactDTO.email;
        addCMSContact.organization = cmsContactDTO.organization;
        addCMSContact.message = cmsContactDTO.message;
        await this.SignFeedCMSContactEntityRepository.save(addCMSContact);
        await this.mailerService.sendMail({
            to: "surbhigulhana3@gmail.com",
            from: cmsContactDTO.email,
            subject: 'New Contact Form Submission',
            text: `A new contact form submission:\nName: ${cmsContactDTO.name}\nEmail: ${cmsContactDTO.email}\nOrganization: ${cmsContactDTO.organization}\nMessage: ${cmsContactDTO.message}`,
            html: `<p>A new contact form submission:</p><ul><li>Name: ${cmsContactDTO.name}</li><li>Email: ${cmsContactDTO.email}</li><li>Organization: ${cmsContactDTO.organization}</li><li>Message: ${cmsContactDTO.message}</li></ul>`,
        });
        return { contact: addCMSContact, message: "success", status: 200 };
    }
};
exports.CmsService = CmsService;
exports.CmsService = CmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(SignFeedCMSLayoutEntity_1.SignFeedCMSLayoutEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(SignFeedCMSTagsEntity_1.SignFeedCMSTagsEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(SignFeedCMSCampaignEntity_1.SignFeedCMSCampaignEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity)),
    __param(6, (0, typeorm_1.InjectRepository)(SignFeedCMSPlayListEntity_1.SignFeedCMSPlayListEntity)),
    __param(7, (0, typeorm_1.InjectRepository)(SignFeedCMSRegionEntity_1.SignFeedCMSRegionEntity)),
    __param(8, (0, typeorm_1.InjectRepository)(SignFeedCMSRegionPlayListEntity_1.SignFeedCMSRegionPlayListEntity)),
    __param(9, (0, typeorm_1.InjectRepository)(SignFeedCMSWidgetEntity_1.SignFeedCMSWidgetEntity)),
    __param(10, (0, typeorm_1.InjectRepository)(SignFeedCMSWidgetMediaEntity_1.SignFeedCMSWidgetMediaEntity)),
    __param(11, (0, typeorm_1.InjectRepository)(SignFeedCMSMediaEntity_1.SignFeedCMSMediaEntity)),
    __param(12, (0, typeorm_1.InjectRepository)(SignFeedCMSWidgetOptionEntity_1.SignFeedCMSWidgetOptionEntity)),
    __param(13, (0, typeorm_1.InjectRepository)(SignFeedCMSModuleEntity_1.SignFeedCMSModuleEntity)),
    __param(14, (0, typeorm_1.InjectRepository)(SignFeedCMSCampaignLayoutEntity_1.SignFeedCMSCampaignLayoutEntity)),
    __param(15, (0, typeorm_1.InjectRepository)(SignFeedCMSUserEntity_1.SignFeedCMSUserEntity)),
    __param(16, (0, typeorm_1.InjectRepository)(SignFeedCMSDisplayEntity_1.SignFeedCMSDisplayEntity)),
    __param(17, (0, typeorm_1.InjectRepository)(SignFeedCMSDaypartEntity_1.SignFeedCMSDaypartEntity)),
    __param(18, (0, typeorm_1.InjectRepository)(SignFeedCMSDisplayGroupEntity_1.SignFeedCMSDisplayGroupEntity)),
    __param(19, (0, typeorm_1.InjectRepository)(SignFeedCMSSchedulingEntity_1.SignFeedCMSSchedulingEntity)),
    __param(20, (0, typeorm_1.InjectRepository)(SignFeedCMSDisplayMemberEntity_1.SignFeedCMSDisplayMemberEntity)),
    __param(21, (0, typeorm_1.InjectRepository)(SignFeedCMSscheduledisplaygroupEntity_1.SignFeedCMSscheduledisplaygroupEntity)),
    __param(22, (0, typeorm_1.InjectRepository)(SignFeedCMSdisplayeventEntity_1.SignFeedCMSdisplayeventEntity)),
    __param(23, (0, typeorm_1.InjectRepository)(SignFeedCMSdisplayeventsEntity_1.SignFeedCMSdisplayeventsEntity)),
    __param(24, (0, typeorm_1.InjectRepository)(SignFeedCMSPermissionEntity_1.SignFeedCMSPermissionEntity)),
    __param(25, (0, typeorm_1.InjectRepository)(SignFeedCMSLkPermissionEntity_1.SignFeedCMSLkPermissionEntity)),
    __param(26, (0, typeorm_1.InjectRepository)(SignFeedCMSContactEntity_1.SignFeedCMSContactEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], CmsService);
//# sourceMappingURL=cms.service.js.map