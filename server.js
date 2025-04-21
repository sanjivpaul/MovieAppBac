require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const movieRoutes = require("./routes/movies");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", movieRoutes);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;
