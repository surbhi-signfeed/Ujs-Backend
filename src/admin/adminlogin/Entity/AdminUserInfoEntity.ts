import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('user')
export class AdminUserInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name: 'active',type: 'boolean' })
  active: boolean;


  @Column({name: 'email',type: 'varchar' })
  email: string;
  @Column({name: 'password',type: 'varchar' })
  password: string;
  
  @Column({name: 'role',type: 'int' })
  role: number;
  

}