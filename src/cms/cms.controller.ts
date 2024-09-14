import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/admin/auth/jwt-auth.guard";
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
// import { CMSMediaDTO } from "./dto/CMSMediaDTO";
import { CMSLayoutDetailDTO } from "./dto/CMSLayoutDetailDTO";
import { CMSWidgetDeleteDTO } from "./dto/CMSWidgetDeleteDTO";
import { CMSCampaignDeleteDTO } from "./dto/CMSCampaignDeleteDTO";
import { CMSCampaignDetailDTO } from "./dto/CMSCampaignDetailDTO";
import { FilesInterceptor } from "@nestjs/platform-express";
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
@Controller("cms")
export class CmsController {
  constructor(
    private readonly cmsService: CmsService,
    @Inject(Logger) private readonly logger: Logger
  ) {}
  @Post('initiate')
  async initiatePayment(@Body('amount') amount: number) {
    const payment = await this.cmsService.initiatePayment(amount);
    return payment;
  }
 
  
//   @Post('razorpay/order')
// // Add authentication guard if required
// async createRazorpayOrder(@Req() request: Request, @Body() body: any) {
//     const { taxAmt } = body;
//     try {
//         const order = await this.cmsService.createOrder(taxAmt);
//         return { success: true, order };
//     } catch (error) {
//         return { success: false, error: 'Failed to create Razorpay order' };
//     }
// }
  @Get("ListCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSCampaignList(request);
  }
// list daypart

@Get("ListDaypart")
@UseGuards(JwtAuthGuard)
async SignfeedCMSDaypartList(@Req() request: Request) {
  return this.cmsService.SignfeedCMSDaypartList(request);
}
  @Get("ListCampaignLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignLayoutList(
    @Req() request: Request,
    @Query() cmsCampaignLayoutDTO: CMSCampaignLayoutDTO
  ) {
    return this.cmsService.SignfeedCMSCampaignLayoutList(
      request,
      cmsCampaignLayoutDTO
    );
  }





  @Get('ListResolution')
  @UseGuards(JwtAuthGuard)
  async listResolutions(@Req() request: Request) {
  
    return this.cmsService.SignfeedCMSResolutionList(request);
  }


  // list user by surbhi
  @Get("ListUsers")
  // @UseGuards(JwtAuthGuard)
  async SignfeedCMSUsersList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSUsersList(request);
  }
  @Get("ListUserOrg")
  // @UseGuards(JwtAuthGuard)
  async SignfeedCMSUsersOrgList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSUsersOrgList(request);
  }
  // user show based on organizaton
  
  @Get("ListUsersOz")
  // @UseGuards(JwtAuthGuard)
  async SignfeedCMSUsersOzList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSUsersOzList(request);
  }
  

  @Get("ListMedia")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSMediaList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSMediaList(request);
  }
  @Post("ListMediaId")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSMediaListSpecific(@Req() request: Request) {
    return this.cmsService.SignfeedCMSMediaListSpecific(request);
  }
  @Get("ListWidgetOption")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSWidgetOptionList(
    @Req() request: Request,
    @Query() cmsWidgetOptionsDTO: CMSWidgetOptionsDTO
  ) {
    return this.cmsService.SignfeedCMSWidgetOptionList(
      request,
      cmsWidgetOptionsDTO
    );
  }

  @Get("ListModule")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSModuleList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSModuleList(request);
  }

  @Get("ListLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutList(@Req() request: Request) {
    console.log(request);
    return this.cmsService.SignfeedCMSLayoutList(request);
  }

  @Get("ListAssignLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSAssignLayoutList(@Req() request: Request) {
    console.log(request);
    return this.cmsService.SignfeedCMSAssignLayoutList(request);
  }
  @Get("ListDisplayGroupMember")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDisplayList(@Req() request: Request) {
    // console.log(request);
    return this.cmsService.SignfeedCMSDisplayList(request);
  }
  // listCampaignlayout Preview
  @Get("ListCampaignLayoutPreview")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignLayoutPreviewList(@Req() request: Request) {
    // console.log(request);
    return this.cmsService.SignfeedCMSCampaignLayoutPreviewList(request);
  }
