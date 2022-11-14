import { NotFoundException } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { TrainingPlanService } from '../../training-plan.service';
import { DeleteTrainingPlanCommand } from './delete-training-plan.command';

@CommandHandler(DeleteTrainingPlanCommand)
export class DeleteTrainingPlanHandler implements ICommandHandler<DeleteTrainingPlanCommand, CommandResult> {
  constructor(
    private readonly trainingPlanService: TrainingPlanService,
    readonly commandBus: CommandBus
  ) {}

  async execute(command: DeleteTrainingPlanCommand): Promise<CommandResult> {
    const trainingPlan = await this.trainingPlanService.readOneById(command.id);

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    trainingPlan.remove();
    return new CommandResult(trainingPlan.id);
  }
}

