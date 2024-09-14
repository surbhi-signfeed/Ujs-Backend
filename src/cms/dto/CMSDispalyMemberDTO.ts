import { IsNotEmpty } from "class-validator";

export class CMSDispalyMemberDTO {
  @IsNotEmpty()
  LkDisplayDGID:number;
  DisplayGroupID: number;
  DisplayID:number;
 
}
