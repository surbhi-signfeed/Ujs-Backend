import {IsNotEmpty} from "class-validator";

export class CMSWidgetDeleteDTO{
    @IsNotEmpty()
    widgetId:number
    mediaId:number
}