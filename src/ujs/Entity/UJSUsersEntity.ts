import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UJSUsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({  })
    name: string;

    @Column({  unique: true })
    email: string;

    @Column({ nullable: true })
    email_verified_at: Date;

    @Column({  })
    password: string;

    @Column({  nullable: true })
    photo: string;

    @Column()
    active: number;

    @Column({ nullable: true })
    deleted_at: Date;

    @Column({ nullable: true })
    remember_token: string;

    @Column({ nullable: true })
    created_at: Date;

    @Column({ nullable: true })
    updated_at: Date;

    @Column()
    created_by: number;

    @Column({ nullable: true })
    updated_by: number;

    @Column({ nullable: true })
    department: number;

    @Column()
    role: number;

    @Column({  })
    emp_code: string;

    @Column({ nullable: true })
    mobile: string;

    @Column({ default: 1 })
    user_app: number;

    @Column({ default: 0 })
    admin_app: number;

    @Column({ type: 'text', nullable: true })
    address: string;

    @Column({ nullable: true })
    dob: Date;

    @Column({ nullable: true })
    gender: number;

    @Column({ type: 'text', nullable: true })
    fathername: string;

    @Column({ type: 'text', nullable: true })
    mothername: string;

    @Column({ type: 'text', nullable: true })
    student_email: string;

    @Column({ type: 'text', nullable: true })
    organization: string;

    @Column({  nullable: true })
    EmergencyContact: string;

    @Column({  nullable: true })
    adhaarnumber: string;

    @Column({  nullable: true })
    blood_group: string;

    @Column({ type: 'text', nullable: true })
    student_img: string;

    @Column({ type: 'text', nullable: true })
    student_signature: string;

    @Column({ type: 'text', nullable: true })
    mobiletoken: string;

    @Column({ nullable: true })
    loggedInStatus: number;

    @Column({ nullable: true })
    appLoginDate: Date;

    
}
