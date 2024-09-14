import {IsNotEmpty} from "class-validator";

export class CMSCampaignUpdateDTO{
    @IsNotEmpty()
    id:number
    @IsNotEmpty()
    name:string
    tags:string
}