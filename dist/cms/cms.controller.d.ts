import { Logger } from "@nestjs/common";
import { CmsService } from "./cms.service";
import { CMSLayoutDTO } from "./dto/CMSLayoutDTO";
import { CMSLayoutUpdateDTO } from "./dto/CMSLayoutUpdateDTO";
import { CMSLayoutPublishDTO } from "./dto/CMSLayoutPublishDTO";
import { CMSRegionDTO } from "./dto/CMSRegionDTO";
import { CMSRegionUpdateDTO } from "./dto/CMSRegionUpdateDTO";
import { CMSWidgetDTO } from "./dto/CMSWidgetDTO";
import { Request } from "express";
import { CMSWidgetOptionsDTO } from "./dto/CMSWidgetOptionsDTO";
import { CMSLayoutDeleteDTO } from "./dto/CMSLayoutDeleteDTO";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";
import { CMSCampaignLayoutDTO } from "./dto/CMSCampaignLayoutDTO";
import { CMSCampaignDTO } from "./dto/CMSCampaignDTO";
import { CMSCampaignUpdateDTO } from "./dto/CMSCampaignUpdateDTO";
import { CMSLayoutRetireDTO } from "./dto/CMSLayoutRetireDTO";
import { CMSCampaignAssignLayoutDTO } from "./dto/CMSCampaignAssignLayoutDTO";
import { CMSLayoutDetailDTO } from "./dto/CMSLayoutDetailDTO";
import { CMSWidgetDeleteDTO } from "./dto/CMSWidgetDeleteDTO";
import { CMSCampaignDeleteDTO } from "./dto/CMSCampaignDeleteDTO";
import { CMSCampaignDetailDTO } from "./dto/CMSCampaignDetailDTO";
import { Multer } from "multer";
import { CMSDisplayUpdateDTO } from "./dto/CMSDisplayUpdateDTO";
import { CMSDisplayDeleteDTO } from "./dto/CMSDisplayDeleteDTO";
import { CMSDisplayAuthorizeDTO } from "./dto/CMSDisplayAuthorizeDTO";
import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
import { CMSMediaDeleteDTO } from "./dto/CMSMediaDeleteDTO";
import { CMSMediaUpdateDTO } from "./dto/CMSMediaUpdateDTO";
import { CMSDisplayDTO } from "./dto/CMSDisplayDTO";
import { CMSUsersDeleteDTO } from "./dto/CMSUsersDeleteDTO";
import { CMSModuleDTO } from "./dto/CMSModuleDTO";
import { CMSModuleDeleteDTO } from "./dto/CMSModuleDeleteDTO";
import { CMSModuleUpdateDTO } from "./dto/CMSModuleUpdateDTO";
import { CMSUserUpdateDTO } from "./dto/CMSUserUpdateDTO";
import { CMSMediaDTO } from './dto/CMSMediaDTO';
import { CMSDaypartDTO } from "./dto/CMSDaypartDTO";
import { CMSDaypartUpdateDTO } from "./dto/CMSDaypartUpdateDTO";
import { CMSDaypartDeleteDTO } from "./dto/CMSDaypartDeleteDTO";
import { CMSDisplayGroupDTO } from "./dto/CMSDisplayGroupDTO";
import { CMSDisplayGroupDeleteDTO } from "./dto/CMSDisplayGroupDeleteDTO";
import { CMSSchedulingDTO } from "./dto/CMSSchedulingDTO";
import { CMSDispalyMemberDTO } from "./dto/CMSDispalyMemberDTO";
import { CMSMemberDeleteDTO } from "./dto/CMSMemberDeleteDTO";
import { CMSAssignLayoutDeleteDTO } from "./dto/CMSAssignLayoutDeleteDTO";
import { CMSEventDetailsUpdateDTO } from "./dto/CMSEventDetailsUpdateDTO";
import { CMSPermissionDTO } from "./dto/CMSPermissionDTO";
import { CMSLkUserPermissionDeleteDTO } from "./dto/CMSLkUserPermissionDeleteDTO";
import { CMSLkPermissionUpdateDTO } from "./dto/CMSLkPermissionUpdateDTO";
import { CMSContactUsDTO } from "./dto/CMSContactUsDTO";
export declare class CmsController {
    private readonly cmsService;
    private readonly logger;
    constructor(cmsService: CmsService, logger: Logger);
    initiatePayment(amount: number): Promise<import("razorpay/dist/types/orders").Orders.RazorpayOrder>;
    SignfeedCMSCampaignList(request: Request): Promise<{
        campaign: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSDaypartList(request: Request): Promise<{
        daypart: import("./Entity/SignFeedCMSDaypartEntity").SignFeedCMSDaypartEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignLayoutList(request: Request, cmsCampaignLayoutDTO: CMSCampaignLayoutDTO): Promise<{
        layout: any;
        message: string;
        status: number;
    }>;
    listResolutions(request: Request): Promise<{
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersList(request: Request): Promise<{
        user: import("./Entity/SignFeedCMSUserEntity").SignFeedCMSUserEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersOrgList(request: Request): Promise<{
        user: import("./Entity/SignFeedCMSUserEntity").SignFeedCMSUserEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersOzList(request: Request): Promise<{
        user: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaList(request: Request): Promise<{
        media: import("./Entity/SignFeedCMSMediaEntity").SignFeedCMSMediaEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaListSpecific(request: Request): Promise<{
        message: string;
        status: number;
        media?: undefined;
    } | {
        media: import("./Entity/SignFeedCMSMediaEntity").SignFeedCMSMediaEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSWidgetOptionList(request: Request, cmsWidgetOptionsDTO: CMSWidgetOptionsDTO): Promise<{
        WidgetOption: import("./Entity/SignFeedCMSWidgetOptionEntity").SignFeedCMSWidgetOptionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSModuleList(request: Request): Promise<{
        module: import("./Entity/SignFeedCMSModuleEntity").SignFeedCMSModuleEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutList(request: Request): Promise<{
        layout: import("./Entity/SignFeedCMSLayoutEntity").SignFeedCMSLayoutEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSAssignLayoutList(request: Request): Promise<{
        layout: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        layout?: undefined;
    }>;
    SignfeedCMSDisplayList(request: Request): Promise<{
        display: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSCampaignLayoutPreviewList(request: Request): Promise<{
        CampaignLayoutPreview: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        CampaignLayoutPreview?: undefined;
    }>;
    SignfeedCMSDisplayLists(request: Request): Promise<{
        display: import("./Entity/SignFeedCMSDisplayEntity").SignFeedCMSDisplayEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayUpdate(request: Request, cmsDisplayUpdateDTO: CMSDisplayUpdateDTO): Promise<{
        display: import("./Entity/SignFeedCMSDisplayEntity").SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSDaypartUpdate(request: Request, cmsDaypartUpdateDTO: CMSDaypartUpdateDTO): Promise<{
        daypart: import("./Entity/SignFeedCMSDaypartEntity").SignFeedCMSDaypartEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        daypart?: undefined;
    }>;
    SignfeedCMSModuleUpdate(request: Request, cmsModuleUpdateDTO: CMSModuleUpdateDTO): Promise<{
        module: import("./Entity/SignFeedCMSModuleEntity").SignFeedCMSModuleEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        module?: undefined;
    }>;
    SignfeedCMSDisplayAuthorize(request: Request, cmsDisplayAuthorizeDTO: CMSDisplayAuthorizeDTO): Promise<{
        display: import("./Entity/SignFeedCMSDisplayEntity").SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSDisplayDelete(request: Request, cmsDisplayDeleteDTO: CMSDisplayDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMemberDelete(request: Request, cmsMemberDeleteDTO: CMSMemberDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSAssignLayoutDelete(request: Request, cmsAssignLayoutDeleteDTO: CMSAssignLayoutDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersDelete(request: Request, cmsUsersDeleteDTO: CMSUsersDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutDelete(request: Request, cmsLayoutDeleteDTO: CMSLayoutDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSModuleDelete(request: Request, cmsModuleDeleteDTO: CMSModuleDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutDetail(request: Request, cmsLayoutDetailDTO: CMSLayoutDetailDTO): Promise<{
        layout: import("./dto/CMSLayoutRegionPlaylistDetailDTO").CMSLayoutRegionPlaylistDetailDTO;
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignAdd(request: Request, cmsCampaignDTO: CMSCampaignDTO): Promise<{
        message: string;
        status: number;
        campaign?: undefined;
    } | {
        campaign: import("./Entity/SignFeedCMSCampaignEntity").SignFeedCMSCampaignEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSModuleAdd(request: Request, cmsModuleDTO: CMSModuleDTO): Promise<{
        message: string;
        status: number;
        Module?: undefined;
    } | {
        Module: import("./Entity/SignFeedCMSModuleEntity").SignFeedCMSModuleEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMDisplaynAdd(request: Request, cmsDisplayDTO: CMSDisplayDTO): Promise<{
        message: string;
        status: number;
        display?: undefined;
    } | {
        display: import("./Entity/SignFeedCMSDisplayEntity").SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignDelete(request: Request, cmsCampaignDeleteDTO: CMSCampaignDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSDaypartDelete(request: Request, cmsDaypartDeleteDTO: CMSDaypartDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMDaypartAdd(request: Request, cmsDaypartDTO: CMSDaypartDTO): Promise<{
        message: string;
        status: number;
        daypart?: undefined;
    } | {
        daypart: import("./Entity/SignFeedCMSDaypartEntity").SignFeedCMSDaypartEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignUpdate(request: Request, cmsCampaignUpdateDTO: CMSCampaignUpdateDTO): Promise<{
        campaign: import("./Entity/SignFeedCMSCampaignEntity").SignFeedCMSCampaignEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        campaign?: undefined;
    }>;
    SignfeedCMSUserUpdate(request: Request, cmsUserUpdateDTO: CMSUserUpdateDTO): Promise<{
        users: import("./Entity/SignFeedCMSUserEntity").SignFeedCMSUserEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        users?: undefined;
    }>;
    SignfeedCMSCampaignPreview(request: Request, cmsCampaignDetailDTO: CMSCampaignDetailDTO): Promise<{
        campaign: import("./dto/CMSCampaignPreviewDTO").CMSCampaignPreviewDTO;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionAdd(request: Request, cmsResolutionDTO: CMSResolutionDTO): Promise<{
        message: string;
        status: number;
        resolution?: undefined;
    } | {
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionUpdate(request: Request, cmsResolutionUpdateDTO: CMSResolutionUpdateDTO): Promise<{
        resolution: import("./Entity/SignFeedCMSResolutionEntity").SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        resolution?: undefined;
    }>;
    SignfeedCMSResolutionDelete(request: Request, cmsResolutionDeleteDTO: CMSResolutionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayout(request: Request, cmsLayoutDTO: CMSLayoutDTO): Promise<{
        message: string;
        status: number;
        layout?: undefined;
        region?: undefined;
    } | {
        layout: import("./Entity/SignFeedCMSLayoutEntity").SignFeedCMSLayoutEntity;
        region: import("./Entity/SignFeedCMSRegionEntity").SignFeedCMSRegionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutUpdate(request: Request, cmsLayoutUpdateDTO: CMSLayoutUpdateDTO): Promise<{
        users: import("./Entity/SignFeedCMSLayoutEntity").SignFeedCMSLayoutEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        users?: undefined;
    }>;
    SignfeedCMSEventDetailsUpdate(request: Request, cmsEventDetailsUpdateDTO: CMSEventDetailsUpdateDTO): Promise<{
        updateEvent: import("./Entity/SignFeedCMSSchedulingEntity").SignFeedCMSSchedulingEntity;
        checkDisplayGroup: import("./Entity/SignFeedCMSscheduledisplaygroupEntity").SignFeedCMSscheduledisplaygroupEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        updateEvent?: undefined;
        checkDisplayGroup?: undefined;
    }>;
    SignfeedCMSLayoutRetire(request: Request, cmsLayoutRetireDTO: CMSLayoutRetireDTO): Promise<{
        layout: import("./Entity/SignFeedCMSLayoutEntity").SignFeedCMSLayoutEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutAssignToCampaign(request: Request, cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO[]): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutRemoveToCampaign(request: Request, cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutPublish(request: Request, cmsLayoutPublishDTO: CMSLayoutPublishDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSRegionAdd(request: Request, cmsRegionDTO: CMSRegionDTO): Promise<{
        region: import("./Entity/SignFeedCMSRegionEntity").SignFeedCMSRegionEntity;
        playlist: import("./Entity/SignFeedCMSPlayListEntity").SignFeedCMSPlayListEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        region?: undefined;
        playlist?: undefined;
    }>;
    SignfeedCMSRegionUpdate(request: Request, cmsRegionUpdateDTO: [CMSRegionUpdateDTO]): Promise<{
        region: any[];
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        region?: undefined;
    }>;
    SignfeedCMSWidgetAdd(request: Request, cmsWidgetDTO: CMSWidgetDTO): Promise<{
        widget: import("./Entity/SignFeedCMSWidgetEntity").SignFeedCMSWidgetEntity;
        media: import("./Entity/SignFeedCMSWidgetMediaEntity").SignFeedCMSWidgetMediaEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSWidgetsAdd(request: Request, widgetArray: CMSWidgetDTO[]): Promise<any[]>;
    SignfeedCMSWidgetDelete(request: Request, cmsWidgetDeleteDTO: CMSWidgetDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaAdd(files: Multer.File[], body: CMSMediaDTO): Promise<{
        media: {
            mediaid: number;
        }[];
        message: string;
        status: number;
    }[]>;
    SignfeedCMSMediaDelete(request: Request, cmsMediaDeleteDTO: CMSMediaDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaUpdate(request: Request, cmsMediaUpdateDTO: CMSMediaUpdateDTO): Promise<{
        media: import("./Entity/SignFeedCMSMediaEntity").SignFeedCMSMediaEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        media?: undefined;
    }>;
    SignfeedCMSDisplayGroupAdd(request: Request, cmsDisplayGroupDTO: CMSDisplayGroupDTO): Promise<{
        message: string;
        status: number;
        displayGroup?: undefined;
    } | {
        displayGroup: import("./Entity/SignFeedCMSDisplayGroupEntity").SignFeedCMSDisplayGroupEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayGroupList(request: Request): Promise<{
        displayGroup: import("./Entity/SignFeedCMSDisplayGroupEntity").SignFeedCMSDisplayGroupEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayGroupDelete(request: Request, cmsDisplayGroupDeleteDTO: CMSDisplayGroupDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLkPermissionDelete(request: Request, cmsUserPermissionDeleteDTO: CMSLkUserPermissionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSSchedulingAdd(request: Request, cmsSchedulingDTO: CMSSchedulingDTO): Promise<{
        Scheduling: import("./Entity/SignFeedCMSSchedulingEntity").SignFeedCMSSchedulingEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSPermissionAdd(request: Request, cmsPermissionDTO: CMSPermissionDTO): Promise<{
        Permission: import("./Entity/SignFeedCMSLkPermissionEntity").SignFeedCMSLkPermissionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSPermissionList(request: Request): Promise<{
        Permissions: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSLKPermissionUpdate(request: Request, cmsLkPermissionUpdateDTO: CMSLkPermissionUpdateDTO): Promise<{
        Permission: import("./Entity/SignFeedCMSLkPermissionEntity").SignFeedCMSLkPermissionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Permission?: undefined;
    }>;
    SignfeedCMSEventList(request: Request): Promise<{
        event: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSEventsList(request: Request): Promise<{
        events: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSEventDateList(request: Request): Promise<{
        eventDate: any;
        message: string;
        status: number;
    }>;
    SignfeedDisplayCMSMemberAdd(request: Request, cmsDispalyMemberDTO: CMSDispalyMemberDTO): Promise<{
        message: string;
        status: number;
        Member?: undefined;
    } | {
        Member: import("./Entity/SignFeedCMSDisplayMemberEntity").SignFeedCMSDisplayMemberEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSContactAdd(request: Request, cmsContactDTO: CMSContactUsDTO): Promise<{
        contact: import("./Entity/SignFeedCMSContactEntity").SignFeedCMSContactEntity;
        message: string;
        status: number;
    }>;
}
