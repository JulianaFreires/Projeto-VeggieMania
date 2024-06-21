CREATE DATABASE juliana;

USE juliana;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50),
	cpf CHAR(11) UNIQUE,
    tipoAlimentacao VARCHAR(50)
    

);

CREATE TABLE mural (
idMural INT PRIMARY KEY,
categoria VARCHAR(50)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao text,
	fk_usuario INT,
    fk_mural INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_mural) REFERENCES mural(idMural)
);

CREATE TABLE curtida(
fk_usuario INT,
fk_mural INT,
fk_aviso INT,
PRIMARY KEY (fk_usuario, fk_mural, fk_aviso),
FOREIGN KEY (fk_usuario) REFERENCES usuario(id) on delete cascade,
FOREIGN KEY (fk_mural) REFERENCES mural(idMural) on delete cascade,
FOREIGN KEY (fk_aviso) REFERENCES aviso(id) on delete cascade
);


INSERT INTO mural VALUES
(1, "Restaurante"),
(2, "Receita"),
(3, "Moda"),
(4, "Cosmético");
