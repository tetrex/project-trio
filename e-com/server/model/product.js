const mongoose = require("mongoose");
const product = new mongoose.Schema(
	{
		name: { type: String, required: true },
		price: Number,
		description: { type: String, required: true },
		images: [
			{
				type: String,
				default:
					"https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg",
			},
		],
		category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("product", product);
