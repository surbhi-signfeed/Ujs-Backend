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
@Injectable()
export class UjsService {
  
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(UJSDepartmentEntity)
    private readonly UJSDepartmentRepository :Repository<UJSDepartmentEntity>,
    @InjectRepository(UJSShgGroupEntity)
    private readonly UJSSghGroupRepository :Repository<UJSShgGroupEntity>,
     @InjectRepository(UJSShgMemberEntity)
    private readonly UJSShgMemberRepository :Repository<UJSShgMemberEntity>,
  ) {
    
  }
  // --------------------------department--------------------------------
  // add department
  async UJSDepartmentAdd(request, ujsDepartmentDTO: UJSDepartmentDTO) {
    const ipAddress =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;
   
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
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
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
    let checkDepartment =
      await this.UJSDepartmentRepository.findOne({
        where: {
          ID: ujsDepartmentUpdateDTO.ID,
        },
      });
    if (checkDepartment) {
      checkDepartment.department_name = ujsDepartmentUpdateDTO.department_name;
      checkDepartment.status=ujsDepartmentUpdateDTO.status;
    
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
    
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
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
   
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
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
   
    const currentDateTime = new Date();
    const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
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
}
