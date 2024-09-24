import { IsNotEmpty ,IsOptional} from "class-validator";

export class UJSShgMemberDeleteDTO {
    @IsNotEmpty()
    id: number;
  
}

