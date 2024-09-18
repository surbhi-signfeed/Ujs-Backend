import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permission_detail')
export class UJSRolePermissionEntity {
    @PrimaryGeneratedColumn()
    per_id: number;
    @Column({ name: 'roll_id', type: 'int' })
    roll_id: number;
    @Column({ name: 'permission_name', type: 'varchar' })
    permission_name: string;
    @Column({ name: 'active', type: 'varchar' })
    active: string;
}
