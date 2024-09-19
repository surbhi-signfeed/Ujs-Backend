import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_contact_us')
export class UJSShgContactEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;
    @Column({ name: 'email', type: 'varchar' })
    email: string;
    @Column({ name: 'mobile', type: 'varchar' })
    mobile: string;
    @Column({ name: 'subject', type: 'varchar' })
    subject: string;
    @Column({ name: 'message', type: 'varchar' })
    message: string;
    @Column({ name: 'contactDate', type: 'datetime' })
    contactDate: Date;
}
