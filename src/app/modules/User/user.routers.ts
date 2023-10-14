import express from "express";
import { userController } from "./user.controlar";

const router = express.Router();
router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);

export const userRouters = router;
