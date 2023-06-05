const { Order } = require("../models/models");

const addOrder = async (req, res) => {
    const order = [...req.body];
    const order_id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const orderNames = order.map(item => item.name);
    const orderPrice = order.reduce((accumulator, item) => {
        console.log(item, accumulator);
        return accumulator + item.price;
    }, 0);
    const orderReorganized = new Order({
        order_id: order_id,
        dishes: [
            ...orderNames
        ],
        full_amount: orderPrice
    });

    orderReorganized.save();
    console.log(orderPrice, orderReorganized);
}


module.exports = { addOrder };