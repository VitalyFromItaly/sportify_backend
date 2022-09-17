import { BaseEntity } from 'typeorm';
import { EActivityType } from '../activity.domain';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Activity extends BaseEntity {
    id: number;
    calorie_cost: number;
    name_en: string;
    name_ru: string;
    icon: string;
    type: EActivityType;
    user: User[];
    created_at: Date;
    updated_at: Date;
    toJSON(): Record<string, any>;
}
