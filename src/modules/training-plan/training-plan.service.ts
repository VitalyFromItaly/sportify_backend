import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { TrainingPlan } from './infrastructure/entities/training-plan.entity';

@Injectable()
export class TrainingPlanService {
  constructor(
    // @InjectRepository(TrainingPlan)
    // private readonly trainingPlanRepository: Repository<TrainingPlan>,
    private readonly userService: UserService
  ) {}

  public async readOneById(id: number): Promise<TrainingPlan> {
    return await TrainingPlan.findOne({ where: { id } });
  }

  public async readAllByUserId(userId: number): Promise<TrainingPlan[]> {
    return await TrainingPlan.find({
      where: { user: { id: userId } }
    });
  }

  // public async delete(id: number): Promise<number> {
  //   const response = await this.trainingPlanRepository.remove(id);
  //   if (response) {
  //     return response.
  //   }
  // }
}
