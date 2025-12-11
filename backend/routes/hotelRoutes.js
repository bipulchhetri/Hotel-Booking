const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // multer instance
const { addHotel, getHotels, getHotelsByCategory, getHotelById } = require("../controllers/hotelController");
const protect = require("../middleware/authMiddleware");

// Accept up to 6 images with form field name "images"
router.post("/add", protect, upload.array("images", 6), addHotel);

router.get("/", getHotels);
router.get("/category/:category", getHotelsByCategory);
router.get("/:id", getHotelById);

module.exports = router;
