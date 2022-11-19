import { NotFoundException } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { TrainingPlanService } from '../../training-plan.service';
import { UpdateTrainingPlanCommand } from './update-training-plan.command';

@CommandHandler(UpdateTrainingPlanCommand)
export class UpdateTrainingPlanHandler implements ICommandHandler<UpdateTrainingPlanCommand, CommandResult> {
  constructor(
    private readonly trainingPlanService: TrainingPlanService,
    readonly commandBus: CommandBus
  ) {}

  async execute(command: UpdateTrainingPlanCommand): Promise<CommandResult> {
    if ('id' in command.updatePlanPayload) {
      delete command.updatePlanPayload.id;
    }

    const trainingPlan = await this.trainingPlanService.readOneById(command.id);

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    console.log(trainingPlan, command.updatePlanPayload);

    Object.assign(trainingPlan, command.updatePlanPayload);
    await trainingPlan.save();

    return new CommandResult(trainingPlan.id);
  }
}

