import {IsNotEmpty} from "class-validator";

export class CMSUsersDeleteDTO{
    @IsNotEmpty()
    UserID:number

}