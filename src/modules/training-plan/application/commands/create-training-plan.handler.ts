import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { TrainingPlan } from '../../infrastructure/entities/training-plan.entity';
import { RemoteCreateTrainingPlanCommand } from './create-training-plan.command';

@CommandHandler(RemoteCreateTrainingPlanCommand)
export class CreateTrainingPlanHandler implements ICommandHandler<RemoteCreateTrainingPlanCommand, CommandResult> {

  async execute(command: RemoteCreateTrainingPlanCommand): Promise<CommandResult> {
    const trainingPlan = new TrainingPlan();
    trainingPlan.userId = command.userId;
    Object.assign(trainingPlan, command.newPlan);
    await trainingPlan.save();

    return new CommandResult(trainingPlan.id);
  }
}

