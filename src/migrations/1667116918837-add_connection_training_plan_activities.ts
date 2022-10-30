import { MigrationInterface, QueryRunner } from 'typeorm';

export class addConnectionTrainingPlanActivities1667116918837 implements MigrationInterface {
    name = 'addConnectionTrainingPlanActivities1667116918837';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`training_plan_activities\` (\`activityId\` int NOT NULL, \`trainingPlanId\` int NOT NULL, INDEX \`IDX_36fdc1799ddba35984b100eb7d\` (\`activityId\`), INDEX \`IDX_a7ce6842b573d84d5f873e1768\` (\`trainingPlanId\`), PRIMARY KEY (\`activityId\`, \`trainingPlanId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`training_plan_activities\` ADD CONSTRAINT \`FK_36fdc1799ddba35984b100eb7df\` FOREIGN KEY (\`activityId\`) REFERENCES \`activity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`training_plan_activities\` ADD CONSTRAINT \`FK_a7ce6842b573d84d5f873e17688\` FOREIGN KEY (\`trainingPlanId\`) REFERENCES \`training_plan\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_plan_activities\` DROP FOREIGN KEY \`FK_a7ce6842b573d84d5f873e17688\``);
        await queryRunner.query(`ALTER TABLE \`training_plan_activities\` DROP FOREIGN KEY \`FK_36fdc1799ddba35984b100eb7df\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7ce6842b573d84d5f873e1768\` ON \`training_plan_activities\``);
        await queryRunner.query(`DROP INDEX \`IDX_36fdc1799ddba35984b100eb7d\` ON \`training_plan_activities\``);
        await queryRunner.query(`DROP TABLE \`training_plan_activities\``);
    }

}
