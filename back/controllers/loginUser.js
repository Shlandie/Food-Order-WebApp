const { User } = require("../models/models");

const asyncHandler = require("express-async-handler");

const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const loginUser = asyncHandler(async (req, res, next) => {

    const user = await User.findOne({ username: req.body.username });

    if (!user) {
        res.status(400);
        throw new Error("Wrong Credentials");
    }

    if (await user.matchPassword(req.body.password)) {
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }

})

module.exports = { loginUser };