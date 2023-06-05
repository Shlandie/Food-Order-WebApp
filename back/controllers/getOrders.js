const { Order } = require("../models/models");

const getOrders = async (req, res) => {
    const allOrderItems = await Order.find({});
    res.status(200).json({
        status: "success",
        results: allOrderItems.length,
        data: { allOrderItems }
    })
}

module.exports = { getOrders };