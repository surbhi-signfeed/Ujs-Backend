import {IsNotEmpty} from "class-validator";

export class CMSLayoutPublishDTO{
    @IsNotEmpty()
    layoutId:number
    @IsNotEmpty()
    publishNow:number
    @IsNotEmpty()
    publishDate:Date
}