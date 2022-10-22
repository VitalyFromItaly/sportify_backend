import { MigrationInterface, QueryRunner } from 'typeorm';

export class activity1666444455185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `activity` (\n' +
          '  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT \'uniq id\',\n' +
          '  `calorie_cost` int(11) NOT NULL DEFAULT \'10\',\n' +
          '  `name_en` varchar(255) DEFAULT NULL,\n' +
          '  `name_ru` varchar(255) DEFAULT NULL,\n' +
          '  `icon` varchar(255) DEFAULT NULL,\n' +
          '  `type` enum(\'1\',\'2\') NOT NULL DEFAULT \'1\',\n' +
          '  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n' +
          '  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n' +
          '  PRIMARY KEY (`id`)\n' +
          ') ENGINE=InnoDB DEFAULT CHARSET=utf8;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS `activity`;');
    }

}
