const express = require("express");
const router = express.Router();

const { addOrder } = require("../controllers/addOrder");
const { getOrders } = require("../controllers/getOrders");

router.get("/", getOrders);
router.post("/", addOrder);

module.exports = router;