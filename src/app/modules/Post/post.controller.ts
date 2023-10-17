import { Request, Response } from "express";
import { postService } from "./post.servise";

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await postService.insertIntoDB(req.body);
  res.send({
    success: true,
    message: "Post create successfully done",
    data: result,
  });
};
const getAllPost = async (req: Request, res: Response) => {
  const result = await postService.getAllPost();
  res.send({
    success: true,
    message: "All post get successfully",
    data: result,
  });
};
export const postController = {
  insertIntoDB,
  getAllPost
};
