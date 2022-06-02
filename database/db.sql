SET NAMES 'utf8';
DROP DATABASE IF EXISTS ProyectoAyOCC;
CREATE DATABASE IF NOT EXISTS ProyectoAyOCC DEFAULT CHARACTER SET utf8;
USE ProyectoAyOCC;

#CREACION DE LA TABLA
CREATE TABLE alumno(
	id_alu				INTEGER NOT NULL AUTO_INCREMENT,
	nombre				VARCHAR(25) NOT NULL,
	apellido_pat		VARCHAR(25) NOT NULL,
	apellido_mat		VARCHAR(25) NOT NULL,

	PRIMARY KEY(id_alu)
)DEFAULT CHARACTER SET utf8;

#TRIGGERS PARA LA TABLA ALUMNO
DELIMITER $$
create trigger alumno_mayus before insert on alumno for each row
begin
	set new.nombre = upper(new.nombre);
	set new.apellido_pat = upper(new.apellido_pat);
    set new.apellido_mat = upper(new.apellido_mat);
end $$
DELIMITER ;

INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("said alejandro","HERNANDEZ","PACHECO");
INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("ROGELIO","SANCHEZ","NERIA");
INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("TABATHA NAOMI","CERNA","MONTESINOS");
INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("SARA","SANCHEZ","CASTELO");
INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("JAVIER","CARRILLO","JIMENEZ");
INSERT INTO alumno(nombre,apellido_pat,apellido_mat) VALUES("ALBERTO","AGUILAR","MIRON");
SELECT * FROM alumno;
