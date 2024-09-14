import {IsNotEmpty} from "class-validator";

export class CMSDaypartUpdateDTO{
    @IsNotEmpty()
    dayPartId:number
 
    name: string;
  description: string;
  userid: number;
  startTime: number;
  endTime: number;
  isRetired:number;
  exceptions: string;
  isAlways: string;
  isCustom: number;

}