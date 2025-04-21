const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const MovieDetails = require("../models/MovieDetails");

// Authentication middleware (simplified - in production use JWT)
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }
  next();
};

// Get popular movies (paginated)
router.get("/movie/popular", authenticate, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const movies = await Movie.find()
      .sort({ popularity: -1 })
      .skip(skip)
      .limit(limit);

    const totalMovies = await Movie.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);

    res.json({
      page,
      results: movies,
      total_pages: totalPages,
      total_results: totalMovies,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get movie details
router.get("/movie/:movie_id", authenticate, async (req, res) => {
  try {
    const movie = await MovieDetails.findOne({ id: req.params.movie_id });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
