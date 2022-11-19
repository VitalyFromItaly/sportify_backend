import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';
import { CreateTrainingPlanHandler } from './application/commands/create-training-plan.handler';
import { UserModule } from '../user/user.module';
import { GetOneTrainingPlanByIdHandler } from './application/queries/get-one-plan.handler';
import { UpdateTrainingPlanHandler } from './application/commands/update-training-plan.handler';
import { GetAllTrainingPlansHandler } from './application/queries/get-all-plans.handler';
import { DeleteTrainingPlanHandler } from './application/commands/delete-training-plan.handler';
import { TrainingPlanActivityController } from '~/modules/training-plan/training-plan-activity.controller';
import {
  CreateTrainingPlanActivityHandler
} from '~/modules/training-plan/application/commands/create-training-plan-activity.handler';
import {
  GetOneTrainingActivityHandler
} from '~/modules/training-plan/application/queries/get-one-training-activity.handler';

export const commandHandlers = [
  CreateTrainingPlanHandler,
  UpdateTrainingPlanHandler,
  DeleteTrainingPlanHandler,
  CreateTrainingPlanActivityHandler
];
export const queriesHandlers = [
  GetAllTrainingPlansHandler,
  GetOneTrainingPlanByIdHandler,
  GetOneTrainingActivityHandler
];

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [TrainingPlanController, TrainingPlanActivityController],
  providers: [TrainingPlanService, ...commandHandlers, ...queriesHandlers]
})
export class TrainingPlanModule {}
