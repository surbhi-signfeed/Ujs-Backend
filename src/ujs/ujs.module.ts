import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UjsController } from './ujs.controller';
import { UjsService } from './ujs.service';
import { UJSDepartmentEntity } from './Entity/UJSDepartmentEntity';
import { UJSShgGroupEntity } from './Entity/UJSShgGroupEntity';
import { UJSShgMemberEntity } from './Entity/UJSShgMemberEntity';


@Module({
  imports: [TypeOrmModule.forFeature([ UJSDepartmentEntity,UJSShgGroupEntity,UJSShgMemberEntity])],
  controllers: [UjsController],
  providers: [UjsService, Logger]
})
export class CmsModule {}
