const router = require("express").Router();

const controller = require("../controller/product");

router.post("/add", controller.add);
router.post("/delete", controller.delete)
router.post("/update", controller.update)

module.exports = router;
