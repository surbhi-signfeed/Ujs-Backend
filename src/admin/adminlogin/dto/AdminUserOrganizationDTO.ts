import {IsNotEmpty} from "class-validator";

export class AdminUserOrganizationDTO{
    @IsNotEmpty()
    id:number
     OrganizationName :string
      OrganizationAddress1 :string
      OrganizationAddress2 :string
      City :string
      State :string
      Country :string
      GSTNo:string
       Status:boolean
}