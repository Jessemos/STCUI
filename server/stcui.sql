-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: stcui-db
-- Generation Time: Jan 26, 2020 at 08:23 PM
-- Server version: 8.0.19
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `STCUI`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_tables___agency_info`
--

CREATE TABLE `db_tables___agency_info` (
  `Key - internal` varchar(28) NOT NULL,
  `AGENCY Editor Display NAME` varchar(52) DEFAULT NULL,
  `Agency Full Name` varchar(10) DEFAULT NULL,
  `AGENCY_ID` varchar(7) DEFAULT NULL,
  `ROUTE_TYPE_ID` int DEFAULT NULL,
  `Agency DS` varchar(6) DEFAULT NULL,
  `Created (Date)` varchar(10) DEFAULT NULL,
  `Created By` varchar(10) DEFAULT NULL,
  `Last Updated` varchar(10) DEFAULT NULL,
  `Last Updated By` varchar(10) DEFAULT NULL,
  `Area Key - foriegn` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `db_tables___agency_info`
--

INSERT INTO `db_tables___agency_info` (`Key - internal`, `AGENCY Editor Display NAME`, `Agency Full Name`, `AGENCY_ID`, `ROUTE_TYPE_ID`, `Agency DS`, `Created (Date)`, `Created By`, `Last Updated`, `Last Updated By`, `Area Key - foriegn`) VALUES
('1182A1R12304ADS1053513AID0RT', 'MGM Resort Tram', '', '1053513', 0, '12304', '', '', '', '', '1182A1R'),
('1182A1R12304ADS1053515AID3RT', 'Sam\'s Town Shuttle', '', '1053515', 3, '12304', '', '', '', '', '1182A1R'),
('1182A1R12304ADS1053516AID0RT', 'Las Vegas Monorail', '', '1053516', 0, '12304', '', '', '', '', '1182A1R'),
('1182A1R12304ADS1525966AID3RT', 'City of Las Vegas', '', '1525966', 3, '12304', '', '', '', '', '1182A1R'),
('1182A1R540ADS10808AID3RT', 'RTCSNV', '', '10808', 3, '540', '', '', '', '', '1182A1R'),
('121A1R1918ADS726988AID2RT', 'LIRR', '', '726988', 2, '1918', '', '', '', '', '121A1R'),
('121A1R1918ADS855111AID1RT', 'NYC Subway', '', '855111', 1, '1918', '', '', '', '', '121A1R'),
('121A1R2037ADS10170AID3RT', 'MTA New York City Transit', '', '10170', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS427AID3RT', 'MTA New York City Transit', '', '427', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS775146AID3RT', 'MTA New York City Transit', '', '775146', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS775147AID3RT', 'MTA New York City Transit', '', '775147', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS857463AID3RT', 'MTA New York City Transit', '', '857463', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS864203AID3RT', 'MTA New York City Transit', '', '864203', 3, '2037', '', '', '', '', '121A1R'),
('121A1R2037ADS894403AID3RT', 'MTA New York City Transit', '', '894403', 3, '2037', '', '', '', '', '121A1R'),
('121A1R25ADS864204AID2RT', 'LIRR', '', '864204', 2, '25', '', '', '', '', '121A1R'),
('121A1R25ADS873305AID1RT', 'NYC Subway', '', '873305', 1, '25', '', '', '', '', '121A1R'),
('121A1R26ADS425AID2RT', 'Metro-North Railroad', '', '425', 2, '26', '', '', '', '', '121A1R'),
('121A1R26ADS894721AID2RT', 'Metro-North Railroad', '', '894721', 2, '26', '', '', '', '', '121A1R'),
('121A1R56ADS5910AID0RT', 'NJ TRANSIT RAIL', '', '5910', 0, '56', '', '', '', '', '121A1R'),
('1322A1R562ADS431AID0RT', 'SORTA', '', '431', 0, '562', '', '', '', '', '1322A1R'),
('1322A1R562ADS5911AID3RT', 'SORTA', '', '5911', 3, '562', '', '', '', '', '1322A1R'),
('1322A1R865ADS856802AID3RT', 'TANK', '', '856802', 3, '865', '', '', '', '', '1322A1R'),
('141A1R2192ADS1594AID2RT', 'MBTA', '', '1594', 2, '2192', '', '', '', '', '141A1R'),
('141A1R2192ADS1637AID1RT', 'MBTA', '', '1637', 1, '2192', '', '', '', '', '141A1R'),
('141A1R2192ADS1643AID1RT', 'MBTA', '', '1643', 1, '2192', '', '', '', '', '141A1R'),
('141A1R2192ADS1644AID1RT', 'MBTA', '', '1644', 1, '2192', '', '', '', '', '141A1R'),
('141A1R2192ADS775448AID2RT', 'MBTA', '', '775448', 2, '2192', '', '', '', '', '141A1R'),
('141A1R2192ADS775682AID2RT', 'Cape Cod Regional Transit Authority', '', '775682', 2, '2192', '', '', '', '', '141A1R'),
('141A1R2370ADS775684AID4RT', 'Boston Harbor Islands State Park', '', '775684', 4, '2370', '', '', '', '', '141A1R'),
('141A1R28ADS1424597AID3RT', 'MBTA', '', '1424597', 3, '28', '', '', '', '', '141A1R'),
('141A1R28ADS1595AID3RT', 'Massport', '', '1595', 3, '28', '', '', '', '', '141A1R'),
('141A1R28ADS1596AID4RT', 'MBTA Ferry', '', '1596', 4, '28', '', '', '', '', '141A1R'),
('141A1R28ADS5039AID3RT', 'MBTA', '', '5039', 3, '28', '', '', '', '', '141A1R'),
('141A1R28ADS776001AID3RT', 'MBTA', '', '776001', 3, '28', '', '', '', '', '141A1R'),
('141A1R29ADS5040AID3RT', 'MetroWest Regional Transit Authority', '', '5040', 3, '29', '', '', '', '', '141A1R'),
('141A1R30ADS775676AID3RT', 'Cape Ann Transportation', '', '775676', 3, '30', '', '', '', '', '141A1R'),
('141A1R477ADS1344651AID3RT', 'Rhode Island Public Transit Authority', '', '1344651', 3, '477', '', '', '', '', '141A1R'),
('142A1R113ADS1312260AID2RT', 'MARC', '', '1312260', 2, '113', '', '', '', '', '142A1R'),
('142A1R113ADS1312261AID2RT', 'MARC', '', '1312261', 2, '113', '', '', '', '', '142A1R'),
('142A1R113ADS1517691AID3RT', 'MTA', '', '1517691', 3, '113', '', '', '', '', '142A1R'),
('142A1R113ADS1517692AID0RT', 'MTA Light Rail', '', '1517692', 0, '113', '', '', '', '', '142A1R'),
('142A1R113ADS1517693AID0RT', 'MTA Light Rail', '', '1517693', 0, '113', '', '', '', '', '142A1R'),
('142A1R113ADS1517694AID1RT', 'MD Metro Subway', '', '1517694', 1, '113', '', '', '', '', '142A1R'),
('142A1R113ADS857330AID1RT', 'MD Metro Subway', '', '857330', 1, '113', '', '', '', '', '142A1R'),
('143A1R1055ADS1479522AID3RT', 'Oakville', '', '1479522', 3, '1055', '', '', '', '', '143A1R'),
('143A1R1062ADS1479523AID3RT', 'Brampton Transit', '', '1479523', 3, '1062', '', '', '', '', '143A1R'),
('143A1R112ADS1479524AID3RT', 'GO Transit Bus', '', '1479524', 3, '112', '', '', '', '', '143A1R'),
('143A1R112ADS1479525AID2RT', 'GO Transit', '', '1479525', 2, '112', '', '', '', '', '143A1R'),
('143A1R1249ADS857646AID3RT', 'York Region Transit', '', '857646', 3, '1249', '', '', '', '', '143A1R'),
('143A1R128ADS904013AID3RT', 'Hamilton Street Railway', '', '904013', 3, '128', '', '', '', '', '143A1R'),
('143A1R129ADS857677AID0RT', 'Grand River Transit', '', '857677', 0, '129', '', '', '', '', '143A1R'),
('143A1R129ADS857776AID3RT', 'Grand River Transit', '', '857776', 3, '129', '', '', '', '', '143A1R'),
('143A1R130ADS1306743AID3RT', 'Guelph Transit', '', '1306743', 3, '130', '', '', '', '', '143A1R'),
('143A1R13598ADS858163AID3RT', 'Wroute', '', '858163', 3, '13598', '', '', '', '', '143A1R'),
('143A1R13944ADS858164AID3RT', 'VIA Rail', '', '858164', 3, '13944', '', '', '', '', '143A1R'),
('143A1R13944ADS858409AID2RT', 'Train de Charlevoix', '', '858409', 2, '13944', '', '', '', '', '143A1R'),
('143A1R13944ADS858410AID2RT', 'VIA Rail', '', '858410', 2, '13944', '', '', '', '', '143A1R'),
('143A1R13944ADS858411AID3RT', 'RÉGIM', '', '858411', 3, '13944', '', '', '', '', '143A1R'),
('143A1R2026ADS874402AID2RT', 'UP Express', '', '874402', 2, '2026', '', '', '', '', '143A1R'),
('143A1R2054ADS10206AID3RT', 'Pelham Transit', '', '10206', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS1347766AID3RT', 'Fort Erie Transit', '', '1347766', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS434AID3RT', 'Niagara Falls Transit & WeGo', '', '434', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS460AID3RT', 'St. Catharines Transit Commission', '', '460', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS461AID3RT', 'Lincoln uLinc Transit', '', '461', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS775168AID3RT', 'Welland Transit', '', '775168', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS857602AID3RT', 'Niagara on the Lake Transit', '', '857602', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2054ADS882888AID3RT', 'Niagara Region Transit', '', '882888', 3, '2054', '', '', '', '', '143A1R'),
('143A1R2060ADS889320AID3RT', 'Barrie Transit', '', '889320', 3, '2060', '', '', '', '', '143A1R'),
('143A1R2066ADS889319AID3RT', 'Milton Transit', '', '889319', 3, '2066', '', '', '', '', '143A1R'),
('143A1R2079ADS1137671AID3RT', 'Peterborough Transit', '', '1137671', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS1137672AID3RT', 'Milton Transit', '', '1137672', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS1137673AID3RT', 'BWG Transit', '', '1137673', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS1137674AID4RT', 'Billy Bishop Airport Ferry', '', '1137674', 4, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS852195AID3RT', 'Port Hope Transit', '', '852195', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS852196AID3RT', 'Niagara-on-the-Lake Transit', '', '852196', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2079ADS852197AID3RT', 'Lindsay Transit', '', '852197', 3, '2079', '', '', '', '', '143A1R'),
('143A1R2343ADS852199AID3RT', 'Durham Region Transit', '', '852199', 3, '2343', '', '', '', '', '143A1R'),
('143A1R32ADS852200AID3RT', 'TTC', '', '852200', 3, '32', '', '', '', '', '143A1R'),
('143A1R32ADS852201AID0RT', 'TTC Streetcar', '', '852201', 0, '32', '', '', '', '', '143A1R'),
('143A1R32ADS852202AID1RT', 'Toronto Subway', '', '852202', 1, '32', '', '', '', '', '143A1R'),
('143A1R478ADS852203AID3RT', 'MiWay', '', '852203', 3, '478', '', '', '', '', '143A1R'),
('143A1R872ADS852204AID3RT', 'Burlington Transit', '', '852204', 3, '872', '', '', '', '', '143A1R'),
('145A1R13594ADS852205AID3RT', 'YVR Skylynx', '', '852205', 3, '13594', '', '', '', '', '145A1R'),
('145A1R2052ADS852206AID3RT', 'BC Transit - Central Fraser Valley Transit System', '', '852206', 3, '2052', '', '', '', '', '145A1R'),
('145A1R2364ADS852207AID3RT', 'BC Transit - Chilliwack Transit System', '', '852207', 3, '2364', '', '', '', '', '145A1R'),
('145A1R2365ADS852209AID3RT', 'BC Transit - Fraser Valley Express', '', '852209', 3, '2365', '', '', '', '', '145A1R'),
('145A1R35ADS852210AID2RT', 'TransLink', '', '852210', 2, '35', '', '', '', '', '145A1R'),
('145A1R35ADS852211AID3RT', 'TransLink', '', '852211', 3, '35', '', '', '', '', '145A1R'),
('145A1R35ADS852213AID4RT', 'TransLink', '', '852213', 4, '35', '', '', '', '', '145A1R'),
('145A1R35ADS852214AID1RT', 'TransLink', '', '852214', 1, '35', '', '', '', '', '145A1R'),
('1663A1R1666ADS775967AID3RT', 'Oberhavel Verkehrsgesellschaft', '', '775967', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775984AID5RT', 'DB Regio', '', '775984', 5, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775985AID0RT', 'Schöneicher Rüdersdorfer Straßenbahn', '', '775985', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775986AID4RT', 'Strausberger Eisenbahn GmbH', '', '775986', 4, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775987AID0RT', 'Strausberger Eisenbahn GmbH', '', '775987', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775988AID3RT', 'Stadtverkehrsgesellschaft mbH Frankfurt (Oder)', '', '775988', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775989AID0RT', 'Stadtverkehrsgesellschaft Tram', '', '775989', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775990AID3RT', 'Sabinchen Touristik', '', '775990', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775997AID3RT', 'VBB', '', '775997', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775998AID3RT', 'VBB', '', '775998', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS775999AID3RT', 'VBB', '', '775999', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852215AID3RT', 'A. Reich', '', '852215', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852217AID3RT', 'ANG', '', '852217', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852218AID3RT', 'Barnimer Busgesellschaft', '', '852218', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852219AID3RT', 'Busverkehr Oder-Spree GmbH', '', '852219', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852220AID4RT', 'BVG', '', '852220', 4, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852222AID3RT', 'BVG', '', '852222', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852223AID3RT', 'BVG', '', '852223', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852224AID3RT', 'BVG', '', '852224', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852225AID1RT', 'BVG', '', '852225', 1, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852226AID1RT', 'BVG', '', '852226', 1, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852227AID0RT', 'BVG', '', '852227', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852230AID0RT', 'BVG', '', '852230', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852231AID0RT', 'BVG', '', '852231', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852232AID3RT', 'Cottbusverkehr', '', '852232', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852233AID0RT', 'Cottbusverkehr', '', '852233', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852235AID3RT', 'DB Regio Bus', '', '852235', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852237AID2RT', 'DB', '', '852237', 2, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852238AID2RT', 'DB', '', '852238', 2, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852239AID3RT', 'Busverkehr Gerd Schmidt', '', '852239', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852240AID3RT', 'Glaser Armin Omnibusverkehr', '', '852240', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852241AID3RT', 'Heidenheimer Verkehrsgesellschaft', '', '852241', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852242AID3RT', 'Lange Tours', '', '852242', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852243AID3RT', 'Niederbarnimer Eisenbahn Bus', '', '852243', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS852244AID2RT', 'Niederbarnimer Eisenbahn', '', '852244', 2, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS853656AID5RT', 'S-Bahn Berlin', '', '853656', 5, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS854323AID2RT', 'Verkehrsverbund Berlin-Brandenburg', '', '854323', 2, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS856384AID3RT', 'Verkehrsbetriebe Brandenburg', '', '856384', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS856385AID0RT', 'Verkehrsbetriebe Brandenburg', '', '856385', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS858279AID3RT', 'Ostdeutsche Eisenbahn GmbH', '', '858279', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS884881AID2RT', 'Ostdeutsche Eisenbahn GmbH', '', '884881', 2, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS896048AID5RT', 'S-Bahn Berlin', '', '896048', 5, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970979AID3RT', 'Verkehrsverbund Elbe Elster', '', '970979', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970984AID3RT', 'Verkehrsgesellschaft Oberspreewald Lausitz', '', '970984', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970985AID3RT', 'RVS', '', '970985', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970987AID3RT', 'Verkehrsgesellschaft Teltow Fläming', '', '970987', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970988AID0RT', 'Woltersdorfer Straßenbahn', '', '970988', 0, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970989AID3RT', 'Omnibusbetrieb Gustav Wetzel', '', '970989', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970990AID3RT', 'Ostprignitz Ruppiner Personennahverkehrsgesellschaft', '', '970990', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970992AID4RT', 'Verkehrsverbund Potsdam', '', '970992', 4, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970993AID3RT', 'Verkehrsverbund Potsdam', '', '970993', 3, '1666', '', '', '', '', '1663A1R'),
('1663A1R1666ADS970997AID0RT', 'Verkehrsverbund Potsdam', '', '970997', 0, '1666', '', '', '', '', '1663A1R'),
('2122A1R1145ADS185AID2RT', 'National Rail', '', '185', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS194AID2RT', 'TfL Rail', '', '194', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS225AID2RT', 'National Rail', '', '225', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS2394AID2RT', 'TfL Rail', '', '2394', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS266AID2RT', 'TfL Rail', '', '266', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS775950AID2RT', 'Overground', '', '775950', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS776052AID2RT', 'Overground', '', '776052', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS776053AID2RT', 'Overground', '', '776053', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1145ADS8768AID2RT', 'TfL Rail', '', '8768', 2, '1145', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1009649AID3RT', 'Metrobus', '', '1009649', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS10432AID3RT', 'Metrobus', '', '10432', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1060193AID2RT', 'Other Operators', '', '1060193', 2, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1109479AID3RT', 'SE Buses', '', '1109479', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS11289AID0RT', 'Other Operators', '', '11289', 0, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS11290AID4RT', 'Other Operators', '', '11290', 4, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1177038AID3RT', 'Stagecoach Oxfordshire', '', '1177038', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1177AID3RT', 'Brighton and Hove Bus', '', '1177', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1349910AID3RT', 'Courtney Buses', '', '1349910', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1458101AID3RT', 'Compass Travel', '', '1458101', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1458103AID3RT', 'Compass Travel', '', '1458103', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS1614AID3RT', 'First', '', '1614', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS223AID3RT', 'Arriva', '', '223', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS224AID3RT', 'Brighton and Hove Bus', '', '224', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS226AID3RT', 'Abellio', '', '226', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS321AID3RT', 'Stephensons of Essex', '', '321', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS322AID3RT', 'Thames Travel', '', '322', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS348AID3RT', 'Thames Travel', '', '348', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS5869AID3RT', 'Reading Buses', '', '5869', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS5872AID3RT', 'Reading Buses', '', '5872', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS594AID3RT', 'Arriva Kent Thameside', '', '594', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS726987AID3RT', 'Oxford Bus Company', '', '726987', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS775395AID3RT', 'Oxford Bus Company', '', '775395', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS850561AID3RT', 'Arriva', '', '850561', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS851936AID3RT', 'Metrobus', '', '851936', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS854536AID3RT', 'Stagecoach', '', '854536', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS855547AID3RT', 'Uno', '', '855547', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS855549AID3RT', 'Centrebus', '', '855549', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS855553AID3RT', 'Stagecoach', '', '855553', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS866485AID3RT', 'Carousel Buses', '', '866485', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1146ADS897121AID3RT', 'Stagecoach Oxfordshire', '', '897121', 3, '1146', '', '', '', '', '2122A1R'),
('2122A1R1147ADS1AID4RT', 'Tfl', '', '1', 4, '1147', '', '', '', '', '2122A1R'),
('2122A1R1147ADS2AID4RT', 'Tfl', '', '2', 4, '1147', '', '', '', '', '2122A1R'),
('2122A1R1148ADS60AID0RT', 'Tramlink', '', '60', 0, '1148', '', '', '', '', '2122A1R'),
('2122A1R1148ADS61AID0RT', 'Tramlink', '', '61', 0, '1148', '', '', '', '', '2122A1R'),
('2122A1R1148ADS62AID0RT', 'Tramlink', '', '62', 0, '1148', '', '', '', '', '2122A1R'),
('2122A1R1148ADS63AID0RT', 'Tramlink', '', '63', 0, '1148', '', '', '', '', '2122A1R'),
('2122A1R1148ADS64AID0RT', 'Tramlink', '', '64', 0, '1148', '', '', '', '', '2122A1R'),
('2122A1R1149ADS3AID1RT', 'London Underground', '', '3', 1, '1149', '', '', '', '', '2122A1R'),
('2122A1R1149ADS4AID1RT', 'London Underground', '', '4', 1, '1149', '', '', '', '', '2122A1R'),
('2122A1R1150ADS44AID5RT', 'Dockland Light Railway', '', '44', 5, '1150', '', '', '', '', '2122A1R'),
('2122A1R1150ADS45AID5RT', 'Dockland Light Railway', '', '45', 5, '1150', '', '', '', '', '2122A1R'),
('2122A1R1150ADS46AID5RT', 'Dockland Light Railway', '', '46', 5, '1150', '', '', '', '', '2122A1R'),
('2122A1R1150ADS47AID5RT', 'Dockland Light Railway', '', '47', 5, '1150', '', '', '', '', '2122A1R'),
('2122A1R1248ADS23AID3RT', 'Tfl', '', '23', 3, '1248', '', '', '', '', '2122A1R'),
('2122A1R1248ADS24AID3RT', 'Tfl', '', '24', 3, '1248', '', '', '', '', '2122A1R'),
('2122A1R1248ADS25AID3RT', 'Tfl', '', '25', 3, '1248', '', '', '', '', '2122A1R'),
('22A1R100014ADStemp9AID3RT', 'Golden Gate Transit', '', 'temp9', 3, '100014', '', '', '', '', '22A1R'),
('22A1R11ADS26AID1RT', 'BART', '', '26', 1, '11', '', '', '', '', '22A1R'),
('22A1R11ADS27AID1RT', 'BART', '', '27', 1, '11', '', '', '', '', '22A1R'),
('22A1R11ADS28AID1RT', 'BART', '', '28', 1, '11', '', '', '', '', '22A1R'),
('22A1R12ADS5AID3RT', 'AC Transit', '', '5', 3, '12', '', '', '', '', '22A1R'),
('22A1R12ADS6AID3RT', 'AC Transit', '', '6', 3, '12', '', '', '', '', '22A1R'),
('22A1R251ADS7AID3RT', 'SamTrans', '', '7', 3, '251', '', '', '', '', '22A1R'),
('22A1R251ADS8AID3RT', 'SamTrans', '', '8', 3, '251', '', '', '', '', '22A1R'),
('22A1R7ADS29AID0RT', 'Muni Metro', '', '29', 0, '7', '', '', '', '', '22A1R'),
('22A1R7ADS30AID0RT', 'Muni Metro', '', '30', 0, '7', '', '', '', '', '22A1R'),
('22A1R7ADS31AID0RT', 'Muni Metro', '', '31', 0, '7', '', '', '', '', '22A1R'),
('22A1R7ADS48AID3RT', 'MUNI', '', '48', 3, '7', '', '', '', '', '22A1R'),
('22A1R7ADS49AID3RT', 'MUNI', '', '49', 3, '7', '', '', '', '', '22A1R'),
('22A1R7ADS50AID3RT', 'MUNI', '', '50', 3, '7', '', '', '', '', '22A1R'),
('22A1R7ADS51AID3RT', 'MUNI', '', '51', 3, '7', '', '', '', '', '22A1R'),
('22A1R7ADStemp13AID5RT', 'SF Cable Car', '', 'temp13', 5, '7', '', '', '', '', '22A1R'),
('22A1R8ADS52AID2RT', 'Caltrain', '', '52', 2, '8', '', '', '', '', '22A1R'),
('22A1R8ADS53AID2RT', 'Caltrain', '', '53', 2, '8', '', '', '', '', '22A1R'),
('22A1R8ADS54AID2RT', 'Caltrain', '', '54', 2, '8', '', '', '', '', '22A1R'),
('22A1R8ADS55AID2RT', 'Caltrain', '', '55', 2, '8', '', '', '', '', '22A1R'),
('22A1R9ADS10AID3RT', 'VTA', '', '10', 3, '9', '', '', '', '', '22A1R'),
('22A1R9ADS32AID0RT', 'VTA', '', '32', 0, '9', '', '', '', '', '22A1R'),
('22A1R9ADS33AID0RT', 'VTA', '', '33', 0, '9', '', '', '', '', '22A1R'),
('22A1R9ADS34AID0RT', 'VTA', '', '34', 0, '9', '', '', '', '', '22A1R'),
('22A1R9ADS9AID3RT', 'VTA', '', '9', 3, '9', '', '', '', '', '22A1R'),
('302A1R109ADStemp1AID3RT', 'METRO', '', 'temp1', 3, '109', '', '', '', '', '302A1R'),
('302A1R114ADStemp2AID3RT', 'OCTA', '', 'temp2', 3, '114', '', '', '', '', '302A1R'),
('302A1R117ADStemp3AID3RT', 'Riverside Transit Agency', '', 'temp3', 3, '117', '', '', '', '', '302A1R'),
('302A1R1609ADStemp4AID3RT', 'Norwalk Transit System', '', 'temp4', 3, '1609', '', '', '', '', '302A1R'),
('302A1R2722ADStemp5AID3RT', 'Los Angeles County Shuttles', '', 'temp5', 3, '2722', '', '', '', '', '302A1R'),
('302A1R517ADStemp6AID3RT', 'LADOT', '', 'temp6', 3, '517', '', '', '', '', '302A1R'),
('302A1R668ADStemp7AID3RT', 'OMNITRANS', '', 'temp7', 3, '668', '', '', '', '', '302A1R'),
('302A1R973ADStemp8AID3RT', 'Montebello Bus Lines', '', 'temp8', 3, '973', '', '', '', '', '302A1R'),
('522A2R136ADS11AID0RT', 'City of Seattle', '', '11', 0, '136', '', '', '', '', '522A2R'),
('522A2R136ADS12AID0RT', 'Sound Transit', '', '12', 0, '136', '', '', '', '', '522A2R'),
('522A2R136ADS35AID3RT', 'Metro Transit', '', '35', 3, '136', '', '', '', '', '522A2R'),
('522A2R136ADS36AID3RT', 'Metro Transit', '', '36', 3, '136', '', '', '', '', '522A2R'),
('522A2R136ADS37AID3RT', 'Metro Transit', '', '37', 3, '136', '', '', '', '', '522A2R'),
('522A2R1940ADStemp12AID3RT', 'Sound Transit', '', 'temp12', 3, '1940', '', '', '', '', '522A2R'),
('522A2R1942ADStemp10AID3RT', 'Community Transit', '', 'temp10', 3, '1942', '', '', '', '', '522A2R'),
('522A2R1943ADStemp15AID0RT', 'Sound Transit', '', 'temp15', 0, '1943', '', '', '', '', '522A2R'),
('522A2R2385ADStemp16AID6RT', 'Seattle Monorail', '', 'temp16', 6, '2385', '', '', '', '', '522A2R'),
('662A1R342ADStemp17AID1RT', 'METRO', '', 'temp17', 1, '342', '', '', '', '', '662A1R'),
('662A1R342ADStemp18AID2RT', 'TRAIN', '', 'temp18', 2, '342', '', '', '', '', '662A1R'),
('662A1R342ADStemp19AID5RT', 'RER', '', 'temp19', 5, '342', '', '', '', '', '662A1R'),
('747A1R296ADS13AID0RT', 'Regional Transportation District', '', '13', 0, '296', '', '', '', '', '747A1R'),
('747A1R296ADS14AID0RT', 'Regional Transportation District', '', '14', 0, '296', '', '', '', '', '747A1R'),
('747A1R296ADS56AID3RT', 'Regional Transportation District', '', '56', 3, '296', '', '', '', '', '747A1R'),
('747A1R296ADS57AID3RT', 'Regional Transportation District', '', '57', 3, '296', '', '', '', '', '747A1R'),
('747A1R296ADS58AID3RT', 'Regional Transportation District', '', '58', 3, '296', '', '', '', '', '747A1R'),
('747A1R296ADS59AID3RT', 'Regional Transportation District', '', '59', 3, '296', '', '', '', '', '747A1R'),
('747A1R296ADStemp20AID2RT', 'Regional Transportation District', '', 'temp20', 2, '296', '', '', '', '', '747A1R'),
('81A1R12401ADS17AID2RT', 'Northern Indiana Commuter Transportation District', '', '17', 2, '12401', '', '', '', '', '81A1R'),
('81A1R12401ADS18AID2RT', 'Northern Indiana Commuter Transportation District', '', '18', 2, '12401', '', '', '', '', '81A1R'),
('81A1R13665ADStemp21AID3RT', 'O\'Hare International Airport Shuttle Bus', '', 'temp21', 3, '13665', '', '', '', '', '81A1R'),
('81A1R14ADS41AID3RT', 'CTA', '', '41', 3, '14', '', '', '', '', '81A1R'),
('81A1R14ADS42AID3RT', 'CTA', '', '42', 3, '14', '', '', '', '', '81A1R'),
('81A1R14ADS43AID3RT', 'CTA', '', '43', 3, '14', '', '', '', '', '81A1R'),
('81A1R14ADStemp14AID1RT', 'CTA \'L\'', '', 'temp14', 1, '14', '', '', '', '', '81A1R'),
('81A1R15ADS19AID2RT', 'Metra', '', '19', 2, '15', '', '', '', '', '81A1R'),
('81A1R15ADS20AID2RT', 'Metra', '', '20', 2, '15', '', '', '', '', '81A1R'),
('81A1R69ADS21AID3RT', 'PACE', '', '21', 3, '69', '', '', '', '', '81A1R'),
('81A1R69ADS22AID3RT', 'PACE', '', '22', 3, '69', '', '', '', '', '81A1R'),
('81A1RADS15AID2RT', 'Northern Indiana Commuter Transportation District', '', '15', 2, '', '', '', '', '', '81A1R'),
('81A1RADS16AID2RT', 'Metra', '', '16', 2, '', '', '', '', '', '81A1R'),
('81A1RADS38AID3RT', 'O\'Hare International Airport Shuttle Bus', '', '38', 3, '', '', '', '', '', '81A1R'),
('81A1RADS39AID3RT', 'CTA', '', '39', 3, '', '', '', '', '', '81A1R'),
('81A1RADS40AID3RT', 'PACE', '', '40', 3, '', '', '', '', '', '81A1R'),
('81A1RADStemp11AID1RT', 'CTA \'L\'', '', 'temp11', 1, '', '', '', '', '', '81A1R'),
('822A1R296ADStemp22AID1RT', 'RTD (Regional Transportation District)', '', 'temp22', 1, '296', '', '', '', '', '822A1R'),
('822A1R296ADStemp23AID2RT', 'RTD (Regional Transportation District)', '', 'temp23', 2, '296', '', '', '', '', '822A1R'),
('822A1R296ADStemp24AID3RT', 'RTD (Regional Transportation District)', '', 'temp24', 3, '296', '', '', '', '', '822A1R');

-- --------------------------------------------------------

--
-- Table structure for table `db_tables___area_info`
--

CREATE TABLE `db_tables___area_info` (
  `Reference` varchar(7) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Area Name` varchar(29) DEFAULT NULL,
  `Area ID` int DEFAULT NULL,
  `Lowest Value DS ID - Default DS` int DEFAULT NULL,
  `Area Manger Name` varchar(10) DEFAULT NULL,
  `Area Manager EMail` varchar(10) DEFAULT NULL,
  `State / Country Name (foriegn key)` varchar(10) DEFAULT NULL,
  `State Country ID (foriegn key)` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `db_tables___area_info`
