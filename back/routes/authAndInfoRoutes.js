const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/loginUser");
const { registerUser } = require("../controllers/registerUser");

const passport = require("passport");

router.post("/login", loginUser);
router.post("/register", registerUser);


module.exports = router;