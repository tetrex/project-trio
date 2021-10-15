const router = require("express").Router();

const controller = require("../controller/product");

router.post("/addProduct", controller.add);

module.exports = router;
