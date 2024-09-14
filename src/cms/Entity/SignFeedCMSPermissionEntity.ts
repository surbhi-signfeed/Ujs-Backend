import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('userpermission')
export class SignFeedCMSPermissionEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({ name: 'PermissionName',type: 'varchar' })
    PermissionName:string

    @Column({ name: 'ModuleId',type: 'int' })
    ModuleId:number

     @Column({ name: 'ModuleName',type: 'varchar' })
    ModuleName:string
   

}
