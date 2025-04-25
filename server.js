import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movies.js";
import { connectDatabase } from "./db/index.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", movieRoutes);

// Database connection
connectDatabase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });
