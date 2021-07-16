-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2021 at 06:00 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `landingpage`
--

-- --------------------------------------------------------

--
-- Table structure for table `admissions`
--

CREATE TABLE `admissions` (
  `adminssion_id` int(11) NOT NULL,
  `admission_content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admissions`
--

INSERT INTO `admissions` (`adminssion_id`, `admission_content`, `created_at`, `updated_at`) VALUES
(1, '[value-1]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `backgrounditems`
--

CREATE TABLE `backgrounditems` (
  `background_item_id` int(11) NOT NULL,
  `background_item_image` text COLLATE utf8_unicode_ci NOT NULL,
  `background_item_content` text COLLATE utf8_unicode_ci NOT NULL,
  `background_item_title` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `backgrounditems`
--

INSERT INTO `backgrounditems` (`background_item_id`, `background_item_image`, `background_item_content`, `background_item_title`, `created_at`, `updated_at`) VALUES
(2, 'tải xuống (3).png', '[value-2]', '[value-3]', '789797', '5756');

-- --------------------------------------------------------

--
-- Table structure for table `backgrounds`
--

CREATE TABLE `backgrounds` (
  `background_id` int(11) NOT NULL,
  `background_title` text COLLATE utf8_unicode_ci NOT NULL,
  `background_content` text COLLATE utf8_unicode_ci NOT NULL,
  `background_link` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `backgrounds`
--

INSERT INTO `backgrounds` (`background_id`, `background_title`, `background_content`, `background_link`, `created_at`, `updated_at`) VALUES
(2, 'Bối cảnh', 'Passerelles numériques đã khảo sát thực tế tình hình kinh tế xã hội của Việt Nam trước khi bắt đầu hoạt động. Dữ liệu cho thấy mặc dù có sự tăng trưởng mạnh về kinh tế, phần lớn người dân ở các vùng sâu vùng xa miền Trung và Tây Nguyên vẫn còn gặp nhiều khó khăn và không có nhiều cơ hội tiếp cận giáo dục bậc cao sau THPT. Trong khi đó, với sự hỗ trợ và khuyến khích mạnh mẽ của chính phủ, Đà Nẵng được xác định trở thành trung tâm CNTT trong tương lai. Vì vậy, đây là nơi lý tưởng để sinh viên chúng tôi tìm kiếm cơ hội việc làm ổn định sau khi tốt nghiệp.', 'https://www.youtube.com/watch?v=jDDaplaOz7Q', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `board`
--

CREATE TABLE `board` (
  `board_id` int(11) NOT NULL,
  `board_name` text COLLATE utf8_unicode_ci NOT NULL,
  `board_function` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `board`
--

INSERT INTO `board` (`board_id`, `board_name`, `board_function`, `created_at`, `updated_at`) VALUES
(1, '[value-2]', '[value-3]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` text COLLATE utf8_unicode_ci NOT NULL,
  `company_image` text COLLATE utf8_unicode_ci NOT NULL,
  `company_content` text COLLATE utf8_unicode_ci NOT NULL,
  `company_link` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_image`, `company_content`, `company_link`, `created_at`, `updated_at`) VALUES
(1, 'hh', '[value-2]', '[value-3]', '[value-4]', '2021-07-16 03:48:51', '2021-07-16 03:48:51');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `image`, `created_at`, `updated_at`) VALUES
(17, 'Khangprofile', '20012001', '120000-2713.png', '2021-07-12 19:21:02', '2021-07-13 05:00:00'),
(20, 'dfsg', 'ds', '064305-Report2.PNG', '2021-07-12 23:43:05', '2021-07-12 23:43:05');

-- --------------------------------------------------------

--
-- Table structure for table `count`
--

CREATE TABLE `count` (
  `count_id` int(11) NOT NULL,
  `count_1` int(11) NOT NULL,
  `count_2` int(11) NOT NULL,
  `count_3` int(11) NOT NULL,
  `count_4` int(11) NOT NULL,
  `count_5` int(11) NOT NULL,
  `count_6` int(11) NOT NULL,
  `count_7` int(11) NOT NULL,
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `count`
--

INSERT INTO `count` (`count_id`, `count_1`, `count_2`, `count_3`, `count_4`, `count_5`, `count_6`, `count_7`, `created_at`, `updated_at`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_image` text COLLATE utf8_unicode_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_image`, `create_at`, `updated_at`) VALUES
(1, 'gallery-3.jpg', '2021-07-16 04:14:41', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `image_gallary`
--

CREATE TABLE `image_gallary` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `img_path` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `impacts`
--

CREATE TABLE `impacts` (
  `impact_id` int(11) NOT NULL,
  `impact_content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `impacts`
--

INSERT INTO `impacts` (`impact_id`, `impact_content`, `created_at`, `updated_at`) VALUES
(1, '0sádad', '2021-07-16 03:05:27', '2021-07-16 03:05:27');

-- --------------------------------------------------------

--
-- Table structure for table `localcompany`
--

CREATE TABLE `localcompany` (
  `localcompany_id` int(11) NOT NULL,
  `localcompany_image` text COLLATE utf8_unicode_ci NOT NULL,
  `localcompany_link` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `localcompany`
--

INSERT INTO `localcompany` (`localcompany_id`, `localcompany_image`, `localcompany_link`, `created_at`, `updated_at`) VALUES
(1, 'client-1.png', '[value-3]', '2021-07-16 05:30:28', '2021-07-16 05:30:28'),
(2, 'client-1.png', '[value-3]', '2021-07-16 05:30:28', '2021-07-16 05:30:28');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_06_21_070248_create_expenses_table', 1),
(2, '2021_07_15_204209_create_table_contact', 2);

-- --------------------------------------------------------

--
-- Table structure for table `milestones`
--

CREATE TABLE `milestones` (
  `milestone_id` int(11) NOT NULL,
  `milestone_year` text COLLATE utf8_unicode_ci NOT NULL,
  `milestone_content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `milestones`
--

INSERT INTO `milestones` (`milestone_id`, `milestone_year`, `milestone_content`, `created_at`, `updated_at`) VALUES
(1, '[value-1]', '[value-2]', '7867', '8778');

-- --------------------------------------------------------

--
-- Table structure for table `recruitment`
--

CREATE TABLE `recruitment` (
  `recruitment_id` int(11) NOT NULL,
  `organisation` text COLLATE utf8_unicode_ci NOT NULL,
  `reporting` text COLLATE utf8_unicode_ci NOT NULL,
  `status` text COLLATE utf8_unicode_ci NOT NULL,
  `start_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `location` text COLLATE utf8_unicode_ci NOT NULL,
  `background` text COLLATE utf8_unicode_ci NOT NULL,
  `responsibility` text COLLATE utf8_unicode_ci NOT NULL,
  `skill` text COLLATE utf8_unicode_ci NOT NULL,
  `language` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recruitment`
--

INSERT INTO `recruitment` (`recruitment_id`, `organisation`, `reporting`, `status`, `start_date`, `location`, `background`, `responsibility`, `skill`, `language`, `created_at`, `updated_at`) VALUES
(1, '[value-2]', '[value-3]', '[value-4]', '0000-00-00 00:00:00', '[value-6]', '[value-7]', '[value-8]', '[value-9]', '[value-10]', '0000-00-00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `staff_image` text COLLATE utf8_unicode_ci NOT NULL,
  `staff_name` text COLLATE utf8_unicode_ci NOT NULL,
  `staff_function` text COLLATE utf8_unicode_ci NOT NULL,
  `staff_facebook` text COLLATE utf8_unicode_ci NOT NULL,
  `staff_gmail` text COLLATE utf8_unicode_ci NOT NULL,
  `staff_phone` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_image`, `staff_name`, `staff_function`, `staff_facebook`, `staff_gmail`, `staff_phone`, `created_at`, `updated_at`) VALUES
(1, '[value-2]', '[value-3]', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '[value-2]', '[value-3]', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_mess` text COLLATE utf8_unicode_ci NOT NULL,
  `status_color` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_id`, `status_mess`, `status_color`, `created_at`, `updated_at`) VALUES
(1, 'Từ năm 2010, Passerlles numériques Việt Nam (PNV) cung cấp học bổng toàn phần chất lượng cao về công nghệ thông tin kéo dài 3 năm với các chuyên ngành Kiểm thử Tự động, Thiết kế Web hoặc Lập trình thiết bị di động. Mỗi chuyên ngành đều được giảng dạy một cách tổng hợp, bao gồm cả kĩ năng cứng và mềm đi kèm với một chương trình phát triển cá nhân thiết thực.', 'white', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_image` text COLLATE utf8_unicode_ci NOT NULL,
  `student_name` text COLLATE utf8_unicode_ci NOT NULL,
  `student_mess` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_image`, `student_name`, `student_mess`, `created_at`, `updated_at`) VALUES
(1, '[value-2]', '[value-3]', '[value-4]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `table_contact`
--

CREATE TABLE `table_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admissions`
--
ALTER TABLE `admissions`
  ADD PRIMARY KEY (`adminssion_id`);

--
-- Indexes for table `backgrounditems`
--
ALTER TABLE `backgrounditems`
  ADD PRIMARY KEY (`background_item_id`);

--
-- Indexes for table `backgrounds`
--
ALTER TABLE `backgrounds`
  ADD PRIMARY KEY (`background_id`);

--
-- Indexes for table `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`board_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `count`
--
ALTER TABLE `count`
  ADD PRIMARY KEY (`count_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `image_gallary`
--
ALTER TABLE `image_gallary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `impacts`
--
ALTER TABLE `impacts`
  ADD PRIMARY KEY (`impact_id`);

--
-- Indexes for table `localcompany`
--
ALTER TABLE `localcompany`
  ADD PRIMARY KEY (`localcompany_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `milestones`
--
ALTER TABLE `milestones`
  ADD PRIMARY KEY (`milestone_id`);

--
-- Indexes for table `recruitment`
--
ALTER TABLE `recruitment`
  ADD PRIMARY KEY (`recruitment_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `table_contact`
--
ALTER TABLE `table_contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admissions`
--
ALTER TABLE `admissions`
  MODIFY `adminssion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `backgrounditems`
--
ALTER TABLE `backgrounditems`
  MODIFY `background_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `backgrounds`
--
ALTER TABLE `backgrounds`
  MODIFY `background_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `board`
--
ALTER TABLE `board`
  MODIFY `board_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `count`
--
ALTER TABLE `count`
  MODIFY `count_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `image_gallary`
--
ALTER TABLE `image_gallary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `impacts`
--
ALTER TABLE `impacts`
  MODIFY `impact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `localcompany`
--
ALTER TABLE `localcompany`
  MODIFY `localcompany_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `milestones`
--
ALTER TABLE `milestones`
  MODIFY `milestone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recruitment`
--
ALTER TABLE `recruitment`
  MODIFY `recruitment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `table_contact`
--
ALTER TABLE `table_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
