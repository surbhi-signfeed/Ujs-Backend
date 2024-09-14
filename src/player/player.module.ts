import {Logger, Module} from '@nestjs/common';
import { PlayerService } from './player.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerController} from "./player.controller";
import {SignFeedDisplayEntity} from "./Entity/SignFeedDisplayEntity"
import { SignFeedScheduleEntity } from './Entity/SignFeedScheduleEntity';
import { SignFeedSignageSettingEntity } from './Entity/SignFeedSignageSettingEntity';

@Module({
  imports: [TypeOrmModule.forFeature([SignFeedDisplayEntity, SignFeedScheduleEntity, SignFeedSignageSettingEntity])],
  controllers: [PlayerController],
  providers: [PlayerService, Logger]
})
export class PlayerModule {}
