const express = require("express");
const router = express.Router();

const { getMenuItems } = require("../controllers/getMenuItems");
const { addMenuItem } = require("../controllers/addMenuItem");

router.get("/", getMenuItems);
router.post("/", addMenuItem);

module.exports = router;