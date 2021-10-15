const mongoose = require("mongoose");
const user = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		phoneNumber: { type: String },
		passwordHash: { type: String, required: true },
		ecomFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// netflixFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// spotifyFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", user);
