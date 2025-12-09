const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect DB
connectDB();

// Body Parser
app.use(express.json());

// Import Routes
const adminRoutes = require("./routes/adminRoutes");
const hotelRoutes = require("./routes/hotelRoutes");

// Use Routes
app.use("/api/admin", adminRoutes);
app.use("/api/hotels", hotelRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
