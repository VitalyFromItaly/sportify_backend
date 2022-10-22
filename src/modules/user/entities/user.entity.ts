import { IsDate, IsOptional, Max, Min } from 'class-validator';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude, instanceToPlain } from 'class-transformer';
import { EGender, ELanguages, EUserStatus } from '../user.domain';
import { ApiProperty } from '@nestjs/swagger';
import { Comment } from './comment.entity';
import { Activity } from '~/modules/activity/entities/activity.entity';
import { EGoal } from '~/modules/dictionary/dictionary.domain';

@Entity({ name: 'user' })
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

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'varchar' })
  password: string;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @ApiProperty({
    description: 'date user was updated',
    example: '2022-07-31 22:13:20.794424'
  })
  @UpdateDateColumn({ type: 'timestamp',  default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @ApiProperty({
    description: 'user`s gender',
    example: EGender.FEMALE
  })
  @IsOptional()
  @Column({ type: 'enum', enum: EGender, default: EGender.OTHER })
  @Min(EGender.MALE)
  @Max(EGender.OTHER)
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
    description: 'user`s training goal',
    example: EGoal.WEIGHT_REDUCTION,
    nullable: false
  })
  @IsOptional()
  @Column({ type: 'enum', enum: EGoal, default: EGoal.WEIGHT_MAINTENANCE, nullable: false })
  @Min(EGoal.WEIGHT_REDUCTION)
  @Max(EGoal.COMPETITION_PREPARATION)
  goal: EGoal;

  @ApiProperty({
    description: 'user`s age',
    example: new Date(11, 1, 1993),
    nullable: true
  })
  @IsOptional()
  @IsDate()
  @Column({ type: 'date', default: null })
  birthday: Date;

  @Column({ nullable: true, type: 'longtext' })
  @Exclude({ toPlainOnly: true })
  refresh_token?: string;

  @Column({ default: EUserStatus.NEW })
  @Min(EUserStatus.NEW)
  @Max(EUserStatus.KNOWN)
  @ApiProperty({
    description: 'user status',
    example: EUserStatus.NEW
  })
  status: number;

  @OneToMany(() => Comment, (comment) => comment.user)
  @JoinTable()
  comments?: Comment[];

  @Column({ default: ELanguages.EN, enum: ELanguages, type: 'enum', enumName: 'ELanguages' })
  @ApiProperty({ description: 'user chosen language',  enum: ELanguages, type: 'enum', enumName: 'ELanguages' })
  language: ELanguages;

  @ApiProperty({ description: 'user activities ', type: [Activity] })
  @ManyToMany(() => Activity, (activity) => activity.user, { eager: true })
  activities?: Activity[];

  toJSON() {
    return instanceToPlain(this);
  }

  @BeforeInsert()
  async setHashPassword(plainPassword: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(plainPassword || this.password, salt);
  }

  // @BeforeInsert()
  // insertCreatedAt() {
  //   this.created_at = new Date();
  // }

  // @BeforeInsert()
  // insertUpdatedAt() {
  //   this.updated_at = +new Date().getTime();
  // }

  // @BeforeInsert()
  // async setHashedAccessToken(access_token: string) {
  //   console.log({ access_token: access_token || this.access_token });

  //   if (access_token || this.access_token) {
  //     const salt = await bcrypt.genSalt();
  //     this.access_token = await bcrypt.hash(access_token || this.access_token, salt);
  //   }
  // }

  // @BeforeInsert()
  // async setHashedRefreshToken(refresh_token: string) {
  //   console.log({ refresh_token: refresh_token || this.refresh_token });
  //   if (refresh_token || this.refresh_token) {
  //     const salt = await bcrypt.genSalt();
  //     this.refresh_token = await bcrypt.hash(refresh_token || this.refresh_token, salt);
  //   }
  // }
}
