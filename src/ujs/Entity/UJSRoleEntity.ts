import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class UJSRoleEntity {
    @PrimaryGeneratedColumn()
    roll_id: number;

    @Column({ name: 'role_name', type: 'varchar' })
    role_name: string;
    @Column({ name: 'status', type: 'varchar' })
    status: string;
}
