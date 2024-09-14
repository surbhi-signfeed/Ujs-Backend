import {IsNotEmpty} from "class-validator";

export class CMSResolutionUpdateDTO{
    @IsNotEmpty()
    id:number
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    width:number
    @IsNotEmpty()
    height:number
    enabled:number
}