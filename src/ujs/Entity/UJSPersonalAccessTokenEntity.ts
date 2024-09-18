import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('personal_access_tokens')
@Index('personal_access_tokens_tokenable_type_tokenable_id_index', ['tokenable_type', 'tokenable_id'])
export class UJSPersonalAccessTokenEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'tokenable_type', type: 'varchar', length: 255 })
  tokenable_type: string;

  @Column({ name: 'tokenable_id', type: 'bigint', unsigned: true })
  tokenable_id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'token', type: 'varchar', length: 64, unique: true })
  token: string;

  @Column({ name: 'abilities', type: 'text', nullable: true })
  abilities?: string;

  @Column({ name: 'last_used_at', type: 'timestamp', nullable: true })
  last_used_at?: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  created_at?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updated_at?: Date;
}
