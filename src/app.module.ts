import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user/user.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
