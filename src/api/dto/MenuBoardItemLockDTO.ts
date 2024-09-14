import {IsNotEmpty} from "class-validator";
export class MenuBoardItemLockDTO{
    @IsNotEmpty()
    item_no:string
    @IsNotEmpty()
    store_code:string

}