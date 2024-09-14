import {IsNotEmpty} from "class-validator";

export class CMSScheduledisplaygroupDTO{
    @IsNotEmpty()
    eventId:number
    @IsNotEmpty()
    displayGroupId:number
    
}