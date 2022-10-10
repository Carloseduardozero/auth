import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { userDtos } from '../dto/user.dto';

@Injectable()
export class UserService {

  private readonly logger = new Logger(UserService.name);
  users: userDtos[] = []

    
  async insertUser(userDtos: userDtos): Promise<void> {
    
    const {password} = userDtos
    const { username } = userDtos
    
   const senha = this.users.find(
     (userDtos) => userDtos.password = hashSync(password,10),
   );


    const userEncontrado = this.users.find(
      (userDtos) => userDtos.username === username,
    );

    if (!userEncontrado) {
      const {
       id,
       password,
       username,
       role
      } = userDtos;

      const users: userDtos = {
        id,
       password : hashSync(password,10),
       username,
       role
      };

      this.logger.log(`userDtos:  ${JSON.stringify(users)}`);
      this.users.push(users);
    } else {
      throw new NotFoundException(
        `Usuario com Login: ${username} já foi cadastrado`,
      );
    }
  }
/*
     users = [ 
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
      ];
*/
     
}
