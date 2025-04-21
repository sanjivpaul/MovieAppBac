const mongoose = require("mongoose");

const movieDetailsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    poster_path: { type: String, required: true },
    release_date: { type: String },
    runtime: { type: Number },
    vote_average: { type: Number },
    genres: [{ name: String }],
    backdrop_path: { type: String },
    tagline: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MovieDetails", movieDetailsSchema);
