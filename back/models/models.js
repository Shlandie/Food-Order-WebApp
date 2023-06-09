const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

// const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },

    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);


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

module.exports = { Item, Order, User };