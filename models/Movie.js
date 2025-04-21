const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    poster_path: { type: String, required: true },
    popularity: { type: Number, default: 0 },
    vote_average: { type: Number, default: 0 },
    vote_count: { type: Number, default: 0 },
    release_date: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
