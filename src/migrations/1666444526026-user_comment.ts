import { MigrationInterface, QueryRunner } from 'typeorm';

export class userComment1666444526026 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `user_comment` (\n' +
          '  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT \'user uniq id\',\n' +
          '  `comment` varchar(255) DEFAULT NULL,\n' +
          '  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n' +
          '  `user_id` int(11) DEFAULT NULL COMMENT \'user uniq id\',\n' +
          '  PRIMARY KEY (`id`),\n' +
          '  KEY `FK_03a8650b43d32ee623fddc8faac` (`user_id`),\n' +
          '  CONSTRAINT `FK_03a8650b43d32ee623fddc8faac` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION\n' +
          ') ENGINE=InnoDB DEFAULT CHARSET=utf8;\n');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS `user_comment`;');
    }

}
