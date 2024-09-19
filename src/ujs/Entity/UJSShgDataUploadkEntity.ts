import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_data_upload')
export class UJSShgDataUploadEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: true })
    group_id?: number;

    @Column({ type: 'int', nullable: true })
    member_id?: number;

    @Column({ type: 'varchar'})
    member_name?: string;

    @Column({ type: 'varchar'})
    HusbandFather_Name?: string;

    @Column({ type: 'varchar'})
    attendance?: string;

    @Column({ type: 'decimal'})
    opening?: number;

    @Column({ type: 'decimal'})
    saving?: number;

    @Column({ type: 'decimal'})
    special_saving?: number;

    @Column({ type: 'decimal'})
    installment?: number;

    @Column({ type: 'decimal'})
    interest?: number;

    @Column({ type: 'decimal'})
    penalty?: number;

    @Column({ type: 'decimal', })
    fix_loan: number;

    @Column({ type: 'decimal'})
    bank_loan?: number;

    @Column({ type: 'decimal'})
    bank_interest?: number;

    @Column({ type: 'decimal'})
    new_loan?: number;

    @Column({ type: 'decimal'})
    remaining_loan?: number;

    @Column({ type: 'date', nullable: true })
    meeting_date?: Date;

    @Column({ type: 'varchar'})
    meeting_id?: string;

    @Column({ type: 'datetime' })
    datetime: Date;

    @Column({ type: 'decimal', })
    openingBal: number;

    @Column({ type: 'decimal', })
    fixLoan: number;
   
}
