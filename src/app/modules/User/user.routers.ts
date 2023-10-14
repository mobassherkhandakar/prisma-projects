import express from "express";
import { userController } from "./user.controlar";

const router = express.Router();
router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getSingleUser);

export const userRouters = router;
