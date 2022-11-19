import { Injectable } from '@nestjs/common';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  async findAll(): Promise<ActivityEntity[]> {
    return await ActivityEntity.find();
  }
}
