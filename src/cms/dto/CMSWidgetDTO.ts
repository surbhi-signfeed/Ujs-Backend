import {IsNotEmpty} from "class-validator";

export class CMSWidgetDTO{
    @IsNotEmpty()
    type:string
    playlistId:number
    mediaId:number
    duration:number
    displayOrder:number
    organization:string
}