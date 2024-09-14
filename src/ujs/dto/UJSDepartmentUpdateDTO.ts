import {IsNotEmpty} from "class-validator";

export class UJSDepartmentUpdateDTO{
    @IsNotEmpty()
    ID:number
    @IsNotEmpty()
    department_name:string
    status:boolean 
    
   
}