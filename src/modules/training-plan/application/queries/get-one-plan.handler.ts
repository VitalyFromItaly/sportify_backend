import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserService } from '~/modules/user/user.service';
import { ReadTrainingPlanDto } from '../../dto/read-training-plan.dto';
import { TrainingPlanService } from '../../training-plan.service';
import GetOneTrainingPlanQuery from './get-one-plan.query';

@QueryHandler(GetOneTrainingPlanQuery)
export class GetOneTrainingPlanByIdHandler implements IQueryHandler<GetOneTrainingPlanQuery> {
  constructor(
    private readonly userService: UserService,
    private readonly trainingPlanService: TrainingPlanService
  ) {}

  public async execute(query: GetOneTrainingPlanQuery): Promise<ReadTrainingPlanDto> {
    const { id, userId } = query;

    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const trainingPlan = await this.trainingPlanService.readOneById(id);

    if (!trainingPlan) {
      throw new NotFoundException('Plan not found');
    }

    return trainingPlan;
  }
}
