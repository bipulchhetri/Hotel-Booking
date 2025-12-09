// routes/adminRoutes.js

const express = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

const router = express.Router();

// Register Admin (one-time)
router.post("/register", registerAdmin);

// Login Admin
router.post("/login", loginAdmin);

module.exports = router;
