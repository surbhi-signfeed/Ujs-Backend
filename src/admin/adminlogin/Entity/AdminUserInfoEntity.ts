import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('user')
export class AdminUserInfoEntity {
  @PrimaryGeneratedColumn()
  UserID: number;
  @Column({name: 'is_active',type: 'boolean' })
  is_active: boolean;


  @Column({name: 'UserName',type: 'varchar' })
  UserName: string;
  @Column({name: 'UserPassword',type: 'varchar' })
  UserPassword: string;
  

}