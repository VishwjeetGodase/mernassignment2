-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2025 at 07:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mern_assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `task`, `status`, `created_at`) VALUES
(5, 'sadfsfsaasdfsadf', 'completed', '2025-07-25 04:23:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tech` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `tech`) VALUES
(1, 'Ravi', 'React'),
(2, 'ravi', 'adsd'),
(3, 'ravipawar', 'adsfsdafds'),
(4, 'asfsda', 'asdfas'),
(5, 'ravipawar', 'adfsdaf'),
(6, 'asdf', 'adsfsdafds'),
(7, 'ravipawar', 'adsfsdafds'),
(8, 'asdsd', 'asdfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `users_jwt`
--

CREATE TABLE `users_jwt` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_jwt`
--

INSERT INTO `users_jwt` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'user1', '$2b$10$KBlkL7/8Zre2PWJkGHpNHOXkLarNJxNWZ4xHziDegLVgCBErFdHH.', '2025-07-25 04:50:09'),
(2, 'user2', '$2b$10$W4rhpo89nfPkJEPRuM0f7OE6oDZ3fYmNM7zDo6QqCI5kV4sRPKr3y', '2025-07-25 04:56:05'),
(3, 'user3', '$2b$10$wQDPaRZt4Na52eXLohAREeMeXVlxrfDuvOafRTe/FAtnnidVSAhiS', '2025-07-25 04:56:48'),
(4, 'user5', '$2b$10$5bV/E0Z6RRb7UPUarSrw5u7UGFy4cERbfS8alJWRA94IXGaEtVmwG', '2025-07-25 04:58:45'),
(5, 'ravi', '$2b$10$1oAWHEGNq8yfdq7bf2mfEeSYEwDYnh1CiNHiwK96AVx3TcBEgTF.S', '2025-07-25 05:17:26'),
(6, 'ravia', '$2b$10$WDCJ4RXCQV3jBCAwZEBy.etdfoDTVi9ORrFCTJoFRsXFB6z4aDR1m', '2025-07-25 05:19:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_jwt`
--
ALTER TABLE `users_jwt`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users_jwt`
--
ALTER TABLE `users_jwt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
