import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UJSMigrationDTO {
 
  id: number;

  @IsNotEmpty()
  @IsString()
  migration: string;

  @IsNotEmpty()
  @IsNumber()
  batch: number;
}
