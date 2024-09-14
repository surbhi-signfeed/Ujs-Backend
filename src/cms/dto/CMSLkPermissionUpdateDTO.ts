import {IsNotEmpty} from "class-validator";

export class CMSLkPermissionUpdateDTO{
    @IsNotEmpty()
    id:number
    @IsNotEmpty()
    status:number
    
}