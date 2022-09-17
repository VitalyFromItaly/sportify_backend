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
exports.TokenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class TokenDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'access token'
    }),
    class_validator_1.IsJWT(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TokenDto.prototype, "access_token", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'access token'
    }),
    class_validator_1.IsJWT(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], TokenDto.prototype, "refresh_token", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'when access_token will be expired',
        example: 1243464554
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], TokenDto.prototype, "access_token_expires_in", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'when refresh_token will be expired',
        example: 1243464554
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], TokenDto.prototype, "refresh_token_expires_in", void 0);
exports.TokenDto = TokenDto;
//# sourceMappingURL=Token.dto.js.map