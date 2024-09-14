import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
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
import { JwtStrategy } from "../admin/auth/local.strategy";
import { SignFeedCMSUserEntity } from "./Entity/SignFeedCMSUserEntity";
import { CMSMediaDTO } from "./dto/CMSMediaDTO";
import { CMSLayoutDetailDTO } from "./dto/CMSLayoutDetailDTO";
import {
  CMSLayoutRegionPlaylistDetailDTO,
  layoutregion,
  media,
  regionplaylist,
  widget,
} from "./dto/CMSLayoutRegionPlaylistDetailDTO";
import { CMSWidgetDeleteDTO } from "./dto/CMSWidgetDeleteDTO";
import { CMSCampaignDeleteDTO } from "./dto/CMSCampaignDeleteDTO";
import { CMSCampaignPreviewDTO, layout } from "./dto/CMSCampaignPreviewDTO";
import { CMSCampaignDetailDTO } from "./dto/CMSCampaignDetailDTO";
import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
import { Express } from "express";
import { Multer } from "multer";
import * as fs from "fs-extra";
import * as path from "path";
import * as appRoot from "app-root-path";
import * as crypto from "crypto";
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
import { CMSScheduledisplaygroupDTO } from "./dto/CMSScheduledisplaygroupDTO";
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
import Razorpay from 'razorpay';


@Injectable()
export class CmsService {
  private razorpay: Razorpay;

 
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(SignFeedCMSLayoutEntity)
    private readonly SignFeedCMSLayoutEntityRepository: Repository<SignFeedCMSLayoutEntity>,
    @InjectRepository(SignFeedCMSTagsEntity)
    private readonly SignFeedCMSTagsEntityRepository: Repository<SignFeedCMSTagsEntity>,
    @InjectRepository(SignFeedCMSCampaignEntity)
    private readonly SignFeedCMSCampaignEntityRepository: Repository<SignFeedCMSCampaignEntity>,
    @InjectRepository(SignFeedCMSResolutionEntity)
    private readonly SignFeedCMSResolutionEntityRepository: Repository<SignFeedCMSResolutionEntity>,
    @InjectRepository(SignFeedCMSPlayListEntity)
    private readonly SignFeedCMSPlayListEntityRepository: Repository<SignFeedCMSPlayListEntity>,
    @InjectRepository(SignFeedCMSRegionEntity)
    private readonly SignFeedCMSRegionEntityRepository: Repository<SignFeedCMSRegionEntity>,
    @InjectRepository(SignFeedCMSRegionPlayListEntity)
    private readonly SignFeedCMSRegionPlayListEntityRepository: Repository<SignFeedCMSRegionPlayListEntity>,
    @InjectRepository(SignFeedCMSWidgetEntity)
    private readonly SignFeedCMSWidgetEntityRepository: Repository<SignFeedCMSWidgetEntity>,
    @InjectRepository(SignFeedCMSWidgetMediaEntity)
    private readonly SignFeedCMSWidgetMediaEntityRepository: Repository<SignFeedCMSWidgetMediaEntity>,
    @InjectRepository(SignFeedCMSMediaEntity)
    private readonly SignFeedCMSMediaEntityRepository: Repository<SignFeedCMSMediaEntity>,
    @InjectRepository(SignFeedCMSWidgetOptionEntity)
    private readonly SignFeedCMSWidgetOptionEntityRepository: Repository<SignFeedCMSWidgetOptionEntity>,
    @InjectRepository(SignFeedCMSModuleEntity)
    private readonly SignFeedCMSModuleEntityRepository: Repository<SignFeedCMSModuleEntity>,
    @InjectRepository(SignFeedCMSCampaignLayoutEntity)
    private readonly SignFeedCMSCampaignLayoutEntityRepository: Repository<SignFeedCMSCampaignLayoutEntity>,
    @InjectRepository(SignFeedCMSUserEntity)
    private readonly SignFeedCMSUserEntityRepository: Repository<SignFeedCMSUserEntity>,
    @InjectRepository(SignFeedCMSDisplayEntity)
    private readonly SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>,
    @InjectRepository(SignFeedCMSDaypartEntity)
    private readonly SignFeedCMSDaypartEntityRepository: Repository<SignFeedCMSDaypartEntity>,
    @InjectRepository(SignFeedCMSDisplayGroupEntity)
    private readonly SignFeedCMSDisplayGroupEntityRepository: Repository<SignFeedCMSDisplayGroupEntity>,
    @InjectRepository(SignFeedCMSSchedulingEntity)
    private readonly SignFeedCMSSchedulingEntityRepository: Repository<SignFeedCMSSchedulingEntity>,
    @InjectRepository(SignFeedCMSDisplayMemberEntity)
    private readonly SignFeedCMSDisplayMemberEntityRepository: Repository<SignFeedCMSDisplayMemberEntity>,

