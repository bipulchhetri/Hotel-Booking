const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hotel name is required"],
    },

    description: {
      type: String,
      required: [true, "Hotel description is required"],
    },

    actualPrice: {
      type: Number,
      required: [true, "Actual price is required"],
    },

    offerPrice: {
      type: Number,
      required: [true, "Offer price is required"],
    },

    images: {
      type: [String], // array of image URLs
      required: true,
    },

    category: {
      type: String,
      enum: ["top", "affordable", "best", "offer"],
      required: true,
    },

    location: {
      type: String,
      required: [true, "Hotel location is required"],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
