import { IsOptional } from 'class-validator';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { TokenDto } from './dtos/Token.dto';
import { User } from '../user/user.entity';

@Entity({ name: 'tokens' })
export class Tokens extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'token uniq id' })
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // @Exclude()
  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', select: false })
  // created_at: Date;

  // @Exclude()
  // @UpdateDateColumn({ type: 'timestamp',  default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', select: false })
  // updated_at: Date;

  @Column({ nullable: true, type: 'longtext' })
  @IsOptional()
  refresh_token: string;

  @Column({ nullable: true, type: 'longtext' })
  access_token: string;

  @Column({ nullable: true, type: 'bigint' })
  expires_in: number;

  // @BeforeInsert()
  // async setHashPassword(plainPassword: string) {
  //   const salt = await bcrypt.genSalt();
  //   this.password = await bcrypt.hash(plainPassword || this.password, salt);
  // }

}