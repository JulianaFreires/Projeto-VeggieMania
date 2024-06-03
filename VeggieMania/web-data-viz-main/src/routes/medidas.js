var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/nomeMural", function (req, res) {
    medidaController.nomeMural(req, res);
});


module.exports = router;