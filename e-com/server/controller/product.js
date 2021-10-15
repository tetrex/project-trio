const { body } = require("express-validator");
const { product } = require("../model/index");
const { sendResponse } = require("./utils/utils");

exports.add = async (req, res) => {
	let { name, price, description, images, category } = req.body;

	if (!name) {
		return res.json(sendResponse("null value", "please provide name"));
	}

	if (!description) {
		return res.json(sendResponse("null value", "please provide description"));
	}

	if (!category) {
		return res.json(sendResponse("null value", "please provide category"));
	}

	try {
		return res.json(
			sendResponse({ name, description, category }, "plz dont overload servers")
		);
	} catch (error) {
		return res.json(sendResponse(error, "some error occurred"));
	}
};
