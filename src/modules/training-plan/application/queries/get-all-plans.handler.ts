import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserService } from '~/modules/user/user.service';
import { ReadTrainingPlanDto } from '../../dto/read-training-plan.dto';
import { TrainingPlanService } from '../../training-plan.service';
import GetAllTrainingPlansQuery from './get-all-plans.query';

@QueryHandler(GetAllTrainingPlansQuery)
export class GetAllTrainingPlansHandler implements IQueryHandler<GetAllTrainingPlansQuery> {
  constructor(
    private readonly userService: UserService,
    private readonly trainingPlanService: TrainingPlanService
  ) {}

  public async execute(query: GetAllTrainingPlansQuery): Promise<ReadTrainingPlanDto[]> {
    const { userId } = query;
    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const trainingPlans = await this.trainingPlanService.readAllByUserId(userId);

    if (!trainingPlans || !trainingPlans.length) {
      throw new NotFoundException('Plans not found');
    }

    return trainingPlans;
  }
}
