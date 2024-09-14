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
import { UjsService } from "./ujs.service";
import { Request } from "express";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";

import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
@Controller("ujs")
export class UjsController {
  constructor(
    private readonly ujsService: UjsService,
    @Inject(Logger) private readonly logger: Logger
  ) {}




  @Get('ListResolution')
  @UseGuards(JwtAuthGuard)
  async listResolutions(@Req() request: Request) {
  
    return this.ujsService.SignfeedCMSResolutionList(request);
  }

  @Post("AddResolution")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSResolutionAdd(
    @Req() request: Request,
    @Body() cmsResolutionDTO: CMSResolutionDTO
  ) {
    return this.ujsService.SignfeedCMSResolutionAdd(request, cmsResolutionDTO);
  }

  @Post("UpdateResolution")
  @UseGuards(JwtAuthGuard)
  async SignfeedCMSResolutionUpdate(
    @Req() request: Request,
    @Body() cmsResolutionUpdateDTO: CMSResolutionUpdateDTO
  ) {
    return this.ujsService.SignfeedCMSResolutionUpdate(
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
    return this.ujsService.SignfeedCMSResolutionDelete(
      request,
      cmsResolutionDeleteDTO
    );
  }
 }
