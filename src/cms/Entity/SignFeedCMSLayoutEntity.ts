import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('layout')
export class SignFeedCMSLayoutEntity{

    @PrimaryGeneratedColumn()
    layoutID:number;
    @Column({ name: 'layout',type: 'varchar' })
    layout:string;
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
    @Column({ name: 'userID',type: 'int' })
    userID:number;
    @Column({name:'createdDT',type:'datetime'})
    createdDT:Date
    @Column({ name: 'modifiedDT',type: 'datetime' })
    modifiedDT:Date;
    @Column({name:'description',type:'varchar'})
    description:string
    @Column({name:'tags',type:'varchar'})
    tags:string
    @Column({name:'retired',type:'int'})
    retired:number
    @Column({name:'duration',type:'int'})
    duration:number
    @Column({name:'backgroundImageId',type:'int'})
    backgroundImageId:number
    @Column({name:'status',type:'int'})
    status:number
    @Column({name:'width',type:'decimal'})
    width:number
    @Column({name:'height',type:'decimal'})
    height:number
    @Column({name:'backgroundColor',type:'varchar'})
    backgroundColor:string
    @Column({name:'backgroundzIndex',type:'int'})
    backgroundzIndex:number
    @Column({name:'schemaVersion',type:'int'})
    schemaVersion:number
    @Column({name:'statusMessage',type:'text'})
    statusMessage:string

}
