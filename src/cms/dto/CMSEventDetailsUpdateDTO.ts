import {IsNotEmpty} from "class-validator";

export class CMSEventDetailsUpdateDTO{
    @IsNotEmpty()
    eventID:number
    @IsNotEmpty()
  CampaignID:number
  displayid:number
  FromDT:string
  ToDT:string
  DisplayOrder:number
  start:string
  end:string
}