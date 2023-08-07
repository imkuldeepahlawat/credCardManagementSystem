const express = require("express");

const router = express.Router();
const userRoutes = require("./user.route");

router.use("/auth", (req, res) => {
  res.send("good in login");
});
router.use("/user", userRoutes);

module.exports = router;
