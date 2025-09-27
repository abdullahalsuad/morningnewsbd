import express from "express";
import {
  createParent,
  deleteParent,
  getAllParents,
  getParentById,
  updateParent,
} from "../controllers/parentCategory.controller.js";

const router = express.Router();

router.post("/create", createParent); // Create a new parent
router.get("/all", getAllParents); // Get all parents
router.get("/:id", getParentById); // Get a single parent by ID
router.put("/update/:id", updateParent); // Update a parent by ID
router.delete("/delete/:id", deleteParent); // Delete a parent by ID

export default router;
