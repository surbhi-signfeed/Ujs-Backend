import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UJSFailedJobDTO {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsString()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  connection: string;

  @IsNotEmpty()
  @IsString()
  queue: string;

  @IsNotEmpty()
  @IsString()
  payload: string;

  @IsNotEmpty()
  @IsString()
  exception: string;

  @IsOptional()
  failed_at: Date;
}
