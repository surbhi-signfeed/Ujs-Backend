import { Logger, Module } from "@nestjs/common";
import { AdminloginController } from './adminlogin.controller';
import { AdminloginService } from './adminlogin.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminUserInfoEntity } from "./Entity/AdminUserInfoEntity";
import { AdminUserOrganizationEntity } from "./Entity/AdminUserOrganizationEntity";
import {MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [TypeOrmModule.forFeature([ AdminUserInfoEntity,AdminUserOrganizationEntity
  ]),
  MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      auth: {
        user: 'surbhigulhana3@gmail.com',
        pass: 'pavfahmioaedlbkv',
      },
    },
  }),

],
  controllers: [AdminloginController],
  providers: [AdminloginService, Logger]
})
export class AdminloginModule {}
