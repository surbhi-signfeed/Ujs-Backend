import { IsNotEmpty } from "class-validator";
export class UJSRolePermissionDTO {
    @IsNotEmpty()
    per_id:number;
    roll_id: string;
    permission_name: string;
    active:string
 
   
}
