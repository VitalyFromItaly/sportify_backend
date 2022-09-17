import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { Activity } from './entities/activity.entity';

@Module({
  controllers: [ActivityController],
  imports: [TypeOrmModule.forFeature([Activity])],
  providers: [ActivityService],
  exports: [ActivityService]
})
export class ActivityModule {}