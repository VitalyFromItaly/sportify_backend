import { MigrationInterface, QueryRunner } from "typeorm";

export class createTrainingPlanTable1667114955602 implements MigrationInterface {
    name = 'createTrainingPlanTable1667114955602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`training_plan\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'plan uniq id', \`goal\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '2', \`start_date\` timestamp NULL, \`duration\` int NOT NULL DEFAULT '6', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL COMMENT 'user uniq id', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`training_plan\` ADD CONSTRAINT \`FK_44fb830521d451225511854708b\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan\` DROP FOREIGN KEY \`FK_44fb830521d451225511854708b\``);
        await queryRunner.query(`DROP TABLE \`training_plan\``);
    }

}