// simple display

@Get("ListDisplay")
@UseGuards(JwtAuthGuard)
async SignfeedCMSDisplayLists(@Req() request: Request) {
  // console.log(request);
  return this.cmsService.SignfeedCMSDisplayLists(request);
}
  @Post("UpdateDisplay")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDisplayUpdate(
    @Req() request: Request,
    @Body() cmsDisplayUpdateDTO: CMSDisplayUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSDisplayUpdate(
      request,
      cmsDisplayUpdateDTO
    );
  }
  // update daypart
  
  @Post("UpdateDaypart")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDaypartUpdate(
    @Req() request: Request,
    @Body() cmsDaypartUpdateDTO: CMSDaypartUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSDaypartUpdate(
      request,
      cmsDaypartUpdateDTO
    );
  }
// update module
@Post("UpdateModule")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSModuleUpdate(
    @Req() request: Request,
    @Body() cmsModuleUpdateDTO: CMSModuleUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSModuleUpdate(
      request,
      cmsModuleUpdateDTO
    );
  }
  @Post("AuthorizeDisplay")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDisplayAuthorize(
    @Req() request: Request,
    @Body() cmsDisplayAuthorizeDTO: CMSDisplayAuthorizeDTO
  ) {
    return this.cmsService.SignfeedCMSDisplayAuthorize(
      request,
      cmsDisplayAuthorizeDTO
    );
  }

  @Post("DeleteDisplay")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDisplayDelete(
    @Req() request: Request,
    @Body() cmsDisplayDeleteDTO: CMSDisplayDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSDisplayDelete(
      request,
      cmsDisplayDeleteDTO
    );
  }
  @Post("DeleteMember")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSMemberDelete(
    @Req() request: Request,
    @Body() cmsMemberDeleteDTO: CMSMemberDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSMemberDelete(
      request,
      cmsMemberDeleteDTO
    );
  }
  // delete assign layout
  @Post("DeleteAssignLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSAssignLayoutDelete(
    @Req() request: Request,
    @Body() cmsAssignLayoutDeleteDTO: CMSAssignLayoutDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSAssignLayoutDelete(
      request,
      cmsAssignLayoutDeleteDTO
    );
  }
  // delete user by surbhi
  @Post("DeleteUser")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSUsersDelete(
    @Req() request: Request,
    @Body() cmsUsersDeleteDTO: CMSUsersDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSUsersDelete(request, cmsUsersDeleteDTO);
  }
// delete layout
@Post("DeleteLayout")
@UseGuards(JwtAuthGuard)
async SignfeedCMSLayoutDelete(
  @Req() request: Request,
  @Body() cmsLayoutDeleteDTO: CMSLayoutDeleteDTO
) {
  return this.cmsService.SignfeedCMSLayoutDelete(
    request,
    cmsLayoutDeleteDTO
  );
}

  // delete Module
  @Post("DeleteModule")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSModuleDelete(
    @Req() request: Request,
    @Body() cmsModuleDeleteDTO: CMSModuleDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSModuleDelete(request, cmsModuleDeleteDTO);
  }
  @Post("LayoutDetail")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutDetail(
    @Req() request: Request,
    @Body() cmsLayoutDetailDTO: CMSLayoutDetailDTO
  ) {
    console.log(request);
    return this.cmsService.SignfeedCMSLayoutDetail(request, cmsLayoutDetailDTO);
  }

  @Post("AddCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignAdd(
    @Req() request: Request,
    @Body() cmsCampaignDTO: CMSCampaignDTO
  ) {
    return this.cmsService.SignfeedCMSCampaignAdd(request, cmsCampaignDTO);
  }
  // add module
  @Post("AddModule")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSModuleAdd(
    @Req() request: Request,
    @Body() cmsModuleDTO: CMSModuleDTO
  ) {
    return this.cmsService.SignfeedCMSModuleAdd(request, cmsModuleDTO);
  }
  // add display
  @Post("AddDisplay")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMDisplaynAdd(
    @Req() request: Request,
    @Body() cmsDisplayDTO: CMSDisplayDTO
  ) {
    return this.cmsService.SignfeedCMSDisplayAdd(request, cmsDisplayDTO);
  }
  @Post("DeleteCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignDelete(
    @Req() request: Request,
    @Body() cmsCampaignDeleteDTO: CMSCampaignDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSCampaignDelete(
      request,
      cmsCampaignDeleteDTO
    );
  }
  // delete daypart
  @Post("DeleteDaypart")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSDaypartDelete(
    @Req() request: Request,
    @Body() cmsDaypartDeleteDTO: CMSDaypartDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSDaypartDelete(
      request,
      cmsDaypartDeleteDTO
    );
  }
  // add diparting
  @Post("AddDaypart")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMDaypartAdd(
    @Req() request: Request,
    @Body() cmsDaypartDTO: CMSDaypartDTO
  ) {
    return this.cmsService.SignfeedCMSDaypartAdd(request, cmsDaypartDTO);
  }
  //
  @Post("UpdateCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignUpdate(
    @Req() request: Request,
    @Body() cmsCampaignUpdateDTO: CMSCampaignUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSCampaignUpdate(
      request,
      cmsCampaignUpdateDTO
    );
  }
