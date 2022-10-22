import { ApiProperty } from '@nestjs/swagger';
import { Max, Min } from 'class-validator';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'plan' })
export class Plan extends BaseEntity {
  @ApiProperty({ description: 'uniq plan id' })  
  @PrimaryGeneratedColumn({ comment: 'uniq plan id' })
  id: number;

  @ManyToOne(() => User, (user) => user.plans)
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ description: 'user id' })
  user: User;

  @ApiProperty({ description: 'plan start date' })
  @Column({ type: Date })
  start_date: Date;

  @ApiProperty({ description: 'duration plan in months, from one month to 12' })
  @Column({ type: Number })
  @Min(1)
  @Max(12)
  duration: number;

  // @ManyToMany(() => Activity, (activity) => activity.plans)
  // @JoinTable({  name: 'plan_activities' })
  // activity: Activity[];

  @ApiProperty({ description: 'created at' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}