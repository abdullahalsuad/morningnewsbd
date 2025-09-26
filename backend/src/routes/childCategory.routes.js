import express from "express";
import {
  createChild,
  deleteChild,
  getAllChildren,
  getChildById,
  updateChild,
} from "../controllers/childCategory.controller.js";

const router = express.Router();

router.post("/create", createChild);
router.get("/all", getAllChildren);
router.get("/:id", getChildById);
router.put("/update/:id", updateChild);
router.delete("/delete/:id", deleteChild);

export default router;
