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

router.post("/cadastrarRefeicao", function (req, res) { //28/06 rota para o cadastro das refeições
    usuarioController.cadastrarRefeicao(req, res);
})


router.get("/obter/:idUsuario/:opcao", function (req, res) { //03/07 Rota para adiconar a tabela dos alimentos cadastrados pelo usuario de uma determinada refeição
    usuarioController.obter(req, res);
});

router.get("/Total/:idUsuario/:opcao", function (req, res) { //03/07 Rota para adiconar a tabela do total de nutrientes dos alimentos cadastrados pelo usuario em uma determinada refeição
    usuarioController.Total(req, res);
});



module.exports = router;