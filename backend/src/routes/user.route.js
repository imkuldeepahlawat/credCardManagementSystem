const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.post("/signup", userController.createNewUser);
router.post("/login", userController.getUserLogin);

module.exports = router;