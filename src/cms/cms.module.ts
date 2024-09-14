import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { SignFeedCMSCampaignEntity } from './Entity/SignFeedCMSCampaignEntity';
import { SignFeedCMSCampaignLayoutEntity } from './Entity/SignFeedCMSCampaignLayoutEntity';
import { SignFeedCMSDisplayEntity } from './Entity/SignFeedCMSDisplayEntity';
import {SignFeedCMSLayoutEntity} from './Entity/SignFeedCMSLayoutEntity'
import { SignFeedCMSMediaEntity } from './Entity/SignFeedCMSMediaEntity';
import { SignFeedCMSModuleEntity } from './Entity/SignFeedCMSModuleEntity';
import { SignFeedCMSPlayListEntity } from './Entity/SignFeedCMSPlayListEntity';
import { SignFeedCMSRegionEntity } from './Entity/SignFeedCMSRegionEntity';
import { SignFeedCMSRegionPlayListEntity } from './Entity/SignFeedCMSRegionPlayListEntity';
import { SignFeedCMSResolutionEntity } from './Entity/SignFeedCMSResolutionEntity';
import { SignFeedCMSTagsEntity } from './Entity/SignFeedCMSTagsEntity';
import { SignFeedCMSUserEntity } from './Entity/SignFeedCMSUserEntity';
import { SignFeedCMSWidgetEntity } from './Entity/SignFeedCMSWidgetEntity';
import { SignFeedCMSWidgetMediaEntity } from './Entity/SignFeedCMSWidgetMediaEntity';
import { SignFeedCMSWidgetOptionEntity } from './Entity/SignFeedCMSWidgetOptionEntity';
import { SignFeedCMSDaypartEntity } from './Entity/SignFeedCMSDaypartEntity';
import { SignFeedCMSDisplayGroupEntity } from './Entity/SignFeedCMSDisplayGroupEntity';
import { SignFeedCMSSchedulingEntity } from './Entity/SignFeedCMSSchedulingEntity';
import { SignFeedCMSDisplayMemberEntity } from './Entity/SignFeedCMSDisplayMemberEntity';
import { SignFeedCMSscheduledisplaygroupEntity } from './Entity/SignFeedCMSscheduledisplaygroupEntity';
import { SignFeedCMSdisplayeventEntity } from './Entity/SignFeedCMSdisplayeventEntity';
import { SignFeedCMSdisplayeventsEntity } from './Entity/SignFeedCMSdisplayeventsEntity';
import { SignFeedCMSLkPermissionEntity } from './Entity/SignFeedCMSLkPermissionEntity';
import { SignFeedCMSPermissionEntity } from './Entity/SignFeedCMSPermissionEntity';
import { SignFeedCMSContactEntity } from './Entity/SignFeedCMSContactEntity';

@Module({
  imports: [TypeOrmModule.forFeature([SignFeedCMSLayoutEntity, SignFeedCMSTagsEntity,
    SignFeedCMSCampaignEntity, SignFeedCMSResolutionEntity, SignFeedCMSPlayListEntity, SignFeedCMSRegionEntity,
    SignFeedCMSRegionPlayListEntity, SignFeedCMSWidgetEntity, SignFeedCMSWidgetMediaEntity, SignFeedCMSMediaEntity,
    SignFeedCMSWidgetOptionEntity, SignFeedCMSModuleEntity, SignFeedCMSCampaignLayoutEntity,
    SignFeedCMSUserEntity, SignFeedCMSDisplayEntity,SignFeedCMSDaypartEntity,SignFeedCMSDisplayGroupEntity,SignFeedCMSSchedulingEntity,SignFeedCMSDisplayMemberEntity,SignFeedCMSscheduledisplaygroupEntity,SignFeedCMSdisplayeventEntity,SignFeedCMSdisplayeventsEntity,SignFeedCMSLkPermissionEntity,SignFeedCMSPermissionEntity,SignFeedCMSContactEntity])],
  controllers: [CmsController],
  providers: [CmsService, Logger]
})
export class CmsModule {}
