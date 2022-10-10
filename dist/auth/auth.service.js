"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users = [{
        id: 1,
        username: 'carlos',
        password: '$2b$10$VTQxrJa8hmV3DWNpF/VN2e3MDwstB7avrCLZ6xVvdPbmzv6AfQ6Ly',
        role: 'admin'
    },
    { id: 2,
        username: 'Eduardo',
        password: '$2b$10$4kBG.BfKonoZfPqGmHfMwuhBf8H.NbePnuHxLva1gtQ1v17ejgznq',
        role: 'user' }
];
let AuthService = class AuthService {
    login(username, password) {
        console.log(username, password);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map