var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarRefeicao", function (req, res) { //08/07 rota para o cadastro das refeições
    usuarioController.cadastrarRefeicao(req, res);
})

router.post("/cadastrarAlimento", function (req, res) { //08/07 rota para o cadastro dos alimentos
    usuarioController.cadastrarAlimento(req, res);
})

router.get("/obter/:idUsuario/:opcao", function (req, res) { //03/07 Rota para adiconar a tabela dos alimentos cadastrados pelo usuario de uma determinada refeição
    usuarioController.obter(req, res);
});

router.get("/Total/:idUsuario/:opcao", function (req, res) { //03/07 Rota para adiconar a tabela do total de nutrientes dos alimentos cadastrados pelo usuario em uma determinada refeição
    usuarioController.Total(req, res);
});

router.get("/relatorio/:idUsuario", function (req, res) { //09/07 Rota para adiconar um relatório sobre as informações nutricionais da dieta
    usuarioController.relatorio(req, res);
});

router.delete("/delet/:idUsuario/:opcao", function (req, res) { //15/07  Rota para deletar a refeição cadastrada pelo usuario em uma determinada refeição
    usuarioController.delet(req, res);
});


router.post("/atualizar/:idUsuario", function (req, res) {//27/07 Rota para atualizar o cadastro do usuário
    usuarioController.atualizar(req, res);
})



module.exports = router;