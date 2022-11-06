import { NotFoundException } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { UserService } from '~/modules/user/user.service';
import { TrainingPlan } from '../../infrastructure/entities/training-plan.entity';
import { TrainingPlanService } from '../../training-plan.service';
import { DeleteTrainingPlanCommand } from './delete-training-plan.command';

@CommandHandler(DeleteTrainingPlanCommand)
export class DeleteTrainingPlanHandler implements ICommandHandler<DeleteTrainingPlanCommand, CommandResult> {
  constructor(
    // @InjectRepository(TrainingPlan)
    // private readonly trainingPlanRepository: Repository<TrainingPlan>,
    private readonly userService: UserService,
    private readonly trainingPlanService: TrainingPlanService,
    readonly commandBus: CommandBus
  ) {}

  async execute(command: DeleteTrainingPlanCommand): Promise<CommandResult> {
    const user = await this.userService.findOneById(command.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const trainingPlan = await this.trainingPlanService.readOneById(command.id);

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    trainingPlan.remove();


    // await this.trainingPlanRepository.delete(trainingPlan.id);

    return new CommandResult(trainingPlan.id);
  }
}

