var database = require("../database/config");

function listar(mural) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
             left join curtida c on a.id = c.fk_aviso join usuario u on a.fk_usuario = u.id where a.fk_mural = ${mural} group by a.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar2(mural) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
             left join curtida c on a.id = c.fk_aviso join usuario u on a.fk_usuario = u.id where a.fk_mural = ${mural} group by a.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar3(mural) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
             left join curtida c on a.id = c.fk_aviso join usuario u on a.fk_usuario = u.id where a.fk_mural = ${mural} group by a.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar4(mural) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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
             left join curtida c on a.id = c.fk_aviso join usuario u on a.fk_usuario = u.id where a.fk_mural = ${mural} group by a.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario as idUsuario,
            a.fk_mural,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}' AND a.fk_mural = ${mural};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario as idUsuario,
            a.fk_mural,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario, mural) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario, mural);
    var instrucaoSql = `
        INSERT INTO aviso (titulo, descricao, fk_usuario, fk_mural) VALUES ('${titulo}', '${descricao}', ${idUsuario}, ${mural});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM aviso WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarCurtida(idAviso, idMural, idUsuario) {
    var instrucaoSql = `SELECT fk_usuario from curtida where fk_aviso = ${idAviso} and fk_mural = ${idMural} and fk_usuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtir(idAviso, idMural, idUsuario, curtido) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idAviso, idMural, idUsuario);
    if (curtido == 0) {
        var instrucaoSql = `insert into curtida values (${idUsuario}, ${idMural}, ${idAviso});`;
    } else {
        var instrucaoSql = `delete from curtida where fk_aviso = ${idAviso} and fk_mural = ${idMural} and fk_usuario = ${idUsuario};`;
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtidasMural() {
    var instrucaoSql = `select mural.categoria, count(fk_mural) as qtdCurtidas from curtida join mural on idMural = fk_mural group by mural.categoria;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    listar2,
    listar3,
    listar4,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    verificarCurtida,
    curtir,
    curtidasMural
}
