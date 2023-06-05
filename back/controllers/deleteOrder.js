const { Order } = require("../models/models");

const deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
}

module.exports = { deleteOrder };