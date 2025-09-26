import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// routes
import newsRouter from "./routes/news.router.js";
import parentCategoryRouter from "./routes/parentCategory.router.js";
import childCategoryRouter from "./routes/childCategory.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.API_VERSION || "/api/v1";

// Middleware
app.use(cors());
app.use(express.json());
// Connect to DB
connectDB();

// Routes for articles
app.use(`${API_VERSION}/news`, newsRouter);
app.use(`${API_VERSION}/parent-category`, parentCategoryRouter);
app.use(`${API_VERSION}/child-category`, childCategoryRouter);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Server  is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
