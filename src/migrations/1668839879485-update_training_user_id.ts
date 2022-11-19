import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateTrainingUserId1668839879485 implements MigrationInterface {
    name = 'updateTrainingUserId1668839879485';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP COLUMN \`user\``);
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthday\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthday\` timestamp NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthday\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthday\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD \`user_id\` int NULL COMMENT 'user uniq id'`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD \`user\` int NOT NULL`);
    }

}
