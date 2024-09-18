import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UJSUsersEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;
    @Column({ type: 'varchar', length: 255 })
    password: string;
   @Column({ type: 'varchar' })
    active: string;
    @Column({ type: 'varchar', length: 255})
    shg_grp: string;
    @Column({ type: 'varchar', length: 255 })
    role: string;
    @Column({ type: 'varchar', length: 20 })
    emp_code: string;
    @Column({ type: 'varchar', length: 15})
    mobile: string;
    @Column({ type: 'varchar' })
    admin_app: string;

    
}
