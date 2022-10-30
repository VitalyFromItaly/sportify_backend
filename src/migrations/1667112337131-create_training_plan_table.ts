import { MigrationInterface, QueryRunner } from "typeorm";

export class createTrainingPlanTable1667112337131 implements MigrationInterface {
    name = 'createTrainingPlanTable1667112337131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD \`start_date\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD CONSTRAINT \`FK_44fb830521d451225511854708b\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP FOREIGN KEY \`FK_44fb830521d451225511854708b\``);
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP COLUMN \`start_date\``);
    }

}
