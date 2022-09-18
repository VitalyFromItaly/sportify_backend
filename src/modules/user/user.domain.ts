export enum EGender {
  MALE = 1,
  FEMALE,
  OTHER
}

export enum EUserStatus {
  NEW,
  KNOWN
}

export type TUserComment = {
  comment: string;
  date: Date;
};

export enum ELanguages {
  EN = 'en',
  RU = 'ru'
}