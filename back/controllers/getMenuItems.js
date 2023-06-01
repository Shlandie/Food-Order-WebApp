const { Item } = require("../models/models");

const getMenuItems = async (req, res) => {
    const allMenuItems = await Item.find({}).sort(0);
    // console.log(allMenuItems);
    res.status(200).json({
        status: "success",
        results: allMenuItems.length,
        data: { allMenuItems }
    })
}

module.exports = { getMenuItems };