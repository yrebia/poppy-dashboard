const router = require("express").Router();
const { allUsers, addUser } = require("../controllers/user.controller.js")

router.get("/", allUsers);
router.post("/", addUser);

module.exports = router;