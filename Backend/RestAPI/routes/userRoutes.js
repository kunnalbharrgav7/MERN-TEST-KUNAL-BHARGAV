import express from "express";
import { deleteUserById } from "../controllers/userController.js";

const router = express.Router();
router.delete("/users/:id", deleteUserById);

export default router;
