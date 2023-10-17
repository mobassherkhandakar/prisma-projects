import express from "express";
import { postController } from "./post.controller";

const router = express.Router();
router.get("/", postController.getAllPost);
router.post("/create-post", postController.insertIntoDB);
export const postRouter = router;
