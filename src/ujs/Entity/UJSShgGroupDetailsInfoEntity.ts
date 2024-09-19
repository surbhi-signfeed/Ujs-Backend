import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_group_details_info')
export class UJSShgGroupDetailsInfoEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar',  nullable: true })
    NameOfSHG: string;
  
    @Column({ type: 'varchar',  nullable: true })
    NameOfDhani: string;
  
    @Column({ type: 'varchar',  nullable: true })
    NameOfVillage: string;
  
    @Column({ type: 'varchar',  nullable: true })
    NameOfGramPanchayat: string;
  
    @Column({ type: 'varchar',  nullable: true })
    DateOfFormation: string;
  
    @Column({ type: 'varchar',  nullable: true })
    CordinatorName: string;
  
    @Column({ type: 'date', nullable: true })
    Date: Date;
  
    @Column({ type: 'varchar',  nullable: true })
    Month: string;
  
    @Column({ type: 'varchar',  nullable: true })
    Time: string;
  
    @Column({ type: 'varchar',  nullable: true })
    ProjectIstandIInd: string;
  
    @Column({ type: 'varchar',  nullable: true })
    BankLinkedge: string;
  
    @Column({ type: 'varchar',  nullable: true })
    BankName: string;
  
    @Column({ type: 'varchar', nullable: true })
    BankBranch: string;
  
    @Column({ type: 'varchar',  nullable: true })
    BankAcNo: string;
  
    @Column({ type: 'varchar',  nullable: true })
    LOANSTATUS: string;
  
    @Column({ type: 'varchar',  nullable: true })
    LoanEmiLastMonth: string;
  
    @Column({ type: 'varchar',  nullable: true })
    Totalmeeting: string;
  
    @Column({ type: 'varchar',  nullable: true })
    TotalmemberOfSHG: string;
  
    @Column({ type: 'varchar', nullable: true })
    ThisMonthSaving: string;
  
    @Column({ type: 'varchar', nullable: true })
    Regularsavings: string;
  
    @Column({ type: 'varchar', nullable: true })
    Interestincome: string;
  
    @Column({ type: 'varchar', nullable: true })
    Groupfund: string;
  
    @Column({ type: 'varchar', nullable: true })
    Penalty: string;
  
    @Column({ type: 'varchar', nullable: true })
    fedretioncharge: string;
  
    @Column({ type: 'varchar', nullable: true })
    fadretionThisMonth: string;
  
    @Column({ type: 'varchar', nullable: true })
    fedretion: string;
  
    @Column({ type: 'varchar', nullable: true })
    Total: string;
  
    @Column({ type: 'varchar', nullable: true })
    interloanLoan: string;
  
    @Column({ type: 'varchar', nullable: true })
    GroupExpenses: string;
  
    @Column({ type: 'varchar', nullable: true })
    SHGfixloan: string;
  
    @Column({ type: 'varchar', nullable: true })
    Bank: string;
  
    @Column({ type: 'varchar', nullable: true })
    Manch: string;
  
    @Column({ type: 'varchar', nullable: true })
    fadretion1: string;
  
    @Column({ type: 'varchar', nullable: true })
    Cashinhand: string;
  
    @Column({ type: 'varchar', nullable: true })
    Total1: string;
  
    @Column({ type: 'varchar', nullable: true })
    Different: string;
  
    @Column({ type: 'varchar', nullable: true })
    attendanceExpected: string;
}
