import {IsNotEmpty} from "class-validator";

export class AdminEditUserDTO {
  @IsNotEmpty()
  UserID:number
  @IsNotEmpty()
  user_name: string
  @IsNotEmpty()
  user_password: string
  @IsNotEmpty()
  first_name: string
  @IsNotEmpty()
  last_name: string
  @IsNotEmpty()
  email: string
  phone: string
  @IsNotEmpty()
  user_type: number
  @IsNotEmpty()
  is_active: boolean

}