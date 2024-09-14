import {IsNotEmpty} from "class-validator";

export class CMSCampaignAssignLayoutDTO{
    @IsNotEmpty()
    layoutid:number
    @IsNotEmpty()
    campaignid:number
    displayorder:number
}