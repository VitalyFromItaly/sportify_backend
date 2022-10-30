import { MigrationInterface, QueryRunner } from "typeorm";

export class fillOutActivityTable1666527993307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`activity\` (\`id\`, \`calorie_cost\`, \`name_en\`, \`name_ru\`, \`icon\`, \`type\`, \`created_at\`, \`updated_at\`) VALUES
(1,    10,    'Jogging',    'Бег трусцой',    NULL,    '1',    '2022-10-22 11:09:14.229339',    '2022-10-22 11:09:14.229339'),
(2,    14,    'Tempo run, sprint',    'Темповой бег, спринт',    NULL,    '1',    '2022-10-22 11:09:14.234475',    '2022-10-22 11:09:14.234475'),
(3,    10,    'Cycling',    'Велосипед',    NULL,    '1',    '2022-10-22 11:09:14.236949',    '2022-10-22 11:09:14.236949'),
(4,    14,    'Tempo cycling',    'Скоростная езда на велосипеде',    NULL,    '1',    '2022-10-22 11:09:14.241629',    '2022-10-22 11:09:14.241629'),
(5,    10,    'Swimming',    'Плавание',    NULL,    '1',    '2022-10-22 11:09:14.244868',    '2022-10-22 11:09:14.244868'),
(6,    10,    'Power Training',    'Силовая тренировка',    NULL,    '1',    '2022-10-22 11:09:14.248198',    '2022-10-22 11:09:14.248198'),
(7,    15,    'HIIT',    'Высокоинтенсивный интервальный тренинг',    NULL,    '1',    '2022-10-22 11:09:14.251052',    '2022-10-22 11:09:14.251052'),
(8,    6,    'Yoga',    'Йога',    NULL,    '1',    '2022-10-22 11:09:14.253641',    '2022-10-22 11:09:14.253641'),
(9,    6,    'Walking',    'Ходьба',    NULL,    '1',    '2022-10-22 11:09:14.257294',    '2022-10-22 11:09:14.257294'),
(10,    7,    'Tennis',    'Большой теннис',    NULL,    '1',    '2022-10-22 11:09:14.260282',    '2022-10-22 11:09:14.260282'),
(11,    6,    'Table Tennis',    'Настольный теннис',    NULL,    '1',    '2022-10-22 11:09:14.263231',    '2022-10-22 11:09:14.263231'),
(12,    10,    'Football',    'Футбол',    NULL,    '1',    '2022-10-22 11:09:14.266170',    '2022-10-22 11:09:14.266170'),
(13,    8,    'Basketball',    'Баскетбол',    NULL,    '1',    '2022-10-22 11:09:14.268552',    '2022-10-22 11:09:14.268552'),
(14,    10,    'Volleyball',    'Волейбол',    NULL,    '1',    '2022-10-22 11:09:14.270973',    '2022-10-22 11:09:14.270973'),
(15,    4,    'Stretching',    'Стретчинг',    NULL,    '1',    '2022-10-22 11:09:14.274558',    '2022-10-22 11:09:14.274558'),
(16,    7,    'Dancing',    'Танцы',    NULL,    '1',    '2022-10-22 11:09:14.278276',    '2022-10-22 11:09:14.278276'),
(17,    9,    'Skiing',    'Лыжи',    NULL,    '1',    '2022-10-22 11:09:14.281367',    '2022-10-22 11:09:14.281367'),
(18,    8,    'Snowboarding',    'Сноуборд',    NULL,    '1',    '2022-10-22 11:09:14.284230',    '2022-10-22 11:09:14.284230');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM `activity` where id > 0');
    }

}