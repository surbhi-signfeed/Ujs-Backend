import {IsNotEmpty} from "class-validator";

export class CMSLkUserPermissionDeleteDTO{
    @IsNotEmpty()
   Pid:number
  
   UserID:number
}