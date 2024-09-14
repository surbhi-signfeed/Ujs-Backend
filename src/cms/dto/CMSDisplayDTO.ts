import { IsNotEmpty } from "class-validator";

export class CMSDisplayDTO {
  @IsNotEmpty()
  display: string;
  auditingUntil: number;
  defaultlayoutid: number;
  license: string;
  licensed: number;
  loggedin: number;
  lastaccessed: number;
  inc_schedule: number;
  email_alert: number;
  alert_timeout: number;
  ClientAddress: string;
  MediaInventoryStatus: number;
  MacAddress: string;
  LastChanged: number;
  NumberOfMacAddressChanges: number;
  LastWakeOnLanCommandSent: number;
  WakeOnLan: number;
  WakeOnLanTime: string;
  BroadCastAddress: string;
  SecureOn: string;
  Cidr: string;
  GeoLocation: number;
  client_type: string;
  client_version: string;
  client_code: number;
  displayprofileid: number;
  screenShotRequested: number;
  storageAvailableSpace: number;
  storageTotalSpace: number;
  xmrChannel: string;
  xmrPubKey: string;
  lastCommandSuccess: number;
  deviceName: string;
  timeZone: string;
  overrideConfig: string;
  organization:string;
}
