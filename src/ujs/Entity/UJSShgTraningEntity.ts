import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('shg_traning')
export class UJSShgTraningEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name:'meeting_id',type: 'int', nullable: true })
  meeting_id: number;

  @Column({name:"animator_id", type: 'int', nullable: true })
  animator_id: number;

  @Column({ name:"group_id",type: 'int', nullable: true })
  group_id: number;

  @Column({ name:'traning',type: 'varchar', length: 255 })
  traning: string;

  @Column({ name:'traningDate',type: 'date', nullable: true })
  traningDate: string;

  @CreateDateColumn({ name: 'create_date', type: 'int' })
  created_Date: string;
}
