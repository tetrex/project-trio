const router = require("express").Router();

const controller = require("../controller/category");

router.post("/add", controller.add);
router.post("/delete", controller.delete)
router.post("/update", controller.update)


module.exports = router;
