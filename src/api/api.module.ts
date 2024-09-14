import {Logger, Module } from '@nestjs/common';
import { ApiService } from './api.service';
import {ApiController} from './api.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignFeedCMSDisplayEntity } from 'src/cms/Entity/SignFeedCMSDisplayEntity';
import { MenuBoardEntity } from './Entity/MenuBoardEntity';
import { SocketGateWay } from './SocketGateWay';


@Module({
  imports: [TypeOrmModule.forFeature([MenuBoardEntity, SignFeedCMSDisplayEntity]) ],
  controllers: [ApiController],
  providers: [ApiService, Logger, SocketGateWay]

})
export class ApiModule {}
