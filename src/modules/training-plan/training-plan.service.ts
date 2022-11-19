import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { TrainingPlanEntity } from './infrastructure/entities/training-plan.entity';

@Injectable()
export class TrainingPlanService {
  constructor(
    // @InjectRepository(TrainingPlan)
    // private readonly trainingPlanRepository: Repository<TrainingPlan>,
    private readonly userService: UserService
  ) {}

  public async readOneById(id: number): Promise<TrainingPlanEntity> {
    return await TrainingPlanEntity.findOne({ where: { id } });
  }

  public async readAllByUserId(userId: number): Promise<TrainingPlanEntity[]> {
    return await TrainingPlanEntity.find({
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
