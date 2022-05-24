const express = require("express")
const router = express.Router();
const {displayRegPage,addNewUser,userTable,deletById,findUserById} = require("../controller/UserController")
// auth/:method
// router.route("/auth/:method").get(signInPage);
router.route("/").get(displayRegPage);
router.route("/new").post(addNewUser);
router.route("/users").get(userTable);
router.route("/user/:id").get(findUserById);
router.route("/delete/:id").get(deletById);




module.exports =  router;