const Hotel = require("../models/HotelModel");

// Add new hotel
exports.addHotel = async (req, res) => {
  try {
    const { name, description, actualPrice, offerPrice, category, location, images } = req.body;

    const hotel = await Hotel.create({
      name,
      description,
      actualPrice,
      offerPrice,
      category,
      location,
      images,
      createdBy: req.admin._id
    });

    res.status(201).json({
      message: "Hotel added successfully",
      hotel,
    });
  } catch (error) {
    console.log("Add hotel error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all hotels
exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.log("Get hotels error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get hotels by category
exports.getHotelsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const hotels = await Hotel.find({ category });

    res.status(200).json(hotels);
  } catch (error) {
    console.log("Category hotel error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single hotel
exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (error) {
    console.log("Get hotel by id error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
