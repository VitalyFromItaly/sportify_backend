export enum EGender {
  MALE = 1,
  FEMALE,
  OTHER
}

export enum EDominantHand {
  RIGHT = 1,
  LEFT
}

export enum EUserStatus {
  NEW = 0,
  KNOWN
}

export type TActivity = { value: string; text: string };

export enum EGoal {
  ANAEROBIC, // swimming, running
  AEROBIC, // like gym, pullups, pushups
  MIXED
}