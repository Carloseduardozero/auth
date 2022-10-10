import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {UserService} from '../user/user/user.service'


/*
const users = [ 
    {
      id: 1,
      username: 'carlos@gmail.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
      role: 'admin',
    },
    {
      id: 2,
      username: 'user2@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
      role: 'user',
    },
    {
      id: 3,
      username: 'user3@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
      role: 'user',
    },
  ];*/
  //bcrypt
  @Injectable()
  export class AuthService {
    constructor(private jwtService: JwtService, private readonly UserService:UserService) {}

    users = this.UserService.users
  
    login(username: string, password: string) {
      const user = this.validateCredentials(username, password);
  
      const payload = {
        sub: user.id,
        username: user.username,
        role: user.role,
      };

      
     console.log(username,password)
     return {
      token: this.jwtService.sign(payload),
    };
        

      
    }
  
    validateCredentials(username: string, password: string) {
      const user = this.users.find(
        (u) =>
          u.username === username && bcrypt.compareSync(password, u.password),
      );
      if (!user) {
        throw new Error('User not found');
      }
  
      return user;
      }
    }

/*
const users = [
    {
        id: 1,
        username:'carlos@gmail.com',
        password: '$2b$10$VTQxrJa8hmV3DWNpF/VN2e3MDwstB7avrCLZ6xVvdPbmzv6AfQ6Ly', // 123456
        role: 'admin',
    },
    {
    id: 2,
    username: 'Eduardo@gmail.com',
    password: '$2b$10$4kBG.BfKonoZfPqGmHfMwuhBf8H.NbePnuHxLva1gtQ1v17ejgznq', //123
    role: 'user',
    },
];

@Injectable()
export class AuthService{

    constructor (private jwtService: JwtService){}

    login(username: string, password: string) {
        const user = this.validateCredentials(username, password);
    
        const payload = {
          sub: user.id,
          username: user.username,
          role: user.role,
        };
    
        return this.jwtService.sign(payload);
      }

    validateCredentials (username:string, password:string){
        const user  = users.find((u)=>u.username === username
        && bcrypt.compareSync(password, u.password));

        return user;

    }
}
*/
    