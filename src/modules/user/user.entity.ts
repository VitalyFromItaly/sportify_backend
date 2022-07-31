import { IsOptional } from 'class-validator';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { EDominantHand, EGender } from './user.domain';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({
    description: 'user`s uniq id',
    example: 45
  })
@PrimaryGeneratedColumn({ comment: 'user uniq id' })
id: number;

@ApiProperty({
  description: 'user`s email',
  example: 'email@email.com'
})
@Column({ type: 'varchar', unique: true })
email: string;

@ApiProperty({
  description: 'user`s hashed password',
  example: 'fdkl345l2kjsfk4tjlk@LK$3'
})
@Exclude()
// @Column({ type: 'varchar', select: false })
@Column({ type: 'varchar'})
password: string;

@ApiProperty({
  description: 'date user was created',
  example: '2022-07-31 22:13:20.794424'
})
@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
created_at: number;

@ApiProperty({
  description: 'date user was updated',
  example: '2022-07-31 22:13:20.794424'
})
@UpdateDateColumn({ type: 'timestamp',  default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
updated_at: number;

@ApiProperty({
  description: 'user`s gender',
  example: EGender.FEMALE
})
@IsOptional()
@Column({ type: 'enum', enum: EGender, default: EGender.OTHER })
gender: EGender;

@ApiProperty({
  description: 'user`s height',
  example: 178,
  nullable: true
})
@IsOptional()
@Column({ default: null })
height: number;

@ApiProperty({
  description: 'user`s weight',
  example: 78,
  nullable: true
})
@IsOptional()
@Column({ default: null })
weight: number;

@ApiProperty({
  description: 'user`s age',
  example: 78,
  nullable: true
})
@IsOptional()
@Column({ type: 'int', default: null })
age: number;

@ApiProperty({
  description: 'user`s age',
  example: 78
})
@IsOptional()
@Column({ type: 'enum', enum: EDominantHand, default: EDominantHand.Right })
dominant_hand: EDominantHand;

@BeforeInsert()
async setHashPassword(plainPassword: string) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(plainPassword || this.password, salt);
}
}