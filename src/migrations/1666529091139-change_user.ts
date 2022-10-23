import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUser1666529091139 implements MigrationInterface {
  name = 'changeUser1666529091139';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`email2\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_66d431b52ef497a4aeca492960\` (\`email2\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_66d431b52ef497a4aeca492960\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email2\``);
  }
}
