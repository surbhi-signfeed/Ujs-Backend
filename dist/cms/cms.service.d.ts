import { Logger } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { Connection } from "mysql2";
import { CMSLayoutDTO } from "./dto/CMSLayoutDTO";
import { SignFeedCMSLayoutEntity } from "./Entity/SignFeedCMSLayoutEntity";
import { Repository } from "typeorm";
import { SignFeedCMSTagsEntity } from "./Entity/SignFeedCMSTagsEntity";
import { SignFeedCMSCampaignEntity } from "./Entity/SignFeedCMSCampaignEntity";
import { SignFeedCMSResolutionEntity } from "./Entity/SignFeedCMSResolutionEntity";
import { SignFeedCMSPlayListEntity } from "./Entity/SignFeedCMSPlayListEntity";
import { SignFeedCMSRegionPlayListEntity } from "./Entity/SignFeedCMSRegionPlayListEntity";
import { SignFeedCMSRegionEntity } from "./Entity/SignFeedCMSRegionEntity";
import { CMSLayoutUpdateDTO } from "./dto/CMSLayoutUpdateDTO";
import { CMSLayoutPublishDTO } from "./dto/CMSLayoutPublishDTO";
import { CMSRegionDTO } from "./dto/CMSRegionDTO";
import { CMSRegionUpdateDTO } from "./dto/CMSRegionUpdateDTO";
import { CMSWidgetDTO } from "./dto/CMSWidgetDTO";
import { SignFeedCMSWidgetEntity } from "./Entity/SignFeedCMSWidgetEntity";
import { SignFeedCMSWidgetMediaEntity } from "./Entity/SignFeedCMSWidgetMediaEntity";
import { SignFeedCMSMediaEntity } from "./Entity/SignFeedCMSMediaEntity";
import { CMSWidgetOptionsDTO } from "./dto/CMSWidgetOptionsDTO";
import { SignFeedCMSWidgetOptionEntity } from "./Entity/SignFeedCMSWidgetOptionEntity";
import { SignFeedCMSModuleEntity } from "./Entity/SignFeedCMSModuleEntity";
import { CMSLayoutDeleteDTO } from "./dto/CMSLayoutDeleteDTO";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";
import { CMSCampaignLayoutDTO } from "./dto/CMSCampaignLayoutDTO";
import { CMSCampaignDTO } from "./dto/CMSCampaignDTO";
import { CMSCampaignUpdateDTO } from "./dto/CMSCampaignUpdateDTO";
import { CMSLayoutRetireDTO } from "./dto/CMSLayoutRetireDTO";
import { CMSCampaignAssignLayoutDTO } from "./dto/CMSCampaignAssignLayoutDTO";
import { SignFeedCMSCampaignLayoutEntity } from "./Entity/SignFeedCMSCampaignLayoutEntity";
import { SignFeedCMSUserEntity } from "./Entity/SignFeedCMSUserEntity";
import { CMSLayoutDetailDTO } from "./dto/CMSLayoutDetailDTO";
import { CMSLayoutRegionPlaylistDetailDTO } from "./dto/CMSLayoutRegionPlaylistDetailDTO";
import { CMSWidgetDeleteDTO } from "./dto/CMSWidgetDeleteDTO";
import { CMSCampaignDeleteDTO } from "./dto/CMSCampaignDeleteDTO";
import { CMSCampaignPreviewDTO } from "./dto/CMSCampaignPreviewDTO";
import { CMSCampaignDetailDTO } from "./dto/CMSCampaignDetailDTO";
import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
import { Multer } from "multer";
import { SignFeedCMSDisplayEntity } from "./Entity/SignFeedCMSDisplayEntity";
import { CMSDisplayUpdateDTO } from "./dto/CMSDisplayUpdateDTO";
import { CMSDisplayDeleteDTO } from "./dto/CMSDisplayDeleteDTO";
import { CMSDisplayAuthorizeDTO } from "./dto/CMSDisplayAuthorizeDTO";
import { CMSMediaDeleteDTO } from "./dto/CMSMediaDeleteDTO";
import { CMSMediaUpdateDTO } from "./dto/CMSMediaUpdateDTO";
import { CMSDisplayDTO } from "./dto/CMSDisplayDTO";
import { CMSUsersDeleteDTO } from "./dto/CMSUsersDeleteDTO";
import { CMSModuleDTO } from "./dto/CMSModuleDTO";
import { CMSModuleDeleteDTO } from "./dto/CMSModuleDeleteDTO";
import { CMSModuleUpdateDTO } from "./dto/CMSModuleUpdateDTO";
import { CMSUserUpdateDTO } from "./dto/CMSUserUpdateDTO";
import { CMSDaypartDTO } from "./dto/CMSDaypartDTO";
import { SignFeedCMSDaypartEntity } from "./Entity/SignFeedCMSDaypartEntity";
import { CMSDaypartUpdateDTO } from "./dto/CMSDaypartUpdateDTO";
import { CMSDaypartDeleteDTO } from "./dto/CMSDaypartDeleteDTO";
import { CMSDisplayGroupDTO } from "./dto/CMSDisplayGroupDTO";
import { SignFeedCMSDisplayGroupEntity } from "./Entity/SignFeedCMSDisplayGroupEntity";
import { CMSDisplayGroupDeleteDTO } from "./dto/CMSDisplayGroupDeleteDTO";
import { CMSSchedulingDTO } from "./dto/CMSSchedulingDTO";
import { SignFeedCMSSchedulingEntity } from "./Entity/SignFeedCMSSchedulingEntity";
import { SignFeedCMSDisplayMemberEntity } from "./Entity/SignFeedCMSDisplayMemberEntity";
import { CMSDispalyMemberDTO } from "./dto/CMSDispalyMemberDTO";
import { CMSMemberDeleteDTO } from "./dto/CMSMemberDeleteDTO";
import { CMSAssignLayoutDeleteDTO } from "./dto/CMSAssignLayoutDeleteDTO";
import { SignFeedCMSscheduledisplaygroupEntity } from "./Entity/SignFeedCMSscheduledisplaygroupEntity";
import { SignFeedCMSdisplayeventEntity } from "./Entity/SignFeedCMSdisplayeventEntity";
import { CMSEventDetailsUpdateDTO } from "./dto/CMSEventDetailsUpdateDTO";
import { SignFeedCMSdisplayeventsEntity } from "./Entity/SignFeedCMSdisplayeventsEntity";
import { CMSPermissionDTO } from "./dto/CMSPermissionDTO";
import { SignFeedCMSPermissionEntity } from "./Entity/SignFeedCMSPermissionEntity";
import { SignFeedCMSLkPermissionEntity } from "./Entity/SignFeedCMSLkPermissionEntity";
import { CMSLkUserPermissionDeleteDTO } from "./dto/CMSLkUserPermissionDeleteDTO";
import { CMSLkPermissionUpdateDTO } from "./dto/CMSLkPermissionUpdateDTO";
import { SignFeedCMSContactEntity } from "./Entity/SignFeedCMSContactEntity";
import { CMSContactUsDTO } from "./dto/CMSContactUsDTO";
export declare class CmsService {
    private readonly logger;
    private readonly connection;
    private readonly SignFeedCMSLayoutEntityRepository;
    private readonly SignFeedCMSTagsEntityRepository;
    private readonly SignFeedCMSCampaignEntityRepository;
    private readonly SignFeedCMSResolutionEntityRepository;
    private readonly SignFeedCMSPlayListEntityRepository;
    private readonly SignFeedCMSRegionEntityRepository;
    private readonly SignFeedCMSRegionPlayListEntityRepository;
    private readonly SignFeedCMSWidgetEntityRepository;
    private readonly SignFeedCMSWidgetMediaEntityRepository;
    private readonly SignFeedCMSMediaEntityRepository;
    private readonly SignFeedCMSWidgetOptionEntityRepository;
    private readonly SignFeedCMSModuleEntityRepository;
    private readonly SignFeedCMSCampaignLayoutEntityRepository;
    private readonly SignFeedCMSUserEntityRepository;
    private readonly SignFeedCMSDisplayEntityRepository;
    private readonly SignFeedCMSDaypartEntityRepository;
    private readonly SignFeedCMSDisplayGroupEntityRepository;
    private readonly SignFeedCMSSchedulingEntityRepository;
    private readonly SignFeedCMSDisplayMemberEntityRepository;
    private readonly SignFeedCMSscheduledisplaygroupEntityRepository;
    private readonly SignFeedCMSdisplayeventEntityRepository;
    private readonly SignFeedCMSdisplayeventsEntityRepository;
    private readonly SignFeedCMSPermissionEntityRepository;
    private readonly SignFeedCMSLkPermissionEntityRepository;
    private readonly SignFeedCMSContactEntityRepository;
    private readonly mailerService;
    private razorpay;
    constructor(logger: Logger, connection: Connection, SignFeedCMSLayoutEntityRepository: Repository<SignFeedCMSLayoutEntity>, SignFeedCMSTagsEntityRepository: Repository<SignFeedCMSTagsEntity>, SignFeedCMSCampaignEntityRepository: Repository<SignFeedCMSCampaignEntity>, SignFeedCMSResolutionEntityRepository: Repository<SignFeedCMSResolutionEntity>, SignFeedCMSPlayListEntityRepository: Repository<SignFeedCMSPlayListEntity>, SignFeedCMSRegionEntityRepository: Repository<SignFeedCMSRegionEntity>, SignFeedCMSRegionPlayListEntityRepository: Repository<SignFeedCMSRegionPlayListEntity>, SignFeedCMSWidgetEntityRepository: Repository<SignFeedCMSWidgetEntity>, SignFeedCMSWidgetMediaEntityRepository: Repository<SignFeedCMSWidgetMediaEntity>, SignFeedCMSMediaEntityRepository: Repository<SignFeedCMSMediaEntity>, SignFeedCMSWidgetOptionEntityRepository: Repository<SignFeedCMSWidgetOptionEntity>, SignFeedCMSModuleEntityRepository: Repository<SignFeedCMSModuleEntity>, SignFeedCMSCampaignLayoutEntityRepository: Repository<SignFeedCMSCampaignLayoutEntity>, SignFeedCMSUserEntityRepository: Repository<SignFeedCMSUserEntity>, SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>, SignFeedCMSDaypartEntityRepository: Repository<SignFeedCMSDaypartEntity>, SignFeedCMSDisplayGroupEntityRepository: Repository<SignFeedCMSDisplayGroupEntity>, SignFeedCMSSchedulingEntityRepository: Repository<SignFeedCMSSchedulingEntity>, SignFeedCMSDisplayMemberEntityRepository: Repository<SignFeedCMSDisplayMemberEntity>, SignFeedCMSscheduledisplaygroupEntityRepository: Repository<SignFeedCMSscheduledisplaygroupEntity>, SignFeedCMSdisplayeventEntityRepository: Repository<SignFeedCMSdisplayeventEntity>, SignFeedCMSdisplayeventsEntityRepository: Repository<SignFeedCMSdisplayeventsEntity>, SignFeedCMSPermissionEntityRepository: Repository<SignFeedCMSPermissionEntity>, SignFeedCMSLkPermissionEntityRepository: Repository<SignFeedCMSLkPermissionEntity>, SignFeedCMSContactEntityRepository: Repository<SignFeedCMSContactEntity>, mailerService: MailerService);
    initiatePayment(amount: number): Promise<import("razorpay/dist/types/orders").Orders.RazorpayOrder>;
    SignfeedCMSCampaignList(request: any): Promise<{
        campaign: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignLayoutList(request: any, cmsCampaignLayoutDTO: CMSCampaignLayoutDTO): Promise<{
        layout: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionList(request: any): Promise<{
        resolution: SignFeedCMSResolutionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersList(request: any): Promise<{
        user: SignFeedCMSUserEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersOrgList(request: any): Promise<{
        user: SignFeedCMSUserEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersOzList(request: any): Promise<{
        user: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaList(request: any): Promise<{
        media: SignFeedCMSMediaEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaListSpecific(request: any): Promise<{
        message: string;
        status: number;
        media?: undefined;
    } | {
        media: SignFeedCMSMediaEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSWidgetOptionList(request: any, cmsWidgetOptionsDTO: CMSWidgetOptionsDTO): Promise<{
        WidgetOption: SignFeedCMSWidgetOptionEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSModuleList(request: any): Promise<{
        module: SignFeedCMSModuleEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutList(request: any): Promise<{
        layout: SignFeedCMSLayoutEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayLists(request: any): Promise<{
        display: SignFeedCMSDisplayEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayList(request: any): Promise<{
        display: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSAssignLayoutList(request: any): Promise<{
        layout: any;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        layout?: undefined;
    }>;
    SignfeedCMSCampaignLayoutPreviewList(request: any): Promise<{
        CampaignLayoutPreview: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        CampaignLayoutPreview?: undefined;
    }>;
    SignfeedCMSDisplayUpdate(request: any, cmsDisplayUpdateDTO: CMSDisplayUpdateDTO): Promise<{
        display: SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSModuleUpdate(request: any, cmsModuleUpdateDTO: CMSModuleUpdateDTO): Promise<{
        module: SignFeedCMSModuleEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        module?: undefined;
    }>;
    SignfeedCMSDisplayAuthorize(request: any, cmsDisplayAuthorizeDTO: CMSDisplayAuthorizeDTO): Promise<{
        display: SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        display?: undefined;
    }>;
    SignfeedCMSDisplayDelete(request: any, cmsDisplayDeleteDTO: CMSDisplayDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutDelete(request: any, cmsLayoutDeleteDTO: CMSLayoutDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSUsersDelete(request: any, cmsUsersDeleteDTO: CMSUsersDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSModuleDelete(request: any, cmsModuleDeleteDTO: CMSModuleDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutDetail(request: any, cmsLayoutDetailDTO: CMSLayoutDetailDTO): Promise<{
        layout: CMSLayoutRegionPlaylistDetailDTO;
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignAdd(request: any, cmsCampaignDTO: CMSCampaignDTO): Promise<{
        message: string;
        status: number;
        campaign?: undefined;
    } | {
        campaign: SignFeedCMSCampaignEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayAdd(request: any, cmsDisplayDTO: CMSDisplayDTO): Promise<{
        message: string;
        status: number;
        display?: undefined;
    } | {
        display: SignFeedCMSDisplayEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSDaypartAdd(request: any, cmsDaypartDTO: CMSDaypartDTO): Promise<{
        message: string;
        status: number;
        daypart?: undefined;
    } | {
        daypart: SignFeedCMSDaypartEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSDaypartList(request: any): Promise<{
        daypart: SignFeedCMSDaypartEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDaypartUpdate(request: any, cmsDaypartUpdateDTO: CMSDaypartUpdateDTO): Promise<{
        daypart: SignFeedCMSDaypartEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        daypart?: undefined;
    }>;
    SignfeedCMSDaypartDelete(request: any, cmsdaypartDeleteDTO: CMSDaypartDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignDelete(request: any, cmsCampaignDeleteDTO: CMSCampaignDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSCampaignUpdate(request: any, cmsCampaignUpdateDTO: CMSCampaignUpdateDTO): Promise<{
        campaign: SignFeedCMSCampaignEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        campaign?: undefined;
    }>;
    SignfeedCMSUserUpdate(request: any, cmsUserUpdateDTO: CMSUserUpdateDTO): Promise<{
        users: SignFeedCMSUserEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        users?: undefined;
    }>;
    SignfeedCMSCampaignPreview(request: any, cmsCampaignDetailDTO: CMSCampaignDetailDTO): Promise<{
        campaign: CMSCampaignPreviewDTO;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionAdd(request: any, cmsResolutionDTO: CMSResolutionDTO): Promise<{
        message: string;
        status: number;
        resolution?: undefined;
    } | {
        resolution: SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSResolutionUpdate(request: any, cmsResolutionUpdateDTO: CMSResolutionUpdateDTO): Promise<{
        resolution: SignFeedCMSResolutionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        resolution?: undefined;
    }>;
    SignfeedCMSResolutionDelete(request: any, cmsResolutionDeleteDTO: CMSResolutionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaDelete(request: any, cmsMediaDeleteDTO: CMSMediaDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaUpdate(request: any, cmsMediaUpdateDTO: CMSMediaUpdateDTO): Promise<{
        media: SignFeedCMSMediaEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        media?: undefined;
    }>;
    SignfeedCMSModuleAdd(request: any, cmsModuleDTO: CMSModuleDTO): Promise<{
        message: string;
        status: number;
        Module?: undefined;
    } | {
        Module: SignFeedCMSModuleEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSLayout(request: any, cmsLayoutDTO: CMSLayoutDTO): Promise<{
        message: string;
        status: number;
        layout?: undefined;
        region?: undefined;
    } | {
        layout: SignFeedCMSLayoutEntity;
        region: SignFeedCMSRegionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutUpdate(request: any, cmsLayoutUpdateDTO: CMSLayoutUpdateDTO): Promise<{
        users: SignFeedCMSLayoutEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        users?: undefined;
    }>;
    SignfeedCMSEventDetailsUpdate(request: any, cmsEventDetailsUpdateDTO: CMSEventDetailsUpdateDTO): Promise<{
        updateEvent: SignFeedCMSSchedulingEntity;
        checkDisplayGroup: SignFeedCMSscheduledisplaygroupEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        updateEvent?: undefined;
        checkDisplayGroup?: undefined;
    }>;
    SignfeedCMSLayoutRetire(request: any, cmsLayoutRetireDTO: CMSLayoutRetireDTO): Promise<{
        layout: SignFeedCMSLayoutEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutAssignToCampaign(request: any, cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO[]): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutRemoveToCampaign(request: any, cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLayoutPublish(request: any, cmsLayoutPublishDTO: CMSLayoutPublishDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSRegionAdd(request: any, cmsRegionDTO: CMSRegionDTO): Promise<{
        region: SignFeedCMSRegionEntity;
        playlist: SignFeedCMSPlayListEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        region?: undefined;
        playlist?: undefined;
    }>;
    SignfeedCMSRegionUpdate(request: any, cmsRegionUpdateDTO: [CMSRegionUpdateDTO]): Promise<{
        region: any[];
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        region?: undefined;
    }>;
    SignfeedCMSWidgetAdd(request: any, cmsWidgetDTO: CMSWidgetDTO): Promise<{
        widget: SignFeedCMSWidgetEntity;
        media: SignFeedCMSWidgetMediaEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSWidgetsAdd(request: any, widgetArray: CMSWidgetDTO[]): Promise<any[]>;
    SignfeedCMSWidgetDelete(request: any, cmsWidgetDeleteDTO: CMSWidgetDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSMediaAdd(files: Multer.File[], duration: number): Promise<{
        media: {
            mediaid: number;
        }[];
        message: string;
        status: number;
    }[]>;
    generateRandomString(length: number): string;
    validateFileType(file: Multer.File): boolean;
    validateFileSize(file: Multer.File): boolean;
    saveFileToDirectory(file: Multer.File, filename: any): Promise<string>;
    SignfeedCMSGetUserID(username: any): Promise<number>;
    SignfeedCMSDisplayGroupAdd(request: any, cmsDisplayGroupDTO: CMSDisplayGroupDTO): Promise<{
        message: string;
        status: number;
        displayGroup?: undefined;
    } | {
        displayGroup: SignFeedCMSDisplayGroupEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayGroupList(request: any): Promise<{
        displayGroup: SignFeedCMSDisplayGroupEntity[];
        message: string;
        status: number;
    }>;
    SignfeedCMSDisplayGroupDelete(request: any, cmsDisplayGroupDeleteDTO: CMSDisplayGroupDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSSchedulingAdd(request: any, cmsSchedulingDTO: CMSSchedulingDTO): Promise<{
        Scheduling: SignFeedCMSSchedulingEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSPermissionAdd(request: any, cmsPermissionDTO: CMSPermissionDTO): Promise<{
        Permission: SignFeedCMSLkPermissionEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSPermissionList(request: any): Promise<{
        Permissions: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSLkPermissionDelete(request: any, cmsUserPermissionDeleteDTO: CMSLkUserPermissionDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSLKPermissionUpdate(request: any, cmsLkPermissionUpdateDTO: CMSLkPermissionUpdateDTO): Promise<{
        Permission: SignFeedCMSLkPermissionEntity;
        message: string;
        status: number;
    } | {
        message: string;
        status: number;
        Permission?: undefined;
    }>;
    SignfeedCMSDisplayMemberAdd(request: any, cmsDispalyMemberDTO: CMSDispalyMemberDTO): Promise<{
        message: string;
        status: number;
        Member?: undefined;
    } | {
        Member: SignFeedCMSDisplayMemberEntity;
        message: string;
        status: number;
    }>;
    SignfeedCMSMemberDelete(request: any, cmsMemberDeleteDTO: CMSMemberDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSEventList(request: any): Promise<{
        event: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSEventDateList(request: any): Promise<{
        eventDate: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSEventsList(request: any): Promise<{
        events: any;
        message: string;
        status: number;
    }>;
    SignfeedCMSAssignLayoutDelete(request: any, cmsAssignLayoutDeleteDTO: CMSAssignLayoutDeleteDTO): Promise<{
        message: string;
        status: number;
    }>;
    SignfeedCMSContactAdd(request: any, cmsContactDTO: CMSContactUsDTO): Promise<{
        contact: SignFeedCMSContactEntity;
        message: string;
        status: number;
    }>;
}
