import { CreateTrainingPlanDto } from '../../dto/create-training-plan.dto';

export class RemoteCreateTrainingPlanCommand {
  constructor(public readonly newPlan: CreateTrainingPlanDto, public readonly userId: number) {}
}
