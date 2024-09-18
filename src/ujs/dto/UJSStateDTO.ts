import { IsNotEmpty } from "class-validator";
export class UJSStateDTO {
    @IsNotEmpty()
    id: number;
    state: string;
    district:string
 
   
}
