import { IsOptional } from 'class-validator';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User extends BaseEntity {
@PrimaryGeneratedColumn({ comment: 'user uniq id' })
id: number;

@Column({ type: 'varchar' })
name: string;

@Column({ type: 'varchar', unique: true })
email: string;

@Column({ type: 'varchar' })
password: string;

@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
created_at: number;

@UpdateDateColumn({ type: 'timestamp',  default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
updated_at: number;

@Column({ type: 'int' })
gender: number;

@IsOptional()
@Column({ default: null })
height: number;

@IsOptional()
@Column({ default: null })
weight: number;

@Column()
birthday: number;

@Column({ type: 'int', default: 1 })
dominant_hand: number;

@BeforeInsert()
async setHashPassword(plainPassword: string) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(plainPassword || this.password, salt);
}
}