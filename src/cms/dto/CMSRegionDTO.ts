import {IsNotEmpty} from "class-validator";

export class CMSRegionDTO{
    @IsNotEmpty()
    layoutid:number
    width:number
    height:number
    top:number
    left:number
    organization:string
}