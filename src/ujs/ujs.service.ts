import {
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { SignFeedCMSResolutionEntity } from "./Entity/SignFeedCMSResolutionEntity";
import { CMSResolutionDTO } from "./dto/CMSResolutionDTO";
import { CMSResolutionUpdateDTO } from "./dto/CMSResolutionUpdateDTO";

import { CMSResolutionDeleteDTO } from "./dto/CMSResolutionDeleteDTO";
import { Express } from "express";
@Injectable()
export class UjsService {
  
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,
  
    @InjectRepository(SignFeedCMSResolutionEntity)
    private readonly SignFeedCMSResolutionEntityRepository: Repository<SignFeedCMSResolutionEntity>,

  
  ) {
    
  }
  async SignfeedCMSResolutionList(request) {
    let resolutionList = await this.SignFeedCMSResolutionEntityRepository.find(
      {}
    );
    return { resolution: resolutionList, message: "success", status: 200 };
  }


  async SignfeedCMSResolutionAdd(request, cmsResolutionDTO: CMSResolutionDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
   
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
  
}
