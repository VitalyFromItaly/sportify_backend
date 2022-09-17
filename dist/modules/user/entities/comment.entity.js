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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let Comment = class Comment extends typeorm_1.BaseEntity {
    toJSON() {
        return (0, class_transformer_1.instanceToPlain)(this);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user`s uniq id',
        example: 45
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'user uniq id' }),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null, type: 'varchar' }),
    (0, swagger_1.ApiProperty)({ description: 'user comment' }),
    __metadata("design:type", String)
], Comment.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    (0, swagger_1.ApiProperty)({ description: 'user id' }),
    __metadata("design:type", user_entity_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date user was created',
        example: '2022-07-31 22:13:20.794424'
    }),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], Comment.prototype, "created_at", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_comment' })
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map