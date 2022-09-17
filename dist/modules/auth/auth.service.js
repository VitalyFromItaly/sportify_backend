"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const app_utils_1 = require("../../app.utils");
const jwt_1 = require("@nestjs/jwt");
const auth_constants_1 = require("./auth.constants");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async getTokens(userInfo, refreshToken) {
        const user = await this.userService.findOneByEmail(userInfo.email);
        if (!user) {
            throw new common_1.BadRequestException(app_utils_1.MESSAGES.USER_NOT_FOUND);
        }
        if (refreshToken) {
            const isRefreshTokenMatched = bcrypt.compare(user.refresh_token, refreshToken);
            if (!isRefreshTokenMatched) {
                throw new common_1.UnauthorizedException(app_utils_1.MESSAGES.INVALID_TOKEN);
            }
        }
        const accessTokenExpiresIn = new Date().getTime() + auth_constants_1.EExpirationTime.TWO_DAYS;
        const refreshTokenExpiresIn = new Date().getTime() + auth_constants_1.EExpirationTime.ONE_MONTH;
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(Object.assign({}, userInfo), { secret: this.configService.get('auth.secret_key'), expiresIn: accessTokenExpiresIn }),
            this.jwtService.signAsync(Object.assign({}, userInfo), { secret: this.configService.get('auth.secret_key'), expiresIn: refreshTokenExpiresIn })
        ]);
        return { access_token, refresh_token, refresh_token_expires_in: refreshTokenExpiresIn, access_token_expires_in: accessTokenExpiresIn };
    }
    async refreshAccessToken(refreshToken, userCreds) {
        if (!userCreds) {
            throw new common_1.BadRequestException(app_utils_1.MESSAGES.USER_NOT_FOUND);
        }
        const user = await this.userService.findOneByEmail(userCreds.email);
        if (!user) {
            throw new common_1.BadRequestException(app_utils_1.MESSAGES.USER_NOT_FOUND);
        }
        const isRefreshTokenMatched = bcrypt.compare(user.refresh_token, refreshToken);
        if (!isRefreshTokenMatched) {
            throw new common_1.UnauthorizedException(app_utils_1.MESSAGES.INVALID_TOKEN);
        }
        const { email, password } = user;
        const token = await this.getAccessToken({ email, password });
        return token;
    }
    async getAccessToken(userInfo) {
        const expiresIn = new Date().getTime() + auth_constants_1.EExpirationTime.TWO_DAYS;
        const access_token = await this.jwtService.signAsync(Object.assign({}, userInfo), { secret: this.configService.get('auth.secret_key'), expiresIn });
        return { access_token_expires_in: expiresIn, access_token };
    }
    async validateUserCreds(email, password) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.BadRequestException(app_utils_1.MESSAGES.USER_NOT_FOUND);
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException(app_utils_1.MESSAGES.WRONG_PASSWORD);
        }
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService, config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map