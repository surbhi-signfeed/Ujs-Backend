import {IsNotEmpty} from "class-validator";

export class CMSCampaignDTO{
    @IsNotEmpty()
    name:string
    tags:string
    organization:string
}