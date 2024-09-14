import {IsNotEmpty} from "class-validator";

export class CMSCampaignDetailDTO{
    @IsNotEmpty()
    CampaignID:number
}