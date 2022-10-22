import { MigrationInterface, QueryRunner } from 'typeorm';

export class userActivities1666444492117 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `user_activities` (\n' +
          '  `activityId` int(11) NOT NULL,\n' +
          '  `userId` int(11) NOT NULL,\n' +
          '  PRIMARY KEY (`activityId`,`userId`),\n' +
          '  KEY `IDX_951bc5ba19ed82cbbb852dbd12` (`activityId`),\n' +
          '  KEY `IDX_5618ade060df353e3965b75999` (`userId`),\n' +
          '  CONSTRAINT `FK_5618ade060df353e3965b759995` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,\n' +
          '  CONSTRAINT `FK_951bc5ba19ed82cbbb852dbd124` FOREIGN KEY (`activityId`) REFERENCES `activity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE\n' +
          ') ENGINE=InnoDB DEFAULT CHARSET=utf8;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS `user_activities`;');
    }

}
