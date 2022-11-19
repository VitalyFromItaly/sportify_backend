import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityEntity } from './entities/activity.entity';

@Module({
  controllers: [ActivityController],
  imports: [TypeOrmModule.forFeature([ActivityEntity])],
  providers: [ActivityService],
  exports: [ActivityService]
})
export class ActivityModule {}
