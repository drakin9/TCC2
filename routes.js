const express = require("express");
const router = express.Router();
const petController = require("./src/controllers/petController");
const agendaController = require("./src/controllers/agendaController");
const listapetController = require("./src/controllers/lista-petController");
const estoqueController = require("./src/controllers/estoqueController");
router.get("/", petController.index);
router.get("/agenda", agendaController.agenda);
router.post("/agenda", agendaController.criar);
router.get("/lista-pets", listapetController.index);
router.get("/estoque", estoqueController.index);
router.post("/estoque", estoqueController.adicionar);

module.exports = router;
