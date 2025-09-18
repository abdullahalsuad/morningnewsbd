import express from "express";
import { createNews, getAll } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/all", getAll);

router.post("/create", createNews);

export default router;
