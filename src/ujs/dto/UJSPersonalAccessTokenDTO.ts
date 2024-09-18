import { IsNotEmpty, IsOptional, IsString, IsInt, IsNumber } from 'class-validator';

export class UJSPersonalAccessTokenDTO {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  @IsString()
  tokenable_type: string;

  @IsNotEmpty()
  @IsNumber()
  tokenable_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  token: string;

  @IsOptional()
  @IsString()
  abilities?: string;

  @IsOptional()
  last_used_at?: Date;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}
