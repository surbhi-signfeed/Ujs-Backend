import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UjsController } from './ujs.controller';
import { UjsService } from './ujs.service';
import { UJSDepartmentEntity } from './Entity/UJSDepartmentEntity';
import { UJSShgGroupEntity } from './Entity/UJSShgGroupEntity';
import { UJSShgMemberEntity } from './Entity/UJSShgMemberEntity';
import { UJSUsersEntity } from './Entity/UJSUsersEntity';
import { UJSRoleEntity } from './Entity/UJSRoleEntity';
import { UJSRolePermissionEntity } from './Entity/UJSRolePermissionEntity';
import { UJSBackupShgGroupDataUploadMonthEntity } from './Entity/UJSBackupShgGroupDataUploadEntity';
import { UJSBranchEntity } from './Entity/UJSBranchEntity';
import { UJSFailedJobEntity } from './Entity/UJSFailedJobsEntity';
import { UJSMigrationEntity } from './Entity/UJSMigrationEntity';
import { UJSPersonalAccessTokenEntity } from './Entity/UJSPersonalAccessTokenEntity';
import { UJSSHGExpansesEntity } from './Entity/UJSSHGExpansesEntity';
import { UJSSHGLoanRepaymentEntity } from './Entity/UJSSHGLoanRepaymentEntity';


@Module({
  imports: [TypeOrmModule.forFeature([ UJSDepartmentEntity,UJSShgGroupEntity,UJSShgMemberEntity,UJSUsersEntity,UJSRoleEntity,UJSRolePermissionEntity,UJSBackupShgGroupDataUploadMonthEntity,UJSBranchEntity,UJSFailedJobEntity,UJSMigrationEntity,UJSPersonalAccessTokenEntity,UJSSHGExpansesEntity,UJSSHGLoanRepaymentEntity])],
  controllers: [UjsController],
  providers: [UjsService, Logger]
})
export class CmsModule {}
