import { IsNotEmpty ,IsString,IsInt,IsOptional} from "class-validator";
export class UJSShgAttendanceDTO {
    @IsOptional()
    @IsInt()
    id?: number;
  
    @IsNotEmpty()
    @IsString()
    meeting_id: string;
  
    @IsNotEmpty()
    @IsInt()
    group_id: number;
  
    @IsNotEmpty()
    @IsString()
    group_name: string;
  
    @IsNotEmpty()
    @IsInt()
    animator_id: number;
  
    @IsNotEmpty()
    @IsString()
    animator_name: string;
  
    @IsNotEmpty()
    @IsInt()
    member_id: number;
  
    @IsNotEmpty()
    @IsString()
    member_name: string;
  
    @IsNotEmpty()
    @IsString()
    attendance: string;
  
    @IsNotEmpty()
    
    datetime: Date;
  
    @IsNotEmpty()
 
    meetingDate: Date;

 
   
}
