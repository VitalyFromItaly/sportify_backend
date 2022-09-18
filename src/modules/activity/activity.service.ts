import { Injectable } from '@nestjs/common';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  async findAll(): Promise<Activity[]> {
    return await Activity.find();
  }
}
