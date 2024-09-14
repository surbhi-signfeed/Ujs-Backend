import {IsNotEmpty} from "class-validator";

export class PlayerDTO{
    @IsNotEmpty()
    ServerKey:string
    @IsNotEmpty()
    DeviceID:string
    @IsNotEmpty()
    DeviceName:string
    @IsNotEmpty()
    ClientVersion:number
    @IsNotEmpty()
    OperatingSystem:string
    @IsNotEmpty()
    MacAddress:string
}