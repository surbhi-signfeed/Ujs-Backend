import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_auditing')
export class UJSShgAuditingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'meeting_id', type: 'varchar' })
    meeting_id: string;
    @Column({ name: 'animator_id', type: 'int' })
    animator_id: number;
    @Column({ name: 'auditor_name', type: 'varchar' })
    auditor_name: string;
    @Column({ name: 'group_id', type: 'int' })
    group_id: number;
    @Column({ name: 'fromdate', type: 'date' })
    fromdate: Date;
    @Column({ name: 'todate', type: 'date' })
    todate: Date;
    @Column({ name: 'auditdate', type: 'date' })
    auditdate: Date;
    @Column({ name: 'created_date', type: 'date' })
    created_date: Date;
}
