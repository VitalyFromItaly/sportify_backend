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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const app_utils_1 = require("../../../app.utils");
const match_decorator_1 = require("../../../common/decorators/match.decorator");
const user_domain_1 = require("../user.domain");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'user`s email',
        example: 'awesomeemail@gmail.com'
    }),
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'user`s password',
        example: 'awesomePassword123!@#'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(6, 32),
    class_validator_1.Matches(app_utils_1.REGEX.PASSWORD_RULE, { message: app_utils_1.MESSAGES.PASSWORD_RULE_MESSAGE }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'user`s password confirmation',
        example: 'awesomePassword123!@#'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(6, 32),
    match_decorator_1.Match(CreateUserDto, (user) => user.password, { message: "'password' and 'password confirm' fields don't match" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password_confirm", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'system language',
        enum: user_domain_1.ELanguages,
        enumName: 'ELanguages'
    }),
    class_validator_1.IsEnum(user_domain_1.ELanguages),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "language", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=CreateUser.dto.js.map