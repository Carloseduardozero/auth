"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let UserService = UserService_1 = class UserService {
    constructor() {
        this.logger = new common_1.Logger(UserService_1.name);
        this.users = [];
    }
    async insertUser(userDtos) {
        const { password } = userDtos;
        const { username } = userDtos;
        const senha = this.users.find((userDtos) => userDtos.password = (0, bcrypt_1.hashSync)(password, 10));
        const userEncontrado = this.users.find((userDtos) => userDtos.username === username);
        if (!userEncontrado) {
            const { id, password, username, role } = userDtos;
            const users = {
                id,
                password: (0, bcrypt_1.hashSync)(password, 10),
                username,
                role
            };
            this.logger.log(`userDtos:  ${JSON.stringify(users)}`);
            this.users.push(users);
        }
        else {
            throw new common_1.NotFoundException(`Usuario com Login: ${username} já foi cadastrado`);
        }
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map