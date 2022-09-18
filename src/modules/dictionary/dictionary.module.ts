import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { ActivityModule } from '../activity/activity.module';

@Module({
  imports: [ActivityModule],
  controllers: [DictionaryController],
  providers: [DictionaryService],
  exports: [DictionaryService]
})
export class DictionaryModule {}
