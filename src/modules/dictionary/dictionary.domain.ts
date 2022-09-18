import { Activity } from '../activity/entities/activity.entity';

export enum EGoal {
  WEIGHT_REDUCTION,
  MUSCLE_GAIN,
  WEIGHT_MAINTENANCE,
  COMPETITION_PREPARATION
}

export type TInputTypeValue = string | number;
export type TLocaleSelectOption = { value: TInputTypeValue; text_en: string; text_ru: string };


export type TDictionary = {
  goals: TLocaleSelectOption[];
  activity_types: TLocaleSelectOption[];
  activities: Activity[];
};