--

INSERT INTO `db_tables___area_info` (`Reference`, `Area Name`, `Area ID`, `Lowest Value DS ID - Default DS`, `Area Manger Name`, `Area Manager EMail`, `State / Country Name (foriegn key)`, `State Country ID (foriegn key)`) VALUES
('1182A1R', 'Las Vegas', 1182, 540, '', '', '', ''),
('121A1R', 'NYC-NJ', 121, 25, '', '', '', ''),
('1322A1R', 'Cincinnati', 1322, 562, '', '', '', ''),
('141A1R', 'Boston, MA', 141, 28, '', '', '', ''),
('142A1R', 'Washington, DC-Baltimore', 142, 113, '', '', '', ''),
('143A1R', 'Toronto', 143, 32, '', '', '', ''),
('145A1R', 'Greater Vancouver, BC', 145, 35, '', '', '', ''),
('1663A1R', 'Berlin', 1663, 1666, '', '', '', ''),
('2122A1R', 'London and South East', 2122, 1145, '', '', '', ''),
('22A1R', 'San Fransisco SF Bay Area, CA', 22, 7, '', '', '', ''),
('302A1R', 'Los Angeles, CA', 302, 109, '', '', '', ''),
('522A1R', 'Seattle', 522, 136, '', '', '', ''),
('522A2R', 'Seattle–Tacoma–Bellevue, WA', 522, 1943, '', '', '', ''),
('662A1R', 'Paris', 662, 342, '', '', '', ''),
('747A1R', 'Denver & Boulder, CO', 747, 296, '', '', '', ''),
('81A1R', 'Chicago, IL', 81, 14, '', '', '', ''),
('822A1R', 'Denver & Boulder, CO', 822, 296, '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_tables___agency_info`
--
ALTER TABLE `db_tables___agency_info`
  ADD PRIMARY KEY (`Key - internal`),
  ADD UNIQUE KEY `Key - internal` (`Key - internal`),
  ADD KEY `Area Key - foriegn` (`Area Key - foriegn`);

--
-- Indexes for table `db_tables___area_info`
--
ALTER TABLE `db_tables___area_info`
  ADD PRIMARY KEY (`Reference`),
  ADD UNIQUE KEY `Key` (`Reference`),
  ADD UNIQUE KEY `Reference` (`Reference`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `db_tables___agency_info`
--
ALTER TABLE `db_tables___agency_info`
  ADD CONSTRAINT `db_tables___agency_info_ibfk_1` FOREIGN KEY (`Area Key - foriegn`) REFERENCES `db_tables___area_info` (`Reference`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
