import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { TrainingPlanEntity } from '~/modules/training-plan/infrastructure/entities/training-plan.entity';
import { ActivityEntity } from '~/modules/activity/entities/activity.entity';

@Entity({ name: 'training_plan_activity' })
export class TrainingPlanActivityEntity extends BaseEntity {
  @ApiProperty({
    description: 'activity`s uniq id',
    example: 45
  })
  @PrimaryGeneratedColumn({ comment: 'activity uniq id' })
  id: number;

  @ManyToOne(() => TrainingPlanEntity, (plan) => plan.activities, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'trainingPlanId' })
  trainingPlan: TrainingPlanEntity;

  @Column()
  trainingPlanId: number;

  @ManyToOne(() => ActivityEntity, (activity) => activity.trainingPlanActivities, {
    lazy: true
  })
  @JoinColumn({ name: 'activityId' })
  activity: ActivityEntity;

  @ApiProperty({ description: 'activity dictionary id' })
  @Column()
  activityId: number;

  @ApiProperty({ description: 'datetime user start the activity' })
  @Column({ type: 'datetime', default: null })
  start_date: Date;

  @ApiProperty({ description: 'datetime user end the activity' })
  @Column({ type: 'datetime', default: null })
  end_date: Date;

  @ApiProperty({ description: 'json extra the activity' })
  @Column({ type: 'json', default: null })
  extra: any;

  @ApiProperty({ description: 'comment the activity' })
  @Column({ type: 'text', default: null })
  comment: string;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
