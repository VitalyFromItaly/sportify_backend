export enum EGender {
  MALE = 1,
  FEMALE,
  OTHER
}

export enum EUserStatus {
  NEW = 0,
  KNOWN
}

export enum EGoal {
  WEIGHT_REDUCTION,
  MUSCLE_GAIN,
  WEIGHT_MAINTENANCE,
  COMPETITION_PREPARATION
}

export type TUserComment = {
  comment: string;
  date: Date;
};

export enum ELanguages {
  EN = 'en',
  RU = 'ru'
}