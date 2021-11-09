const router = require("express").Router();

const controller = require("../controller/user");

router.post("/add", controller.add);
router.post("/delete", controller.delete)
router.post("/update", controller.update)
router.get("/view", controller.view)


module.exports = router;
