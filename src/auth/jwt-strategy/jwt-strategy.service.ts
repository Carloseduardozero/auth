import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt'; //passport = strategy



@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'abcd123456',
    });
  }

  async validate(payload) {
    return  {

      sub: payload.id,
      username: payload.username,
      role: payload.role,
    };
  }
}

/*
@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jWt') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrkey: 'abcd123456',
        });
    }

    async validate(payload) {
        return payload;
    }
}*/
