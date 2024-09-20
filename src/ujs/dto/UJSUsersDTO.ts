import { IsNotEmpty,IsOptional } from "class-validator";
export class UJSUsersDTO {
    @IsNotEmpty()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    
    email: string;

    @IsOptional()
    email_verified_at: Date;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    photo: string;

    @IsNotEmpty()
    active: number;

    @IsOptional()
    deleted_at: Date;

    @IsOptional()
    remember_token: string;

    @IsOptional()
    created_at: Date;

    @IsOptional()
    updated_at: Date;

    @IsNotEmpty()
    created_by: number;

    @IsOptional()
    updated_by: number;

    @IsOptional()
    department: number;

    @IsNotEmpty()
    role: number;

    @IsNotEmpty()
    emp_code: string;

    @IsOptional()
    mobile: string;

    @IsNotEmpty()
    user_app: number;

    @IsNotEmpty()
    admin_app: number;

    @IsOptional()
    address: string;

    @IsOptional()
    dob: Date;

    @IsOptional()
    gender: number;

    @IsOptional()
    fathername: string;

    @IsOptional()
    mothername: string;

    @IsOptional()
    student_email: string;

    @IsOptional()
    organization: string;

    @IsOptional()
    EmergencyContact: string;

    @IsOptional()
    adhaarnumber: string;

    @IsOptional()
    blood_group: string;

    @IsOptional()
    student_img: string;

    @IsOptional()
    student_signature: string;

    @IsOptional()
    mobiletoken: string;

    @IsOptional()
    loggedInStatus: number;

    @IsOptional()
    appLoginDate: Date;
}
