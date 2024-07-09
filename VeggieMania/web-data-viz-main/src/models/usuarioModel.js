const { obterTotal } = require("../controllers/usuarioController");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, cpf, tipo, nasc, sexo, estilo) { // 20/06 foi adicionado o tipo de alimentação no cadastro do usúario
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha); //04/07 Foi adicionado o sexo e o nascimento
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, cpf, tipoAlimentacao, nascimento, sexo, estiloVida) VALUES ('${nome}', '${email}', '${senha}', '${cpf}', '${tipo}', '${nasc}', '${sexo}',  '${estilo}' ); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarRefeicao(idUsuario, nome) { //08/07 O model executa a inserção dos dados na tabela refeição localizada no banco de dados, inserindo o nome da refeição e o id do usuário
    
    var instrucaoSql = `
    INSERT INTO refeicao (fk_usuario, nomeRefeicao ) VALUES (${idUsuario},'${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
     // Executa a instrução SQL no banco de dados e retorna os resultados
    return database.executar(instrucaoSql);
}

function cadastrarAlimento(idUsuario, idRefeicao, nome, caloria, carboidrato, lipideo, fibra, proteina, ferro, calcio, zinco) { //08/07 O model executa a inserção dos dados na tabela alimento localizada no banco de dados, considerando além da informações do alimento o id da refeição (tipo) e o usuário
    
    var instrucaoSql = `
    INSERT INTO alimento (fk_usuario, fk_refeicao, nomeAlimento, caloria, carboidrato, lipideo, fibra, proteina, calcio, ferro, zinco ) VALUES (${idUsuario}, ${idRefeicao},'${nome}','${caloria}', '${carboidrato}', '${lipideo}', '${fibra}', '${proteina}', '${ferro}', '${calcio}', '${zinco}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
     // Executa a instrução SQL no banco de dados e retorna os resultados
    return database.executar(instrucaoSql);
}

function obter(idUsuario,opcao) { // 03/07 select das informações do alimentos que foram cadastrados pelo usuario de uma determinada refeição
    var instrucaoSql = `select nomeAlimento,caloria,carboidrato,lipideo,fibra,proteina,ferro,calcio,zinco from alimento join usuario on id = fk_usuario 
    join refeicao on idRefeicao = fk_refeicao
    where id = ${idUsuario} and nomeRefeicao = "${opcao}";`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Total(idUsuario,opcao) { // 03/07 select que soma as informações nutricionais de todos os alimentos que foram cadastrados pelo usuario de uma determinada refeição
    var instrucaoSql = ` select sum(caloria) as caloriat, sum(carboidrato) as carboidratot, sum(lipideo) as lipideot, sum(fibra) as fibrat, sum(proteina) as proteinat, sum(ferro) as ferrot, sum(calcio) as calciot, sum(zinco) as zincot from alimento join usuario on id = fk_usuario
     join refeicao on idRefeicao = fk_refeicao
    where id = ${idUsuario} and nomeRefeicao = "${opcao}";`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarRefeicao,
    cadastrarAlimento,
    obter,
    Total
};