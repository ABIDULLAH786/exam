const express = require("express")
const router = express.Router();
const {Registration} = require("../controller/UserController")
// auth/:method
// router.route("/auth/:method").get(signInPage);
router.route("/").get(Registration);




module.exports =  router;