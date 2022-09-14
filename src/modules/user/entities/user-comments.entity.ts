import { IsOptional, Max, Min } from 'class-validator';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude, instanceToPlain } from 'class-transformer';
import { EGender, EGoal, ELanguages, EUserStatus, TUserComment } from '../user.domain';
import { ApiProperty } from '@nestjs/swagger';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { User } from './user.entity';

@Entity({ name: 'user-comments' })
export class UserComment extends BaseEntity {
    @ApiProperty({
      description: 'user`s uniq id',
      example: 45
    })  
  @PrimaryGeneratedColumn({ comment: 'user uniq id' })
  id: number;

  @Column({ default: null, type: 'varchar' })
  @ApiProperty({ description: 'user comment' })
  comment: string;

  @ManyToOne(() => User, (user) => user.comments)
  @ApiProperty({ description: 'user id' })
  user: User;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  toJSON() {
    return instanceToPlain(this);
  }

}