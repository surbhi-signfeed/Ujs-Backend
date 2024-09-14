import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('contactus')
export class SignFeedCMSContactEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({ name: 'name',type: 'varchar' })
  name:string
  @Column({ name: 'email',type: 'varchar' })
  email:string

  @Column({ name: 'message',type: 'varchar' })
  message:string

    
  @Column({ name: 'organization',type: 'varchar' })
  organization:string

}
