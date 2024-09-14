import {IsNotEmpty} from "class-validator";

export class CMSRegionUpdateDTO{
    @IsNotEmpty()
    regionid:number
    width:number
    height:number
    top:number
    left:number
    zIndex:number
    transitionType:string
    transitionDuration:number
    transitionDirection:string
    @IsNotEmpty()
    loop:number
}