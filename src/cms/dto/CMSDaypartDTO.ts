import { IsNotEmpty } from "class-validator";

export class CMSDaypartDTO {
  @IsNotEmpty()
  dayPartId: number;
  name: string;
  description: string;
  userid: number;
  startTime: number;
  endTime: number;
  isRetired:number;
  exceptions: string;
  isAlways: string;
  isCustom: number;
  organization:string
 
}
