const { Item } = require("../models/models");

const deleteMenuItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
}

module.exports = { deleteMenuItem };