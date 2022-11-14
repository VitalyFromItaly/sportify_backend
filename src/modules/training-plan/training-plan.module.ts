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

export const commandHandlers = [CreateTrainingPlanHandler, UpdateTrainingPlanHandler, DeleteTrainingPlanHandler];
export const queriesHandlers = [GetAllTrainingPlansHandler, GetOneTrainingPlanByIdHandler];

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService, ...commandHandlers, ...queriesHandlers]
})
export class TrainingPlanModule {}
