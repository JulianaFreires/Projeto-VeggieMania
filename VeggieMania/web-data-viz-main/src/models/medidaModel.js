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

module.exports = {
    nomeMural

}
