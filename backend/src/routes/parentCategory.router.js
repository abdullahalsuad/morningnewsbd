import express from "express";
import {
  createParent,
  deleteParent,
  getAllParents,
  getParentById,
  updateParent,
} from "../controllers/parentCategory.controller.js";

const router = express.Router();

router.post("/create", createParent);
router.get("/all", getAllParents);
router.get("/:id", getParentById);
router.put("/update/:id", updateParent);
router.delete("/delete/:id", deleteParent);

export default router;
