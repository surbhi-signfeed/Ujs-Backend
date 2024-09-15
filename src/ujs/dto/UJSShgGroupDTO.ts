import { IsNotEmpty } from "class-validator";

export class UJSShgGroupDTO {
    @IsNotEmpty()
    ID: string;

    @IsNotEmpty()
    group_id: string;

    @IsNotEmpty()
    group_name: string;

    @IsNotEmpty()
    group_leader: string;

    @IsNotEmpty()
    formation_date: string;

    @IsNotEmpty()
    state_name: string;

    @IsNotEmpty()
    district_name: string;

    @IsNotEmpty()
    location_name: string;

    @IsNotEmpty()
    village_name: string;

    @IsNotEmpty()
    taluka_name: string;

    @IsNotEmpty()
    bank_name: string;

    @IsNotEmpty()
    bank_branch: string;

    @IsNotEmpty()
    bank_account: string;

    @IsNotEmpty()
    cash_in_hand: string;

    @IsNotEmpty()
    federation_amount: string;

    @IsNotEmpty()
    cash_at_bank: string;

    @IsNotEmpty()
    total_member: number;

    @IsNotEmpty()
    last_meeting_date: string;

    @IsNotEmpty()
    status: string;
}
