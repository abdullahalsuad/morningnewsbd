import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getAllNewsAdmin,
  getSingleNews,
  getSingleNewsUser,
  publishScheduledNews,
  updateNews,
} from "../controllers/news.controller.js";

const router = express.Router();

// User-facing routes
router.get("/all", getAllNews); // Get all published news
router.get("/:id", getSingleNewsUser); // Get single published news


// Admin-only routes
router.post("/create", createNews); // Create news
router.get("/admin/all", getAllNewsAdmin); // Get all news (any status)
router.get("/admin/:id", getSingleNews); // Get single news (any status)
router.put("/update/:id", updateNews); // Update news
router.delete("/delete/:id", deleteNews); // Delete news

// Cron route (Vercel Cron will call this)
router.get("/cron/publish", publishScheduledNews);

export default router;
