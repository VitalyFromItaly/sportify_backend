import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';
import { CreateTrainingPlanHandler } from './application/commands/create-training-plan.handler';
import { UserModule } from '../user/user.module';

export const commandHandlers = [CreateTrainingPlanHandler];
// export const EventHandlers =  [HeroKilledDragonHandler, HeroFoundItemHandler];

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService, ...commandHandlers]
})
export class TrainingPlanModule {}
