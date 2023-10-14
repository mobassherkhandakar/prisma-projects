import express from "express";
import { userController } from "./user.controlar";

const router = express.Router();
router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);
router.get('/',userController.getAllUser)

export const userRouters = router;
