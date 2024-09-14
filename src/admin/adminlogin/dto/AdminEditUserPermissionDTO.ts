import {IsNotEmpty} from "class-validator";

export class AdminEditUserPermissionDTO {
  @IsNotEmpty()
  UserID: number

 
  ScheduleAdd :number 
  ScheduleUpdate :number 
  ScheduleDelete :number 
  CampaignAdd :number 
  CampaignUpdate :number 
  CampaignDelete :number 
  ResolutionAdd :number 
  ResolutionUpdate :number 
  ResolutionDelete :number 
  LayoutAdd :number 
  LayoutDelete :number 
  LayoutUpdate :number 
  LayoutAssign :number 
  LayoutDesign :number 
  LayoutPreview :number 
  MediaAdd :number 
  MediaUpdate :number 
  MediaDelete :number 
  DisplayAdd :number 
  DisplayUpdate :number 
  DisplayDelete :number 
  UserAdd :number 
  UserUpdate :number 
  UserDelete :number 
  ModuleAdd :number 
  ModuleUpdate :number 
  ModuleDelete :number

}