var medidaModel = require("../models/medidaModel");

function nomeMural(req, res) {

    medidaModel.nomeMural()
        .then(
            function (resultado) {
                res.json(resultado);
            }

        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });

}

function curtidasMural(req, res) {
      // Chama a função curtidasMural do Model para obter dados do banco de dados

    medidaModel.curtidasMural()
        .then(
             // Se bem-sucedido, envia os dados no formato JSON
            function (resultado) {
                res.status(200).json(resultado);
            }
        )
        .catch(
            function (erro) {
                // Em caso de erro, registra no console e envia uma resposta de erro
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    nomeMural,
    curtidasMural
}