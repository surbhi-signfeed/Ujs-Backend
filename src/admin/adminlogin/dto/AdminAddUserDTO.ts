import {IsNotEmpty} from "class-validator";

export class AdminAddUserDTO {
  @IsNotEmpty()
  user_name: string
  @IsNotEmpty()
  user_password: string
 
  first_name: string
  
  last_name: string
  @IsNotEmpty()
  email: string
  phone: string
  

  is_active: boolean
 
  OrganizationId:number
  UserType:string
  OrganizationName: string;
  OrganizationAddress1: string;
  OrganizationAddress2: string;
  City: string;
  State: string;
  Country: string;
  GSTNo: string;

}