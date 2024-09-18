import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

export class UJSSHGExpansesDTO {
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsInt()
  group_id?: number;

  @IsOptional()
  @IsString()
  meeting_id?: string;

  @IsOptional()
  @IsInt()
  animator_id?: number;

  @IsOptional()
  @IsInt()
  transport?: number;

  @IsOptional()
  @IsInt()
  tea?: number;

  @IsOptional()
  @IsInt()
  telephone?: number;

  @IsOptional()
  @IsInt()
  meeting?: number;

  @IsOptional()
  @IsInt()
  stationary?: number;

  @IsOptional()
  @IsInt()
  federation?: number;

  @IsOptional()
  @IsInt()
  other_expanses?: number;

  @IsNotEmpty()
  datetime: Date;

  @IsOptional()
  @IsInt()
  total?: number;
}
