const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const authAndInfoRoutes = require("./routes/authAndInfoRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

// const { User } = require("./models/models");

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

mongoose
    .connect(process.env.MONGO_URL, { dbName: "restaurant" })
    .then(console.log("Connected!"))
    .catch((err) => console.log(err));

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }));

// app.use(session({
//     secret: "supersecret123",
//     resave: true,
//     saveUninitialized: true
// }))

// app.use(cookieParser("supersecret123"));

// app.use(passport.initialize());
// app.use(passport.session());
// require("./passport")(passport);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/", authAndInfoRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);

app.listen(5000, () => {
    console.log("Listening on port 5000");
})