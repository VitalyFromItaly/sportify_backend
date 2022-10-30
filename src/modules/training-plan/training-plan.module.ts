import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
// import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';

// export const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];
// export const EventHandlers =  [HeroKilledDragonHandler, HeroFoundItemHandler];

@Module({
  imports: [CqrsModule],
  // controllers: [TrainingPlanController],
  providers: [TrainingPlanService]
})
export class TrainingPlanModule {}
