const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const menuRoutes = require("./routes/menuRoutes");

mongoose
    .connect(process.env.MONGO_URL, { dbName: "restaurant" })
    .then(console.log("Connected!"))
    .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(cors());

app.use("/", menuRoutes);

app.listen(5000, () => {
    console.log("Listening on port 5000");
})