// update user
@Post("UpdateUser")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSUserUpdate(
    @Req() request: Request,
    @Body() cmsUserUpdateDTO: CMSUserUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSUserUpdate(
      request,
      cmsUserUpdateDTO
    );
  }
  @Post("PreviewCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSCampaignPreview(
    @Req() request: Request,
    @Body() cmsCampaignDetailDTO: CMSCampaignDetailDTO
  ) {
    console.log(request);
    return this.cmsService.SignfeedCMSCampaignPreview(
      request,
      cmsCampaignDetailDTO
    );
  }

  @Post("AddResolution")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSResolutionAdd(
    @Req() request: Request,
    @Body() cmsResolutionDTO: CMSResolutionDTO
  ) {
    return this.cmsService.SignfeedCMSResolutionAdd(request, cmsResolutionDTO);
  }

  @Post("UpdateResolution")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSResolutionUpdate(
    @Req() request: Request,
    @Body() cmsResolutionUpdateDTO: CMSResolutionUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSResolutionUpdate(
      request,
      cmsResolutionUpdateDTO
    );
  }
  // delete resolution by surbhi
  @Post("DeleteResolution")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSResolutionDelete(
    @Req() request: Request,
    @Body() cmsResolutionDeleteDTO: CMSResolutionDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSResolutionDelete(
      request,
      cmsResolutionDeleteDTO
    );
  }
  @Post("AddLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayout(
    @Req() request: Request,
    @Body() cmsLayoutDTO: CMSLayoutDTO
  ) {
    return this.cmsService.SignfeedCMSLayout(request, cmsLayoutDTO);
  }

  @Post("UpdateLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutUpdate(
    @Req() request: Request,
    @Body() cmsLayoutUpdateDTO: CMSLayoutUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSLayoutUpdate(request, cmsLayoutUpdateDTO);
  }
// 
// update Event details

