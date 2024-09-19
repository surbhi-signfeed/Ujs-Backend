import {
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { Repository } from "typeorm";
import { Express } from "express";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentEntity } from "./Entity/UJSDepartmentEntity";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
import { UJSShgGroupEntity } from "./Entity/UJSShgGroupEntity";
import { UJSShgMemberEntity } from "./Entity/UJSShgMemberEntity";
import { UJSShgGroupDTO } from "./dto/UJSShgGroupDTO";
import { UJSShgMemberDTO } from "./dto/UJSShgMemberDTO";
import { UJSUsersDTO } from "./dto/UJSUsersDTO";
import { UJSUsersEntity } from "./Entity/UJSUsersEntity";
import { UJSRoleEntity } from "./Entity/UJSRoleEntity";
import { UJSRolePermissionEntity } from "./Entity/UJSRolePermissionEntity";
import { UJSRoleDTO } from "./dto/UJSRoleDTO";
import { UJSRolePermissionDTO } from "./dto/UJSRolePermissionDTO";
import { UJSBackupShgGroupDataUploadMonthEntity } from "./Entity/UJSBackupShgGroupDataUploadEntity";
import { UJSBranchEntity } from "./Entity/UJSBranchEntity";
import { UJSFailedJobEntity } from "./Entity/UJSFailedJobsEntity";
import { UJSMigrationEntity } from "./Entity/UJSMigrationEntity";
import { UJSPersonalAccessTokenEntity } from "./Entity/UJSPersonalAccessTokenEntity";
import { UJSSHGExpansesEntity } from "./Entity/UJSSHGExpansesEntity";
import { UJSSHGLoanRepaymentEntity } from "./Entity/UJSSHGLoanRepaymentEntity";
import { UJSMigrationDTO } from "./dto/UJSMigrationDTO";
import { UJSFailedJobDTO } from "./dto/UJSFailedJobsDTO";
import { UJSBranchDTO } from "./dto/UJSBranchDTO";
import { UJSBackupShgGroupDataUploadMonthDTO } from "./dto/UJSBackupShgGroupDataUploadMonthDTO";
import { UJSPersonalAccessTokenDTO } from "./dto/UJSPersonalAccessTokenDTO";
import { UJSSHGExpansesDTO } from "./dto/UJSSHGExpansesDTO";
import { UJSSHGLoanRepaymentDTO } from "./dto/UJSSHGLoanRepaymentDTO";
import { UJSStateEntity } from "./Entity/UJSStateEntity";
import { UJSStateDTO } from "./dto/UJSStateDTO";
import { UJSShgTraningEntity } from "./Entity/UJSShgTraningEntity";
import { UJSSHGTraningDTO } from "./dto/UJSShgtraningDTO";
import { UJSShgActiveModelFarmerEntity } from "./Entity/UJSShgActiveModelFarmerEntity";
import { UJSSHGActiveModelFarmerDTO } from "./dto/UJSShgActiveModelFarmerDTO";
import { UJSShgAttendanceEntity } from "./Entity/UJSShgAttendanceEntity";
import { UJSShgAttendanceDTO } from "./dto/UJSShgAttendanceDTO";
import { UJSShgContactEntity } from "./Entity/UJSShgContactEntity";
import { UJSShgContactDTO } from "./dto/UJSShgContactDTO";
import { UJSShgDataLockEntity } from "./Entity/UJSShgDataLockEntity";
import { UJSShgDataLockDTO } from "./dto/UJSShgDataLockDTO";
import { UJSBankAllotmentDTO } from "./dto/UJSSHgBankAllotmentDTO";
import { UJSBankLoanAllotmentEntity } from "./Entity/UJSBankLoanAllotmentEntity";
import { UJSBankLoanDTO } from "./dto/UJSSBankLoanDTO";
import { UJSBankLoanEntity } from "./Entity/UJSBankLoanEntity";
import { UJSBankEntity } from "./Entity/UJSBankEntity";
import { UJSBankDTO } from "./dto/UJSSBankDTO";
import { UJSShgAuditingDTO } from "./dto/UJSShgAuditingDTO";
import { UJSShgAuditingEntity } from "./Entity/UJSShgAuditingEntity";
import { UJSShgDataUploadEntity } from "./Entity/UJSShgDataUploadkEntity";
import { UJSShgDataUploadDTO } from "./dto/UJSShgDataUploadDTO";
import { UJSShgDigiSakhiEntity } from "./Entity/UJSShgDigiSakhiEntity";
import { UJSShgDigiSakhiDTO } from "./dto/UJSShgDigiSakhiDTO";
import { UJSShgFpoEntity } from "./Entity/UJSShgFpoEntity";
import { UJSShgFpoDTO } from "./dto/UJSShgFpoDTO";
import { UJSSHGFedrationReportDTO } from "./dto/UJSShgFedrationReportDTO";
import { UJSSHGFedrationReportEntity } from "./Entity/UJSShgFedrationReportEntity";
import { UJSSHGFedrationDTO } from "./dto/UJSShgFedrationDTO";
import { UJSSHGFedrationEntity } from "./Entity/UJSShgFedrationEntity";
import { UJSShgMomEntity } from "./Entity/UJSShgMomEntity";
import { UJSShgMomDTO } from "./dto/UJSShgMomDTO";
@Injectable()
export class UjsService {

  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(UJSDepartmentEntity)
    private readonly UJSDepartmentRepository: Repository<UJSDepartmentEntity>,
    @InjectRepository(UJSShgGroupEntity)
    private readonly UJSSghGroupRepository: Repository<UJSShgGroupEntity>,
    @InjectRepository(UJSShgMemberEntity)
    private readonly UJSShgMemberRepository: Repository<UJSShgMemberEntity>,
    @InjectRepository(UJSUsersEntity)
    private readonly UJSUserRepository: Repository<UJSUsersEntity>,
    @InjectRepository(UJSRoleEntity)
    private readonly UJSRoleRepository: Repository<UJSRoleEntity>,
    @InjectRepository(UJSRolePermissionEntity)
    private readonly UJSRolePermissionRepository: Repository<UJSRolePermissionEntity>,
    @InjectRepository(UJSBackupShgGroupDataUploadMonthEntity)
    private readonly UJSBackupShgGroupDataUploadMonthRepository: Repository<UJSBackupShgGroupDataUploadMonthEntity>,
    @InjectRepository(UJSBranchEntity)
    private readonly UJSBranchRepository: Repository<UJSBranchEntity>,
    @InjectRepository(UJSFailedJobEntity)
    private readonly UJSFailedJobRepository: Repository<UJSFailedJobEntity>,
    @InjectRepository(UJSMigrationEntity)
    private readonly UJSMigrationRepository: Repository<UJSMigrationEntity>,
    @InjectRepository(UJSPersonalAccessTokenEntity)
    private readonly UJSPersonalAccessTokenRepository: Repository<UJSPersonalAccessTokenEntity>,
    @InjectRepository(UJSSHGExpansesEntity)
    private readonly UJSSHGExpansesRepository: Repository<UJSSHGExpansesEntity>,
    @InjectRepository(UJSSHGLoanRepaymentEntity)
    private readonly UJSSHGLoanRepaymentRepository: Repository<UJSSHGLoanRepaymentEntity>,
    @InjectRepository(UJSStateEntity)
    private readonly UJSStateRepository: Repository<UJSStateEntity>,
    @InjectRepository(UJSShgTraningEntity)
    private readonly UJSShgTraningRepository: Repository<UJSShgTraningEntity>,
    @InjectRepository(UJSShgActiveModelFarmerEntity)
    private readonly UJSShgActiveModelFarmerRepository: Repository<UJSShgActiveModelFarmerEntity>,
    @InjectRepository(UJSShgAttendanceEntity)
    private readonly UJSShgAttendanceRepository: Repository<UJSShgAttendanceEntity>,
    @InjectRepository(UJSShgContactEntity)
    private readonly UJSShgContactRepository: Repository<UJSShgContactEntity>,
    @InjectRepository(UJSShgDataLockEntity)
    private readonly UJSShgDataLockRepository: Repository<UJSShgDataLockEntity>,
    @InjectRepository(UJSBankLoanAllotmentEntity)
    private readonly UJSShgBankLoanAllotmentRepository: Repository<UJSBankLoanAllotmentEntity>,
    @InjectRepository(UJSBankLoanEntity)
    private readonly UJSShgBankLoanRepository: Repository<UJSBankLoanEntity>,
    @InjectRepository(UJSBankEntity)
    private readonly UJSShgBankRepository: Repository<UJSBankEntity>,
    @InjectRepository(UJSShgAuditingEntity)
    private readonly UJSShgAuditingRepository: Repository<UJSShgAuditingEntity>,
    @InjectRepository(UJSShgDataUploadEntity)
    private readonly UJSShgDataUploadRepository: Repository<UJSShgDataUploadEntity>,
    @InjectRepository(UJSShgDigiSakhiEntity)
    private readonly UJSShgDigiSakhiRepository: Repository<UJSShgDigiSakhiEntity>,
    @InjectRepository(UJSShgFpoEntity)
    private readonly UJSShgFpoRepository: Repository<UJSShgFpoEntity>,
    @InjectRepository(UJSSHGFedrationReportEntity)
    private readonly UJSShgFedrationReportRepository: Repository<UJSSHGFedrationReportEntity>,
    @InjectRepository(UJSSHGFedrationEntity)
    private readonly UJSShgFedrationRepository: Repository<UJSSHGFedrationEntity>,
    @InjectRepository(UJSShgMomEntity)
    private readonly UJSShgMomRepository: Repository<UJSShgMomEntity>,
  ) {

  }
  // --------------------------department--------------------------------
  // add department
  async UJSDepartmentAdd(request, ujsDepartmentDTO: UJSDepartmentDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkDepartment =
      await this.UJSDepartmentRepository.findOne({
        where: {
          department_name: ujsDepartmentDTO.department_name,

        },
      });
    if (checkDepartment) {
      return {
        message: "Department Already Exist",
        status: 400,
      };
    } else {
      const addUJSDepartment: UJSDepartmentEntity =
        new UJSDepartmentEntity();
      addUJSDepartment.department_name = ujsDepartmentDTO.department_name;
      addUJSDepartment.status = ujsDepartmentDTO.status;


      await this.UJSDepartmentRepository.save(addUJSDepartment);
      return { departmentList: addUJSDepartment, message: "success", status: 200 };
    }
  }
  // list department
  async UJSDepartmentList(request) {
    let departmentList = await this.UJSDepartmentRepository.find(
      {}
    );
    return { department: departmentList, message: "success", status: 200 };
  }
  // update department
  async UJSDepartmentUpdate(
    request,
    ujsDepartmentUpdateDTO: UJSDepartmentUpdateDTO
  ) {
    const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;


    let checkDepartment =
      await this.UJSDepartmentRepository.findOne({
        where: {
          ID: ujsDepartmentUpdateDTO.ID,
        },
      });
    if (checkDepartment) {
      checkDepartment.department_name = ujsDepartmentUpdateDTO.department_name;
      checkDepartment.status = ujsDepartmentUpdateDTO.status;

      await this.UJSDepartmentRepository.save(checkDepartment);
      return { department: checkDepartment, message: "success", status: 200 };
    } else {
      return { message: "Department ID Does Not Exist", status: 400 };
    }
  }
  // delete department
  async UJSDepartmentDelete(
    request,
    ujsDepartmentDeleteDTO: UJSDepartmentDeleteDTO
  ) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkDepartment =
      await this.UJSDepartmentRepository.findOne({
        where: {
          ID: ujsDepartmentDeleteDTO.ID,
        },
      });
    if (checkDepartment) {
      let checkUjsDepartment;
      checkUjsDepartment = this.connection.query(
        `delete from department where ID='${ujsDepartmentDeleteDTO.ID}'`
      );
      await this.UJSDepartmentRepository.delete(checkDepartment);
      return { message: "success", status: 200 };
    } else {
      return { message: "Department Does Not Exist", status: 400 };
    }
  }
  // -----------------------------shg group-----------------------------------
  // add shg group
  async UJSShgGroupAdd(request, ujsShgGroupDTO: UJSShgGroupDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkGroup =
      await this.UJSSghGroupRepository.findOne({
        where: {
          group_name: ujsShgGroupDTO.group_name,

        },
      });
    if (checkGroup) {
      return {
        message: "Shg Group Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgGroup: UJSShgGroupEntity =
        new UJSShgGroupEntity();
      addUJSShgGroup.group_id = ujsShgGroupDTO.group_id;
      addUJSShgGroup.group_id = ujsShgGroupDTO.group_id;
      addUJSShgGroup.group_name = ujsShgGroupDTO.group_name;
      addUJSShgGroup.group_leader = ujsShgGroupDTO.group_leader;
      addUJSShgGroup.formation_date = ujsShgGroupDTO.formation_date;
      addUJSShgGroup.state_name = ujsShgGroupDTO.state_name;
      addUJSShgGroup.district_name = ujsShgGroupDTO.district_name;
      addUJSShgGroup.location_name = ujsShgGroupDTO.location_name;
      addUJSShgGroup.village_name = ujsShgGroupDTO.village_name;
      addUJSShgGroup.taluka_name = ujsShgGroupDTO.taluka_name;
      addUJSShgGroup.bank_name = ujsShgGroupDTO.bank_name;
      addUJSShgGroup.bank_branch = ujsShgGroupDTO.bank_branch;
      addUJSShgGroup.bank_account = ujsShgGroupDTO.bank_account;
      addUJSShgGroup.cash_in_hand = ujsShgGroupDTO.cash_in_hand;
      addUJSShgGroup.federation_amount = ujsShgGroupDTO.federation_amount;
      addUJSShgGroup.cash_at_bank = ujsShgGroupDTO.cash_at_bank;
      addUJSShgGroup.total_member = ujsShgGroupDTO.total_member;
      addUJSShgGroup.last_meeting_date = ujsShgGroupDTO.last_meeting_date;
      addUJSShgGroup.status = ujsShgGroupDTO.status;



      await this.UJSSghGroupRepository.save(addUJSShgGroup);
      return { shgGroupList: addUJSShgGroup, message: "success", status: 200 };
    }
  }
  // list shg group
  async UJSShgGroupList(request) {
    let shgGroupList = await this.UJSSghGroupRepository.find(
      {}
    );
    return { shgGroup: shgGroupList, message: "success", status: 200 };
  }
  // -----------------------------shg member----------------------------------
  // add shg member

  async UJSShgMemberAdd(request, ujsShgMemberDTO: UJSShgMemberDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkMember =
      await this.UJSShgMemberRepository.findOne({
        where: {
          group_name: ujsShgMemberDTO.group_name,

        },
      });
    if (checkMember) {
      return {
        message: "Shg member Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgMember: UJSShgMemberEntity =
        new UJSShgMemberEntity();
      addUJSShgMember.group_name = ujsShgMemberDTO.group_name;
      addUJSShgMember.group_id = ujsShgMemberDTO.group_id;
      addUJSShgMember.group_name = ujsShgMemberDTO.group_name;
      addUJSShgMember.member_name = ujsShgMemberDTO.member_name;
      addUJSShgMember.leader_name = ujsShgMemberDTO.leader_name;
      addUJSShgMember.state_name = ujsShgMemberDTO.state_name;
      addUJSShgMember.district_name = ujsShgMemberDTO.district_name;
      addUJSShgMember.village_name = ujsShgMemberDTO.village_name;
      addUJSShgMember.gender = ujsShgMemberDTO.gender;
      addUJSShgMember.dob = ujsShgMemberDTO.dob;
      addUJSShgMember.husband_or_father_name = ujsShgMemberDTO.husband_or_father_name;
      addUJSShgMember.block_taluka = ujsShgMemberDTO.block_taluka;
      addUJSShgMember.mobile = ujsShgMemberDTO.mobile;
      addUJSShgMember.whatsapp = ujsShgMemberDTO.whatsapp;
      addUJSShgMember.email = ujsShgMemberDTO.email;
      addUJSShgMember.education = ujsShgMemberDTO.education;
      addUJSShgMember.primary_occupation = ujsShgMemberDTO.primary_occupation;
      addUJSShgMember.religion = ujsShgMemberDTO.religion;
      addUJSShgMember.aadhar_number = ujsShgMemberDTO.aadhar_number;
      addUJSShgMember.voter_number = ujsShgMemberDTO.voter_number;
      addUJSShgMember.mnrega_number = ujsShgMemberDTO.mnrega_number;
      addUJSShgMember.house_number = ujsShgMemberDTO.house_number;
      addUJSShgMember.pin_code = ujsShgMemberDTO.pin_code;
      addUJSShgMember.gram_panchayat = ujsShgMemberDTO.gram_panchayat;
      addUJSShgMember.bank_name = ujsShgMemberDTO.bank_name;
      addUJSShgMember.bank_branch = ujsShgMemberDTO.bank_branch;
      addUJSShgMember.bank_account = ujsShgMemberDTO.bank_account;
      addUJSShgMember.bank_ifsc = ujsShgMemberDTO.bank_ifsc;
      addUJSShgMember.aadhar_seeding_status = ujsShgMemberDTO.aadhar_seeding_status;
      addUJSShgMember.loan_taken = ujsShgMemberDTO.loan_taken;
      addUJSShgMember.mfi_bank_loan = ujsShgMemberDTO.mfi_bank_loan;
      addUJSShgMember.annual_income = ujsShgMemberDTO.annual_income;
      addUJSShgMember.total_household_member = ujsShgMemberDTO.total_household_member;
      addUJSShgMember.total_monthly_saving = ujsShgMemberDTO.total_monthly_saving;
      addUJSShgMember.total_federation_saving = ujsShgMemberDTO.total_federation_saving;
      addUJSShgMember.category = ujsShgMemberDTO.category;
      addUJSShgMember.differently_abled = ujsShgMemberDTO.differently_abled;
      addUJSShgMember.status = ujsShgMemberDTO.status;
      await this.UJSShgMemberRepository.save(addUJSShgMember);
      return { shgMemberList: addUJSShgMember, message: "success", status: 200 };
    }
  }
  // list shg member

  async UJSShgMemberList(request) {
    let shgMemberList = await this.UJSShgMemberRepository.find(
      {}
    );
    return { shgMember: shgMemberList, message: "success", status: 200 };
  }
  // --------------------------user--------------------------------
  // add user
  async UJSUserAdd(request, ujsUserDTO: UJSUsersDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkUser =
      await this.UJSUserRepository.findOne({
        where: {
          name: ujsUserDTO.name,

        },
      });
    if (checkUser) {
      return {
        message: "User Already Exist",
        status: 400,
      };
    } else {
      const addUJSUser: UJSUsersEntity =
        new UJSUsersEntity();
      addUJSUser.name = ujsUserDTO.name;
      addUJSUser.email = ujsUserDTO.email;
      addUJSUser.password = ujsUserDTO.password;
      addUJSUser.shg_grp = ujsUserDTO.shg_grp;
      addUJSUser.active = ujsUserDTO.active;
      addUJSUser.role = ujsUserDTO.role;
      addUJSUser.emp_code = ujsUserDTO.emp_code;
      addUJSUser.mobile = ujsUserDTO.mobile;
      addUJSUser.admin_app = ujsUserDTO.admin_app;

      await this.UJSUserRepository.save(addUJSUser);
      return { UserList: addUJSUser, message: "success", status: 200 };
    }
  }
  // list user

  async UJSUserList(request) {
    let shgUserList = await this.UJSUserRepository.find(
      {}
    );
    return { shgUser: shgUserList, message: "success", status: 200 };
  }
  // ---------------------------role permission--------------------
  // create role
  async UJSRoleAdd(request, ujsRoleDTO: UJSRoleDTO, permissionDTOs: UJSRolePermissionDTO[]) {
    const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    // Check if the role already exists by role_name
    let checkRole = await this.UJSRoleRepository.findOne({
      where: { role_name: ujsRoleDTO.role_name },
    });

    if (checkRole) {
      return { message: "Role Already Exists", status: 400 };
    }

    // Create new role if it does not exist
    const addUJSRole: UJSRoleEntity = new UJSRoleEntity();
    addUJSRole.role_name = ujsRoleDTO.role_name;
    addUJSRole.status = ujsRoleDTO.status;
    await this.UJSRoleRepository.save(addUJSRole);

    // After saving, retrieve the created role by role_name (to get the newly created role's ID)
    let getRole = await this.UJSRoleRepository.findOne({
      where: { role_name: ujsRoleDTO.role_name },
    });

    if (!getRole) {
      return { message: "Failed to retrieve the created role", status: 500 };
    }

    // Iterate over the array of permissionDTOs and save each permission with the same role_id
    for (const permissionDTO of permissionDTOs) {
      // Check if the permission exists by permission_name in the permission repository
      const checkPermission = await this.UJSRolePermissionRepository.findOne({
        where: { permission_name: permissionDTO.permission_name, roll_id: getRole.roll_id },
      });

      if (checkPermission) {
        return { message: `Permission '${permissionDTO.permission_name}' Already Exists for this Role`, status: 400 };
      }

      // If permission does not exist, create a new permission associated with the role
      const addRolePermission: UJSRolePermissionEntity = new UJSRolePermissionEntity();
      addRolePermission.roll_id = getRole.roll_id;  // Use roll_id from the newly created role
      addRolePermission.permission_name = permissionDTO.permission_name;
      addRolePermission.active = permissionDTO.active;

      await this.UJSRolePermissionRepository.save(addRolePermission);
    }

    return { message: "Role and Permissions created successfully", status: 200, role: getRole };
  }

  // list role

  async UJSRoleList(request) {
    let shgRoleList = await this.UJSRoleRepository.find(
      {}
    );
    return { shgRole: shgRoleList, message: "success", status: 200 };
  }
  // --------------------------Migration--------------------------------
  // add Migration
  async UJSMigrationAdd(request, ujsDepartmentDTO: UJSMigrationDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;



    let checkMigration =
      await this.UJSMigrationRepository.findOne({
        where: {
          migration: ujsDepartmentDTO.migration,

        },
      });
    if (checkMigration) {
      return {
        message: "Migration Already Exist",
        status: 400,
      };
    } else {
      const addUJSMigration: UJSMigrationEntity = new UJSMigrationEntity();
      addUJSMigration.migration = ujsDepartmentDTO.migration;
      addUJSMigration.batch = ujsDepartmentDTO.batch;
      await this.UJSMigrationRepository.save(addUJSMigration);
      return { migrationList: addUJSMigration, message: "success", status: 200 };
    }
  }
  // list Migration
  async UJSMigrationList(request) {
    let migrationList = await this.UJSMigrationRepository.find(
      {}
    );
    return { migration: migrationList, message: "success", status: 200 };
  }
  // --------------------------FailedJobs--------------------------------
  // add FailedJobs
  async UJSFailedJobsAdd(request, ujsFailedJobsDTO: UJSFailedJobDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;




    let checkFailedJob =
      await this.UJSFailedJobRepository.findOne({
        where: {
          uuid: ujsFailedJobsDTO.uuid,

        },
      });
    if (checkFailedJob) {
      return {
        message: "Jobs Already Exist",
        status: 400,
      };
    } else {
      const addUJSFailedJobs: UJSFailedJobEntity =
        new UJSFailedJobEntity();
      addUJSFailedJobs.uuid = ujsFailedJobsDTO.uuid;
      addUJSFailedJobs.connection = ujsFailedJobsDTO.connection;
      addUJSFailedJobs.queue = ujsFailedJobsDTO.queue;
      addUJSFailedJobs.payload = ujsFailedJobsDTO.payload;
      addUJSFailedJobs.exception = ujsFailedJobsDTO.exception;
      addUJSFailedJobs.failed_at = ujsFailedJobsDTO.failed_at;
      await this.UJSFailedJobRepository.save(addUJSFailedJobs);
      return { FailedJobsList: addUJSFailedJobs, message: "success", status: 200 };
    }
  }
  // list FailedJobs
  async UJSFailedJobsList(request) {
    let failedJobsList = await this.UJSFailedJobRepository.find(
      {}
    );
    return { failedJobs: failedJobsList, message: "success", status: 200 };
  }
  // --------------------------Branch--------------------------------
  // add Branch
  async UJSBranchAdd(request, ujsBranchDTO: UJSBranchDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;




    let checkFailedJob =
      await this.UJSBranchRepository.findOne({
        where: {
          branch_name: ujsBranchDTO.branch_name,

        },
      });
    if (checkFailedJob) {
      return {
        message: "Jobs Already Exist",
        status: 400,
      };
    } else {
      const addUJSBranch: UJSBranchEntity =
        new UJSBranchEntity();
      addUJSBranch.branch_name = ujsBranchDTO.branch_name;
      addUJSBranch.branch_code = ujsBranchDTO.branch_code;
      addUJSBranch.director_name = ujsBranchDTO.director_name;
      addUJSBranch.father_name = ujsBranchDTO.father_name;
      addUJSBranch.qualification = ujsBranchDTO.qualification;
      addUJSBranch.village = ujsBranchDTO.village;
      addUJSBranch.block = ujsBranchDTO.block;
      addUJSBranch.state = ujsBranchDTO.state;
      addUJSBranch.district = ujsBranchDTO.district;
      addUJSBranch.po = ujsBranchDTO.po;
      addUJSBranch.pincode = ujsBranchDTO.pincode;
      addUJSBranch.mobile = ujsBranchDTO.mobile;
      addUJSBranch.email = ujsBranchDTO.email;
      addUJSBranch.centerType = ujsBranchDTO.centerType;
      addUJSBranch.center_timing = ujsBranchDTO.center_timing;
      addUJSBranch.no_of_computer = ujsBranchDTO.no_of_computer;
      addUJSBranch.center_area = ujsBranchDTO.center_area;
      addUJSBranch.toilet = ujsBranchDTO.toilet;
      addUJSBranch.scanner = ujsBranchDTO.scanner;
      addUJSBranch.printer_color = ujsBranchDTO.printer_color;
      addUJSBranch.internetconnectivity = ujsBranchDTO.internetconnectivity;
      addUJSBranch.ups_inverter = ujsBranchDTO.ups_inverter;
      addUJSBranch.no_of_chairs = ujsBranchDTO.no_of_chairs;
      addUJSBranch.no_of_white_boards = ujsBranchDTO.no_of_white_boards;
      addUJSBranch.cctv = ujsBranchDTO.cctv;
      addUJSBranch.projecter = ujsBranchDTO.projecter;
      addUJSBranch.status = ujsBranchDTO.status;
      addUJSBranch.created_by = ujsBranchDTO.created_by;
      addUJSBranch.updated_by = ujsBranchDTO.updated_by;
      addUJSBranch.created_at = ujsBranchDTO.created_at;
      addUJSBranch.updated_at = ujsBranchDTO.updated_at;
      await this.UJSBranchRepository.save(addUJSBranch);
      return { BranchList: addUJSBranch, message: "success", status: 200 };
    }
  }
  // list Branch
  async UJSBranchList(request) {
    let BranchList = await this.UJSBranchRepository.find(
      {}
    );
    return { Branch: BranchList, message: "success", status: 200 };
  }
  // --------------------------backup shg grp--------------------------------
  // add backup shg grp
  async UJSBackupShgGroupAdd(request, ujsBackupShgGroupDataUploadMonthDTO: UJSBackupShgGroupDataUploadMonthDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;




    let checkBackupShgGroupDataUploadMonth =
      await this.UJSBackupShgGroupDataUploadMonthRepository.findOne({
        where: {
          group_id: ujsBackupShgGroupDataUploadMonthDTO.group_id,

        },
      });
    if (checkBackupShgGroupDataUploadMonth) {
      return {
        message: "Backup Shg Group Already Exist",
        status: 400,
      };
    } else {
      const addUJSBackupShgGroupDataUploadMonth: UJSBackupShgGroupDataUploadMonthEntity =
        new UJSBackupShgGroupDataUploadMonthEntity();
      addUJSBackupShgGroupDataUploadMonth.group_id = ujsBackupShgGroupDataUploadMonthDTO.group_id;
      addUJSBackupShgGroupDataUploadMonth.meeting_id = ujsBackupShgGroupDataUploadMonthDTO.meeting_id;
      addUJSBackupShgGroupDataUploadMonth.meeting_date = ujsBackupShgGroupDataUploadMonthDTO.meeting_date;
      addUJSBackupShgGroupDataUploadMonth.last_remaining = ujsBackupShgGroupDataUploadMonthDTO.last_remaining;
      addUJSBackupShgGroupDataUploadMonth.tot_saving = ujsBackupShgGroupDataUploadMonthDTO.tot_saving;
      addUJSBackupShgGroupDataUploadMonth.internal_loan = ujsBackupShgGroupDataUploadMonthDTO.internal_loan;
      addUJSBackupShgGroupDataUploadMonth.internal_loan_int = ujsBackupShgGroupDataUploadMonthDTO.internal_loan_int;
      addUJSBackupShgGroupDataUploadMonth.bank_loan_amt = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt;
      addUJSBackupShgGroupDataUploadMonth.penalt_other = ujsBackupShgGroupDataUploadMonthDTO.penalt_other;
      addUJSBackupShgGroupDataUploadMonth.fix_loan1 = ujsBackupShgGroupDataUploadMonthDTO.fix_loan1;
      addUJSBackupShgGroupDataUploadMonth.bank_loan_amt1 = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt1;
      addUJSBackupShgGroupDataUploadMonth.internal_amt = ujsBackupShgGroupDataUploadMonthDTO.internal_amt;
      addUJSBackupShgGroupDataUploadMonth.grp_exp = ujsBackupShgGroupDataUploadMonthDTO.grp_exp;
      addUJSBackupShgGroupDataUploadMonth.special_amt = ujsBackupShgGroupDataUploadMonthDTO.special_amt;
      addUJSBackupShgGroupDataUploadMonth.tot_expanse = ujsBackupShgGroupDataUploadMonthDTO.tot_expanse;
      addUJSBackupShgGroupDataUploadMonth.bank_loan_amt_sub = ujsBackupShgGroupDataUploadMonthDTO.bank_loan_amt_sub;
      addUJSBackupShgGroupDataUploadMonth.bank_saving = ujsBackupShgGroupDataUploadMonthDTO.bank_saving;
      addUJSBackupShgGroupDataUploadMonth.cash_inhand = ujsBackupShgGroupDataUploadMonthDTO.cash_inhand;
      addUJSBackupShgGroupDataUploadMonth.federation = ujsBackupShgGroupDataUploadMonthDTO.federation;
      addUJSBackupShgGroupDataUploadMonth.others = ujsBackupShgGroupDataUploadMonthDTO.others;
      await this.UJSBackupShgGroupDataUploadMonthRepository.save(addUJSBackupShgGroupDataUploadMonth);
      return { BackupShgGroupList: addUJSBackupShgGroupDataUploadMonth, message: "success", status: 200 };
    }
  }
  // list UJSBackupShgGroupData
  async UJSBackupShgGroupList(request) {
    let UJSBackupShgGroupList = await this.UJSBackupShgGroupDataUploadMonthRepository.find(
      {}
    );
    return { UJSBackupShgGroup: UJSBackupShgGroupList, message: "success", status: 200 };
  }
  // --------------------------personal access token--------------------------------
  // add personal access token
  async UJSPersonalAccessTokenAdd(request, ujsPersonalAccessTokenDTO: UJSPersonalAccessTokenDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;




    let checkPersonalAccessToken =
      await this.UJSPersonalAccessTokenRepository.findOne({
        where: {
          name: ujsPersonalAccessTokenDTO.name,

        },
      });
    if (checkPersonalAccessToken) {
      return {
        message: "Personal Access Token Already Exist",
        status: 400,
      };
    } else {
      const addUJSUJSPersonalAccessToken: UJSPersonalAccessTokenEntity =
        new UJSPersonalAccessTokenEntity();
      addUJSUJSPersonalAccessToken.tokenable_id = ujsPersonalAccessTokenDTO.tokenable_id;
      addUJSUJSPersonalAccessToken.tokenable_type = ujsPersonalAccessTokenDTO.tokenable_type;
      addUJSUJSPersonalAccessToken.name = ujsPersonalAccessTokenDTO.name;
      addUJSUJSPersonalAccessToken.token = ujsPersonalAccessTokenDTO.token;
      addUJSUJSPersonalAccessToken.abilities = ujsPersonalAccessTokenDTO.abilities;
      addUJSUJSPersonalAccessToken.last_used_at = ujsPersonalAccessTokenDTO.last_used_at;
      addUJSUJSPersonalAccessToken.created_at = ujsPersonalAccessTokenDTO.created_at;
      addUJSUJSPersonalAccessToken.updated_at = ujsPersonalAccessTokenDTO.updated_at;

      await this.UJSPersonalAccessTokenRepository.save(addUJSUJSPersonalAccessToken);
      return { PersonalAccessTokenList: addUJSUJSPersonalAccessToken, message: "success", status: 200 };
    }
  }
  // list personal access token
  async UJSPersonalAccessTokenList(request) {
    let PersonalAccessTokenList = await this.UJSFailedJobRepository.find(
      {}
    );
    return { PersonalAccessToken: PersonalAccessTokenList, message: "success", status: 200 };
  }
  // --------------------------SHGExpenses--------------------------------
  // add SHGExpenses
  async UJSSHGExpensesAdd(request, ujsSHGExpansesDTO: UJSSHGExpansesDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;




    let checkShgExpenses =
      await this.UJSSHGExpansesRepository.findOne({
        where: {
          group_id: ujsSHGExpansesDTO.group_id,

        },
      });
    if (checkShgExpenses) {
      return {
        message: "SHG Expenses Already Exist",
        status: 400,
      };
    } else {
      const addUJSSHGExpenses: UJSSHGExpansesEntity =
        new UJSSHGExpansesEntity();
      addUJSSHGExpenses.group_id = ujsSHGExpansesDTO.group_id;
      addUJSSHGExpenses.meeting_id = ujsSHGExpansesDTO.meeting_id;
      addUJSSHGExpenses.animator_id = ujsSHGExpansesDTO.animator_id;
      addUJSSHGExpenses.transport = ujsSHGExpansesDTO.transport;
      addUJSSHGExpenses.tea = ujsSHGExpansesDTO.tea;
      addUJSSHGExpenses.telephone = ujsSHGExpansesDTO.telephone;
      addUJSSHGExpenses.meeting = ujsSHGExpansesDTO.meeting;
      addUJSSHGExpenses.stationary = ujsSHGExpansesDTO.stationary;
      addUJSSHGExpenses.federation = ujsSHGExpansesDTO.federation;
      addUJSSHGExpenses.other_expanses = ujsSHGExpansesDTO.other_expanses;
      addUJSSHGExpenses.datetime = ujsSHGExpansesDTO.datetime;
      addUJSSHGExpenses.total = ujsSHGExpansesDTO.total;


      await this.UJSSHGExpansesRepository.save(addUJSSHGExpenses);
      return { ShgExpensesList: addUJSSHGExpenses, message: "success", status: 200 };
    }
  }
  // list SHGExpenses
  async UJSSHGExpensesList(request) {
    let SHGExpensesList = await this.UJSSHGExpansesRepository.find(
      {}
    );
    return { SHGExpenses: SHGExpensesList, message: "success", status: 200 };
  }
  // --------------------------SHG loan repayment--------------------------------
  // add SHG loan repayment
  async UJSShgLoanRepaymentAdd(request, ujsSHGLoanRepaymentDTO: UJSSHGLoanRepaymentDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;

    let checkShgExpenses =
      await this.UJSSHGLoanRepaymentRepository.findOne({
        where: {
          group_id: ujsSHGLoanRepaymentDTO.group_id,

        },
      });
    if (checkShgExpenses) {
      return {
        message: "SHG loan Already Exist",
        status: 400,
      };
    } else {
      const addUJSSHGLoanRepayment: UJSSHGLoanRepaymentEntity =
        new UJSSHGLoanRepaymentEntity();
      addUJSSHGLoanRepayment.meeting_id = ujsSHGLoanRepaymentDTO.meeting_id;
      addUJSSHGLoanRepayment.emi_amount = ujsSHGLoanRepaymentDTO.emi_amount;
      addUJSSHGLoanRepayment.interest = ujsSHGLoanRepaymentDTO.interest;
      addUJSSHGLoanRepayment.member_id = ujsSHGLoanRepaymentDTO.member_id;
      addUJSSHGLoanRepayment.member_name = ujsSHGLoanRepaymentDTO.member_name;
      addUJSSHGLoanRepayment.group_id = ujsSHGLoanRepaymentDTO.group_id;
      addUJSSHGLoanRepayment.animator_id = ujsSHGLoanRepaymentDTO.animator_id;
      addUJSSHGLoanRepayment.emi_no = ujsSHGLoanRepaymentDTO.emi_no;
      addUJSSHGLoanRepayment.emi_date = ujsSHGLoanRepaymentDTO.emi_date;
      addUJSSHGLoanRepayment.meetingDate = ujsSHGLoanRepaymentDTO.meetingDate;

      await this.UJSSHGLoanRepaymentRepository.save(addUJSSHGLoanRepayment);
      return { ShgExpensesList: addUJSSHGLoanRepayment, message: "success", status: 200 };
    }
  }
  // list SHG loan repayment
  async UJSShgLoanRepaymentList(request) {
    let SHGLoanRepaymentList = await this.UJSSHGLoanRepaymentRepository.find(
      {}
    );
    return { SHGLoanRepayment: SHGLoanRepaymentList, message: "success", status: 200 };
  }
  // -----------------------------state-----------------------------------
  // add state
  async UJSStateAdd(request, ujsStateDTO: UJSStateDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkState =
      await this.UJSStateRepository.findOne({
        where: {
          district: ujsStateDTO.district,

        },
      });
    if (checkState) {
      return {
        message: "State Already Exist",
        status: 400,
      };
    } else {
      const addUJSState: UJSStateEntity =
        new UJSStateEntity();
      addUJSState.state = ujsStateDTO.state;
      addUJSState.district = ujsStateDTO.district;



      await this.UJSStateRepository.save(addUJSState);
      return { stateList: addUJSState, message: "success", status: 200 };
    }
  }
  // list state
  async UJSStateList(request) {
    let stateList = await this.UJSStateRepository.find(
      {}
    );
    return { state: stateList, message: "success", status: 200 };
  }
  // -----------------------------shg tarning-----------------------------------
  // add shg traning
  async UJSShgTraningAdd(request, ujsShgTraningDTO: UJSSHGTraningDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkShgTraning =
      await this.UJSShgTraningRepository.findOne({
        where: {
          meeting_id: ujsShgTraningDTO.meeting_id,

        },
      });
    if (checkShgTraning) {
      return {
        message: "Shg Traning Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgTraning: UJSShgTraningEntity =
        new UJSShgTraningEntity();
      addUJSShgTraning.meeting_id = ujsShgTraningDTO.meeting_id;

      addUJSShgTraning.group_id = ujsShgTraningDTO.group_id;
      addUJSShgTraning.animator_id = ujsShgTraningDTO.animator_id;
      addUJSShgTraning.traning = ujsShgTraningDTO.traning;
      addUJSShgTraning.traningDate = ujsShgTraningDTO.traningDate;
      addUJSShgTraning.created_Date = ujsShgTraningDTO.created_Date;


      await this.UJSShgTraningRepository.save(addUJSShgTraning);
      return { shgTraning: addUJSShgTraning, message: "success", status: 200 };
    }
  }
  // list shg traning
  async UJSShgTraningList(request) {
    let shgTraningList = await this.UJSShgTraningRepository.find(
      {}
    );
    return { shgTraning: shgTraningList, message: "success", status: 200 };
  }
  // -----------------------------shg active model farmer-----------------------------------
  // add shg active model farmer
  async UJSShgActiveModelFarmerAdd(request, ujsShgActiveModelFarmerDTO: UJSSHGActiveModelFarmerDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkModel =
      await this.UJSShgActiveModelFarmerRepository.findOne({
        where: {
          farmer_name: ujsShgActiveModelFarmerDTO.farmer_name,

        },
      });
    if (checkModel) {
      return {
        message: "Shg Active Framer Model Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgActiveModelActive: UJSShgActiveModelFarmerEntity =
        new UJSShgActiveModelFarmerEntity();
      addUJSShgActiveModelActive.farmer_name = ujsShgActiveModelFarmerDTO.farmer_name;
      addUJSShgActiveModelActive.village = ujsShgActiveModelFarmerDTO.village;
      addUJSShgActiveModelActive.mobile = ujsShgActiveModelFarmerDTO.mobile;


      await this.UJSShgActiveModelFarmerRepository.save(addUJSShgActiveModelActive);
      return { shgActiveModelFarmer: addUJSShgActiveModelActive, message: "success", status: 200 };
    }
  }
  // list shg active model farmer
  async UJSShgActiveModelFarmerList(request) {
    let shgActiveModelFarmerList = await this.UJSShgActiveModelFarmerRepository.find(
      {}
    );
    return { shgActiveModelFarmer: shgActiveModelFarmerList, message: "success", status: 200 };
  }
  // -----------------------------shg attendance-----------------------------------
  // add shg attendance
  async UJSShgAttendanceAdd(request, ujsShgAttendanceDTO: UJSShgAttendanceDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkAttendance =
      await this.UJSShgAttendanceRepository.findOne({
        where: {
          meeting_id: ujsShgAttendanceDTO.meeting_id,

        },
      });
    if (checkAttendance) {
      return {
        message: "Shg Attendance Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgAttendance: UJSShgAttendanceEntity =
        new UJSShgAttendanceEntity();
      addUJSShgAttendance.meeting_id = ujsShgAttendanceDTO.meeting_id;
      addUJSShgAttendance.group_id = ujsShgAttendanceDTO.group_id;
      addUJSShgAttendance.group_name = ujsShgAttendanceDTO.group_name;
      addUJSShgAttendance.animator_id = ujsShgAttendanceDTO.animator_id;
      addUJSShgAttendance.animator_name = ujsShgAttendanceDTO.animator_name;
      addUJSShgAttendance.member_id = ujsShgAttendanceDTO.member_id;
      addUJSShgAttendance.member_name = ujsShgAttendanceDTO.member_name;
      addUJSShgAttendance.attendance = ujsShgAttendanceDTO.attendance;
      addUJSShgAttendance.datetime = ujsShgAttendanceDTO.datetime;
      addUJSShgAttendance.meetingDate = ujsShgAttendanceDTO.meetingDate;
      await this.UJSShgAttendanceRepository.save(addUJSShgAttendance);
      return { shgAttendance: addUJSShgAttendance, message: "success", status: 200 };
    }
  }
  // list shg attendance
  async UJSShgAttendanceList(request) {
    let shgAttendanceList = await this.UJSShgAttendanceRepository.find(
      {}
    );
    return { shgAttendance: shgAttendanceList, message: "success", status: 200 };
  }
  // -----------------------------shg acontact----------------------------------
  // add shg contact
  async UJSShgContactAdd(request, ujsShgContactDTO: UJSShgContactDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkContact =
      await this.UJSShgContactRepository.findOne({
        where: {
          email: ujsShgContactDTO.email,

        },
      });
    if (checkContact) {
      return {
        message: "contact Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgContact: UJSShgContactEntity =
        new UJSShgContactEntity();
      addUJSShgContact.name = ujsShgContactDTO.name;
      addUJSShgContact.email = ujsShgContactDTO.email;
      addUJSShgContact.mobile = ujsShgContactDTO.mobile;
      addUJSShgContact.subject = ujsShgContactDTO.subject;
      addUJSShgContact.message = ujsShgContactDTO.message;
      addUJSShgContact.contactDate = ujsShgContactDTO.contactDate;
      await this.UJSShgContactRepository.save(addUJSShgContact);
      return { shgContact: addUJSShgContact, message: "success", status: 200 };
    }
  }
  // list shg contact
  async UJSShgContactList(request) {
    let shgContactList = await this.UJSShgContactRepository.find(
      {}
    );
    return { shgContact: shgContactList, message: "success", status: 200 };
  }
  // -----------------------------data lock----------------------------------
  // add data lock
  async UJSShgDataLockAdd(request, ujsShgDataLockDTO: UJSShgDataLockDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkdatalock =
      await this.UJSShgDataLockRepository.findOne({
        where: {
          group_id: ujsShgDataLockDTO.group_id,

        },
      });
    if (checkdatalock) {
      return {
        message: "Data Lock Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgDataLock: UJSShgDataLockEntity =
        new UJSShgDataLockEntity();
      addUJSShgDataLock.group_id = ujsShgDataLockDTO.group_id;
      addUJSShgDataLock.lock_date = ujsShgDataLockDTO.lock_date;
      addUJSShgDataLock.transaction = ujsShgDataLockDTO.transaction;
      addUJSShgDataLock.status = ujsShgDataLockDTO.status;
      addUJSShgDataLock.updatedAt = ujsShgDataLockDTO.updatedAt;

      await this.UJSShgDataLockRepository.save(addUJSShgDataLock);
      return { shgDataLock: addUJSShgDataLock, message: "success", status: 200 };
    }
  }
  // list data lock
  async UJSShgDataLockList(request) {
    let shgDataLockList = await this.UJSShgDataLockRepository.find(
      {}
    );
    return { shgDataLock: shgDataLockList, message: "success", status: 200 };
  }
  // -----------------------------bank loan allotment----------------------------------
  // add bank loan allotment
  async UJSShgBankLoanAllotmentAdd(request, ujsShgbankAllotmentDTO: UJSBankAllotmentDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkbankloan =
      await this.UJSShgBankLoanAllotmentRepository.findOne({
        where: {
          group_id: ujsShgbankAllotmentDTO.group_id,

        },
      });
    if (checkbankloan) {
      return {
        message: "Bank Loan Already Allot",
        status: 400,
      };
    } else {
      const addUJSShgBankLoanAllotment: UJSBankLoanAllotmentEntity =
        new UJSBankLoanAllotmentEntity();
      addUJSShgBankLoanAllotment.group_id = ujsShgbankAllotmentDTO.group_id;
      addUJSShgBankLoanAllotment.Start_date = ujsShgbankAllotmentDTO.Start_date;
      addUJSShgBankLoanAllotment.End_date = ujsShgbankAllotmentDTO.End_date;
      addUJSShgBankLoanAllotment.shg_id = ujsShgbankAllotmentDTO.shg_id;
      addUJSShgBankLoanAllotment.group_name = ujsShgbankAllotmentDTO.group_name;
      addUJSShgBankLoanAllotment.bank_name = ujsShgbankAllotmentDTO.bank_name;
      addUJSShgBankLoanAllotment.loan_no = ujsShgbankAllotmentDTO.loan_no;
      addUJSShgBankLoanAllotment.loan_type = ujsShgbankAllotmentDTO.loan_type;
      addUJSShgBankLoanAllotment.totalEmi = ujsShgbankAllotmentDTO.totalEmi;
      addUJSShgBankLoanAllotment.remainingEmi = ujsShgbankAllotmentDTO.remainingEmi;
      addUJSShgBankLoanAllotment.loan_amt = ujsShgbankAllotmentDTO.loan_amt;
      addUJSShgBankLoanAllotment.requested_loan_amt = ujsShgbankAllotmentDTO.requested_loan_amt;
      addUJSShgBankLoanAllotment.interest_rate = ujsShgbankAllotmentDTO.interest_rate;
      addUJSShgBankLoanAllotment.interest = ujsShgbankAllotmentDTO.interest;
      addUJSShgBankLoanAllotment.member_emi_amount = ujsShgbankAllotmentDTO.member_emi_amount;
      addUJSShgBankLoanAllotment.settle_interest = ujsShgbankAllotmentDTO.settle_interest;
      addUJSShgBankLoanAllotment.tenure = ujsShgbankAllotmentDTO.tenure;
      addUJSShgBankLoanAllotment.file_charge = ujsShgbankAllotmentDTO.file_charge;
      addUJSShgBankLoanAllotment.fedration_charge = ujsShgbankAllotmentDTO.fedration_charge;
      addUJSShgBankLoanAllotment.distribution_amt = ujsShgbankAllotmentDTO.distribution_amt;
      addUJSShgBankLoanAllotment.total_int = ujsShgbankAllotmentDTO.total_int;
      addUJSShgBankLoanAllotment.settle_amt = ujsShgbankAllotmentDTO.settle_amt;
      addUJSShgBankLoanAllotment.loan_date = ujsShgbankAllotmentDTO.loan_date;
      addUJSShgBankLoanAllotment.bank_ifsc = ujsShgbankAllotmentDTO.bank_ifsc;
      addUJSShgBankLoanAllotment.meetingDate = ujsShgbankAllotmentDTO.meetingDate;
      addUJSShgBankLoanAllotment.sanctionDate = ujsShgbankAllotmentDTO.sanctionDate;
      addUJSShgBankLoanAllotment.distributionDate = ujsShgbankAllotmentDTO.distributionDate;
      addUJSShgBankLoanAllotment.totalMember = ujsShgbankAllotmentDTO.totalMember;
      addUJSShgBankLoanAllotment.updatedAt = ujsShgbankAllotmentDTO.updatedAt;
      addUJSShgBankLoanAllotment.status = ujsShgbankAllotmentDTO.status;
      addUJSShgBankLoanAllotment.last_emi_collected_date = ujsShgbankAllotmentDTO.last_emi_collected_date;


      await this.UJSShgBankLoanAllotmentRepository.save(addUJSShgBankLoanAllotment);
      return { shgBankLoanAllotment: addUJSShgBankLoanAllotment, message: "success", status: 200 };
    }
  }
  // list bank loan allotment
  async UJSShgBankLoanAllotmentList(request) {
    let shgbankLoanList = await this.UJSShgBankLoanAllotmentRepository.find(
      {}
    );
    return { shgbankLoan: shgbankLoanList, message: "success", status: 200 };
  }
  // -----------------------------bank loan ----------------------------------
  // add bank loan 
  async UJSShgBankLoanAdd(request, ujsShgbankAllotmentDTO: UJSBankLoanDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkbankloan =
      await this.UJSShgBankLoanRepository.findOne({
        where: {
          group_id: ujsShgbankAllotmentDTO.group_id,

        },
      });
    if (checkbankloan) {
      return {
        message: "Loan Already Allot",
        status: 400,
      };
    } else {
      const addUJSShgBankLoan: UJSBankLoanEntity =
        new UJSBankLoanEntity();
      // Assuming `addUJSShgBankLoan` is an instance of the entity and `ujsShgbankAllotmentDTO` is the DTO instance

      addUJSShgBankLoan.id = ujsShgbankAllotmentDTO.id;
      addUJSShgBankLoan.loan_no = ujsShgbankAllotmentDTO.loan_no;
      addUJSShgBankLoan.bank_name = ujsShgbankAllotmentDTO.bank_name;
      addUJSShgBankLoan.meeting_id = ujsShgbankAllotmentDTO.meeting_id;
      addUJSShgBankLoan.group_id = ujsShgbankAllotmentDTO.group_id;
      addUJSShgBankLoan.member_id = ujsShgbankAllotmentDTO.member_id;
      addUJSShgBankLoan.animator_id = ujsShgbankAllotmentDTO.animator_id;
      addUJSShgBankLoan.member_name = ujsShgbankAllotmentDTO.member_name;
      addUJSShgBankLoan.group_name = ujsShgbankAllotmentDTO.group_name;
      addUJSShgBankLoan.animator_name = ujsShgbankAllotmentDTO.animator_name;
      addUJSShgBankLoan.loan_amt = ujsShgbankAllotmentDTO.loan_amt;
      addUJSShgBankLoan.interest_rate = ujsShgbankAllotmentDTO.interest_rate;
      addUJSShgBankLoan.interest = ujsShgbankAllotmentDTO.interest;
      addUJSShgBankLoan.settle_interest = ujsShgbankAllotmentDTO.settle_interest;
      addUJSShgBankLoan.loan_period = ujsShgbankAllotmentDTO.loan_period;
      addUJSShgBankLoan.loan_date = ujsShgbankAllotmentDTO.loan_date;
      addUJSShgBankLoan.loan_type = ujsShgbankAllotmentDTO.loan_type;
      addUJSShgBankLoan.settle_amount = ujsShgbankAllotmentDTO.settle_amount;
      addUJSShgBankLoan.total_emi = ujsShgbankAllotmentDTO.total_emi;
      addUJSShgBankLoan.current_emi = ujsShgbankAllotmentDTO.current_emi;
      addUJSShgBankLoan.meetingDate = ujsShgbankAllotmentDTO.meetingDate;



      await this.UJSShgBankLoanRepository.save(addUJSShgBankLoan);
      return { shgBankLoan: addUJSShgBankLoan, message: "success", status: 200 };
    }
  }
  // list bank loan allotment
  async UJSShgBankLoanList(request) {
    let bankLoanList = await this.UJSShgBankLoanRepository.find(
      {}
    );
    return { bankLoan: bankLoanList, message: "success", status: 200 };
  }
   // -----------------------------ban ----------------------------------
  // add bank
  async UJSShgBankAdd(request, ujsShgbankDTO: UJSBankDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkbank =
      await this.UJSShgBankRepository.findOne({
        where: {
          bank_name: ujsShgbankDTO.bank_name,

        },
      });
    if (checkbank) {
      return {
        message: "Bank Already Allot",
        status: 400,
      };
    } else {
      const addUJSShgBank: UJSBankEntity =
        new UJSBankEntity();
    
      addUJSShgBank.bank_name = ujsShgbankDTO.bank_name;
      addUJSShgBank.interest_rate = ujsShgbankDTO.interest_rate;
      addUJSShgBank.filecharge = ujsShgbankDTO.filecharge
      addUJSShgBank.fedrationcharge = ujsShgbankDTO.fedrationcharge;
   



      await this.UJSShgBankRepository.save(addUJSShgBank);
      return { shgBank: addUJSShgBank, message: "success", status: 200 };
    }
  }
  // list bank 
  async UJSShgBankList(request) {
    let bankList = await this.UJSShgBankRepository.find(
      {}
    );
    return { bank: bankList, message: "success", status: 200 };
  }
  // ----------------------------auditing ----------------------------------
  // add auditing
  async UJSShgAuditingAdd(request, ujsShgAuditingDTO: UJSShgAuditingDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkaudit =
      await this.UJSShgAuditingRepository.findOne({
        where: {
           auditor_name: ujsShgAuditingDTO. auditor_name,

        },
      });
    if (checkaudit) {
      return {
        message: "shg Auditing Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgAuditing: UJSShgAuditingEntity =
        new UJSShgAuditingEntity();
    
      addUJSShgAuditing.auditor_name = ujsShgAuditingDTO.auditor_name;
      addUJSShgAuditing.meeting_id = ujsShgAuditingDTO.meeting_id;
      addUJSShgAuditing.animator_id = ujsShgAuditingDTO.animator_id;
      addUJSShgAuditing.group_id = ujsShgAuditingDTO.group_id;
      addUJSShgAuditing.fromdate = ujsShgAuditingDTO.fromdate;
      addUJSShgAuditing.todate = ujsShgAuditingDTO.todate;
      addUJSShgAuditing.auditdate = ujsShgAuditingDTO.auditdate;
      addUJSShgAuditing.created_date = ujsShgAuditingDTO.created_date;
      await this.UJSShgAuditingRepository.save(addUJSShgAuditing);
      return { shgAuditing: addUJSShgAuditing, message: "success", status: 200 };
    }
  }
  // list auditing 
  async UJSShgAuditingList(request) {
    let AuditingList = await this.UJSShgAuditingRepository.find(
      {}
    );
    return { Auditing: AuditingList, message: "success", status: 200 };
  }
  // --------------------------- data upload  ----------------------------------
  // add data upload 
  async UJSShgDataUploadAdd(request, ujsShgDataUploadDTO: UJSShgDataUploadDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkUpload =
      await this.UJSShgDataUploadRepository.findOne({
        where: {
           group_id: ujsShgDataUploadDTO. group_id,

        },
      });
    if (checkUpload) {
      return {
        message: " Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgDataUpload: UJSShgDataUploadEntity =
        new UJSShgDataUploadEntity();
    
        addUJSShgDataUpload.group_id = ujsShgDataUploadDTO.group_id;
        addUJSShgDataUpload.member_id = ujsShgDataUploadDTO.member_id;
        addUJSShgDataUpload.member_name = ujsShgDataUploadDTO.member_name;
        addUJSShgDataUpload.HusbandFather_Name = ujsShgDataUploadDTO.HusbandFather_Name;
        addUJSShgDataUpload.attendance = ujsShgDataUploadDTO.attendance;
        addUJSShgDataUpload.opening = ujsShgDataUploadDTO.opening;
        addUJSShgDataUpload.saving = ujsShgDataUploadDTO.saving;
        addUJSShgDataUpload.special_saving = ujsShgDataUploadDTO.special_saving;
        addUJSShgDataUpload.installment = ujsShgDataUploadDTO.installment;
        addUJSShgDataUpload.interest = ujsShgDataUploadDTO.interest;
        addUJSShgDataUpload.penalty = ujsShgDataUploadDTO.penalty;
        addUJSShgDataUpload.fix_loan = ujsShgDataUploadDTO.fix_loan;
        addUJSShgDataUpload.bank_loan = ujsShgDataUploadDTO.bank_loan;
        addUJSShgDataUpload.bank_interest = ujsShgDataUploadDTO.bank_interest;
        addUJSShgDataUpload.new_loan = ujsShgDataUploadDTO.new_loan;
        addUJSShgDataUpload.remaining_loan = ujsShgDataUploadDTO.remaining_loan;
        addUJSShgDataUpload.meeting_date = ujsShgDataUploadDTO.meeting_date;
        addUJSShgDataUpload.meeting_id = ujsShgDataUploadDTO.meeting_id;
        addUJSShgDataUpload.datetime = ujsShgDataUploadDTO.datetime;
        addUJSShgDataUpload.openingBal = ujsShgDataUploadDTO.openingBal;
        addUJSShgDataUpload.fixLoan = ujsShgDataUploadDTO.fixLoan;
 
      await this.UJSShgDataUploadRepository.save(addUJSShgDataUpload);
      return { shgDataUpload: addUJSShgDataUpload, message: "success", status: 200 };
    }
  }
  // list  data upload 
  async UJSShgDataUploadList(request) {
    let DataUploadList = await this.UJSShgDataUploadRepository.find(
      {}
    );
    return { DataUpload: DataUploadList, message: "success", status: 200 };
  }
    // --------------------------- Digital sakhi  ----------------------------------
  // add Digital sakhi 
  async UJSShgDigiSakhiAdd(request, ujsShgDigiSakhiDTO: UJSShgDigiSakhiDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkDigiSakhi =
      await this.UJSShgDigiSakhiRepository.findOne({
        where: {
           gp_name: ujsShgDigiSakhiDTO. gp_name,

        },
      });
    if (checkDigiSakhi) {
      return {
        message: " Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgDigiSakhi: UJSShgDigiSakhiEntity =
        new UJSShgDigiSakhiEntity();
    
        addUJSShgDigiSakhi.gp_name = ujsShgDigiSakhiDTO.gp_name;
        addUJSShgDigiSakhi.state = ujsShgDigiSakhiDTO.state;
        addUJSShgDigiSakhi.district = ujsShgDigiSakhiDTO.district;
        addUJSShgDigiSakhi.block = ujsShgDigiSakhiDTO.block;
        addUJSShgDigiSakhi.villege_name = ujsShgDigiSakhiDTO.villege_name;
        addUJSShgDigiSakhi.vle_name = ujsShgDigiSakhiDTO.vle_name;
        addUJSShgDigiSakhi.mobile = ujsShgDigiSakhiDTO.mobile;
        addUJSShgDigiSakhi.email = ujsShgDigiSakhiDTO.email;
        addUJSShgDigiSakhi.application_ref_no = ujsShgDigiSakhiDTO.application_ref_no;
        addUJSShgDigiSakhi.cscId = ujsShgDigiSakhiDTO.cscId;
 
      await this.UJSShgDigiSakhiRepository.save(addUJSShgDigiSakhi);
      return { shgDigiSakhi: addUJSShgDigiSakhi, message: "success", status: 200 };
    }
  }
  // list  dDigital sakhi
  async UJSShgDigiSakhiList(request) {
    let DigiSakhiList = await this.UJSShgDigiSakhiRepository.find(
      {}
    );
    return { DigiSakhi: DigiSakhiList, message: "success", status: 200 };
  }
    // --------------------------- Shg Fpo ----------------------------------
  // add Shg Fpo
  async UJSShgFpoAdd(request, ujsShgFpoDTO: UJSShgFpoDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkFpo =
      await this.UJSShgFpoRepository.findOne({
        where: {
           member_sharholder: ujsShgFpoDTO. member_sharholder,

        },
      });
    if (checkFpo) {
      return {
        message: "Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgFpo: UJSShgFpoEntity =
        new UJSShgFpoEntity();
    
        addUJSShgFpo.member_sharholder = ujsShgFpoDTO.member_sharholder; 
        addUJSShgFpo.husband_name = ujsShgFpoDTO.husband_name; 
        addUJSShgFpo.village_name = ujsShgFpoDTO.village_name; 
        addUJSShgFpo.gender = ujsShgFpoDTO.gender; 
        addUJSShgFpo.share_amt = ujsShgFpoDTO.share_amt; 
        addUJSShgFpo.no_of_share = ujsShgFpoDTO.no_of_share; 
        addUJSShgFpo.folio_share_distinct_no = ujsShgFpoDTO.folio_share_distinct_no; 
        addUJSShgFpo.land_holdeing = ujsShgFpoDTO.land_holdeing; 
        addUJSShgFpo.land_record = ujsShgFpoDTO.land_record; 
        addUJSShgFpo.mobile = ujsShgFpoDTO.mobile; 
        addUJSShgFpo.remarks = ujsShgFpoDTO.remarks; 
      await this.UJSShgFpoRepository.save(addUJSShgFpo);
      return { Fpo: addUJSShgFpo, message: "success", status: 200 };
    }
  }
  // list  Shg Fpo
  async UJSShgFpoList(request) {
    let FpoList = await this.UJSShgFpoRepository.find(
      {}
    );
    return { Fpo: FpoList, message: "success", status: 200 };
  }
     // --------------------------- Shg Fedration ----------------------------------
  // add Shg Fedration
  async UJSShgFedrationReportAdd(request, ujsShgFedrationReportDTO: UJSSHGFedrationReportDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkFedration =
      await this.UJSShgFedrationReportRepository.findOne({
        where: {
           shg_name: ujsShgFedrationReportDTO.shg_name
        },
      });
    if (checkFedration) {
      return {
        message: "Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgFedration: UJSSHGFedrationReportEntity =
        new UJSSHGFedrationReportEntity();
    
        addUJSShgFedration.shg_name = ujsShgFedrationReportDTO.shg_name; 
        addUJSShgFedration.dhani = ujsShgFedrationReportDTO.dhani; 
        addUJSShgFedration.gram_panchayat = ujsShgFedrationReportDTO.gram_panchayat; 
        addUJSShgFedration.total_member = ujsShgFedrationReportDTO.total_member; 
        addUJSShgFedration.federation_this_month = ujsShgFedrationReportDTO.federation_this_month;
        addUJSShgFedration.federation = ujsShgFedrationReportDTO.federation; 
     
      await this.UJSShgFedrationReportRepository.save(addUJSShgFedration);
      return { Fedration: addUJSShgFedration, message: "success", status: 200 };
    }
  }
  // list  Shg Fedration
  async UJSShgFedrationReportList(request) {
    let FedrationList = await this.UJSShgFedrationReportRepository.find(
      {}
    );
    return { Fedration: FedrationList, message: "success", status: 200 };
  }
    // --------------------------- Shg Fedration ----------------------------------
  // add Shg Fedration
  async UJSShgFedrationAdd(request, ujsShgFedrationDTO: UJSSHGFedrationDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkFedration =
      await this.UJSShgFedrationRepository.findOne({
        where: {
           group_id: ujsShgFedrationDTO.group_id
        },
      });
    if (checkFedration) {
      return {
        message: "Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgFedration: UJSSHGFedrationEntity =
        new UJSSHGFedrationEntity();
    
        addUJSShgFedration.meeting_id = ujsShgFedrationDTO.meeting_id; 
        addUJSShgFedration.group_id = ujsShgFedrationDTO.group_id; 
        addUJSShgFedration.animator_id = ujsShgFedrationDTO.animator_id; 
        addUJSShgFedration.animator_name = ujsShgFedrationDTO.animator_name; 
        addUJSShgFedration.group_name = ujsShgFedrationDTO.group_name;
        addUJSShgFedration.amount = ujsShgFedrationDTO.amount; 
        addUJSShgFedration.datetime = ujsShgFedrationDTO.datetime; 
     
      await this.UJSShgFedrationRepository.save(addUJSShgFedration);
      return { Fedration: addUJSShgFedration, message: "success", status: 200 };
    }
  }
  // list  Shg Fedration
  async UJSShgFedrationList(request) {
    let FedrationList = await this.UJSShgFedrationRepository.find(
      {}
    );
    return { Fedration: FedrationList, message: "success", status: 200 };
  }
    // --------------------------- Shg Mom ----------------------------------
  // add Shg Fedration
  async UJSShgMomAdd(request, ujsShgMomDTO: UJSShgMomDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    let checkMom =
      await this.UJSShgMomRepository.findOne({
        where: {
           group_id: ujsShgMomDTO.group_id
        },
      });
    if (checkMom) {
      return {
        message: "Already Exist",
        status: 400,
      };
    } else {
      const addUJSShgMom: UJSShgMomEntity =
        new UJSShgMomEntity();
    
        addUJSShgMom.meeting_id = ujsShgMomDTO.meeting_id; 
        addUJSShgMom.group_id = ujsShgMomDTO.group_id; 
        addUJSShgMom.animator_id = ujsShgMomDTO.animator_id; 
        addUJSShgMom.animator_name = ujsShgMomDTO.animator_name; 
        addUJSShgMom.group_name = ujsShgMomDTO.group_name;
        addUJSShgMom.mom = ujsShgMomDTO.mom; 
        addUJSShgMom.datetime = ujsShgMomDTO.datetime; 
     
      await this.UJSShgMomRepository.save(addUJSShgMom);
      return { ShgMom: addUJSShgMom, message: "success", status: 200 };
    }
  }
  // list  Shg Mom
  async UJSShgMomList(request) {
    let momList = await this.UJSShgMomRepository.find(
      {}
    );
    return { mom: momList, message: "success", status: 200 };
  }
}

