import { MigrationInterface, QueryRunner } from "typeorm";

export class init1666456296582 implements MigrationInterface {
    name = 'init1666456296582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_comment\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'user uniq id', \`comment\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_id\` int NULL COMMENT 'user uniq id', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'user uniq id', \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`gender\` enum ('1', '2', '3') NOT NULL DEFAULT '3', \`height\` int NULL, \`weight\` int NULL, \`goal\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '2', \`birthday\` date NULL, \`refresh_token\` longtext NULL, \`status\` int NOT NULL DEFAULT '0', \`language\` enum ('en', 'ru') NOT NULL DEFAULT 'en', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'uniq id', \`calorie_cost\` int NOT NULL DEFAULT '10', \`name_en\` varchar(255) NULL, \`name_ru\` varchar(255) NULL, \`icon\` varchar(255) NULL, \`type\` enum ('1', '2') NOT NULL DEFAULT '1', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_activities\` (\`activityId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_951bc5ba19ed82cbbb852dbd12\` (\`activityId\`), INDEX \`IDX_5618ade060df353e3965b75999\` (\`userId\`), PRIMARY KEY (\`activityId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_comment\` ADD CONSTRAINT \`FK_03a8650b43d32ee623fddc8faac\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_activities\` ADD CONSTRAINT \`FK_951bc5ba19ed82cbbb852dbd124\` FOREIGN KEY (\`activityId\`) REFERENCES \`activity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_activities\` ADD CONSTRAINT \`FK_5618ade060df353e3965b759995\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_activities\` DROP FOREIGN KEY \`FK_5618ade060df353e3965b759995\``);
        await queryRunner.query(`ALTER TABLE \`user_activities\` DROP FOREIGN KEY \`FK_951bc5ba19ed82cbbb852dbd124\``);
        await queryRunner.query(`ALTER TABLE \`user_comment\` DROP FOREIGN KEY \`FK_03a8650b43d32ee623fddc8faac\``);
        await queryRunner.query(`DROP INDEX \`IDX_5618ade060df353e3965b75999\` ON \`user_activities\``);
        await queryRunner.query(`DROP INDEX \`IDX_951bc5ba19ed82cbbb852dbd12\` ON \`user_activities\``);
        await queryRunner.query(`DROP TABLE \`user_activities\``);
        await queryRunner.query(`DROP TABLE \`activity\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`user_comment\``);
    }

}
