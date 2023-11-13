const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register part
router.post("/register", userController.registerUser);

// Login part
router.post("/validate", userController.validateUser);

module.exports = router;
