import { Activity } from '~/modules/activity/entities/activity.entity';
import { ELanguages } from '../user.domain';
export declare class UpdateUserProfileDto {
    id: number;
    gender?: number;
    height?: number;
    weight?: number;
    goal?: number;
    birthday?: Date;
    status?: number;
    language?: ELanguages;
    activities?: Activity[];
}
