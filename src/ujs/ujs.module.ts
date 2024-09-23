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
import { UJSStateEntity } from './Entity/UJSStateEntity';
import { UJSShgTraningEntity } from './Entity/UJSShgTraningEntity';
import { UJSShgActiveModelFarmerEntity } from './Entity/UJSShgActiveModelFarmerEntity';
import { UJSShgAttendanceEntity } from './Entity/UJSShgAttendanceEntity';
import { UJSShgContactEntity } from './Entity/UJSShgContactEntity';
import { UJSShgDataLockEntity } from './Entity/UJSShgDataLockEntity';
import { UJSBankLoanAllotmentEntity } from './Entity/UJSBankLoanAllotmentEntity';
import { UJSBankLoanEntity } from './Entity/UJSBankLoanEntity';
import { UJSBankEntity } from './Entity/UJSBankEntity';
import { UJSShgAuditingEntity } from './Entity/UJSShgAuditingEntity';
import { UJSShgDataUploadEntity } from './Entity/UJSShgDataUploadkEntity';
import { UJSShgDigiSakhiEntity } from './Entity/UJSShgDigiSakhiEntity';
import { UJSShgFpoEntity } from './Entity/UJSShgFpoEntity';
import { UJSSHGFedrationReportEntity } from './Entity/UJSShgFedrationReportEntity';
import { UJSSHGFedrationEntity } from './Entity/UJSShgFedrationEntity';
import { UJSShgMomEntity } from './Entity/UJSShgMomEntity';
import { UJSShgGroupDataUploadMonthEntity } from './Entity/UJSShgGroupDataUploadMonthEntity';
import { UJSShgMemeberSavingEntity } from './Entity/UJSShgMemberSavingEntity';
import { UJSShgGroupDetailsInfoEntity } from './Entity/UJSShgGroupDetailsInfoEntity';
import { UJSShgGroupSummaryEntity } from './Entity/UJSShgGroupSummaryEntity';
import { UJSShgInternalLoanSummaryEntity } from './Entity/UJSShgInternalLoanSummaryEntity';
import { UJSShgLoanEntity } from './Entity/UJSShgLoanEntity';
import { UJSShgMeetingTrackEntity } from './Entity/UJSShgMeetingTrackEntity';
import { UJSShgOtherIncomeEntity } from './Entity/UJSShgOtherIncomeEntity';
import { UJSShgTillNowDataEntity } from './Entity/UJSShgTillNowDataEntity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'), // Path to your uploads directory
    serveRoot: '/ujs/uploads', // URL prefix to access the images (adjust this as needed)
  }),
    TypeOrmModule.forFeature([ UJSDepartmentEntity,UJSShgGroupEntity,UJSShgMemberEntity,UJSUsersEntity,UJSRoleEntity,UJSRolePermissionEntity,UJSBackupShgGroupDataUploadMonthEntity,UJSBranchEntity,UJSFailedJobEntity,UJSMigrationEntity,UJSPersonalAccessTokenEntity,UJSSHGExpansesEntity,UJSSHGLoanRepaymentEntity,UJSStateEntity,UJSShgTraningEntity,UJSShgActiveModelFarmerEntity,UJSShgAttendanceEntity,UJSShgContactEntity,UJSShgContactEntity,UJSShgDataLockEntity,UJSBankLoanAllotmentEntity,UJSBankLoanEntity,UJSBankEntity,UJSShgAuditingEntity,UJSShgDataUploadEntity,UJSShgDigiSakhiEntity,UJSShgFpoEntity,UJSSHGFedrationReportEntity,UJSSHGFedrationEntity,UJSShgMomEntity,UJSShgGroupDataUploadMonthEntity,UJSShgMemeberSavingEntity, UJSShgGroupDetailsInfoEntity,UJSShgGroupSummaryEntity,UJSShgInternalLoanSummaryEntity,UJSShgLoanEntity,UJSShgMeetingTrackEntity,UJSShgOtherIncomeEntity,UJSShgTillNowDataEntity])],
  controllers: [UjsController],
  providers: [UjsService, Logger]
})
export class CmsModule {}
