const EstoqueModel = require("../models/estoque");

exports.index = async (req, res) => {
  try {
    const estoque = await EstoqueModel.find(); // Busca agendamentos no banco de dados
    res.render("estoque", { estoque }); // Passa os agendamentos para o EJS
  } catch (err) {
    res.status(500).send("Erro ao buscar itens do estoque");
  }
};
exports.adicionar = async (req, res) => {
  try {
    const novoItem = new EstoqueModel({
      newItemCategory: req.body.newItemCategory,
      newItemName: req.body.newItemName,
      newItemPrice: req.body.newItemPrice,
      newItemQuantity: req.body.newItemQuantity,
    });
    await novoItem.save();
    res.redirect("/estoque");
  } catch (err) {
    res.status(500).send("erro ao adicionar");
  }
};
