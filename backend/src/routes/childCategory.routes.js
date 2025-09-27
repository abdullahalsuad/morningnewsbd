import express from "express";
import {
  createChild,
  deleteChild,
  getAllChildren,
  getChildById,
  updateChild,
} from "../controllers/childCategory.controller.js";

const router = express.Router();

router.post("/create", createChild); // Create a new child
router.get("/all", getAllChildren); // Get all children
router.get("/:id", getChildById); // Get a single child by ID
router.put("/update/:id", updateChild); // Update a child by ID
router.delete("/delete/:id", deleteChild); // Delete a child by ID

export default router;
