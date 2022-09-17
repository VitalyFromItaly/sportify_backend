"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const app_utils_1 = require("../../app.utils");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const comment_entity_1 = require("./entities/comment.entity");
let UserService = class UserService {
    findAll() {
        return [1, 2, 3];
    }
    async create(userDto) {
        delete userDto.password_confirm;
        const isUserExist = await this.findOneByEmail(userDto.email);
        if (!!isUserExist) {
            throw new common_1.BadRequestException(app_utils_1.MESSAGES.USER_EXIST);
        }
        const user = new user_entity_1.User();
        Object.assign(user, Object.assign({}, userDto));
        await user.save();
        return { status: 'success', statusCode: 201 };
    }
    async findOneByEmail(email) {
        return await user_entity_1.User.findOne({ where: { email } });
    }
    async findOneById(id) {
        return await user_entity_1.User.findOne({ where: { id } });
    }
    async updateUserProfile(userProfileDto) {
        const user = await this.findOneById(userProfileDto.id);
        const updatedUser = Object.assign(user, userProfileDto);
        await updatedUser.save();
        return updatedUser;
    }
    async setRefreshToken(email, token) {
        const user = await this.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const salt = await bcrypt.genSalt();
        const hashedToken = await bcrypt.hash(token, salt);
        user.refresh_token = hashedToken;
        await user.save();
    }
    async createComment(userId, comment) {
        const user = await this.findOneById(userId);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const userComment = new comment_entity_1.Comment();
        userComment.comment = comment;
        userComment.user = user;
        await userComment.save();
        return { status: 'success', statusCode: 201 };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map