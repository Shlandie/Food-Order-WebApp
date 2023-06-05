const express = require("express");
const router = express.Router();

const { addOrder } = require("../controllers/addOrder");
const { deleteOrder } = require("../controllers/deleteOrder");
const { getOrders } = require("../controllers/getOrders");

router.get("/", getOrders);
router.post("/", addOrder);
router.delete("/:id", deleteOrder);

module.exports = router;