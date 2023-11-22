-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mer 22 Novembre 2023 à 11:03
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bd_location_voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `ncin` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `adresse` varchar(20) NOT NULL,
  `date_naissance` date NOT NULL,
  `num_permis` int(11) NOT NULL,
  `civilite` varchar(15) NOT NULL,
  UNIQUE KEY `ncin` (`ncin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clients`
--

INSERT INTO `clients` (`ncin`, `nom`, `prenom`, `adresse`, `date_naissance`, `num_permis`, `civilite`) VALUES
('', '', '', '', '0000-00-00', 0, ''),
('p1', 'parure', 'remy', '35 rue andre malreau', '2023-11-02', 123456789, 'monsieur'),
('p2', 'rampo', 'david', '5 rue pierre malreau', '2023-11-02', 23456789, 'monsieur');

-- --------------------------------------------------------

--
-- Structure de la table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `num_location` int(11) NOT NULL AUTO_INCREMENT,
  `date_location` date NOT NULL,
  `duree` int(11) NOT NULL,
  `prix_location` float NOT NULL,
  `caution` int(11) NOT NULL,
  `#ncin` varchar(20) NOT NULL,
  `#immatriculation` varchar(20) NOT NULL,
  PRIMARY KEY (`num_location`),
  KEY `#ncin` (`#ncin`,`#immatriculation`),
  KEY `#immatriculation` (`#immatriculation`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `locations`
--

INSERT INTO `locations` (`num_location`, `date_location`, `duree`, `prix_location`, `caution`, `#ncin`, `#immatriculation`) VALUES
(1, '2025-12-15', 12, 1789, 100, 'p1', 'po852er'),
(2, '2014-11-23', 15, 1534, 100, 'p2', 'tx753me');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE IF NOT EXISTS `voiture` (
  `immatriculation` varchar(15) NOT NULL,
  `modele` varchar(50) NOT NULL,
  `prix_achat` float NOT NULL,
  `couleur` varchar(20) NOT NULL,
  `nbre_porte` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `boite_vitesse` varchar(50) NOT NULL,
  `puissance` int(11) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `voiture`
--

INSERT INTO `voiture` (`immatriculation`, `modele`, `prix_achat`, `couleur`, `nbre_porte`, `kilometrage`, `boite_vitesse`, `puissance`) VALUES
('', '', 0, '', 0, 0, '', 0),
('po852er', 'riche', 4, 'bleu', 5, 1777, 'automatique', 1000),
('tx753me', 'pauvre', 1999, 'rose', 5, 166, 'manuelle', 788);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_2` FOREIGN KEY (`#ncin`) REFERENCES `clients` (`ncin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`#immatriculation`) REFERENCES `voiture` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE;
