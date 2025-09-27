import express from "express";
import {
  getAllUsers,
  updateUserRole,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.patch("/role/:id", updateUserRole);

export default router;
