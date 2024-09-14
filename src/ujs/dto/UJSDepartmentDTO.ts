import {IsNotEmpty} from "class-validator";

export class UJSDepartmentDTO{
    @IsNotEmpty()
    ID:string
    department_name:string
    status:boolean
    
    
}