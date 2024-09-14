import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('lkdisplaydg')
export class SignFeedCMSDisplayMemberEntity {

    @PrimaryGeneratedColumn()
    LkDisplayDGID: number;

    @Column({ name: 'DisplayGroupID', type: 'int' })
    DisplayGroupID: number;

    @Column({ name: 'DisplayID', type: 'int' })
    DisplayID: number;

   
}
