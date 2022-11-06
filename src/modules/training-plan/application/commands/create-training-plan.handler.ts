import { NotFoundException } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { UserService } from '~/modules/user/user.service';
import { TrainingPlan } from '../../infrastructure/entities/training-plan.entity';
import { RemoteCreateTrainingPlanCommand } from './create-training-plan.command';

@CommandHandler(RemoteCreateTrainingPlanCommand)
export class CreateTrainingPlanHandler implements ICommandHandler<RemoteCreateTrainingPlanCommand, CommandResult> {
  constructor(private readonly userService: UserService, readonly commandBus: CommandBus) {}

  async execute(command: RemoteCreateTrainingPlanCommand): Promise<CommandResult> {
    const user = await this.userService.findOneById(command.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const trainingPlan = new TrainingPlan();
    trainingPlan.user = user;
    Object.assign(trainingPlan, command.newPlan);
    await trainingPlan.save();

    return new CommandResult(trainingPlan.id);
  }
}

