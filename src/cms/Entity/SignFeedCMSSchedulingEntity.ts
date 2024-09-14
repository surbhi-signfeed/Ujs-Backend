import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('schedule')
export class SignFeedCMSSchedulingEntity {

    @PrimaryGeneratedColumn()
    eventID: number;

    @Column({ name: 'eventTypeId', type: 'int' })
    eventTypeId: number;

    @Column({ name: 'CampaignID', type: 'int' })
    CampaignID: number;

    @Column({ name: 'commandId', type: 'int' })
    commandId: number;

    @Column({ name: 'recurrence_type', type: 'varchar' })
    recurrence_type: string;

    @Column({ name: 'recurrence_detail', type: 'varchar' })
    recurrence_detail: string;

    @Column({ name: 'userID', type: 'int' })
    userID: number;

    @Column({ name: 'is_priority', type: 'int' })
    is_priority: number;

    @Column({ name: 'FromDT', type: 'varchar' })
    FromDT: string;

    @Column({ name: 'ToDT', type: 'varchar' })
    ToDT: string;
    // @Column({ name: 'FromTm', type: 'varchar' })
    // FromTm: string;

    // @Column({ name: 'ToTm', type: 'varchar' })
    // ToTm: string;

    @Column({ name: 'recurrence_range', type: 'varchar' })
    recurrence_range: string;

    @Column({ name: 'DisplayOrder', type: 'int' })
    DisplayOrder: number;

    @Column({ name: 'displayid', type: 'int' })
    displayid: number;
    
    // @Column({ name: 'layout', type: 'varchar' })
    // layout: string;
    @Column({ name: 'recurrenceRepeatsOn', type: 'varchar' })
    recurrenceRepeatsOn: string;

    @Column({ name: 'lastRecurrenceWatermark', type: 'varchar' })
    lastRecurrenceWatermark: String;

    @Column({ name: 'syncTimezone', type: 'varchar' })
    syncTimezone: string;

    @Column({ name: 'syncEvent', type: 'boolean' })
    syncEvent: boolean;
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
}

