const express = require("express");
const router = express.Router();

const { getMenuItems } = require("../controllers/getMenuItems");
const { getMenuItemsFilter } = require("../controllers/getMenuItemsFilter");
const { addMenuItem } = require("../controllers/addMenuItem");
const { deleteMenuItem } = require("../controllers/deleteMenuItem");

router.get("/", getMenuItems);
router.get("/:menuFilter", getMenuItemsFilter);
router.post("/", addMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;