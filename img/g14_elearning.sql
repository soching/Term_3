-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 02:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `g14_elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `assessments`
--

CREATE TABLE `assessments` (
  `assessment_id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `assessment_description` text DEFAULT NULL,
  `assessment_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `category_description` varchar(255) DEFAULT NULL,
  `category_image` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_description`, `category_image`, `user_id`) VALUES
(1, 'Network System Administrator', 'the process in which someone or something grows or changes and becomes more advanced: healthy growth and development.', 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn', 19),
(2, 'Design ', 'design description contains information about the purpose of the design, how it should be used, and how it looks', '03.jpg', 16),
(4, 'IT & software', 'IT Software means any representation of instructions, data, sound or image, including source code and object code, recorded in a machine readable form, and capable of being manipulated or providing inter-activity to a user', 'IT & Software.jpg', 19),
(5, 'heee', 'Data science is the study of data to extract meaningful insights for business. ', 'data_science.jpg', 16),
(10, 'IT', 'IT CATEGORY', '65dae20ed97329.44458357.jpg', 55);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_duration` int(11) DEFAULT NULL,
  `course_price` int(100) DEFAULT NULL,
  `course_image` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `course_video` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_duration`, `course_price`, `course_image`, `user_id`, `category_id`, `description`, `course_video`) VALUES
