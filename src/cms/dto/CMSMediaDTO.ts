import {IsNotEmpty} from "class-validator";

export class CMSMediaDTO{
    @IsNotEmpty()
    files:string
    name:string
    type:string
    oldMediaId:number
    duration:number
    displayOrder:number
    filesize:number
    organization:string
}