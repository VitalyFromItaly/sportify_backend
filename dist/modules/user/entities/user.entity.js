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
exports.User = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const user_domain_1 = require("../user.domain");
const swagger_1 = require("@nestjs/swagger");
const comment_entity_1 = require("./comment.entity");
const activity_entity_1 = require("../../activity/entities/activity.entity");
let User = class User extends typeorm_1.BaseEntity {
    toJSON() {
        return (0, class_transformer_1.instanceToPlain)(this);
    }
    async setHashPassword(plainPassword) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(plainPassword || this.password, salt);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s uniq id',
        example: 45
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'user uniq id' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s email',
        example: 'email@email.com'
    }),
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date user was created',
        example: '2022-07-31 22:13:20.794424'
    }),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date user was updated',
        example: '2022-07-31 22:13:20.794424'
    }),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s gender',
        example: user_domain_1.EGender.FEMALE
    }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: user_domain_1.EGender, default: user_domain_1.EGender.OTHER }),
    (0, class_validator_1.Min)(user_domain_1.EGender.MALE),
    (0, class_validator_1.Max)(user_domain_1.EGender.OTHER),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s height',
        example: 178,
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], User.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s weight',
        example: 78,
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], User.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s training goal',
        example: user_domain_1.EGoal.WEIGHT_REDUCTION,
        nullable: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: user_domain_1.EGoal, default: user_domain_1.EGoal.WEIGHT_MAINTENANCE, nullable: false }),
    (0, class_validator_1.Min)(user_domain_1.EGoal.WEIGHT_REDUCTION),
    (0, class_validator_1.Max)(user_domain_1.EGoal.COMPETITION_PREPARATION),
    __metadata("design:type", Number)
], User.prototype, "goal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s age',
        example: new Date(11, 1, 1993),
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ type: 'date', default: null }),
    __metadata("design:type", Date)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'longtext' }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: user_domain_1.EUserStatus.NEW }),
    (0, class_validator_1.Min)(user_domain_1.EUserStatus.NEW),
    (0, class_validator_1.Max)(user_domain_1.EUserStatus.KNOWN),
    (0, swagger_1.ApiProperty)({
        description: 'user status',
        example: user_domain_1.EUserStatus.NEW
    }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.user),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: user_domain_1.ELanguages.EN, enum: user_domain_1.ELanguages, type: 'enum', enumName: 'ELanguages' }),
    (0, swagger_1.ApiProperty)({ description: 'user chosen language', enum: user_domain_1.ELanguages, type: 'enum', enumName: 'ELanguages' }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user activities ', type: [activity_entity_1.Activity] }),
    (0, typeorm_1.ManyToMany)(() => activity_entity_1.Activity, (activity) => activity.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User.prototype, "setHashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map