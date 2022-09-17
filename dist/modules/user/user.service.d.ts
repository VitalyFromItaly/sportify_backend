import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './entities/user.entity';
import { THttpResponse } from 'src/common/types/Http';
export declare class UserService {
    findAll(): number[];
    create(userDto: CreateUserDto): Promise<THttpResponse>;
    findOneByEmail(email: string): Promise<User | undefined>;
    findOneById(id: number): Promise<User | undefined>;
    updateUserProfile(userProfileDto: UpdateUserProfileDto): Promise<User>;
    setRefreshToken(email: string, token: string): Promise<void>;
    createComment(userId: number, comment: string): Promise<THttpResponse>;
}
