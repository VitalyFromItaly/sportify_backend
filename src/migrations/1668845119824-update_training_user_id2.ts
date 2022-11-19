import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTrainingUserId21668845119824 implements MigrationInterface {
    name = 'updateTrainingUserId21668845119824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` CHANGE \`userId\` \`userId\` int NULL COMMENT 'user uniq id'`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD CONSTRAINT \`FK_5cdfb0ffd851f70ebc56ca0d40d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP FOREIGN KEY \`FK_5cdfb0ffd851f70ebc56ca0d40d\``);
        await queryRunner.query(`ALTER TABLE \`training_plan\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP COLUMN \`user_id\``);
    }

}
