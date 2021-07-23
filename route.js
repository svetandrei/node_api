const user = require("./controllers/user");
const router = require("express").Router();

router.post("/", user.create);
router.get("/", user.findAll);
router.put("/:id", user.update);

module.exports = router;