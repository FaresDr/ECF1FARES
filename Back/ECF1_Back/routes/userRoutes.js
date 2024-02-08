const express = require("express");
const isAuthenticated = require("../middlewares/authentication");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/add-user", userController.createUser);
router.post("/login", userController.login);

module.exports = router;