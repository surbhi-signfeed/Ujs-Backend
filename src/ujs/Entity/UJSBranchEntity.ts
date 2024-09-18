import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('branchs')
export class UJSBranchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'branch_name', type: 'varchar', length: 100 })
  branch_name: string;

  @Column({ name: 'branch_code', type: 'varchar', length: 20, nullable: true })
  branch_code: string;

  @Column({ name: 'director_name', type: 'varchar', length: 50, nullable: true })
  director_name: string;

  @Column({ name: 'father_name', type: 'varchar', length: 50, nullable: true })
  father_name: string;

  @Column({ name: 'qualification', type: 'varchar', length: 100, nullable: true })
  qualification: string;

  @Column({ name: 'village', type: 'varchar', length: 100, nullable: true })
  village: string;

  @Column({ name: 'block', type: 'varchar', length: 30, nullable: true })
  block: string;

  @Column({ name: 'state', type: 'varchar', length: 30, nullable: true })
  state: string;

  @Column({ name: 'district', type: 'varchar', length: 30, nullable: true })
  district: string;

  @Column({ name: 'po', type: 'varchar', length: 30, nullable: true })
  po: string;

  @Column({ name: 'pincode', type: 'varchar', length: 20, nullable: true })
  pincode: string;

  @Column({ name: 'mobile', type: 'varchar', length: 20, nullable: true })
  mobile: string;

  @Column({ name: 'email', type: 'varchar', length: 30, nullable: true })
  email: string;

  @Column({ name: 'centerType', type: 'varchar', length: 50, nullable: true })
  centerType: string;

  @Column({ name: 'center_timing', type: 'varchar', nullable: true })
  center_timing: string;

  @Column({ name: 'no_of_computer', type: 'varchar', length: 10, nullable: true })
  no_of_computer: string;

  @Column({ name: 'center_area', type: 'varchar', length: 300, nullable: true })
  center_area: string;

  @Column({ name: 'toilet', type: 'varchar', length: 10, nullable: true })
  toilet: string;

  @Column({ name: 'scanner', type: 'varchar', length: 10, nullable: true })
  scanner: string;

  @Column({ name: 'printer_color', type: 'varchar', length: 10, nullable: true })
  printer_color: string;

  @Column({ name: 'internetconnectivity', type: 'varchar', length: 10, nullable: true })
  internetconnectivity: string;

  @Column({ name: 'ups_inverter', type: 'varchar', length: 10, nullable: true })
  ups_inverter: string;

  @Column({ name: 'no_of_chairs', type: 'varchar', length: 10, nullable: true })
  no_of_chairs: string;

  @Column({ name: 'no_of_white_boards', type: 'varchar', length: 10, nullable: true })
  no_of_white_boards: string;

  @Column({ name: 'cctv', type: 'varchar', length: 10, nullable: true })
  cctv: string;

  @Column({ name: 'projecter', type: 'varchar', length: 10, nullable: true })
  projecter: string;

  @Column({ name: 'status', type: 'int', default: 1 })
  status: number;

  @Column({ name: 'created_at', type: 'int'})
  created_at: number;

  @Column({ name: 'created_by', type: 'int' })
  created_by: number;

  @Column({ name: 'updated_at', type: 'int' })
  updated_at: number;

  @Column({ name: 'updated_by', type: 'int' })
  updated_by: number;
}
