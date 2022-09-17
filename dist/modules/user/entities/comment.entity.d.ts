import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class Comment extends BaseEntity {
    id: number;
    comment: string;
    user: User;
    created_at: Date;
    toJSON(): Record<string, any>;
}
