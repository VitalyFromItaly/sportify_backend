import { CreateTrainingPlanActivityDto } from '~/modules/training-plan/dto/create-training-plan-activity.dto';

export class CreateTrainingPlanActivityCommand {
  constructor(public readonly activity: CreateTrainingPlanActivityDto, public readonly userId: number) {}
}
