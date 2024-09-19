import { IsNotEmpty,IsOptional,IsInt } from "class-validator";
export class UJSBankDTO {
  
    @IsInt()
    id?: number;   
    bank_name?: string;
    interest_rate?: number;
    @IsOptional()
    filecharge?: number;
    @IsOptional()
    fedrationcharge?: number;   
}
