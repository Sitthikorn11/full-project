-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for user
CREATE DATABASE IF NOT EXISTS `user` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `user`;

-- Dumping structure for table user.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user.messages: ~2 rows (approximately)
INSERT INTO `messages` (`id`, `name`, `email`, `message`, `created_at`) VALUES
	(1, 'svsv', 'sdvsdv@hotmail.com', 'หิวข้าว', '2025-02-07 08:44:32'),
	(2, 'dsfs', 'dsf@hotmail.com', 'kkkk', '2025-02-07 09:38:35');

-- Dumping structure for table user.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user.users: ~8 rows (approximately)
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
	(1, 'sgvg', 'sdvsdv@hotmail.com', '$2b$10$nMiC4kRvW9lhb1xdFmy/0Op0O2nNCRKh2Qf7MaF/Eu7f.Brdb8Wm2'),
	(2, 'john', 'zervew111@gmail.com', '$2b$10$orPW.8EIUIPQiOLflMecNu3Xp0/smtpijTiX3cWEBDLk84o1/I.ri'),
	(3, 'na', 'pyaksda@gmail.com', '$2b$10$gcVZl9yjLqX/rm3.DDV8Pu7DlTJ6yu.VGvVs9EVRd56cniHdEqp52'),
	(4, 'ssss', 'ssss111@hotmail.com', '$2b$10$1c2H0IKD.rHId20rfqDq9ekk4LXqm5K0krlb1jENUDA584maPGXue'),
	(5, 'kkkkk', 'ergreg1156@gmail.com', '$2b$10$L/LYBP4tkVzaCPRE6JoFFOWOsS3sK2VaCOvm/Ss2EznkLgk4Vmr3i'),
	(6, 'fhdhd', 'www@gmail.com', '$2b$10$twMR/YAaHdSMD89VIhdEa.y5O3pQ0UB4qdV1x96TJMZdvj/UXtj3O'),
	(7, 'llll', 'na@gmail.com', '$2b$10$TKsMTOEBTOuNJ9JIOr9h9eyKlCHWaK8KNGy1xO8nMWQL.2SGIqmUK'),
	(8, 'llllllll', 'jjllj@gmail.com', '$2b$10$wkLIT99nHt/G3LSb2YwbUOkR2VuhK8mZWPG1Ztk3Fy7msWBIblMR.');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
