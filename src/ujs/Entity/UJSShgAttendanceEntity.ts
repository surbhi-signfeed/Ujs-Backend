import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_attendance')
export class UJSShgAttendanceEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50 })
    meeting_id: string;
  
    @Column({ type: 'int' })
    group_id: number;
  
    @Column({ type: 'varchar', length: 100 })
    group_name: string;
  
    @Column({ type: 'int' })
    animator_id: number;
  
    @Column({ type: 'varchar', length: 100 })
    animator_name: string;
  
    @Column({ type: 'int' })
    member_id: number;
  
    @Column({ type: 'varchar', length: 100 })
    member_name: string;
  
    @Column({ type: 'varchar', length: 10 })
    attendance: string;
  
    @Column({ type: 'datetime' })
    datetime: Date;
  
    @Column({ type: 'date' })
    meetingDate: Date;
}
