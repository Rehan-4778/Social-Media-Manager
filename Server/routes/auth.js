const express = require("express");
const router = express.Router();

const { register, getUser } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/getUser/:userId").get(getUser);
module.exports = router;
