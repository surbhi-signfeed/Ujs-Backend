import {IsNotEmpty} from "class-validator";

export class CMSDisplayUpdateDTO{
    @IsNotEmpty()
    displayid:number
    @IsNotEmpty()
    display:string
    description:string
    tags:string
    auditingUntil:number
    defaultLayoutId:number
    licensed:number
    license:string
    incSchedule:number
    emailAlert:number
    alertTimeout:number
    ClientAddress:string
    MediaInventoryStatus:number
    MacAddress:string
    LastChanged:number
    NumberOfMacAddressChanges:number
    LastWakeOnLanCommandSent:number
    WakeOnLan:number
    WakeOnLanTime:string
    BroadCastAddress:string
    secureOn:string
    cidr:number
    latitude:number
    longitude:number
    client_type:string
    client_version:string
    client_code:number
    displayprofileid:number
    screenShotRequested:number
    storageAvailableSpace:number
    storageTotalSpace:number
    lastCommandSuccess:number
    deviceName:string
  accessed: any;
  macAddress: any;
  defaultlayoutid: number;
  loggedin: number;
  inc_schedule: number;
  email_alert: number;
  alert_timeout: number;
  SecureOn: string;
  Cidr: string;
  GeoLocation: number;
  xmrChannel: string;
  xmrPubKey: string;
  timeZone: string;
  overrideConfig: string;
  lastaccessed: number;

}