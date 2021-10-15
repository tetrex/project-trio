const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 9900;

require("dotenv").config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const { productRoute } = require("./route/index");
/*********************************************** */
app.use("/api/e-com/v1/product", productRoute);
/*********************************************** */

mongoose.connect(
	process.env.MONGO_URL,
	{
		tlsAllowInvalidCertificates: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
	},
	(err) => {
		if (err) {
			console.log(err);
		}
		console.log("DB connected...");
	}
);

app.listen(port, () => {
	console.log("[SERVER] Ready on : ", port);
});
