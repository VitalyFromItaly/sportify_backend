import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTrainingPlanTable1667055687385 implements MigrationInterface {
    name = 'createTrainingPlanTable1667055687385';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`training_plan\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'plan uniq id', \`goal\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '2', \`user\` int NOT NULL, \`start_date\` datetime NOT NULL, \`duration\` int NOT NULL DEFAULT '6', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`training_plan\``);
    }

}
