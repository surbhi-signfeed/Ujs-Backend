import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('lkuserpermission')
export class SignFeedCMSLkPermissionEntity{
    @PrimaryGeneratedColumn()
    id:number
  

    @Column({ name: 'UserID',type: 'int' })
    UserID:number
    @Column({ name: 'Pid',type: 'int' })
    Pid:number
    @Column({ name: 'Status',type: 'int' })
    Status:number

   

}
