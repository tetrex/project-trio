const mongoose = require("mongoose");
const coupon = new mongoose.Schema(
	{
		code: { type: String, required: true },
		validIn: [
			{
				type: String,
				enum: ["E-COM", "NETFLIX", "SPOTIFY"],
			},
		],
		price: Number,
		user: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("coupon", coupon);
