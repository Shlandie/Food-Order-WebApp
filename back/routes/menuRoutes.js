const express = require("express");
const router = express.Router();

const { getMenuItems } = require("../controllers/getMenuItems");
const { addMenuItem } = require("../controllers/addMenuItem");

router.get("/menu", getMenuItems);
router.post("/menu", addMenuItem);

module.exports = router;