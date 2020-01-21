-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';

USE `testapp`;

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Alerts Follow Up`;
CREATE TABLE `Alerts Follow Up` (
  `Reference` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Date Entered` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Need to be resolved by` tinytext COMMENT 'Influence Agency display order on dropdown',
  `Area` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Area ID` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Agency's Name` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Agency ID` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Alert Found on` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Agencys' Area Main DS` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Usually Lowest DS related to area',
  `Agency Unique DS` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Where Agency shows under',
  `Line(s)` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Usually Lowest DS related to area',
  `Alert Title` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Alert Text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Discuss what? / Resolution` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Status?` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Resolution / STC description` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `From:` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `To:` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Publication Date:` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Lines:` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Link to Agency relevant alert?` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Agency Alert Number / reference Number` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown',
  `Last updated:` datetime DEFAULT NULL,
  `By:` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Influence Agency display order on dropdown'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2020-01-21 15:01:30