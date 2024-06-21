var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});


router.get("/listar2", function (req, res) {
    avisoController.listar2(req, res);
});

router.get("/listar3", function (req, res) {
    avisoController.listar3(req, res);
});

router.get("/listar4", function (req, res) {
    avisoController.listar4(req, res);
});


router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

router.post("/verificarCurtida", function (req, res) {
    avisoController.verificarCurtida(req, res);
});

router.put("/curtir", function (req, res) {
    avisoController.curtir(req, res);
});

module.exports = router;