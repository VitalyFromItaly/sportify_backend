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
exports.UpdateUserProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const activity_entity_1 = require("../../activity/entities/activity.entity");
const user_domain_1 = require("../user.domain");
class UpdateUserProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s uniq id',
        example: 45
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user`s gender',
        example: user_domain_1.EGender.FEMALE
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(user_domain_1.EGender),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user`s height',
        example: 178,
        minimum: 80,
        maximum: 250
    }),
    (0, class_validator_1.Min)(80),
    (0, class_validator_1.Max)(250),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user`s weight',
        example: 78,
        minimum: 30,
        maximum: 300
    }),
    (0, class_validator_1.Min)(30),
    (0, class_validator_1.Max)(300),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user`s goal',
        example: user_domain_1.EGoal.WEIGHT_MAINTENANCE
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(user_domain_1.EGoal.WEIGHT_REDUCTION),
    (0, class_validator_1.Max)(user_domain_1.EGoal.COMPETITION_PREPARATION),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "goal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user`s age',
        example: new Date(11, 1, 1993),
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateUserProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'user status',
        example: user_domain_1.EUserStatus.NEW
    }),
    (0, class_validator_1.Min)(user_domain_1.EUserStatus.NEW),
    (0, class_validator_1.Max)(user_domain_1.EUserStatus.KNOWN),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserProfileDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: user_domain_1.ELanguages, enumName: 'ELanguages', description: 'user chosen language' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'user activities ', type: [activity_entity_1.Activity] }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateUserProfileDto.prototype, "activities", void 0);
exports.UpdateUserProfileDto = UpdateUserProfileDto;
//# sourceMappingURL=UpdateUserProfile.dto.js.map