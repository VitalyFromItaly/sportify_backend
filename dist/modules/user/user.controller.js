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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_utils_1 = require("../../app.utils");
const CreateResponse_dto_1 = require("../../common/dtos/CreateResponse.dto");
const auth_decorators_1 = require("../auth/auth.decorators");
const Comment_dto_1 = require("./dtos/Comment.dto");
const CreateUser_dto_1 = require("./dtos/CreateUser.dto");
const UpdateUserProfile_dto_1 = require("./dtos/UpdateUserProfile.dto");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async read(id) {
        return await this.usersService.findOneById(+id);
    }
    async create(user) {
        return await this.usersService.create(user);
    }
    async update(userProfile) {
        return await this.usersService.updateUserProfile(userProfile);
    }
    async getUser(req) {
        return req.user;
    }
    async leaveComment(req, comment) {
        return await this.usersService.createComment(req.user.id, comment.comment);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ operationId: 'fetchUserById' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'create user', type: user_entity_1.User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "read", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, auth_decorators_1.Public)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'create user', type: CreateResponse_dto_1.CreateResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'user can not register' }),
    (0, swagger_1.ApiOperation)({ operationId: 'create' }),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update-profile'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ operationId: 'update' }),
    (0, swagger_1.ApiDefaultResponse)({ description: 'returns updated user info', type: user_entity_1.User }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserProfile_dto_1.UpdateUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ operationId: 'get' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiDefaultResponse)({ description: 'get user info by token', type: user_entity_1.User }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('/leave-comment'),
    (0, swagger_1.ApiOperation)({ operationId: 'leaveComment' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiDefaultResponse)({ description: 'user suggestion/comment', type: CreateResponse_dto_1.CreateResponse }),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Comment_dto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "leaveComment", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map