-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mer 29 Novembre 2023 à 10:11
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bd_cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

CREATE TABLE IF NOT EXISTS `artiste` (
  `id_realisateur` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `anneenaiss` varchar(20) NOT NULL,
  PRIMARY KEY (`id_realisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `artiste`
--

INSERT INTO `artiste` (`id_realisateur`, `nom`, `prenom`, `anneenaiss`) VALUES
('moe852', 'rampo', 'david', '17/08/22'),
('pq777', 'parure', 'remy', '10/05/14');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `id_film` varchar(50) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `année` date NOT NULL,
  `genre` varchar(50) NOT NULL,
  `resume` varchar(50) NOT NULL,
  `id_realisateur` varchar(50) NOT NULL,
  `code_pays` varchar(50) NOT NULL,
  PRIMARY KEY (`id_film`),
  KEY `code_pays` (`code_pays`),
  KEY `id_realisateur` (`id_realisateur`),
  KEY `id_film` (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`id_film`, `titre`, `année`, `genre`, `resume`, `id_realisateur`, `code_pays`) VALUES
('mlk741', 'DBZ', '2003-05-15', 'combat', 'dbz solo', 'pq777', '456'),
('paz213', 'JOJO', '2023-04-13', 'aventure', 'azerty', 'moe852', '123');

-- --------------------------------------------------------

--
-- Structure de la table `internaute`
--

CREATE TABLE IF NOT EXISTS `internaute` (
  `email` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `internaute`
--

INSERT INTO `internaute` (`email`, `nom`, `prenom`, `region`) VALUES
('juou.marm@gmail.com', 'juou', 'marm', 'eure'),
('pao.pao@gmail.com', 'pao', 'pao', 'iledefrance');

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

CREATE TABLE IF NOT EXISTS `notation` (
  `id_notation` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_film` varchar(50) NOT NULL,
  `note` int(11) NOT NULL,
  PRIMARY KEY (`id_notation`),
  KEY `email` (`email`),
  KEY `id_film` (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `notation`
--


-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `code_pays` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `langue` varchar(20) NOT NULL,
  PRIMARY KEY (`code_pays`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`code_pays`, `nom`, `langue`) VALUES
('123', 'allemagne', 'allemand'),
('456', 'france', 'francais');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id_role` varchar(20) NOT NULL,
  `id_film` varchar(20) NOT NULL,
  `id_realisateur` varchar(20) NOT NULL,
  `nomrole` varchar(20) NOT NULL,
  PRIMARY KEY (`id_role`),
  KEY `id_role` (`id_role`),
  KEY `id_film` (`id_film`),
  KEY `id_realisateur` (`id_realisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id_role`, `id_film`, `id_realisateur`, `nomrole`) VALUES
('cvbn', 'mlk741', 'moe852', 'voiture'),
('jklm', 'paz213', 'pq777', 'arbre');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `artiste`
--
ALTER TABLE `artiste`
  ADD CONSTRAINT `artiste_ibfk_1` FOREIGN KEY (`id_realisateur`) REFERENCES `role` (`id_realisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`code_pays`) REFERENCES `pays` (`code_pays`),
  ADD CONSTRAINT `film_ibfk_2` FOREIGN KEY (`id_realisateur`) REFERENCES `artiste` (`id_realisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notation`
--
ALTER TABLE `notation`
  ADD CONSTRAINT `notation_ibfk_2` FOREIGN KEY (`id_film`) REFERENCES `film` (`id_film`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notation_ibfk_1` FOREIGN KEY (`email`) REFERENCES `internaute` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`id_film`) REFERENCES `film` (`id_film`) ON DELETE CASCADE ON UPDATE CASCADE;
