import {IsNotEmpty} from "class-validator";

export class CMSResolutionDTO{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    width:number
    @IsNotEmpty()
    height:number
    enabled:number
    organization:string
    
}