import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  getAllMovies,
  getAllMovieDetailsById,
} from "../controllers/movie.controller.js";
const router = Router();

// Get popular movies (paginated)
router.use(authenticate);

router.route("/movie/popular").get(getAllMovies);

// Get movie details
router.route("/movie/:movie_id").get(getAllMovieDetailsById);

export default router;
