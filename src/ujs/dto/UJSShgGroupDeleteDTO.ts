import { IsNotEmpty,IsOptional } from "class-validator";

export class UJSShgGroupDeleteDTO {
    @IsNotEmpty()
    id: number;


}