@Post("UpdateEventDetails")
@UseGuards(JwtAuthGuard)
async SignfeedCMSEventDetailsUpdate(
  @Req() request: Request,
  @Body() cmsEventDetailsUpdateDTO: CMSEventDetailsUpdateDTO
) {
  return this.cmsService.SignfeedCMSEventDetailsUpdate(request, cmsEventDetailsUpdateDTO);
}

  @Post("RetireLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutRetire(
    @Req() request: Request,
    @Body() cmsLayoutRetireDTO: CMSLayoutRetireDTO
  ) {
    return this.cmsService.SignfeedCMSLayoutRetire(request, cmsLayoutRetireDTO);
  }

  @Post("AssignLayoutCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutAssignToCampaign(
    @Req() request: Request,
    @Body() cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO[]
  ) {
    return this.cmsService.SignfeedCMSLayoutAssignToCampaign(
      request,
      cmsCampaignAssignLayoutDTO
    );
  }

  @Post("RemoveLayoutCampaign")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutRemoveToCampaign(
    @Req() request: Request,
    @Body() cmsCampaignAssignLayoutDTO: CMSCampaignAssignLayoutDTO
  ) {
    return this.cmsService.SignfeedCMSLayoutRemoveToCampaign(
      request,
      cmsCampaignAssignLayoutDTO
    );
  }

  @Post("PublishLayout")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSLayoutPublish(
    @Req() request: Request,
    @Body() cmsLayoutPublishDTO: CMSLayoutPublishDTO
  ) {
    return this.cmsService.SignfeedCMSLayoutPublish(
      request,
      cmsLayoutPublishDTO
    );
  }

  @Post("AddRegion")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSRegionAdd(
    @Req() request: Request,
    @Body() cmsRegionDTO: CMSRegionDTO
  ) {
    return this.cmsService.SignfeedCMSRegionAdd(request, cmsRegionDTO);
  }

  @Post("UpdateRegion")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSRegionUpdate(
    @Req() request: Request,
    @Body() cmsRegionUpdateDTO: [CMSRegionUpdateDTO]
  ) {
    return this.cmsService.SignfeedCMSRegionUpdate(request, cmsRegionUpdateDTO);
  }
  // widthout arry
  @Post("AddWidget")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSWidgetAdd(
    @Req() request: Request,
    @Body() cmsWidgetDTO: CMSWidgetDTO
  ) {
    return this.cmsService.SignfeedCMSWidgetAdd(request, cmsWidgetDTO);
  }
  // with arry
  @Post("AddWidgets")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSWidgetsAdd(
    @Req() request: Request,
    @Body() widgetArray: CMSWidgetDTO[]
  ) {
    return this.cmsService.SignfeedCMSWidgetsAdd(request, widgetArray);
  }
  @Post("DeleteWidget")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSWidgetDelete(
    @Req() request: Request,
    @Body() cmsWidgetDeleteDTO: CMSWidgetDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSWidgetDelete(request, cmsWidgetDeleteDTO);
  }

  

  @Post("AddMedia")
  @UseInterceptors(FilesInterceptor("files"))
  async SignfeedCMSMediaAdd(@UploadedFiles() files: Multer.File[], @Body() body: CMSMediaDTO) {
    // Validate file types and sizes here based on your requirements
    return this.cmsService.SignfeedCMSMediaAdd(files, body.duration);
  }

  @Post("DeleteMedia")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSMediaDelete(
    @Req() request: Request,
    @Body() cmsMediaDeleteDTO: CMSMediaDeleteDTO
  ) {
    return this.cmsService.SignfeedCMSMediaDelete(request, cmsMediaDeleteDTO);
  }
  // update media
  @Post("UpdateMedia")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSMediaUpdate(
    @Req() request: Request,
    @Body() cmsMediaUpdateDTO: CMSMediaUpdateDTO
  ) {
    return this.cmsService.SignfeedCMSMediaUpdate(request, cmsMediaUpdateDTO);
  }

// delete daypart
// @Post("DeleteDaypart")
// @UseGuards(JwtAuthGuard)
// async SignfeedCMSDaypartDelete(
//   @Req() request: Request,
//   @Body() cmsDaypartDeleteDTO: CMSDaypartDeleteDTO
// ) {
//   return this.cmsService.SignfeedCMSDaypartDelete(
//     request,
//     cmsDaypartDeleteDTO
//   );
// }
// add displayGroup
@Post("AddDisplayGroup")
@UseGuards(JwtAuthGuard)
async SignfeedCMSDisplayGroupAdd(
  @Req() request: Request,
  @Body() cmsDisplayGroupDTO: CMSDisplayGroupDTO
) {
  return this.cmsService.SignfeedCMSDisplayGroupAdd(request, cmsDisplayGroupDTO);
}

// list displayGroup
@Get("ListDisplayGroup")
@UseGuards(JwtAuthGuard)
async SignfeedCMSDisplayGroupList(@Req() request: Request) {
  console.log(request);
  return this.cmsService.SignfeedCMSDisplayGroupList(request);
}

