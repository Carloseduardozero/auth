import { IsNotEmpty } from "class-validator";
import { hashSync } from "bcrypt";

export class userDtos {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    username: string ;

    @IsNotEmpty()
    password: string; //123456

    @IsNotEmpty()
    role: string;

    
    
   
}



