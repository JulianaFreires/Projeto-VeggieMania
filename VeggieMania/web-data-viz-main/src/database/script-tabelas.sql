-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
DROP DATABASE if exists juliana;
CREATE DATABASE juliana;

USE juliana;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50),
	cpf CHAR(11) UNIQUE

);

CREATE TABLE mural (
idMural INT PRIMARY KEY,
categoria VARCHAR(45)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
    fk_mural INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_mural) REFERENCES mural(idMural)
);

CREATE TABLE curtida(
fk_usuario INT,
fk_mural INT,
fk_aviso INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id) on delete cascade,
FOREIGN KEY (fk_mural) REFERENCES mural(idMural) on delete cascade,
FOREIGN KEY (fk_aviso) REFERENCES aviso(id) on delete cascade
);


INSERT INTO mural VALUES
(1, "Restaurante"),
(2, "Receita"),
(3, "Moda"),
(4, "Cosmético");

select usuario.*, aviso.*, mural.* from aviso join usuario on usuario.id = aviso.fk_usuario
join mural on mural.idMural = aviso.fk_mural;


select count;

select * from usuario;
select * from aviso;
select * from curtida;


/*numero de curtidas de cada usuario */
SELECT usuario.nome,  COUNT(fk_usuario) as qtdCurtidas
FROM usuario
JOIN curtida ON usuario.id = curtida.fk_usuario
group by fk_usuario;


/*listagem geral*/
SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_mural,
            count(c.fk_aviso) as qtdCurtidas,
            u.id as idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
             left join curtida c on a.id = c.fk_aviso join usuario u on a.fk_usuario = u.id group by a.id;
             
             
             /*curtidas por mural */
			select mural.categoria, count(fk_mural) from curtida join mural on idMural = fk_mural group by mural.categoria;
            
			
/* Posts que o usuario curtiu*/
SELECT 
            aviso.titulo,
            aviso.descricao,
            mural.categoria,
            usuario.id as idUsuario,
            usuario.nome
        FROM curtida
             join aviso on aviso.id = curtida.fk_aviso 
             join usuario on curtida.fk_usuario = usuario.id 
             join mural on mural.idMural = curtida.fk_mural;

             
