import {IsNotEmpty} from "class-validator";

export class CMSAssignLayoutDeleteDTO{
    @IsNotEmpty()

    LkCampaignLayoutID: number 
}