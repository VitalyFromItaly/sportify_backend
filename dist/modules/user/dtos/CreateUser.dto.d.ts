import { ELanguages } from '../user.domain';
export declare class CreateUserDto {
    email: string;
    password: string;
    password_confirm: string;
    language?: ELanguages;
}
