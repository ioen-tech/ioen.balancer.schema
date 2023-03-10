-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: nanogrid
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `nft_collections`
--

LOCK TABLES `nft_collections` WRITE;
/*!40000 ALTER TABLE `nft_collections` DISABLE KEYS */;
INSERT INTO `nft_collections` VALUES (1,'House.png','Collection One',10000,1),(2,'ElectricCarRed.png','Collection Two',20000,1),(3,'LightningFill.png','Collection Three',5000,1);
/*!40000 ALTER TABLE `nft_collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `nft_store`
--

LOCK TABLES `nft_store` WRITE;
/*!40000 ALTER TABLE `nft_store` DISABLE KEYS */;
INSERT INTO `nft_store` VALUES (1,'MoreInfo.png','IOENite Platinum NFT',100000),(2,'RedGridLogo.png','Macedon IOENite Platinum NFT',50000),(3,'SolarPanelRed.png','Macedon FCC membership discount',25000);
/*!40000 ALTER TABLE `nft_store` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-10 16:07:19
