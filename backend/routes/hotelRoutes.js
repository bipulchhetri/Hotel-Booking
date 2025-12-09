const express = require("express");
const router = express.Router();

const {
  addHotel,
  getHotels,
  getHotelsByCategory,
  getHotelById,
} = require("../controllers/hotelController");

const protect = require("../middleware/authMiddleware");

// Admin protected route
router.post("/add", protect, addHotel);

// Public routes
router.get("/", getHotels);
router.get("/category/:category", getHotelsByCategory);
router.get("/:id", getHotelById);

module.exports = router;
