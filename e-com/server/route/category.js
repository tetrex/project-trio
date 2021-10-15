const router = require("express").Router();

const controller = require("../controller/category");

router.post("/addCategory", controller.add);

module.exports = router;
