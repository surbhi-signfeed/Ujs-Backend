import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('user')
export class AdminUserInfoEntity {
  @PrimaryGeneratedColumn()
  UserID: number;
  @Column({name: 'is_active',type: 'boolean' })
  is_active: boolean;

  @Column({name: 'UserType',type: 'varchar' })
  UserType: string;
  @Column({name: 'UserName',type: 'varchar' })
  UserName: string;
  @Column({name: 'UserPassword',type: 'varchar' })
  UserPassword: string;
  @Column({name: 'isPasswordChangeRequired',type: 'int' })
  isPasswordChangeRequired: number;
  @Column({name: 'lastaccessed',type: 'datetime' })
  lastaccessed: Date;
  @Column({name: 'email',type: 'varchar' })
  email: string;
  @Column({name: 'homePageId',type: 'int' })
  homePageId: string;
  @Column({name: 'Retired',type: 'int' })
  Retired: string;
  @Column({name: 'CSPRNG',type: 'int' })
  CSPRNG: number;
  @Column({name: 'newUserWizard',type: 'int' })
  newUserWizard: number;
  @Column({name: 'firstName',type: 'varchar' })
  firstName: string;
  @Column({name: 'lastName',type: 'varchar' })
  lastName: string;
  @Column({name: 'phone',type: 'varchar' })
  phone: string;
  @Column({name: 'ref1',type: 'varchar' })
  ref1: string;
  @Column({name: 'ref2',type: 'varchar' })
  ref2: string;
  @Column({name: 'ref3',type: 'varchar' })
  ref3: string;
  @Column({name: 'ref4',type: 'varchar' })
  ref4: string;
  @Column({name: 'ref5',type: 'varchar' })
  ref5: string;
  @Column({name: 'OrganizationId',type: 'int' })
  OrganizationId: number;

}