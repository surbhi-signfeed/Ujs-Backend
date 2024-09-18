import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('migrations')
export class UJSMigrationEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'migration', type: 'varchar', length: 255 })
  migration: string;

  @Column({ name: 'batch', type: 'int' })
  batch: number;
}
