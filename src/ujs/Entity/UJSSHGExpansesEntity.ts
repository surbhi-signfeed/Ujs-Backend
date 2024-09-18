import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('SHG_expanses')
export class UJSSHGExpansesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'group_id', type: 'int', nullable: true })
  group_id?: number;

  @Column({ name: 'meeting_id', type: 'varchar', length: 50, nullable: true })
  meeting_id?: string;

  @Column({ name: 'animator_id', type: 'int', nullable: true })
  animator_id?: number;

  @Column({ name: 'transport', type: 'int', nullable: true })
  transport?: number;

  @Column({ name: 'tea', type: 'int', nullable: true })
  tea?: number;

  @Column({ name: 'telephone', type: 'int', nullable: true })
  telephone?: number;

  @Column({ name: 'meeting', type: 'int', nullable: true })
  meeting?: number;

  @Column({ name: 'stationary', type: 'int', nullable: true })
  stationary?: number;

  @Column({ name: 'federation', type: 'int', nullable: true })
  federation?: number;

  @Column({ name: 'other_expanses', type: 'int', nullable: true })
  other_expanses?: number;

  @CreateDateColumn({ name: 'datetime', type: 'datetime' })
  datetime: Date;

  @Column({ name: 'total', type: 'int', nullable: true })
  total?: number;
}
