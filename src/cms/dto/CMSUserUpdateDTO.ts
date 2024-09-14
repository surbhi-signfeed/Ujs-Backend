import {IsNotEmpty} from "class-validator";

export class CMSUserUpdateDTO{
    @IsNotEmpty()
    UserID:number
    @IsNotEmpty()
    name:string
    tags:string
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}