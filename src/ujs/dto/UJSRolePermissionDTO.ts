import { IsNotEmpty } from "class-validator";
export class UJSRolePermissionDTO {
    @IsNotEmpty()
    per_id:string;
    roll_id: string;
    permission_name: string;
    active:string
 
   
}
