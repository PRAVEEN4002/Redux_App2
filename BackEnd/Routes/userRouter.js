var express = require("express");
var cors = require("cors");
var router = express.Router();

var userController = require("../Controllers/userController");

router.route("/").get(userController.getAllUsers);
router.route("/post").post(cors(), userController.postUser);
module.exports = router;
