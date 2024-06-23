var database = require("../database/config");

function nomeMural() {

    var instrucaoSql = `SELECT 
    categoria, count(fk_mural) as qtdPost
                FROM aviso
                JOIN mural on mural.idMural = aviso.fk_mural
                group by categoria;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Model é responsável por executar uma consulta SQL
function curtidasMural() {
    // Define a instrução SQL que seleciona a categoria do mural e conta a quantidade de curtidas por categoria
    var instrucaoSql = `select mural.categoria, count(fk_mural) as qtdCurtidas from curtida join mural on idMural = fk_mural group by mural.categoria;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Executa a instrução SQL no banco de dados e retorna os resultados
    return database.executar(instrucaoSql);
}

function Ranking() { // 22/06

    var instrucaoSql = `SELECT tipoAlimentacao, COUNT(tipoAlimentacao) AS Qtd_Usuario FROM usuario
    GROUP BY tipoAlimentacao order by Qtd_Usuario desc;`


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    nomeMural,
    curtidasMural,
    Ranking

}
