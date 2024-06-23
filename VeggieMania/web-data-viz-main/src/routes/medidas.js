var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

//Rota para plotar o gráfico de quantidade de posts por categoria

router.get("/nomeMural", function (req, res) {
    medidaController.nomeMural(req, res);
});

//Rota para plotar o gráfico de quantidade de curtidas por categoria
// Transferi o curtidasMural da rota avisos.js para a rota medidas.js, para melhor organização dos graficos 20/06

router.get("/curtidasMural", function (req, res) {
    medidaController.curtidasMural(req, res);
});

router.get("/Ranking", function (req, res) {
    medidaController.Ranking(req, res);
}); // 22/06


module.exports = router;