import { THttpResponse } from 'src/common/types/Http';
import { CommentDto } from './dtos/Comment.dto';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    read(id: string): Promise<User | undefined>;
    create(user: CreateUserDto): Promise<THttpResponse>;
    update(userProfile: UpdateUserProfileDto): Promise<User>;
    getUser(req: any): Promise<User>;
    leaveComment(req: any, comment: CommentDto): Promise<THttpResponse>;
}
