import { BaseEntity } from 'typeorm';
import { EGender, ELanguages } from '../user.domain';
import { Comment } from './comment.entity';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { EGoal } from 'src/modules/dictionary/dictionary.domain';
import { Plan } from 'src/modules/plan/entities/plan.entity';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    gender: EGender;
    height: number;
    weight: number;
    goal: EGoal;
    birthday: Date;
    refresh_token?: string;
    status: number;
    comments?: Comment[];
    plans?: Plan[];
    language: ELanguages;
    activities?: Activity[];
    toJSON(): Record<string, any>;
    setHashPassword(plainPassword: string): Promise<void>;
}
