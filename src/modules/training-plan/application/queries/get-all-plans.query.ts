import { IQuery } from '@nestjs/cqrs';

export default class GetAllTrainingPlansQuery implements IQuery {
  constructor(readonly userId: number) {}
}
