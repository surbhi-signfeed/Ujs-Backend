import { IsNotEmpty,IsOptional } from "class-validator";
export class UJSUsersDTO {
 
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    active: number;
    @IsNotEmpty()
    created_by: number;
    @IsNotEmpty()
    role: number;

    @IsNotEmpty()
    emp_code: string;
    @IsNotEmpty()
    user_app: number;

    @IsNotEmpty()
    admin_app: number;
    email: string;

    @IsOptional()
    email_verified_at: Date;


    @IsOptional()
    photo: string;


    @IsOptional()
    deleted_at: Date;

    @IsOptional()
    remember_token: string;

    @IsOptional()
    created_at: Date;

    @IsOptional()
    updated_at: Date;

    
    @IsOptional()
    updated_by: number;

    @IsOptional()
    department: number;

   
    @IsOptional()
    mobile: string;
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
