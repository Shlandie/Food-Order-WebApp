const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }
})

const OrderSchema = new mongoose.Schema(
    {
        order_id: {
            type: String
        },
        dishes: [{
            type: String
        }],
        full_amount: {
            type: Number
        }
    }

)

const Item = new mongoose.model("item", ItemSchema);
const Order = new mongoose.model("order", OrderSchema);

module.exports = { Item, Order };