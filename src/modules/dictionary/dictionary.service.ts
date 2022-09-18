import { Injectable } from '@nestjs/common';
import { EActivityType } from '../activity/activity.domain';
import { ActivityService } from '../activity/activity.service';
import { EGoal, TDictionary, TLocaleSelectOption } from './dictionary.domain';

@Injectable()
export class DictionaryService {
  constructor(private activityService: ActivityService) {}

  findAllActivityTypes(): TLocaleSelectOption[] {
    return [
      { value: EActivityType.ANAEROBIC, text_en: 'Anaerobic', text_ru: 'Анаэробная' },
      { value: EActivityType.AEROBIC, text_en: 'Aerobic', text_ru: 'Аэробная' }
    ];
  }

  findAllGoals(): TLocaleSelectOption[] {
    return [
      { value: EGoal.WEIGHT_REDUCTION, text_en: 'Weight reduction', text_ru: 'Снижение веса' },
      { value: EGoal.MUSCLE_GAIN, text_en: 'Muscle gain', text_ru: 'Набор мышечной массы' },
      { value: EGoal.WEIGHT_MAINTENANCE, text_en: 'Weight maintenance', text_ru: 'Поддержание веса' },
      { value: EGoal.COMPETITION_PREPARATION, text_en: 'Competition preparation', text_ru: 'Подготовка к соревнованиям' }
    ];
  }

  async findAll(): Promise<TDictionary> {
    const goals = this.findAllGoals();
    const activity_types = this.findAllGoals();
    const activities = await this.activityService.findAll();
    return { goals, activities, activity_types };
  }
}
