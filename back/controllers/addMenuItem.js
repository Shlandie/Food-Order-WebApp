const { Item } = require("../models/models");

const addMenuItem = async (req, res) => {
    const item = await new Item({ ...req.body });
    await item.save();
}

module.exports = { addMenuItem };