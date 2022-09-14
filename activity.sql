-- -------------------------------------------------------------
-- TablePlus 4.8.2(436)
--
-- https://tableplus.com/
--
-- Database: sportify_development
-- Generation Time: 2022-09-10 12:40:06.7910
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'uniq id',
  `calorie_cost` int(11) NOT NULL DEFAULT '10',
  `icon` varchar(255) DEFAULT NULL,
  `type` enum('1','2') NOT NULL DEFAULT '1',
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `name_en` varchar(255) DEFAULT NULL,
  `name_ru` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

INSERT INTO `activity` (`id`, `calorie_cost`, `icon`, `type`, `created_at`, `updated_at`, `name_en`, `name_ru`) VALUES
(1, 10, NULL, '2', '2022-09-09 18:40:44.388956', '2022-09-09 18:48:18.272708', 'Jogging', 'Бег трусцой'),
(2, 14, NULL, '1', '2022-09-09 18:43:06.812998', '2022-09-09 18:46:40.668689', 'Tempo run, sprint', 'Темповой бег, спринт'),
(3, 10, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:47:38.813397', 'Cycling', 'Велосипед'),
(4, 14, NULL, '1', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:47.512464', 'Tempo cycling', 'Скоростная езда на велосипеде'),
(5, 10, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:47.368628', 'Swimming', 'Плавание'),
(6, 10, NULL, '1', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:47.240399', 'Power Training', 'Силовая тренировка'),
(7, 15, NULL, '1', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:47.096383', 'HIIT', 'Высокоинтенсивный интервальный тренинг'),
(8, 6, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:46.952292', 'Yoga', 'Йога'),
(9, 6, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:46.808792', 'Walking', 'Ходьба'),
(10, 7, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:50:46.668517', 'Tennis', 'Большой теннис'),
(11, 6, NULL, '2', '2022-09-09 18:50:47.652982', '2022-09-09 18:52:06.416676', 'Table Tennis', 'Настольный теннис'),
(12, 10, NULL, '2', '2022-09-09 18:40:44.388956', '2022-09-09 18:53:11.376173', 'Football', 'Футбол'),
(13, 8, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:53:11.232216', 'Basketball', 'Баскетбол'),
(14, 10, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:53:11.104562', 'Volleyball', 'Волейбол'),
(15, 4, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:54:19.823797', 'Stretching', 'Стретчинг'),
(16, 7, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:54:19.952276', 'Dancing', 'Танцы'),
(17, 9, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:54:20.084346', 'Skiing', 'Лыжи'),
(18, 8, NULL, '2', '2022-09-09 18:43:06.812998', '2022-09-09 18:54:20.216360', 'Snowboarding', 'Сноуборд');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;