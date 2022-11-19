import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommandResult } from '~/common/dtos/command-result.dto';
import {
  CreateTrainingPlanActivityCommand
} from '~/modules/training-plan/application/commands/create-training-plan-activity.command';
import {
  TrainingPlanActivityEntity
} from '~/modules/training-plan/infrastructure/entities/training-plan-activity.entity';

@CommandHandler(CreateTrainingPlanActivityCommand)
export class CreateTrainingPlanActivityHandler implements ICommandHandler<CreateTrainingPlanActivityCommand, CommandResult> {

  async execute(command: CreateTrainingPlanActivityCommand): Promise<CommandResult> {
    const trainingActivity = new TrainingPlanActivityEntity();

    Object.assign(trainingActivity, command.activity);
    await trainingActivity.save();

    return new CommandResult(trainingActivity.id);
  }
}

