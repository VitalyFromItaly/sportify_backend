import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { EGoal } from '~/modules/dictionary/dictionary.domain';
import { Max, Min } from 'class-validator';
import { User } from '~/modules/user/entities/user.entity';

@Entity({ name: 'training_plan' })
export class TrainingPlan extends BaseEntity {
  @ApiProperty({
    description: 'plan`s uniq id',
    example: 45
  })  
  @PrimaryGeneratedColumn({ comment: 'plan uniq id' })
  id: number;

  @ApiProperty({
    description: 'user`s training goal',
    example: EGoal.WEIGHT_REDUCTION,
    nullable: false
  })
  @Column({ type: 'enum', enum: EGoal, default: EGoal.WEIGHT_MAINTENANCE, nullable: false })
  @Min(EGoal.WEIGHT_REDUCTION)
  @Max(EGoal.COMPETITION_PREPARATION)
  goal: EGoal;

  // @ManyToOne(() => User, (user) => user.plans)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ description: 'user id' })
  user: User;

  @ApiProperty({ description: 'date user start the plan' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  start_date: Date;

  @ApiProperty({ description: 'durations of the plan' })
  @Column({ type: 'int', default: 6 })
  duration: number;
  
  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  toJSON() {
    return instanceToPlain(this);
  }

}