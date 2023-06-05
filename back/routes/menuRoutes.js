const express = require("express");
const router = express.Router();

const { getMenuItems } = require("../controllers/getMenuItems");
const { addMenuItem } = require("../controllers/addMenuItem");
const { deleteMenuItem } = require("../controllers/deleteMenuItem");

router.get("/", getMenuItems);
router.post("/", addMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;