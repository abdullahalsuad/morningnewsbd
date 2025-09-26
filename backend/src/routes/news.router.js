import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getSingleNews,
  updateNews,
} from "../controllers/news.controller.js";

const router = express.Router();

router.post("/create", createNews);
router.get("/all", getAllNews);
router.get("/view/:id", getSingleNews);
router.put("/update/:id", updateNews);
router.delete("/delete/:id", deleteNews);
export default router;
