import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_meeting_track')
export class UJSShgMeetingTrackEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int', nullable: true })
    group_id: number;
  
    @Column({ type: 'varchar', nullable: true })
    animator_id: string;
  
    @Column({ type: 'date', nullable: true })
    datetime: Date;
  
    @Column({ type: 'date', nullable: true })
    meetingDate: Date;
  
    @Column({ type: 'varchar', nullable: true })
    month: string;
  
    @Column({ type: 'varchar', nullable: true })
    meeting_id: string;
  
    @Column({ type: 'int', nullable: true })
    Attendance: number;
  
    @Column({ type: 'int', nullable: true })
    Saving: number;
  
    @Column({ type: 'int', nullable: true })
    InternalLoanRepayment: number;
  
    @Column({ type: 'int', nullable: true })
    BankLoanRepayment: number;
  
    @Column({ type: 'int', nullable: true })
    InternalLoanDistribution: number;
  
    @Column({ type: 'int', nullable: true })
    BankLoanDistribution: number;
  
    @Column({ type: 'int', nullable: true })
    SummaryReport: number;
  
    @Column({ type: 'timestamp' })
    updatedAt: Date;
  }
