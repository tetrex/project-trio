const { body } = require("express-validator");
const { product } = require("../model/index");
const { sendResponse } = require("./utils/utils");

exports.add = async (req, res) => {
	let { name, price, description, images, category } = req.body;
	try {
		let data = {};
		if (!name) {
			return res.json(sendResponse("null value", "please provide name"));
		}

		if (!description) {
			return res.json(sendResponse("null value", "please provide description"));
		}

		if (!category) {
			return res.json(sendResponse("null value", "please provide category"));
		}
		let oldProduct = await product.findOne({ name: name });

		if (oldProduct) {
			return res.json(
				sendResponse(oldProduct, "product with this name already exists")
			);
		}

		data.name = name;
		data.description = description;
		data.category = category;

		if (price) {
			data.price = price;
		}
		if (images) {
			data.images = images;
		}

		let productNew = await product.create(data);

		if (productNew) {
			return res.json(sendResponse(productNew, "product created successfully"));
		}
		return res.json(
			sendResponse({ name, description, category }, "plz dont overload servers")
		);
	} catch (error) {
		return res.json(sendResponse(error, "some error occurred"));
	}
};
