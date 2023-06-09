const { User } = require("../models/models");

const asyncHandler = require("express-async-handler");

const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;
    const userExists = await User.findOne({ username: username });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        username: username,
        email: email,
        password: password
    })

    if (user) {
        res.status(201).json({
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400);
        throw new Error("Something went wrong");
    }

    // const foundUser = await User.findOne({ username: req.body.username, password: req.body.password });

    // console.log(req.body);

    // if (foundUser) {
    //     res.send("User Already Exists");
    // }
    // else {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //     console.log(hashedPassword);
    //     const newUser = await new User({ username: req.body.username, password: hashedPassword });
    //     await newUser.save();
    //     // res.render("http://localhost:3000/order");
    // }

    // const { username, password } = req.body;
    // const user = await new User({ username: username });
    // const registeredUser = await User.register(user, password);
    // req.login(registeredUser, (err) => {
    //     if (err) {
    //         return next(err);
    //     } else {
    //         res.redirect("/campgrounds");
    //     }
    // })

})


module.exports = { registerUser };