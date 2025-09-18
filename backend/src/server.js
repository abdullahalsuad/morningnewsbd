import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// routes
import newsRouter from "./routes/news.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes for articles
app.use("/api/v1/news", newsRouter);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Server  is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
