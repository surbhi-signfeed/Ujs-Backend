import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('display')
export class SignFeedCMSDisplayEntity{

    @PrimaryGeneratedColumn()
    displayid:number;
    @Column({ name: 'auditingUntil',type: 'int' })
    auditingUntil:number;
    @Column({ name: 'display',type: 'varchar' })
    display:string;
    @Column({ name: 'defaultlayoutid',type: 'int' })
    defaultlayoutid:number;
    @Column({ name: 'license',type: 'varchar' })
    license:string;
    @Column({ name: 'licensed',type: 'int' })
    licensed:number;
    @Column({ name: 'loggedin',type: 'int' })
    loggedin:number;
    @Column({name:'lastaccessed',type:'int'})
    lastaccessed:number
    @Column({ name: 'inc_schedule',type: 'int' })
    inc_schedule:number;
    @Column({name:'email_alert',type:'int'})
    email_alert:number
    @Column({name:'alert_timeout',type:'int'})
    alert_timeout: number
    @Column({name:'ClientAddress',type:'varchar'})
    ClientAddress:string
    @Column({name:'MediaInventoryStatus',type:'int'})
    MediaInventoryStatus:number
    @Column({name:'MacAddress',type:'varchar'})
    MacAddress:string
    @Column({name:'LastChanged',type:'int'})
    LastChanged:number
    @Column({name:'NumberOfMacAddressChanges',type:'int'})
    NumberOfMacAddressChanges:number
    @Column({name:'LastWakeOnLanCommandSent',type:'int'})
    LastWakeOnLanCommandSent:number
    @Column({name:'WakeOnLan',type:'int'})
    WakeOnLan:number
    @Column({name:'WakeOnLanTime',type:'varchar'})
    WakeOnLanTime:string
    @Column({name:'BroadCastAddress',type:'varchar'})
    BroadCastAddress:string
    @Column({name:'SecureOn',type:'varchar'})
    SecureOn:string
    @Column({name:'Cidr',type:'varchar'})
    Cidr:string
    @Column({name:'GeoLocation',type:'decimal'})
    GeoLocation:number

    @Column({name:'client_type',type:'varchar'})
    client_type:string
    @Column({name:'client_version',type:'varchar'})
    client_version:string
    @Column({name:'client_code',type:'int'})
    client_code:number
    @Column({name:'displayprofileid',type:'int'})
    displayprofileid:number
    @Column({name:'screenShotRequested',type:'int'})
    screenShotRequested:number
    @Column({name:'storageAvailableSpace',type:'bigint'})
    storageAvailableSpace:number
    @Column({name:'storageTotalSpace',type:'bigint'})
    storageTotalSpace:number

    @Column({name:'xmrChannel',type:'varchar'})
    xmrChannel:string
    @Column({name:'xmrPubKey',type:'text'})
    xmrPubKey:string
    @Column({name:'lastCommandSuccess',type:'int'})
    lastCommandSuccess:number
    @Column({name:'deviceName',type:'varchar'})
    deviceName:string
    @Column({name:'timeZone',type:'varchar'})
    timeZone:string
    @Column({name:'overrideConfig',type:'text'})
    overrideConfig:string
  accessed: any;
  macAddress: any;
  @Column({ name: 'organization',type: 'varchar' })
  organization:string

}
