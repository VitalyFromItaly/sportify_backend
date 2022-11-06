import { IQuery } from '@nestjs/cqrs';

export default class GetOneTrainingPlanQuery implements IQuery {
  constructor(readonly id: number, readonly userId: number) {}
}
