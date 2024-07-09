drop database if exists juliana;
create DATABASE juliana;

USE juliana;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50),
	cpf CHAR(11) UNIQUE,
    tipoAlimentacao VARCHAR(50),
    nascimento DATE,
    sexo VARCHAR(50),
    estiloVida VARCHAR(50)
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

CREATE TABLE refeicao(
idRefeicao INT auto_increment,
fk_usuario INT,
nomeRefeicao VARCHAR(50),	
FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
PRIMARY KEY (idRefeicao, fk_usuario),
UNIQUE (fk_usuario, nomeRefeicao)
);


CREATE TABLE alimento(
idAlimento INT auto_increment,
fk_usuario INT,
fk_refeicao INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
FOREIGN KEY (fk_refeicao) REFERENCES refeicao(idRefeicao),
PRIMARY KEY (idAlimento, fk_usuario, fk_refeicao),
nomeAlimento VARCHAR(50),
caloria DECIMAL(9,2),
carboidrato DECIMAL(7,2),
lipideo DECIMAL(7,2),
fibra DECIMAL(7,2),
proteina DECIMAL(7,2),
calcio DECIMAL(7,2),
ferro DECIMAL(7,2),
zinco DECIMAL(7,2)
);


INSERT INTO mural VALUES
(1, "Restaurante"),
(2, "Receita"),
(3, "Moda"),
(4, "Cosmético");