import { Module } from '@nestjs/common';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';

@Module({
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService]
})
export class TrainingPlanModule {}
