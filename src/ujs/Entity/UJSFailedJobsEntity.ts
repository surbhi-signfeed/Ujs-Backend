import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('failed_jobs')
export class UJSFailedJobEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'uuid', type: 'varchar', length: 255, unique: true })
  uuid: string;

  @Column({ name: 'connection', type: 'text' })
  connection: string;

  @Column({ name: 'queue', type: 'text' })
  queue: string;

  @Column({ name: 'payload', type: 'longtext' })
  payload: string;

  @Column({ name: 'exception', type: 'longtext' })
  exception: string;

  @Column({ name: 'failed_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  failed_at: Date;
}
