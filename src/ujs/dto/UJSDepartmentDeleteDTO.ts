import {IsNotEmpty} from "class-validator";

export class UJSDepartmentDeleteDTO{
    @IsNotEmpty()
    ID:number
}