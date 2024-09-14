import {IsNotEmpty} from "class-validator";

export class CMSLayoutRetireDTO{
    @IsNotEmpty()
    id:number
}