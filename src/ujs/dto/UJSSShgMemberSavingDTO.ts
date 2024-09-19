import { IsNotEmpty,IsOptional,IsInt } from "class-validator";
export class UJSShgMemberSavingDTO {
  
    @IsOptional()
    id?: number;
  
    @IsOptional()
   
    meeting_id?: string;
  
    @IsOptional()
    
    group_id?: number;
  
    @IsOptional()
    
    animator_id?: number;
  
    @IsOptional()
    
    member_id?: number;
  
    @IsOptional()
    
    amount?: number;
  
    @IsNotEmpty()
    
    collectionDate: Date;
  
    @IsOptional()
    
    federation_amount?: number;
  
    @IsOptional()
    
    meetingDate?: Date;
}