(88, 'PHP course', 10, 50, '65daedd7afd169.26001699.jpg', 16, 2, 'This PHP training course introduces the PHP framework and syntax and covers in depth the most important techniques used to build dynamic Web sites. Students learn how to connect to any modern database, and perform hands on practice with a MySQL database to create database-driven HTML forms and repor', NULL),
(89, 'Software engineering', 20, 100, 'software.jpg', 16, 4, 'this  course for software engineering ', NULL),
(90, 'OOP', 20, 50, 'PHP max.png', 19, 1, 'Object-oriented programming (OOP) is a style of programming characterized by the identification of classes of objects closely linked with the methods (functions) with which they are associated. It also includes ideas of inheritance of attributes and methods', NULL),
(91, 'UX/UI designer', 10, 100, '65e6d46aba3082.84858189.jpg', 19, 1, 'ux/ui designer free for  learning ', NULL),
(92, 'PHP course', 10, 100, '65e71167d45d92.75348452.jpg', 19, 2, 'this is course', NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `courses_list`
-- (See below for the actual view)
--
CREATE TABLE `courses_list` (
`course_id` int(11)
,`course_image` varchar(255)
,`course_name` varchar(255)
,`lesson_count` bigint(21)
,`sold_lesson_count` bigint(21)
,`course_price` int(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `course_detail`
-- (See below for the actual view)
--
CREATE TABLE `course_detail` (
`course_name` varchar(255)
,`course_id` int(11)
,`category_name` varchar(255)
,`course_price` int(100)
,`image` varchar(225)
,`course_image` varchar(255)
,`COUNT(student_enrollment.user_id)` bigint(21)
);

-- --------------------------------------------------------

--
-- Table structure for table `history_user_buy_course`
--

CREATE TABLE `history_user_buy_course` (
  `purchase_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `purchase_price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history_user_buy_course`
--

INSERT INTO `history_user_buy_course` (`purchase_id`, `user_id`, `course_id`, `purchase_date`, `purchase_price`) VALUES
(1, 70, 88, '2024-03-09', 50.00),
(2, 70, 88, '2024-03-01', 60.00),
(3, 65, 89, '2024-03-01', 70.00),
(4, 69, 88, '2024-03-08', 30.00),
(5, 67, 88, '2024-03-09', 50.00),
(6, 69, 89, '2024-03-01', 70.00),
(7, 67, 90, '2024-03-02', 50.00);

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `lesson_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `lesson_type` varchar(255) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`lesson_id`, `title`, `lesson_type`, `course_id`) VALUES
(8, '\r\nPHP function', 'https://www.tutorialspoint.com/php/php_tutorial.pdf', 88),
(9, 'Object Oriented Programming Using\r\nC++', 'https://www.cet.edu.in/noticefiles/285_OOPS%20lecture%20notes%20Complete.pdf', 90),
(10, 'Software Design Document\r\n', 'https://classes.engineering.wustl.edu/ese497/images/9/96/2004Schalk_BCI2000Implementation.pdf', 89);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification_receiver`
--

CREATE TABLE `notification_receiver` (
  `notification_receiver_id` int(11) NOT NULL,
  `notification_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `receive_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `order_list`
-- (See below for the actual view)
--
CREATE TABLE `order_list` (
`username` varchar(200)
,`course_name` varchar(255)
,`purchase_date` date
,`sum(history_user_buy_course.purchase_price)` decimal(32,2)
);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_type`) VALUES
(1, 'teacher'),
(2, 'student'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Stand-in structure for view `students_list`
-- (See below for the actual view)
--
CREATE TABLE `students_list` (
`username` varchar(200)
,`image` varchar(225)
,`number_of_courses` bigint(21)
,`enrollement_date` date
);

-- --------------------------------------------------------

--
-- Table structure for table `student_enrollment`
--

CREATE TABLE `student_enrollment` (
  `student_enrollment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `enrolled_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_enrollment`
--

INSERT INTO `student_enrollment` (`student_enrollment_id`, `user_id`, `course_id`, `enrolled_date`) VALUES
(1, 67, 89, '2024-03-15'),
(2, 67, 88, '2024-03-07'),
(3, 64, 88, '2024-03-01'),
(4, 65, 88, '2024-02-01'),
(5, 70, 89, '2024-03-15'),
(6, 66, 88, '2024-03-01'),
(7, 70, 90, '2024-03-08');

-- --------------------------------------------------------

--
-- Stand-in structure for view `top_course`
-- (See below for the actual view)
--
CREATE TABLE `top_course` (
`COUNT(history_user_buy_course.user_id)` bigint(21)
,`course_name` varchar(255)
,`course_image` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `trainers_list`
-- (See below for the actual view)
--
CREATE TABLE `trainers_list` (
`user_id` int(11)
,`username` varchar(200)
,`email` varchar(300)
,`image` varchar(225)
,`enrollement_date` date
,`role_type` varchar(255)
,`category_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role_id` varchar(50) NOT NULL,
  `image` varchar(225) NOT NULL,
  `enrollement_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `role_id`, `image`, `enrollement_date`) VALUES
(16, 'Kry Puthy', 'puthy@gmail.com', '$2y$10$WQRgyeGoqb44trSoSR1m9.COEyKF.PAl6GrfyWa6wr3PPSldeRYqi', '1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6p-EuFHpTVmDManWdBOnRhkFnFkSq8do5HCwu7iiylAD8ZH9tftYhtx5JJxqhU_Wsy_E&usqp=CAU', '2024-02-05'),
(17, 'Kry Puthy', 'Puthy.kry@gmail.com', '$2y$10$FVscBUDfIpFA.MfMR4Y61.kE7c9PKw3z44ff0t3ixa4KeAdUrC2Wa', '1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6p-EuFHpTVmDManWdBOnRhkFnFkSq8do5HCwu7iiylAD8ZH9tftYhtx5JJxqhU_Wsy_E&usqp=CAU', '2024-02-19'),
(19, 'Hean Sokhom', 'sokhom.hean@ss.com', '$2y$10$DK0taKmDE3Nnb1luPFcFtOzFxrDsQfGy3BMrqTC0XYIokHlQE2a6i', '1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvv3qJhaxckWn_M4_RBEjgNpDlCy1OX56W0dhihwaIXPMzx4yPZbHtKGttPX5eQtjlYw&usqp=CAU', '2023-11-05'),
(55, 'Admin', 'Admin@gmail.com', '$2y$10$5Au4ouk4jdghYJ/1ktqFueHkJcuKU3/crN2tH3uKm2nLU2prJTWxC', '3', '65d6fb6e63b6d.', '0000-00-00'),
(64, 'Soching Chun', 'soching@gmail.com', '$2y$10$a9EFOOjZH1QDdDlPWGrVCe3sSoYoY47559CvdRnGyqw2ym8bogoWO', '2', '65d8d4bc75744.jpg', '2014-02-18'),
(65, 'Phanit Chea', 'phanit@gmail.com', '$2y$10$npo.4XeHgGAJJ5GQl4znA.01gRnLVGxW6KZ0VgnTkqnj3NfVk1Hs2', '2', '65d8d52836757.', '2013-12-02'),
(66, 'Vanny Chan', 'vanny@gmail.com', '$2y$10$bdOdjkVrl6J8D3FvamiaSerQOjUCI/S5tTGsZPA6I3fDM3sBgJz.K', '2', '65d8d5a20a2d6.', '2015-02-27'),
(67, 'Kadin Sit', 'kadin@gmail.com', '$2y$10$XJYwkASGzIvJ9JiOJ70ZV.FyXSjwVAJ2MsKZpaRaxn0WBRFdKtsee', '2', '65d8d5caa25e6.', '2014-02-13'),
(69, 'Phanit', 'ophanit.chea@student.passerellesnumeriques.org', '$2y$10$CcZPEyB8gcN3wGXa3IKNAOO9TqXJgXUse9iUi7aOkfqHH3i7KonRq', '2', '65dc0ad2a0951.png', '0000-00-00'),
(70, 'Kemleang', 'kemleang@gmail.com', '$2y$10$.zMCaRED23zpicp4og649ufIFUacy4ZWCnes/B92v16XXwGxXQ.V.', '2', '65dc28ae5ee1c.jpg', '0000-00-00'),
(73, 'Phanit Chea', 'phanit.chea@gmail.com', '$2y$10$ixNxiJ1WgkFHrKX1LYJyMufTz2ol/G7B55vs9k124LGLY/uonwr1m', '2', '65e2ac1789f74.jpg', '0000-00-00'),
(74, 'yen yon', 'yen.yon1@gmail.com', '$2y$10$wSa4ueoz3UQpOICKDXoMTepct0kS3dO8xi2IJkEML6j9Hc8rQBQ.q', '1', '65e6ae92088699.64150305.jpg', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `users_assessment_course`
--

CREATE TABLE `users_assessment_course` (
  `user_assessment_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `assessment_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `users_list`
-- (See below for the actual view)
--
CREATE TABLE `users_list` (
`user_id` int(11)
,`username` varchar(200)
,`email` varchar(300)
,`role_type` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `video_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure for view `courses_list`
--
DROP TABLE IF EXISTS `courses_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `courses_list`  AS SELECT `courses`.`course_id` AS `course_id`, `courses`.`course_image` AS `course_image`, `courses`.`course_name` AS `course_name`, count(`lessons`.`lesson_id`) AS `lesson_count`, count(`history_user_buy_course`.`course_id`) AS `sold_lesson_count`, `courses`.`course_price` AS `course_price` FROM ((`courses` left join `lessons` on(`courses`.`course_id` = `lessons`.`course_id`)) left join `history_user_buy_course` on(`courses`.`course_id` = `history_user_buy_course`.`course_id`)) GROUP BY `courses`.`course_id`, `courses`.`course_name`, `courses`.`course_price` ORDER BY `courses`.`course_id` DESC ;

-- --------------------------------------------------------

--
-- Structure for view `course_detail`
--
DROP TABLE IF EXISTS `course_detail`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `course_detail`  AS SELECT `courses`.`course_name` AS `course_name`, `courses`.`course_id` AS `course_id`, `categories`.`category_name` AS `category_name`, `courses`.`course_price` AS `course_price`, `users`.`image` AS `image`, `courses`.`course_image` AS `course_image`, count(`student_enrollment`.`user_id`) AS `COUNT(student_enrollment.user_id)` FROM (((`student_enrollment` join `courses` on(`courses`.`course_id` = `student_enrollment`.`course_id`)) join `categories` on(`categories`.`category_id` = `courses`.`category_id`)) join `users` on(`users`.`user_id` = `courses`.`user_id`)) WHERE `courses`.`course_id` = 88 GROUP BY `courses`.`course_id`, `courses`.`course_name`, `categories`.`category_name`, `courses`.`course_price`, `users`.`image`, `courses`.`course_image` ;

-- --------------------------------------------------------

--
-- Structure for view `order_list`
--
DROP TABLE IF EXISTS `order_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `order_list`  AS SELECT `users`.`username` AS `username`, `courses`.`course_name` AS `course_name`, `history_user_buy_course`.`purchase_date` AS `purchase_date`, sum(`history_user_buy_course`.`purchase_price`) AS `sum(history_user_buy_course.purchase_price)` FROM ((`history_user_buy_course` join `users` on(`history_user_buy_course`.`user_id` = `users`.`user_id`)) join `courses` on(`courses`.`course_id` = `history_user_buy_course`.`course_id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `students_list`
--
DROP TABLE IF EXISTS `students_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `students_list`  AS SELECT `users`.`username` AS `username`, `users`.`image` AS `image`, count(`history_user_buy_course`.`course_id`) AS `number_of_courses`, `users`.`enrollement_date` AS `enrollement_date` FROM (`users` left join `history_user_buy_course` on(`users`.`user_id` = `history_user_buy_course`.`user_id`)) WHERE `users`.`role_id` = 2 GROUP BY `users`.`user_id`, `users`.`username`, `users`.`enrollement_date` ;

-- --------------------------------------------------------

--
-- Structure for view `top_course`
--
DROP TABLE IF EXISTS `top_course`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `top_course`  AS SELECT count(`history_user_buy_course`.`user_id`) AS `COUNT(history_user_buy_course.user_id)`, `courses`.`course_name` AS `course_name`, `courses`.`course_image` AS `course_image` FROM (`history_user_buy_course` join `courses` on(`courses`.`course_id` = `history_user_buy_course`.`course_id`)) GROUP BY `courses`.`course_name` ORDER BY count(`history_user_buy_course`.`user_id`) DESC ;

-- --------------------------------------------------------

--
-- Structure for view `trainers_list`
--
DROP TABLE IF EXISTS `trainers_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `trainers_list`  AS SELECT `users`.`user_id` AS `user_id`, `users`.`username` AS `username`, `users`.`email` AS `email`, `users`.`image` AS `image`, `users`.`enrollement_date` AS `enrollement_date`, `roles`.`role_type` AS `role_type`, `categories`.`category_name` AS `category_name` FROM ((`users` join `roles` on(`users`.`role_id` = `roles`.`role_id`)) join `categories` on(`users`.`user_id` = `categories`.`user_id`)) WHERE `roles`.`role_type` = 'teacher' GROUP BY `users`.`username` ;

-- --------------------------------------------------------

--
-- Structure for view `users_list`
--
DROP TABLE IF EXISTS `users_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `users_list`  AS SELECT `users`.`user_id` AS `user_id`, `users`.`username` AS `username`, `users`.`email` AS `email`, `roles`.`role_type` AS `role_type` FROM (`users` join `roles` on(`roles`.`role_id` = `users`.`role_id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessments`
--
ALTER TABLE `assessments`
  ADD PRIMARY KEY (`assessment_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `history_user_buy_course`
--
ALTER TABLE `history_user_buy_course`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  ADD PRIMARY KEY (`notification_receiver_id`),
  ADD KEY `notification_id` (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `student_enrollment`
--
ALTER TABLE `student_enrollment`
  ADD PRIMARY KEY (`student_enrollment_id`),
  ADD KEY `student_enrollment_ibfk_1` (`user_id`),
  ADD KEY `student_enrollment_ibfk_2` (`course_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`(100));

--
-- Indexes for table `users_assessment_course`
--
ALTER TABLE `users_assessment_course`
  ADD PRIMARY KEY (`user_assessment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `assessment_id` (`assessment_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessments`
--
ALTER TABLE `assessments`
  MODIFY `assessment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `history_user_buy_course`
--
ALTER TABLE `history_user_buy_course`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `lesson_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  MODIFY `notification_receiver_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `student_enrollment`
--
ALTER TABLE `student_enrollment`
  MODIFY `student_enrollment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users_assessment_course`
--
ALTER TABLE `users_assessment_course`
  MODIFY `user_assessment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `video_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assessments`
--
ALTER TABLE `assessments`
  ADD CONSTRAINT `assessments_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `history_user_buy_course`
--
ALTER TABLE `history_user_buy_course`
  ADD CONSTRAINT `history_user_buy_course_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `history_user_buy_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lessons`
--
ALTER TABLE `lessons`
  ADD CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  ADD CONSTRAINT `notification_receiver_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`),
  ADD CONSTRAINT `notification_receiver_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `student_enrollment`
--
ALTER TABLE `student_enrollment`
  ADD CONSTRAINT `student_enrollment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_enrollment_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_assessment_course`
--
ALTER TABLE `users_assessment_course`
  ADD CONSTRAINT `users_assessment_course_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_assessment_course_ibfk_2` FOREIGN KEY (`assessment_id`) REFERENCES `assessments` (`assessment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_assessment_course_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
