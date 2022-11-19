import { IQuery } from '@nestjs/cqrs';

export default class GetOneTrainingActivityQuery implements IQuery {
  constructor(readonly id: number, readonly userId: number) {}
}
