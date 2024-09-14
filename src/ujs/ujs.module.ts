import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UjsController } from './ujs.controller';
import { UjsService } from './ujs.service';
import { SignFeedCMSResolutionEntity } from './Entity/SignFeedCMSResolutionEntity';
import { UJSDepartmentEntity } from './Entity/UJSDepartmentEntity';


@Module({
  imports: [TypeOrmModule.forFeature([ SignFeedCMSResolutionEntity,UJSDepartmentEntity])],
  controllers: [UjsController],
  providers: [UjsService, Logger]
})
export class CmsModule {}
