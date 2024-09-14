import {IsNotEmpty} from "class-validator";

export class CMSCampaignDeleteDTO{
    @IsNotEmpty()
    CampaignID:number
}