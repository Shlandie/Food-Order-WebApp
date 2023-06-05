const { Item } = require("../models/models");

const getMenuItemsFilter = async (req, res) => {
    const allMenuItems = await Item.find({ category: req.params.menuFilter }).sort(0);
    // console.log(allMenuItems);
    res.status(200).json({
        status: "success",
        results: allMenuItems.length,
        data: { allMenuItems }
    })
}

module.exports = { getMenuItemsFilter };