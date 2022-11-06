import { UpdateTrainingPlanDto } from '../../dto/update-training-plan.dto';

export class UpdateTrainingPlanCommand {
  constructor(
    public readonly id: number,
    public readonly updatePlanPayload: UpdateTrainingPlanDto,
    public readonly userId: number,
  ) {}
}
