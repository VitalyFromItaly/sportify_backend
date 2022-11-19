import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import GetOneTrainingActivityQuery from '~/modules/training-plan/application/queries/get-one-training-activity.query';
import {
  TrainingPlanActivityEntity
} from '~/modules/training-plan/infrastructure/entities/training-plan-activity.entity';
import { ReadTrainingPlanActivityDto } from '~/modules/training-plan/dto/read-training-plan-activity.dto';

@QueryHandler(GetOneTrainingActivityQuery)
export class GetOneTrainingActivityHandler implements IQueryHandler<GetOneTrainingActivityQuery> {
  public async execute(query: GetOneTrainingActivityQuery): Promise<ReadTrainingPlanActivityDto> {
    const { id, userId } = query;

    const activity = await TrainingPlanActivityEntity.findOne({
      where: {
        id,
        trainingPlan: {
          userId
        }
      },
      relations: ['trainingPlan']
    });

    if (!activity) {
      throw new NotFoundException('Training activity not found');
    }

    delete activity.trainingPlan;

    return activity;
  }
}