    @InjectRepository(SignFeedCMSscheduledisplaygroupEntity)
    private readonly SignFeedCMSscheduledisplaygroupEntityRepository: Repository<SignFeedCMSscheduledisplaygroupEntity>,
    @InjectRepository(SignFeedCMSdisplayeventEntity)
    private readonly SignFeedCMSdisplayeventEntityRepository: Repository<SignFeedCMSdisplayeventEntity>,
    @InjectRepository(SignFeedCMSdisplayeventsEntity)
    private readonly SignFeedCMSdisplayeventsEntityRepository: Repository<SignFeedCMSdisplayeventsEntity>,
    @InjectRepository(SignFeedCMSPermissionEntity)
    private readonly SignFeedCMSPermissionEntityRepository: Repository<SignFeedCMSPermissionEntity>,
    @InjectRepository(SignFeedCMSLkPermissionEntity)
    private readonly SignFeedCMSLkPermissionEntityRepository: Repository<SignFeedCMSLkPermissionEntity>,
    @InjectRepository(SignFeedCMSContactEntity)
    private readonly SignFeedCMSContactEntityRepository: Repository<SignFeedCMSContactEntity>,
    private readonly mailerService:MailerService
  ) {
    this.razorpay = new Razorpay({
      key_id: 'rzp_test_atSnWEBps48dIi',
      key_secret: '64o837Z4r7jYP4CRibDApODX',
    });
  }
  async initiatePayment(amount: number) {
    const options = {
      amount: amount * 1, // Razorpay expects amount in paise
      currency: 'INR', // Change currency if necessary
      receipt: `receipt_${Date.now()}`,
    };

    try {
      const payment = await this.razorpay.orders.create(options);
      return payment;
    } catch (error) {
      throw new Error('Payment initiation failed');
    }
  }

  // async createOrder(amount: number): Promise<any> {
  //   const payment_capture = 1;
  //   const currency = 'INR';
  //   const options = {
  //     amount: (amount * 100).toString(),
  //     currency,
  //     receipt: shortid.generate(),
  //     payment_capture,
  //   };

  //   try {
  //     const response = await this.razorpay.orders.create(options);
  //     return {
  //       id: response.id,
  //       currency: response.currency,
  //       amount: response.amount,
  //     };
  //   } catch (error) {
  //     throw new Error('Failed to create Razorpay order');
  //   }
  // }
  async SignfeedCMSCampaignList(request) {
    // let campaignList = await this.SignFeedCMSCampaignEntityRepository.find({
    //   where: {
    //     IsLayoutSpecific: 0,
    //   },
    // });
    let campaignList;
    campaignList = await this.connection.query(
      `SELECT a.*, count(b.LayoutID) as total_layout FROM campaign a left JOIN lkcampaignlayout b on a.CampaignID = b.CampaignID group by a.CampaignID;`
    );

    return { campaign: campaignList, message: "success", status: 200 };
  }

  async SignfeedCMSCampaignLayoutList(
    request,
    cmsCampaignLayoutDTO: CMSCampaignLayoutDTO
  ) {
    let campaignLayoutList;
    campaignLayoutList = await this.connection
      .query(`SELECT CampaignID, a.LayoutID, b.layout 
                            FROM lkcampaignlayout a join layout b on a.LayoutID = b.layoutID 
                            where CampaignID = '${cmsCampaignLayoutDTO.id}'`);
    return { layout: campaignLayoutList, message: "success", status: 200 };
  }

  async SignfeedCMSResolutionList(request) {
    let resolutionList = await this.SignFeedCMSResolutionEntityRepository.find(
      {}
    );
    return { resolution: resolutionList, message: "success", status: 200 };
  }



  // // list user by surbhi

  async SignfeedCMSUsersList(request) {
    let usersList = await this.SignFeedCMSUserEntityRepository.find({});
    return { user: usersList, message: "success", status: 200 };
  }
  async SignfeedCMSUsersOrgList(request) {
    let usersList = await this.SignFeedCMSUserEntityRepository.find({
      
    });
    return { user: usersList, message: "success", status: 200 };
  }


  // user show organization

  async SignfeedCMSUsersOzList(request) {
    const { organization } = request.query;

    let userList;
    if (organization) {
      userList = await this.connection.query(
        `SELECT *
       FROM user
       WHERE user.OrganizationId = ?`,
        [organization]
      );
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
  // specific media
  async SignfeedCMSMediaListSpecific(request) {
    // Extracting the mediaID and new name from the request body
    const { mediaID, newName } = request.body;

    // Checking if mediaID and newName are provided
    if (!mediaID || !newName) {
      return { message: "MediaID and newName are required", status: 400 };
    }

    // Fetching media data for the specific mediaID
    let media = await this.SignFeedCMSMediaEntityRepository.findOne({
      where: { mediaID }, // Fetching based on the provided mediaID
    });

    // Checking if media with the provided mediaID exists
    if (!media) {
      return { message: "Media not found", status: 404 };
    }

    try {
      // Creating a new entity with the same data except for the name
      const newMedia = new SignFeedCMSMediaEntity();
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

      // Saving the new entity
      const savedMedia = await this.SignFeedCMSMediaEntityRepository.save(
        newMedia
      );

      return { media: savedMedia, message: "success", status: 200 };
    } catch (error) {
      return { message: "Error saving media", status: 500 };
    }
  }

  async SignfeedCMSWidgetOptionList(
    request,
    cmsWidgetOptionsDTO: CMSWidgetOptionsDTO
  ) {
    let widgetOptionList =
      await this.SignFeedCMSWidgetOptionEntityRepository.find({
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
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
  // simple display list
  async SignfeedCMSDisplayLists(request) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let displayList = await this.SignFeedCMSDisplayEntityRepository.find({});
    return { display: displayList, message: "success", status: 200 };
  }

  async SignfeedCMSDisplayList(request) {
    try {
      const { DisplayGroupID } = request.query; // Assuming DisplayGroupID is sent as a query parameter
      console.log("DisplayGroupID", DisplayGroupID);

      let displayList;

      // Modify your SQL query to filter based on DisplayGroupID
      displayList = await this.connection.query(
        `SELECT *
            FROM display
            LEFT JOIN lkdisplaydg ON display.displayid = lkdisplaydg.DisplayID 
            AND lkdisplaydg.DisplayGroupID = ?`,
        [DisplayGroupID]
      );

      return { display: displayList, message: "success", status: 200 };
    } catch (error) {
      // Handle errors appropriately
      console.error("Error fetching data:", error);
      return { message: "An error occurred", status: 500 };
    }
  }
  async SignfeedCMSAssignLayoutList(request) {
    try {
      const { CampaignID } = request.query; // Assuming DisplayGroupID is sent as a query parameter
      console.log("CampaignID", CampaignID);

      let layoutList;

      // Modify your SQL query to filter based on DisplayGroupID
      layoutList = await this.connection.query(
        `SELECT *
        FROM layout
        LEFT JOIN lkcampaignlayout ON layout.layoutID = lkcampaignlayout.layoutID
        AND lkcampaignlayout.CampaignID = ?`,
        [CampaignID]
      );

      return { layout: layoutList, message: "success", status: 200 };
    } catch (error) {
      // Handle errors appropriately
      console.error("Error fetching data:", error);
      return { message: "An error occurred", status: 500 };
    }
  }
  async SignfeedCMSCampaignLayoutPreviewList(request) {
    try {
      const { CampaignID } = request.query;
      console.log("CampaignID", CampaignID);

      // Query to fetch layouts associated with the specified campaign ID
      const CampaignLayoutPreviewList = await this.connection.query(
        `SELECT *
       FROM layout
       INNER JOIN lkcampaignlayout ON layout.layoutID = lkcampaignlayout.LayoutID
       WHERE lkcampaignlayout.CampaignID = ?`,
        [CampaignID]
      );

      return {
        CampaignLayoutPreview: CampaignLayoutPreviewList,
        message: "success",
        status: 200,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { message: "An error occurred", status: 500 };
    }
  }

  async SignfeedCMSDisplayUpdate(
    request,
    cmsDisplayUpdateDTO: CMSDisplayUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      let checkDisplayGroup =
        await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
          where: {
            DisplayGroup: checkDisplay.display,
          },
        });
      //  this.logger.log(checkDisplayGroup.DisplayGroup);
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
      // update display group
      if (checkDisplayGroup) {
        this.logger.log(checkDisplayGroup.DisplayGroup);
        checkDisplayGroup.DisplayGroup = cmsDisplayUpdateDTO.display;

        await this.SignFeedCMSDisplayGroupEntityRepository.save(
          checkDisplayGroup
        );
      }
      return { display: checkDisplay, message: "success", status: 200 };
    } else {
      return { message: "Display Does Not Exist", status: 400 };
    }
  }
  // update Module
  async SignfeedCMSModuleUpdate(
    request,
    cmsModuleUpdateDTO: CMSModuleUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "Module Does Not Exist", status: 400 };
    }
  }
  async SignfeedCMSDisplayAuthorize(
    request,
    cmsDisplayAuthorizeDTO: CMSDisplayAuthorizeDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "Display Does Not Exist", status: 400 };
    }
  }

  async SignfeedCMSDisplayDelete(
    request,
    cmsDisplayDeleteDTO: CMSDisplayDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkLayoutDisplay = this.connection.query(
        `delete from display where displayid='${cmsDisplayDeleteDTO.displayid}'`
      );
      await this.SignFeedCMSDisplayEntityRepository.delete(checkDisplay);
      return { message: "success", status: 200 };
    } else {
      return { message: "Display Does Not Exist", status: 400 };
    }
  }
  // layout delete by suru
  async SignfeedCMSLayoutDelete(
    request,
    cmsLayoutDeleteDTO: CMSLayoutDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkLayoutDisplay = this.connection.query(
        `delete from layout where layoutID='${cmsLayoutDeleteDTO.layoutID}'`
      );
      await this.SignFeedCMSLayoutEntityRepository.delete(checkLayout);
      return { message: "success", status: 200 };
    } else {
      return { message: "Layout Does Not Exist", status: 400 };
    }
  }
  // user  delete by surbhi
  async SignfeedCMSUsersDelete(request, cmsUsersDeleteDTO: CMSUsersDeleteDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkLayoutUser = this.connection.query(
        `delete from user where UserID='${cmsUsersDeleteDTO.UserID}'`
      );
      await this.SignFeedCMSUserEntityRepository.delete(checkUser);
      return { message: "success", status: 200 };
    } else {
      return { message: "User Does Not Exist", status: 400 };
    }
  }
  // Module delete by surbhi
  async SignfeedCMSModuleDelete(
    request,
    cmsModuleDeleteDTO: CMSModuleDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkLayoutUser = this.connection.query(
        `delete from module where ModuleID='${cmsModuleDeleteDTO.ModuleID}'`
      );
      await this.SignFeedCMSModuleEntityRepository.delete(checkModule);
      return { message: "success", status: 200 };
    } else {
      return { message: "User Does Not Exist", status: 400 };
    }
  }
  async SignfeedCMSLayoutDetail(
    request,
    cmsLayoutDetailDTO: CMSLayoutDetailDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    let cmsLayoutRegionPlaylistDetailDTO =
      new CMSLayoutRegionPlaylistDetailDTO();
    let layout_region: layoutregion[] = [];

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
    // cmsLayoutRegionPlaylistDetailDTO.push(layoutList)

    for (let regionitem of regionList) {
      let region = new layoutregion();
      region.regionId = regionitem.regionId;
      region.name = regionitem.name;
      region.width = Number(regionitem.width);
      region.height = Number(regionitem.height);
      region.top = Number(regionitem.top);
      region.left = Number(regionitem.left);
      region.zIndex = Number(regionitem.zIndex);
      let checkplaylist =
        await this.SignFeedCMSRegionPlayListEntityRepository.findOne({
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

      let playlist_widgetd: widget[] = [];
      for (let widgetitem of widgetList) {
        let medialist = await this.SignFeedCMSWidgetMediaEntityRepository.find({
          where: {
            widgetId: widgetitem.widgetId,
          },
        });
        let widget_media: media[] = [];
        for (let mediaitems of medialist) {
          let checkMedia = await this.SignFeedCMSMediaEntityRepository.findOne({
            where: {
              mediaID: mediaitems.mediaId,
            },
          });
          let media_det = new media();
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
        let widget_list = new widget();
        widget_list.widgetId = widgetitem.widgetId;
        widget_list.duration = widgetitem.duration;
        widget_list.calculatedDuration = widgetitem.calculatedDuration;
        widget_list.displayOrder = widgetitem.displayOrder;
        widget_list.media = widget_media;
        playlist_widgetd.push(widget_list);
      }
      let play_list: regionplaylist[] = [];
      let regionPlayList = new regionplaylist();
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

  async SignfeedCMSCampaignAdd(request, cmsCampaignDTO: CMSCampaignDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      const addCMSCampaign: SignFeedCMSCampaignEntity =
        new SignFeedCMSCampaignEntity();
      addCMSCampaign.Campaign = cmsCampaignDTO.name;
      addCMSCampaign.organization = cmsCampaignDTO.organization;
      addCMSCampaign.IsLayoutSpecific = 0;
      addCMSCampaign.UserID = userid;
      addCMSCampaign.tags = cmsCampaignDTO.tags;
      await this.SignFeedCMSCampaignEntityRepository.save(addCMSCampaign);
      return { campaign: addCMSCampaign, message: "success", status: 200 };
    }
  }
  async SignfeedCMSDisplayAdd(request, cmsDisplayDTO: CMSDisplayDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      const addCMSDisplay: SignFeedCMSDisplayEntity =
        new SignFeedCMSDisplayEntity();
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
      /////////// ====== DisplayGroup =======/////////////
      const addDisplayGroup: SignFeedCMSDisplayGroupEntity =
        new SignFeedCMSDisplayGroupEntity();
      addDisplayGroup.DisplayGroup = cmsDisplayDTO.display;
      addDisplayGroup.IsDisplaySpecific = 1;
      addDisplayGroup.userId = 1;
      await this.SignFeedCMSDisplayGroupEntityRepository.save(addDisplayGroup);

      return { display: addCMSDisplay, message: "success", status: 200 };
    }
  }
  // add dayparting
  async SignfeedCMSDaypartAdd(request, cmsDaypartDTO: CMSDaypartDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      const addCMSDaypart: SignFeedCMSDaypartEntity =
        new SignFeedCMSDaypartEntity();
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
  // list daypart
  async SignfeedCMSDaypartList(request) {
    let daypartList = await this.SignFeedCMSDaypartEntityRepository.find({});
    return { daypart: daypartList, message: "success", status: 200 };
  }

  // update daypart
  async SignfeedCMSDaypartUpdate(
    request,
    cmsDaypartUpdateDTO: CMSDaypartUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "Daypart Does Not Exist", status: 400 };
    }
  }
  // delete daypart
  async SignfeedCMSDaypartDelete(
    request,
    cmsdaypartDeleteDTO: CMSDaypartDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkDaypartTable = this.connection.query(
        `delete from daypart where dayPartId='${cmsdaypartDeleteDTO.dayPartId}'`
      );
      await this.SignFeedCMSDaypartEntityRepository.delete(checkDaypart);
      return { message: "success", status: 200 };
    } else {
      return { message: "daypart Does Not Exist", status: 400 };
    }
  }

  async SignfeedCMSCampaignDelete(
    request,
    cmsCampaignDeleteDTO: CMSCampaignDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkLayouCampaign = this.connection.query(
        `delete from lkcampaignlayout where CampaignID='${cmsCampaignDeleteDTO.CampaignID}'`
      );
      await this.SignFeedCMSCampaignEntityRepository.delete(checkCampaign);
      return { message: "success", status: 200 };
    } else {
      return { message: "Campaign Does Not Exist", status: 400 };
    }
  }

  async SignfeedCMSCampaignUpdate(
    request,
    cmsCampaignUpdateDTO: CMSCampaignUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "Campaign Does Not Exist", status: 400 };
    }
  }
  // update user
  async SignfeedCMSUserUpdate(request, cmsUserUpdateDTO: CMSUserUpdateDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "user Does Not Exist", status: 400 };
    }
  }
  async SignfeedCMSCampaignPreview(
    request,
    cmsCampaignDetailDTO: CMSCampaignDetailDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let cmsCampaignPreviewDTO = new CMSCampaignPreviewDTO();

    let campaignlist =
      await this.SignFeedCMSCampaignLayoutEntityRepository.find({
        where: {
          CampaignID: cmsCampaignDetailDTO.CampaignID,
        },
      });
    cmsCampaignPreviewDTO.CampaignID = cmsCampaignDetailDTO.CampaignID;
    for (let campaignItem of campaignlist) {
      let layout_region: layoutregion[] = [];
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
        let region = new layoutregion();
        region.regionId = regionitem.regionId;
        region.name = regionitem.name;
        let checkplaylist =
          await this.SignFeedCMSRegionPlayListEntityRepository.findOne({
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

        let playlist_widgetd: widget[] = [];
        for (let widgetitem of widgetList) {
          let medialist =
            await this.SignFeedCMSWidgetMediaEntityRepository.find({
              where: {
                widgetId: widgetitem.widgetId,
              },
            });
          let widget_media: media[] = [];
          for (let mediaitems of medialist) {
            let checkMedia =
              await this.SignFeedCMSMediaEntityRepository.findOne({
                where: {
                  mediaID: mediaitems.mediaId,
                },
              });
            let media_det = new media();
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
          let widget_list = new widget();
          widget_list.widgetId = widgetitem.widgetId;
          widget_list.duration = widgetitem.duration;
          widget_list.calculatedDuration = widgetitem.calculatedDuration;
          widget_list.displayOrder = widgetitem.displayOrder;
          widget_list.media = widget_media;
          playlist_widgetd.push(widget_list);
        }
        let play_list: regionplaylist[] = [];
        let regionPlayList = new regionplaylist();
        regionPlayList.playlistId = playlist.playlistId;
        regionPlayList.name = playlist.name;
        layout_region.push(region);
        regionPlayList.widget = playlist_widgetd;
        play_list.push(regionPlayList);
        region.playlist = play_list;
      }
      let layout_list: layout[] = [];
      let layout_det = new layout();
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

  async SignfeedCMSResolutionAdd(request, cmsResolutionDTO: CMSResolutionDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkResolution =
      await this.SignFeedCMSResolutionEntityRepository.findOne({
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
    } else {
      const addCMSResolution: SignFeedCMSResolutionEntity =
        new SignFeedCMSResolutionEntity();
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

  async SignfeedCMSResolutionUpdate(
    request,
    cmsResolutionUpdateDTO: CMSResolutionUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkResolution =
      await this.SignFeedCMSResolutionEntityRepository.findOne({
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
    } else {
      return { message: "Resolution ID Does Not Exist", status: 400 };
    }
  }

  // resolution delete surbhi
  async SignfeedCMSResolutionDelete(
    request,
    cmsResolutionDeleteDTO: CMSResolutionDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkResolution =
      await this.SignFeedCMSResolutionEntityRepository.findOne({
        where: {
          resolutionID: cmsResolutionDeleteDTO.resolutionID,
        },
      });
    if (checkResolution) {
      let checkLayouCampaign;
      checkLayouCampaign = this.connection.query(
        `delete from resolution where resolutionID='${cmsResolutionDeleteDTO.resolutionID}'`
      );
      await this.SignFeedCMSResolutionEntityRepository.delete(checkResolution);
      return { message: "success", status: 200 };
    } else {
      return { message: "Resolution Does Not Exist", status: 400 };
    }
  }

  //  Media delete surbhi
  async SignfeedCMSMediaDelete(request, cmsMediaDeleteDTO: CMSMediaDeleteDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      checkMedia = this.connection.query(
        `delete from media where mediaID='${cmsMediaDeleteDTO.mediaID}'`
      );
      await this.SignFeedCMSMediaEntityRepository.delete(checkMedia);
      return { message: "success", status: 200 };
    } else {
      return { message: "Campaign Does Not Exist", status: 400 };
    }
  }
  // media update
  async SignfeedCMSMediaUpdate(request, cmsMediaUpdateDTO: CMSMediaUpdateDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      return { message: "Media ID Does Not Exist", status: 400 };
    }
  }
  // add module by surbhi
  async SignfeedCMSModuleAdd(request, cmsModuleDTO: CMSModuleDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
    } else {
      const addCMSModule: SignFeedCMSModuleEntity =
        new SignFeedCMSModuleEntity();
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
  async SignfeedCMSLayout(request, cmsLayoutDTO: CMSLayoutDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
      where: {
        layout: cmsLayoutDTO.name,
      },
    });
    let checkResolution =
      await this.SignFeedCMSResolutionEntityRepository.findOne({
        where: {
          resolutionID: cmsLayoutDTO.resolutionId,
        },
      });
    if (!checkResolution) {
      return { message: "Region ID Not Exist", status: 400 };
    }

    if (checkLayout) {
      return { message: "Layout Name Already Exist", status: 400 };
    } else {
      const addCMSLayout: SignFeedCMSLayoutEntity =
        new SignFeedCMSLayoutEntity();
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
      /////////// ====== CAMPAIGN =======/////////////
      const addCampaign: SignFeedCMSCampaignEntity =
        new SignFeedCMSCampaignEntity();
      addCampaign.Campaign = cmsLayoutDTO.name;
      addCampaign.IsLayoutSpecific = 1;
      addCampaign.UserID = 1;
      await this.SignFeedCMSCampaignEntityRepository.save(addCampaign);
      /////////// ====== PLAYLIST =======/////////////
      const addPlaylist: SignFeedCMSPlayListEntity =
        new SignFeedCMSPlayListEntity();
      addPlaylist.name = cmsLayoutDTO.name + "-1";
      addPlaylist.ownerId = 1;
      await this.SignFeedCMSPlayListEntityRepository.save(addPlaylist);
      /////////// ====== REGION =======/////////////
      const addRegion: SignFeedCMSRegionEntity = new SignFeedCMSRegionEntity();
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
      /////////// ====== REGION PLAYLIST =======/////////////
      let getPlaylistID =
        await this.SignFeedCMSPlayListEntityRepository.findOne({
          where: {
            name: cmsLayoutDTO.name + "-1",
          },
        });
      let getRegionID = await this.SignFeedCMSRegionEntityRepository.findOne({
        where: {
          name: cmsLayoutDTO.name + "-1",
        },
      });
      const addRegionPlaylist: SignFeedCMSRegionPlayListEntity =
        new SignFeedCMSRegionPlayListEntity();
      addRegionPlaylist.regionId = getRegionID.regionId;
      addRegionPlaylist.playlistId = getPlaylistID.playlistId;
      addRegionPlaylist.displayOrder = 1;
      await this.SignFeedCMSRegionPlayListEntityRepository.save(
        addRegionPlaylist
      );

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

  async SignfeedCMSLayoutUpdate(
    request,
    cmsLayoutUpdateDTO: CMSLayoutUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      let checkCampaign =
        await this.SignFeedCMSCampaignEntityRepository.findOne({
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

      // update campaign

      if (checkCampaign) {
        this.logger.log(checkCampaign.Campaign);
        checkCampaign.Campaign = cmsLayoutUpdateDTO.layout;

        await this.SignFeedCMSCampaignEntityRepository.save(checkCampaign);
      }

      // console.log("kjj",updateCampaign)
      return { users: checkLayout, message: "success", status: 200 };
    } else {
      return { message: "user Does Not Exist", status: 400 };
    }
  }
  // update Event Details
  async SignfeedCMSEventDetailsUpdate(
    request,
    cmsEventDetailsUpdateDTO: CMSEventDetailsUpdateDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    this.logger.log(cmsEventDetailsUpdateDTO);

    let checkscheduling =
      await this.SignFeedCMSSchedulingEntityRepository.findOne({
        where: {
          eventID: cmsEventDetailsUpdateDTO.eventID,
        },
      });

    if (checkscheduling) {
      let checkDisplayGroup =
        await this.SignFeedCMSscheduledisplaygroupEntityRepository.findOne({
          where: {
            eventId: checkscheduling.eventID,
          },
        });

      checkscheduling.FromDT = cmsEventDetailsUpdateDTO.FromDT;
      checkscheduling.ToDT = cmsEventDetailsUpdateDTO.ToDT;
      checkscheduling.DisplayOrder = cmsEventDetailsUpdateDTO.DisplayOrder;
      checkscheduling.displayid = cmsEventDetailsUpdateDTO.displayid;
      checkscheduling.CampaignID = cmsEventDetailsUpdateDTO.CampaignID;
      const gg = await this.SignFeedCMSSchedulingEntityRepository.save(
        checkscheduling
      );
      console.log("jj", gg);

      if (checkDisplayGroup) {
        let checkDisplayEvents =
          await this.SignFeedCMSdisplayeventsEntityRepository.findOne({
            where: {
              eventID: checkscheduling.eventID,
            },
          });
        checkDisplayGroup.displayGroupId = cmsEventDetailsUpdateDTO.displayid;

        await this.SignFeedCMSscheduledisplaygroupEntityRepository.save(
          checkDisplayGroup
        );

        // checkDisplayEvents.start =cmsEventDetailsUpdateDTO.start;
        // checkDisplayEvents.end =cmsEventDetailsUpdateDTO.end;
        // await this.SignFeedCMSdisplayeventsEntityRepository.save(checkDisplayEvents);

        if (checkDisplayEvents) {
          checkDisplayEvents.start = cmsEventDetailsUpdateDTO.start;
          checkDisplayEvents.end = cmsEventDetailsUpdateDTO.end;
          await this.SignFeedCMSdisplayeventsEntityRepository.save(
            checkDisplayEvents
          );
        }
      }
      // console.log("kjj",updateCampaign)
      return {
        updateEvent: checkscheduling,
        checkDisplayGroup,
        message: "success",
        status: 200,
      };
    } else {
      return { message: " Does Not Exist", status: 400 };
    }
  }

  async SignfeedCMSLayoutRetire(
    request,
    cmsLayoutRetireDTO: CMSLayoutRetireDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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

  async SignfeedCMSLayoutAssignToCampaign(
    request,
    cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO[]
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
        let checkCampaign =
          await this.SignFeedCMSCampaignEntityRepository.findOne({
            where: {
              CampaignID: campaignItem.campaignid,
            },
          });
        if (checkCampaign) {
          let checkCampaignLayout =
            await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
              where: {
                CampaignID: campaignItem.campaignid,
                LayoutID: campaignItem.layoutid,
              },
            });
          console.log("loo", checkCampaignLayout);
          if (checkCampaignLayout) {
            checkCampaignLayout.DisplayOrder = campaignItem.displayorder;
            // No return here
          } else {
            const addCampaignLayout: SignFeedCMSCampaignLayoutEntity =
              new SignFeedCMSCampaignLayoutEntity();
            addCampaignLayout.CampaignID = campaignItem.campaignid;
            addCampaignLayout.LayoutID = campaignItem.layoutid;
            addCampaignLayout.DisplayOrder = 1;
            await this.SignFeedCMSCampaignLayoutEntityRepository.save(
              addCampaignLayout
            );
            // No return here
          }
        }
      }
    }

    return { message: "success", status: 200 }; // Return outside the loop
  }

  async SignfeedCMSLayoutRemoveToCampaign(
    request,
    cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkLayout = await this.SignFeedCMSLayoutEntityRepository.findOne({
      where: {
        layoutID: cmsCampaignAssignLayoutDTO.layoutid,
      },
    });
    if (checkLayout) {
      let checkCampaign =
        await this.SignFeedCMSCampaignEntityRepository.findOne({
          where: {
            CampaignID: cmsCampaignAssignLayoutDTO.campaignid,
          },
        });
      if (checkCampaign) {
        let checkCampaignLayout =
          await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
            where: {
              CampaignID: cmsCampaignAssignLayoutDTO.campaignid,
              LayoutID: cmsCampaignAssignLayoutDTO.layoutid,
            },
          });
        if (checkCampaignLayout) {
          checkCampaignLayout.DisplayOrder =
            cmsCampaignAssignLayoutDTO.displayorder;
          return { message: "success", status: 200 };
        } else {
          const addCampaignLayout: SignFeedCMSCampaignLayoutEntity =
            new SignFeedCMSCampaignLayoutEntity();
          addCampaignLayout.CampaignID = cmsCampaignAssignLayoutDTO.campaignid;
          addCampaignLayout.LayoutID = cmsCampaignAssignLayoutDTO.layoutid;
          addCampaignLayout.DisplayOrder = 1;
          await this.SignFeedCMSCampaignLayoutEntityRepository.save(
            addCampaignLayout
          );
          return { message: "success", status: 200 };
        }
      }
    }
    return { message: "success", status: 200 };
  }

  async SignfeedCMSLayoutPublish(
    request,
    cmsLayoutPublishDTO: CMSLayoutPublishDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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

  async SignfeedCMSRegionAdd(request, cmsRegionDTO: CMSRegionDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      let checkRegion: number =
        await this.SignFeedCMSRegionEntityRepository.count({
          where: {
            layoutId: cmsRegionDTO.layoutid,
          },
        });
      /////////// ====== PLAYLIST =======/////////////
      let regionCount = checkRegion + 1;
      let regionName = checkLayout.layout + "-" + regionCount;
      const addPlaylist: SignFeedCMSPlayListEntity =
        new SignFeedCMSPlayListEntity();
      addPlaylist.name = checkLayout.layout + "-" + regionCount;
      addPlaylist.ownerId = userid;
      await this.SignFeedCMSPlayListEntityRepository.save(addPlaylist);
      ///////// ====== REGION =======/////////////
      const addRegion: SignFeedCMSRegionEntity = new SignFeedCMSRegionEntity();
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

      /////////// ====== REGION PLAYLIST =======/////////////
      let getPlaylistID =
        await this.SignFeedCMSPlayListEntityRepository.findOne({
          where: {
            name: regionName,
          },
        });
      let getRegionID = await this.SignFeedCMSRegionEntityRepository.findOne({
        where: {
          name: regionName,
        },
      });
      const addRegionPlaylist: SignFeedCMSRegionPlayListEntity =
        new SignFeedCMSRegionPlayListEntity();
      addRegionPlaylist.regionId = getRegionID.regionId;
      addRegionPlaylist.playlistId = getPlaylistID.playlistId;
      addRegionPlaylist.displayOrder = 1;
      await this.SignFeedCMSRegionPlayListEntityRepository.save(
        addRegionPlaylist
      );

      return {
        region: getRegionID,
        playlist: getPlaylistID,
        message: "success",
        status: 200,
      };
    } else {
      return { message: "Layout Does Not Exist", status: 400 };
    }
  }

  async SignfeedCMSRegionUpdate(
    request,
    cmsRegionUpdateDTO: [CMSRegionUpdateDTO]
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      let checkPlaylist =
        await this.SignFeedCMSPlayListEntityRepository.findOne({
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
      } else {
        return { region: [], message: "Region Does Not Exist", status: 400 };
      }
    }
    return { message: "success", status: 200 };
  }
  // add widget without in array form
  async SignfeedCMSWidgetAdd(request, cmsWidgetDTO: CMSWidgetDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
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
      const addWidget: SignFeedCMSWidgetEntity = new SignFeedCMSWidgetEntity();
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

      let checkLastWidget =
        await this.SignFeedCMSWidgetEntityRepository.findOne({
          where: {
            playlistId: cmsWidgetDTO.playlistId,
          },
          order: {
            widgetId: "desc",
          },
        });

      const addWidgetMedia: SignFeedCMSWidgetMediaEntity =
        new SignFeedCMSWidgetMediaEntity();
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
  // add widget with array
  async SignfeedCMSWidgetsAdd(request, widgetArray: CMSWidgetDTO[]) {
    try {
      const response = [];

      for (const cmsWidgetDTO of widgetArray) {
        const ipAddress =
          request.headers["x-forwarded-for"] ||
          request.connection.remoteAddress;
        const username = request.user.username;
        let userid = await this.SignfeedCMSGetUserID(username);
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

        let checkPlaylist =
          await this.SignFeedCMSPlayListEntityRepository.findOne({
            where: {
              playlistId: cmsWidgetDTO.playlistId,
            },
          });

        if (checkPlaylist) {
          const addWidget: SignFeedCMSWidgetEntity =
            new SignFeedCMSWidgetEntity();
     
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

          let checkLastWidget =
            await this.SignFeedCMSWidgetEntityRepository.findOne({
              where: {
                playlistId: cmsWidgetDTO.playlistId,
              },
              order: {
                widgetId: "desc",
              },
            });

          const addWidgetMedia: SignFeedCMSWidgetMediaEntity =
            new SignFeedCMSWidgetMediaEntity();
          addWidgetMedia.widgetId = checkLastWidget.widgetId;
          addWidgetMedia.mediaId = cmsWidgetDTO.mediaId;
          await this.SignFeedCMSWidgetMediaEntityRepository.save(
            addWidgetMedia
          );

          response.push({
            widget: addWidget,
            media: addWidgetMedia,
            message: "success",
            status: 200,
          });
        }
      }

      return response;
    } catch (error) {
      console.error("Error during widget addition:", error);
      throw new InternalServerErrorException("Internal Server Error");
    }
  }

  async SignfeedCMSWidgetDelete(
    request,
    cmsWidgetDeleteDTO: CMSWidgetDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    let checkWidgetMedia =
      await this.SignFeedCMSWidgetMediaEntityRepository.findOne({
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
      await this.SignFeedCMSWidgetMediaEntityRepository.delete(
        checkWidgetMedia
      );
      await this.SignFeedCMSWidgetEntityRepository.delete(checkWidget);

      return { message: "success", status: 200 };
    }
  }
  async SignfeedCMSMediaAdd(files: Multer.File[], duration: number) {
    console.log("guri", duration);
    console.log("Start Upload");
    const uploadedMediaData: { mediaid: number }[] = [];
    for (const file of files) {
      const currentDateTime = new Date();
      const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
      // Validate file size and types
      if (!this.validateFileType(file) || !this.validateFileSize(file)) {
        throw new BadRequestException("Invalid file type or size.");
      }

      let checkmedia = await this.SignFeedCMSMediaEntityRepository.findOne({
        where: {
          name: file.originalname,
        },
      });
      let filename;
      if (checkmedia) {
        const randomString = this.generateRandomString(8);
        const fileNameWithoutExtension = path.basename(
          file.originalname,
          path.extname(file.originalname)
        );
        const fileExtension = path.extname(file.originalname).substring(1);
        filename =
          fileNameWithoutExtension + "_" + randomString + "." + fileExtension;
      } else {
        filename = file.originalname;
      }
      let maxMediaRecord = await this.SignFeedCMSMediaEntityRepository.findOne({
        where: {
          released: 1,
        },
        order: {
          mediaID: "DESC", // Use 'DESC' for descending order
        },
      });

      let maxMediaID;
      if (maxMediaRecord) {
        maxMediaID = maxMediaRecord.mediaID + 1;
      } else {
        maxMediaID = 1; // Handle the case where no records exist
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
      const getVideoDuration = (fileBuffer: Buffer): Promise<number> => {
        return new Promise((resolve, reject) => {
          const tempFilePath = tmp.tmpNameSync({ postfix: ".mp4" });
          console.log("fileTemp", tempFilePath);
          console.log("filebuffer", fileBuffer);
          // Generate a temporary file path with .mp4 extension
          ffmpeg()
            .input(fileBuffer)
            .save(tempFilePath)
            .on("end", () => {
              ffmpeg.ffprobe(tempFilePath, (err, metadata) => {
                if (err) {
                  reject(err);
                } else {
                  console.log("Metadata:", metadata);
                  console.log("ll", metadata.format.duration);
                  resolve(metadata.format.duration);
                }
                // Clean up temporary file
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
      // Inside your loop where you handle file processing
      if (fileExtension === ".mp4" || fileExtension === ".mp3") {
        console.log("kl", file.buffer);
        try {
          durationInSeconds = await getVideoDuration(file.buffer);
          console.log("suru", durationInSeconds);
        } catch (error) {
          console.error("Error getting video duration:", error);
          // Handle error accordingly
        }
      }

      let filetype;
      if (
        fileExtension == ".png" ||
        fileExtension == ".jpeg" ||
        fileExtension == ".jpg"
      ) {
        filetype = "image";
      } else if (fileExtension == ".mp4") {
        filetype = "video";
      } else {
        filetype = "audio";
      }

      const addMedia: SignFeedCMSMediaEntity = new SignFeedCMSMediaEntity();
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
      const savedFilePath = await this.saveFileToDirectory(
        file,
        storedasfilename
      );
      console.log(savedFilePath);
      //uploadedMediaIds.push(maxMediaID);
      uploadedMediaData.push({ mediaid: maxMediaID });
    }
    console.log("================FILE UPLOADED SUCCESSFULLY================");
    return [{ media: uploadedMediaData, message: "success", status: 200 }];
  }

  generateRandomString(length: number): string {
    if (length % 2 !== 0) {
      throw new Error("Length must be even for hex encoding.");
    }
    const bytes = crypto.randomBytes(length / 2);
    return bytes.toString("hex");
  }

  validateFileType(file: Multer.File): boolean {
    // Define the allowed file types (e.g., image/jpeg, application/pdf)
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "video/mp4",
    ];
    return allowedTypes.includes(file.mimetype);
  }

  validateFileSize(file: Multer.File): boolean {
    // Define the maximum file size in bytes (e.g., 50MB)
    const maxSize = 50 * 1024 * 1024; // 5MB
    return file.size <= maxSize;
  }

  async saveFileToDirectory(file: Multer.File, filename): Promise<string> {
    const uploadDir = path.join(appRoot.toString(), "uploads"); // Use app-root-path to get the root directory
    await fs.ensureDir(uploadDir); // Make sure the directory exists
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
    } else {
      return null;
    }
  }
  // add display group

  async SignfeedCMSDisplayGroupAdd(
    request,
    cmsDisplayGroupDTO: CMSDisplayGroupDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    let checkDisplayGroup =
      await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
        where: {
          DisplayGroup: cmsDisplayGroupDTO.DisplayGroup,
        },
      });
    if (checkDisplayGroup) {
      return { message: "DisplayGroup Name Already Exist", status: 400 };
    } else {
      const addCMSDisplayGroup: SignFeedCMSDisplayGroupEntity =
        new SignFeedCMSDisplayGroupEntity();
      addCMSDisplayGroup.DisplayGroup = cmsDisplayGroupDTO.DisplayGroup;
      addCMSDisplayGroup.organization = cmsDisplayGroupDTO.organization;
      addCMSDisplayGroup.Description = cmsDisplayGroupDTO.Description;
      addCMSDisplayGroup.userId = cmsDisplayGroupDTO.userId;
      addCMSDisplayGroup.IsDisplaySpecific =
        cmsDisplayGroupDTO.IsDisplaySpecific;
      addCMSDisplayGroup.isDynamic = cmsDisplayGroupDTO.isDynamic;
      addCMSDisplayGroup.dynamicCriteria = cmsDisplayGroupDTO.dynamicCriteria;
      await this.SignFeedCMSDisplayGroupEntityRepository.save(
        addCMSDisplayGroup
      );
      return {
        displayGroup: addCMSDisplayGroup,
        message: "success",
        status: 200,
      };
    }
  }
  // list displayGroup
  async SignfeedCMSDisplayGroupList(request) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let displayGroupList =
      await this.SignFeedCMSDisplayGroupEntityRepository.find({});
    return { displayGroup: displayGroupList, message: "success", status: 200 };
  }
  async SignfeedCMSDisplayGroupDelete(
    request,
    cmsDisplayGroupDeleteDTO: CMSDisplayGroupDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkDisplayGroup =
      await this.SignFeedCMSDisplayGroupEntityRepository.findOne({
        where: {
          DisplayGroupID: cmsDisplayGroupDeleteDTO.DisplayGroupID,
        },
      });
    if (checkDisplayGroup) {
      let checkDisplayGroup;
      checkDisplayGroup = this.connection.query(
        `delete from displaygroup where DisplayGroupID='${cmsDisplayGroupDeleteDTO.DisplayGroupID}'`
      );
      await this.SignFeedCMSDisplayGroupEntityRepository.delete(
        checkDisplayGroup
      );
      return { message: "success", status: 200 };
    } else {
      return { message: "displayGroup Does Not Exist", status: 400 };
    }
  }
  // add sche
  async SignfeedCMSSchedulingAdd(request, cmsSchedulingDTO: CMSSchedulingDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    const addCMSScheduling: SignFeedCMSSchedulingEntity =
      new SignFeedCMSSchedulingEntity();
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

    const addedScheduling =
      await this.SignFeedCMSSchedulingEntityRepository.save(addCMSScheduling);

    /////////// ====== scheduledisplaygroup =======/////////////
    const addDisplayGroup: SignFeedCMSscheduledisplaygroupEntity =
      new SignFeedCMSscheduledisplaygroupEntity();
    addDisplayGroup.eventId = addedScheduling.eventID;
    addDisplayGroup.displayGroupId = cmsSchedulingDTO.displayid;
    await this.SignFeedCMSscheduledisplaygroupEntityRepository.save(
      addDisplayGroup
    );
    /////////// ====== displayevent =======/////////////
    //    const addDisplayGroup1: SignFeedCMSdisplayeventEntity =
    //    new SignFeedCMSdisplayeventEntity();
    //   addDisplayGroup1.displayid = cmsSchedulingDTO.displayid;
    //   addDisplayGroup1.eventDate=currentDateTime;
    //   addDisplayGroup1.start = cmsSchedulingDTO.FromTm;
    //   addDisplayGroup1.end = cmsSchedulingDTO.ToTm;
    //  await this.SignFeedCMSdisplayeventEntityRepository.save(addDisplayGroup1);

    const addDisplayGroup1: SignFeedCMSdisplayeventsEntity =
      new SignFeedCMSdisplayeventsEntity();
    addDisplayGroup1.displayid = cmsSchedulingDTO.displayid;
    addDisplayGroup1.eventDate = currentDateTime;
    addDisplayGroup1.start = cmsSchedulingDTO.FromTm;
    addDisplayGroup1.end = cmsSchedulingDTO.ToTm;
    addDisplayGroup1.eventID = addedScheduling.eventID;
    await this.SignFeedCMSdisplayeventsEntityRepository.save(addDisplayGroup1);
    return { Scheduling: addCMSScheduling, message: "success", status: 200 };
  }
  // add permission
  async SignfeedCMSPermissionAdd(request, cmsPermissionDTO: CMSPermissionDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    const addCMSPermission: SignFeedCMSPermissionEntity =
      new SignFeedCMSPermissionEntity();
    addCMSPermission.PermissionName = cmsPermissionDTO.PermissionName;

    const addedPermission =
      await this.SignFeedCMSPermissionEntityRepository.save(addCMSPermission);

    /////////// ====== scheduledisplaygroup =======/////////////
    const addLkPermission: SignFeedCMSLkPermissionEntity =
      new SignFeedCMSLkPermissionEntity();
    addLkPermission.UserID = cmsPermissionDTO.UserID;
    addLkPermission.Pid = addedPermission.id;
    addLkPermission.Status = 0;
    await this.SignFeedCMSLkPermissionEntityRepository.save(addLkPermission);

    return { Permission: addLkPermission, message: "success", status: 200 };
  }
  // list permission
  async SignfeedCMSPermissionList(request) {
    const { UserID } = request.query;

    let PermissionsList;
    if (UserID) {
      PermissionsList = await this.connection.query(
        `SELECT user.UserID, user.UserName, lk.status, up.id, up.PermissionName
FROM suru.user 
INNER JOIN suru.lkuserpermission lk ON user.UserID = lk.UserID
INNER JOIN suru.userpermission up ON lk.Pid = up.id
WHERE user.userID= ?`,
        [UserID]
      );
    }
    return { Permissions: PermissionsList, message: "success", status: 200 };
  }
// delete permission
async SignfeedCMSLkPermissionDelete(
  request,
  cmsUserPermissionDeleteDTO: CMSLkUserPermissionDeleteDTO
) {
  const ipAddress =
    request.headers["x-forwarded-for"] || request.connection.remoteAddress;
  const username = request.user.username;
  let userid = await this.SignfeedCMSGetUserID(username);
  const currentDateTime = new Date();
  const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
  let checkUserPermission =
    await this.SignFeedCMSLkPermissionEntityRepository.findOne({
      where: {
        Pid: cmsUserPermissionDeleteDTO.Pid,
        UserID: cmsUserPermissionDeleteDTO.UserID,
      },
    });
    let checkUserPermissions =
    await this.SignFeedCMSPermissionEntityRepository.findOne({
      where: {
        id: cmsUserPermissionDeleteDTO.Pid,
     
      },
    });

  if (checkUserPermission && checkUserPermissions) {
    await this.connection.query(
      `DELETE FROM lkuserpermission WHERE Pid='${cmsUserPermissionDeleteDTO.Pid}'`
    );
    await this.SignFeedCMSLkPermissionEntityRepository.delete(
      checkUserPermission
    );
    await this.connection.query(
      `DELETE FROM userpermission WHERE id='${cmsUserPermissionDeleteDTO.Pid}'`
    );
    await this.SignFeedCMSPermissionEntityRepository.delete(
      checkUserPermissions
    );
    return { message: "success", status: 200 };
  } else {
    return { message: "Does Not Exist", status: 400 };
  }
}
// update permisiion
async SignfeedCMSLKPermissionUpdate(
  request,
  cmsLkPermissionUpdateDTO: CMSLkPermissionUpdateDTO
) {
  const ipAddress =
    request.headers["x-forwarded-for"] || request.connection.remoteAddress;
  const username = request.user.username;
  let userid = await this.SignfeedCMSGetUserID(username);
  const currentDateTime = new Date();
  const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
  let checkPermission =
    await this.SignFeedCMSLkPermissionEntityRepository.findOne({
      where: {
        id:  cmsLkPermissionUpdateDTO.id,
      },
    });
  if (checkPermission) {
    checkPermission.Status = cmsLkPermissionUpdateDTO.status;
  
    await this.SignFeedCMSLkPermissionEntityRepository.save(checkPermission);
    return { Permission: checkPermission, message: "success", status: 200 };
  } else {
    return { message: "Permission ID Does Not Exist", status: 400 };
  }
}

  async SignfeedCMSDisplayMemberAdd(
    request,
    cmsDispalyMemberDTO: CMSDispalyMemberDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);

    let checkDisplayMember =
      await this.SignFeedCMSDisplayMemberEntityRepository.findOne({
        where: {
          DisplayGroupID: cmsDispalyMemberDTO.DisplayGroupID,
          DisplayID: cmsDispalyMemberDTO.DisplayID,
        },
      });
    if (checkDisplayMember) {
      return { message: "Already Exist", status: 400 };
    } else {
      const addCMSDisplayMember: SignFeedCMSDisplayMemberEntity =
        new SignFeedCMSDisplayMemberEntity();
      addCMSDisplayMember.DisplayGroupID = cmsDispalyMemberDTO.DisplayGroupID;
      addCMSDisplayMember.DisplayID = cmsDispalyMemberDTO.DisplayID;

      await this.SignFeedCMSDisplayMemberEntityRepository.save(
        addCMSDisplayMember
      );
      return { Member: addCMSDisplayMember, message: "success", status: 200 };
    }
  }
  async SignfeedCMSMemberDelete(
    request,
    cmsMemberDeleteDTO: CMSMemberDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkDisplayMember =
      await this.SignFeedCMSDisplayMemberEntityRepository.findOne({
        where: {
          LkDisplayDGID: cmsMemberDeleteDTO.LkDisplayDGID,
        },
      });

    if (checkDisplayMember) {
      let checkDisplayMembers;
      checkDisplayMembers = this.connection.query(
        `DELETE FROM lkdisplaydg 
        WHERE LkDisplayDGID = '${cmsMemberDeleteDTO.LkDisplayDGID}'`
      );
      await this.SignFeedCMSDisplayMemberEntityRepository.delete(
        checkDisplayMember
      );
      return { message: "success", status: 200 };
    } else {
      return { message: " Does Not Exist", status: 400 };
    }
  }
  async SignfeedCMSEventList(request) {
    const { displayid } = request.query;

    let eventList;
    if (displayid) {
      eventList = await this.connection.query(
        `SELECT *
         FROM schedule
         WHERE displayid = ?`,
        [displayid]
      );
    }
    return { event: eventList, message: "success", status: 200 };
  }

  async SignfeedCMSEventDateList(request) {
    const { displayid } = request.query;

    let eventList;
    if (displayid) {
      eventList = await this.connection.query(
        `SELECT schedule.FromDT,schedule.ToDT,
        displayevents.start,displayevents.end
       FROM schedule
       JOIN displayevents ON schedule.eventid = displayevents.eventid
       WHERE schedule.displayid  = ?`,
        [displayid]
      );
    }
    return { eventDate: eventList, message: "success", status: 200 };
  }
  // list event by surbhi with send eventId
  async SignfeedCMSEventsList(request) {
    const { eventID } = request.query;

    let eventList;
    if (eventID) {
      eventList = await this.connection.query(
        `SELECT schedule.eventID,schedule.eventTypeId,schedule.FromDT,schedule.ToDT,schedule.displayid,schedule.DisplayOrder,schedule.CampaignID,
        displayevents.start,displayevents.end
       FROM schedule
       JOIN displayevents ON schedule.eventid = displayevents.eventid
       WHERE schedule.eventid = ?`,
        [eventID]
      );
    }
    return { events: eventList, message: "success", status: 200 };
  }
  // list event details
  // async SignfeedCMSEventDetailsList(request) {
  //   const { displayEventid } = request.query;

  //   let eventDetailsList;
  //   if (displayEventid) {
  //     eventDetailsList = await this.connection.query(
  //       `SELECT a.displayEventId, a.eventDate, a.start, a.end, b.eventID,b.eventTypeId,b.FromDT,b.ToDT,b.DisplayOrder , MAX(b.CampaignID) AS CampaignID, b.displayId
  //       FROM suru.displayevent AS a
  //       LEFT JOIN suru.schedule AS b ON a.displayId = b.displayid
  //       WHERE a.displayEventId = ?
  //       GROUP BY a.displayEventId, a.eventDate, a.start, a.end, b.displayId;
  //   `,
  //       [displayEventid]
  //     );
  //   }
  //   return { eventDate: eventDetailsList, message: "success", status: 200 };
  // }

  // delte assign layout
  async SignfeedCMSAssignLayoutDelete(
    request,
    cmsAssignLayoutDeleteDTO: CMSAssignLayoutDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const username = request.user.username;
    let userid = await this.SignfeedCMSGetUserID(username);
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkCampaignLayout =
      await this.SignFeedCMSCampaignLayoutEntityRepository.findOne({
        where: {
          LkCampaignLayoutID: cmsAssignLayoutDeleteDTO.LkCampaignLayoutID,
        },
      });

    if (checkCampaignLayout) {
      let checkCampaignLayouts;
      checkCampaignLayouts = this.connection.query(
        `DELETE FROM lkcampaignlayout
        WHERE LkCampaignLayoutID = '${cmsAssignLayoutDeleteDTO.LkCampaignLayoutID}'`
      );
      await this.SignFeedCMSCampaignLayoutEntityRepository.delete(
        checkCampaignLayout
      );
      return { message: "success", status: 200 };
    } else {
      return { message: " Does Not Exist", status: 400 };
    }
  }
  // add contact
  async SignfeedCMSContactAdd(request, cmsContactDTO: CMSContactUsDTO) {
 

    const addCMSContact: SignFeedCMSContactEntity =
        new SignFeedCMSContactEntity();
      addCMSContact.name = cmsContactDTO.name;
      addCMSContact.email = cmsContactDTO.email;
      addCMSContact.organization = cmsContactDTO.organization;
      addCMSContact.message = cmsContactDTO.message;
      await this.SignFeedCMSContactEntityRepository.save(addCMSContact);
      await this.mailerService.sendMail({
        to: "surbhigulhana3@gmail.com",
        from: cmsContactDTO.email, // Assuming you want to use the sender's email as the "from" address
        subject: 'New Contact Form Submission',
        text: `A new contact form submission:\nName: ${cmsContactDTO.name}\nEmail: ${cmsContactDTO.email}\nOrganization: ${cmsContactDTO.organization}\nMessage: ${cmsContactDTO.message}`,
        html: `<p>A new contact form submission:</p><ul><li>Name: ${cmsContactDTO.name}</li><li>Email: ${cmsContactDTO.email}</li><li>Organization: ${cmsContactDTO.organization}</li><li>Message: ${cmsContactDTO.message}</li></ul>`,
      });
      return { contact: addCMSContact, message: "success", status: 200 };
  }
}
