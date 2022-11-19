import { Max, Min } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Exclude, instanceToPlain } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { EActivityType } from '../activity.domain';
import { User } from '~/modules/user/entities/user.entity';
import {
  TrainingPlanActivityEntity
} from '~/modules/training-plan/infrastructure/entities/training-plan-activity.entity';

@Entity({ name: 'activity' })
export class ActivityEntity extends BaseEntity {
  @ApiProperty({ description: 'uniq id' })
  @PrimaryGeneratedColumn({ comment: 'uniq id' })
  id: number;

  @ApiProperty({ description: 'calories burn per minute' })
  @Column({ type: 'int', default: 10 })
  calorie_cost: number;

  @ApiProperty({ description: 'activity name en' })
  @Column({ type: 'varchar', default: null })
  name_en: string;

  @ApiProperty({ description: 'activity name ru' })
  @Column({ type: 'varchar', default: null })
  name_ru: string;

  @ApiProperty({ description: 'activity icon' })
  @Column({ type: 'varchar', nullable: true, default: null })
  icon: string;

  @ApiProperty({ description: 'activity type', example: EActivityType.AEROBIC })
  @Column({ type: 'enum', nullable: false, enum: EActivityType, default: EActivityType.ANAEROBIC })
  @Min(EActivityType.ANAEROBIC) // gym 1
  @Max(EActivityType.AEROBIC) // running 2
  type: EActivityType;

  @ManyToMany(() => User, (user) => user.activities)
  @JoinTable({ name: 'user_activities' })
  user: User[];

  @Exclude({ toPlainOnly: true })
  @ApiProperty({
    description: 'activity was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @Exclude({ toPlainOnly: true })
  @ApiProperty({
    description: 'activity was updated',
    example: '2022-07-31 22:13:20.794424'
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  // @ApiProperty({ description: 'user plan activities', type: [TrainingPlanActivityEntity] })
  @OneToMany(() => TrainingPlanActivityEntity, (trainingPlanActivity) => trainingPlanActivity.activity, {
    lazy: true
  })
  @JoinTable()
  trainingPlanActivities: TrainingPlanActivityEntity[];

  toJSON() {
    return instanceToPlain(this);
  }
}
