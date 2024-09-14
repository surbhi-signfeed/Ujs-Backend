import { IsNotEmpty } from "class-validator";

export class CMSDisplayGroupDTO {
  @IsNotEmpty()
  DisplayGroupID: number;
  DisplayGroup: string;
  Description: string;
  userId: number;
  IsDisplaySpecific: number;
  isDynamic: number;
  dynamicCriteria: string;
  organization:string
 
}
