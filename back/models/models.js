const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

const Item = new mongoose.model("item", ItemSchema);

module.exports = { Item };