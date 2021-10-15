const mongoose = require("mongoose");
const cart = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
		item: [
			{
				qty: Number,
				product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
			},
		],
		coupon: { type: mongoose.Schema.Types.ObjectId, ref: "coupon" },
		subTotal: Number,
		shipping: Number,
		tax: Number,
		total: Number,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("cart", cart);
