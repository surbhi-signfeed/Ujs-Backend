import {IsNotEmpty} from "class-validator";

export class CMSCampaignLayoutDTO{
    @IsNotEmpty()
    id:number
}