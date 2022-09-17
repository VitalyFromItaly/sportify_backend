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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("./auth.decorators");
const auth_service_1 = require("./auth.service");
const UserCreds_dto_1 = require("./dtos/UserCreds.dto");
const Token_dto_1 = require("./dtos/Token.dto");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const local_auth_guard_1 = require("./local-auth.guard");
const RefreshToken_dto_1 = require("./dtos/RefreshToken.dto");
const user_service_1 = require("../user/user.service");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(user) {
        const tokens = await this.authService.getTokens(user);
        const { refresh_token } = tokens;
        this.userService.setRefreshToken(user.email, refresh_token);
        return tokens;
    }
    async getAccessToken({ refresh_token }, req) {
        try {
            const token = await this.authService.refreshAccessToken(refresh_token, req.user);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
    async getTokens({ refresh_token }, req) {
        try {
            const token = await this.authService.getTokens(req.user, refresh_token);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    auth_decorators_1.Public(),
    swagger_1.ApiOperation({ operationId: 'login' }),
    common_1.Post('login'),
    swagger_1.ApiCreatedResponse({ description: 'login', type: Token_dto_1.TokenDto }),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCreds_dto_1.UserCredsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('refresh-access-token'),
    swagger_1.ApiOperation({ operationId: 'refreshAccessToken' }),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiDefaultResponse({ description: 'refresh tokens', type: Token_dto_1.TokenDto }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RefreshToken_dto_1.RefreshTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAccessToken", null);
__decorate([
    common_1.Post('refresh-tokens'),
    swagger_1.ApiOperation({ operationId: 'refreshTokens' }),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiDefaultResponse({ description: 'refresh tokens', type: Token_dto_1.TokenDto }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RefreshToken_dto_1.RefreshTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getTokens", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map