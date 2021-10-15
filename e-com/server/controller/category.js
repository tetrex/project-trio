const { body } = require("express-validator");
const { category } = require("../model/index");
const { sendResponse } = require("./utils/utils");

exports.add = async (req, res) => {
	let { name } = req.body;

	try {
		if (!name) {
			return res.json(sendResponse("null value", "please provide name"));
		}

		let foundCat = await category.findOne({ name: name });

		if (foundCat) {
			return res.json(sendResponse(foundCat, "already created use this one"));
		}
		if (!foundCat) {
			let newCat = await category.create({ name: name }, { new: true });
			if (newCat) {
				return res.json(sendResponse(newCat, "category created successfully"));
			}
		}
	} catch (error) {
		return res.json(sendResponse(error, "some error occurred"));
	}
};
