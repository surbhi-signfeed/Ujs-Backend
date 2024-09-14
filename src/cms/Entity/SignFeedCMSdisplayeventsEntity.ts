import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('displayevents')
export class SignFeedCMSdisplayeventsEntity{

   
    @PrimaryGeneratedColumn()
    displayEventId:number;
    @Column({ name: 'eventID',type: 'int' })
    eventID:number;
    @Column({ name: 'eventDate',type: 'date' })
    eventDate:Date;
  
    @Column({ name: 'displayid',type: 'int' })
    displayid:number;

    @Column({ name: 'start',type: 'varchar' })
    start:string;
    @Column({ name: 'end',type: 'varchar' })
    end:string;

  


}
