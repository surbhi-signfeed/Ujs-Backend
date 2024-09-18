import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class UJSBranchDTO {
  @IsOptional()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  branch_name: string;

  @IsOptional()
  @IsString()
  branch_code: string;

  @IsOptional()
  @IsString()
  director_name: string;

  @IsOptional()
  @IsString()
  father_name: string;

  @IsOptional()
  @IsString()
  qualification: string;

  @IsOptional()
  @IsString()
  village: string;

  @IsOptional()
  @IsString()
  block: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  district: string;

  @IsOptional()
  @IsString()
  po: string;

  @IsOptional()
  @IsString()
  pincode: string;

  @IsOptional()
  @IsString()
  mobile: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  centerType: string;

  @IsOptional()
  @IsString()
  center_timing: string;

  @IsOptional()
  @IsString()
  no_of_computer: string;

  @IsOptional()
  @IsString()
  center_area: string;

  @IsOptional()
  @IsString()
  toilet: string;

  @IsOptional()
  @IsString()
  scanner: string;

  @IsOptional()
  @IsString()
  printer_color: string;

  @IsOptional()
  @IsString()
  internetconnectivity: string;

  @IsOptional()
  @IsString()
  ups_inverter: string;

  @IsOptional()
  @IsString()
  no_of_chairs: string;

  @IsOptional()
  @IsString()
  no_of_white_boards: string;

  @IsOptional()
  @IsString()
  cctv: string;

  @IsOptional()
  @IsString()
  projecter: string;

  @IsNotEmpty()
  @IsInt()
  status: number;

  @IsOptional()
  @IsInt()
  created_by: number;

  @IsOptional()
  @IsInt()
  updated_by: number;
  
  @IsOptional()
  @IsInt()
  created_at: number;

  @IsOptional()
  @IsInt()
  updated_at: number;
}
