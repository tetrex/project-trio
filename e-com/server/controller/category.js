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

exports.delete = async (req, res) => {
	let { id } = req.body
	if (!id) {
		res.json(sendResponse("null value", "need id to delete"))
	}
	try {
		category.findByIdAndDelete(id, function (err, data) {
			if (err) res.json(sendResponse(err, "some error Occured"))
			if (data) res.json(sendResponse(data, "deleted"))
		})
	} catch (error) {
		res.json(sendResponse(error, "some error occured"))
	}
}

exports.update = async (req, res) => {
	let { id, data } = req.body;
	if (!id) {
		res.json(sendResponse("null value", "need id to update"))
	}
	if (!data) {
		res.json(sendResponse("null value", "need data to update"))
	}
	try {
		let udatedData = await category.findByIdAndUpdate(id, data, { new: true })
		if (udatedData) {
			res.json(sendResponse(udatedData, "data updated"))
		}
	} catch (error) {
		res.json(sendResponse(error, "some error occured"))
	}
}