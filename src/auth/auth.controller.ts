import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userDtos } from '../user/dto/user.dto';
import { UserService } from '../user/user/user.service';
import { AuthService } from './auth.service';
import { JwtGuard } from './jw.guard';
import { Role } from './role.decorator';
import { RoleGuard } from './role.guard';

@Controller()
export class AuthController {


    constructor(private AuthService: AuthService,private UserService:UserService){}

@Post('cadastro')
async insertUser(@Body() userDtos:userDtos){
  return this.UserService.insertUser(userDtos)
}

@Post('login')
login(@Body() body) {
    return  this.AuthService.login
      (body.username, body.password) ;

}

@UseGuards(JwtGuard)
@Post('test')
test() {
  return {success: true}
  
}


}
