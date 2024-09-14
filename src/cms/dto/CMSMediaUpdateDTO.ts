import {IsNotEmpty} from "class-validator";

export class CMSMediaUpdateDTO{
    @IsNotEmpty()
    mediaID:number
    @IsNotEmpty()
    files:string
    name:string
    type:string
    oldMediaId:number
    duration:number
    displayOrder:number
    filesize:number
}