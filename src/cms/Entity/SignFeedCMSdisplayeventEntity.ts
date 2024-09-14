import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('displayevent')
export class SignFeedCMSdisplayeventEntity{

   
    @PrimaryGeneratedColumn()
    displayEventId:number;
    
    @Column({ name: 'eventDate',type: 'date' })
    eventDate:Date;
  
    @Column({ name: 'displayid',type: 'int' })
    displayid:number;

    @Column({ name: 'start',type: 'varchar' })
    start:string;
    @Column({ name: 'end',type: 'varchar' })
    end:string;
  


}
