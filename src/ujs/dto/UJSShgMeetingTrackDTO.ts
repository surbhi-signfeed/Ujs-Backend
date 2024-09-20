import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgMeetingTrackDTO{
    @IsOptional()
  
    id?: number;
  
    @IsOptional()
  
    group_id?: number;
  
    @IsOptional()

    animator_id?: string;
  
    @IsOptional()
  
    datetime?: Date;
  
    @IsOptional()
  
    meetingDate?: Date;
  
    @IsOptional()

    month?: string;
  
    @IsOptional()

    meeting_id?: string;
  
    @IsOptional()
  
    Attendance?: number;
  
    @IsOptional()
  
    Saving?: number;
  
    @IsOptional()
  
    InternalLoanRepayment?: number;
  
    @IsOptional()
  
    BankLoanRepayment?: number;
  
    @IsOptional()
  
    InternalLoanDistribution?: number;
  
    @IsOptional()
  
    BankLoanDistribution?: number;
  
    @IsOptional()
  
    SummaryReport?: number;
  
    @IsOptional()
  
    updatedAt?: Date;
    
}