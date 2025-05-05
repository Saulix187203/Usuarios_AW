CREATE DATABASE IF NOT EXISTS `DBusers`;

USE `DBusers`;

CREATE TABLE IF NOT EXISTS `TBusuarios` (
  `idTBusuarios` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(45) NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `genero` ENUM('MASCULINO', 'FEMENINO') NOT NULL,
  PRIMARY KEY (`idTBusuarios`)
) ENGINE = InnoDB;

CREATE UNIQUE INDEX `usuario_UNIQUE` ON `TBusuarios` (`usuario` ASC) VISIBLE;
CREATE UNIQUE INDEX `correo_UNIQUE` ON `TBusuarios` (`correo` ASC) VISIBLE;