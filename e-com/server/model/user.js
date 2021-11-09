const mongoose = require("mongoose");
const user = new mongoose.Schema(
	{
		name: { type: String, },
		email: { type: String, },
		phoneNumber: { type: String },
		passwordHash: { type: String, },
		ecomFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		cart: {
			type: mongoose.Schema.Types.ObjectId, ref: "cart"
		}

		// netflixFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// spotifyFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", user);