@Post("DeleteDisplayGroup")
@UseGuards(JwtAuthGuard)
async SignfeedCMSDisplayGroupDelete(
  @Req() request: Request,
  @Body() cmsDisplayGroupDeleteDTO: CMSDisplayGroupDeleteDTO
) {
  return this.cmsService.SignfeedCMSDisplayGroupDelete(
    request,
    cmsDisplayGroupDeleteDTO
  );
}
// }delete permission

@Post("DeletePermission")
@UseGuards(JwtAuthGuard)
async SignfeedCMSLkPermissionDelete(
  @Req() request: Request,
  @Body() cmsUserPermissionDeleteDTO: CMSLkUserPermissionDeleteDTO
) {
  return this.cmsService.SignfeedCMSLkPermissionDelete(
    request,
    cmsUserPermissionDeleteDTO
  );
}





// add Scheduling
@Post("AddScheduling")
@UseGuards(JwtAuthGuard)
async SignfeedCMSSchedulingAdd(
  @Req() request: Request,
  @Body() cmsSchedulingDTO: CMSSchedulingDTO
) {
  console.log("Data received from frontend:", cmsSchedulingDTO);
  return this.cmsService.SignfeedCMSSchedulingAdd(request, cmsSchedulingDTO);
}
// add permission
@Post("AddPermission")
@UseGuards(JwtAuthGuard)
async SignfeedCMSPermissionAdd(
  @Req() request: Request,
  @Body() cmsPermissionDTO: CMSPermissionDTO
) {

  return this.cmsService.SignfeedCMSPermissionAdd(request, cmsPermissionDTO);
}
// list permission

 @Get("ListPermission")
 @UseGuards(JwtAuthGuard)
 async SignfeedCMSPermissionList(@Req() request: Request) {
   return this.cmsService.SignfeedCMSPermissionList(request);
 }
//  update permission
@Post("UpdatePermission")
@UseGuards(JwtAuthGuard)
async SignfeedCMSLKPermissionUpdate(
  @Req() request: Request,
  @Body() cmsLkPermissionUpdateDTO: CMSLkPermissionUpdateDTO
) {
  return this.cmsService.SignfeedCMSLKPermissionUpdate(
    request,
    cmsLkPermissionUpdateDTO
  );
}
 // list event by surbhi
 @Get("ListEvent")
 @UseGuards(JwtAuthGuard)
 async SignfeedCMSEventList(@Req() request: Request) {
   return this.cmsService.SignfeedCMSEventList(request);
 }
//  or 
 // list event by surbhi with send eventId
 @Get("ListEvents")
 @UseGuards(JwtAuthGuard)
 async SignfeedCMSEventsList(@Req() request: Request) {
   return this.cmsService.SignfeedCMSEventsList(request);
 }
  // list eventDate by surbhi
  @Get("ListEventDate")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSEventDateList(@Req() request: Request) {
    return this.cmsService.SignfeedCMSEventDateList(request);
  }
   // list of all data using join displayevent & schedule table by surbhi
  //  @Get("ListEventDetails")
  //  @UseGuards(JwtAuthGuard)
  //  async SignfeedCMSEventDetailsList(@Req() request: Request) {
  //    return this.cmsService.SignfeedCMSEventDetailsList(request);
  //  }
// add member
@Post("AddMember")
@UseGuards(JwtAuthGuard)
async SignfeedDisplayCMSMemberAdd(
 @Req () request: Request,
  @Body() cmsDispalyMemberDTO: CMSDispalyMemberDTO
) {
  return this.cmsService.SignfeedCMSDisplayMemberAdd(request, cmsDispalyMemberDTO);
}



// contact
@Post("AddContact")

async SignfeedCMSContactAdd(
  @Req() request: Request,
  @Body() cmsContactDTO: CMSContactUsDTO
) {
  return this.cmsService.SignfeedCMSContactAdd(request, cmsContactDTO);
}
}
