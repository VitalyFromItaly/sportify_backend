import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1666444301069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `user` (\n' +
          '  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT \'user uniq id\',\n' +
          '  `email` varchar(255) NOT NULL,\n' +
          '  `password` varchar(255) NOT NULL,\n' +
          '  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n' +
          '  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n' +
          '  `gender` enum(\'1\',\'2\',\'3\') NOT NULL DEFAULT \'3\',\n' +
          '  `height` int(11) DEFAULT NULL,\n' +
          '  `weight` int(11) DEFAULT NULL,\n' +
          '  `goal` enum(\'0\',\'1\',\'2\',\'3\') NOT NULL DEFAULT \'2\',\n' +
          '  `birthday` date DEFAULT NULL,\n' +
          '  `refresh_token` longtext,\n' +
          '  `status` int(11) NOT NULL DEFAULT \'0\',\n' +
          '  `language` enum(\'en\',\'ru\') NOT NULL DEFAULT \'en\',\n' +
          '  PRIMARY KEY (`id`),\n' +
          '  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)\n' +
          ') ENGINE=InnoDB DEFAULT CHARSET=utf8;\n');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS `user`;');
    }

}
