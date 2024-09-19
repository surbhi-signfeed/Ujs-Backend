import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_member_saving')
export class UJSShgMemeberSavingEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  meeting_id: string;

  @Column({ type: 'int', nullable: true })
  group_id: number;

  @Column({ type: 'int', nullable: true })
  animator_id: number;

  @Column({ type: 'int', nullable: true })
  member_id: number;

  @Column({ type: 'decimal'})
  amount: number;

  @Column({ type: 'datetime', nullable: false })
  collectionDate: Date;

  @Column({ type: 'decimal'})
  federation_amount: number;

  @Column({ type: 'date', nullable: true })
  meetingDate: Date;
}
