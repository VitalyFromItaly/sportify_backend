import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';

@Entity({ name: 'user_comment' })
export class Comment extends BaseEntity {
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
  @JoinColumn({ name: 'user_id' })
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