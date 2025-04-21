require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("./models/Movie");
const MovieDetails = require("./models/MovieDetails");

const sampleMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw",
    popularity: 100,
    vote_average: 9.3,
    vote_count: 25000,
    release_date: "1994-09-23",
  },
  {
    id: 2,
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ",
    popularity: 95,
    vote_average: 9.2,
    vote_count: 18000,
    release_date: "1972-03-24",
  },
  // Add more sample movies
];

const sampleMovieDetails = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw",
    release_date: "1994-09-23",
    runtime: 142,
    vote_average: 9.3,
    genres: [{ name: "Drama" }],
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    status: "Released",
  },
  // Add more movie details
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding");

    // Clear existing data
    await Movie.deleteMany({});
    await MovieDetails.deleteMany({});

    // Insert sample data
    await Movie.insertMany(sampleMovies);
    await MovieDetails.insertMany(sampleMovieDetails);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
}

seedDatabase();
