import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUserBirthdayColumnType1668309105238 implements MigrationInterface {
    name = 'changeUserBirthdayColumnType1668309105238';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthday\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthday\` timestamp NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthday\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthday\` date NULL`);
    }

}
