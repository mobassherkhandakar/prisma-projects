import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User data created Successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  const result = await userService.insertOrUpdateProfile(req.body);
  res.send({
    success: true,
    message: "User profile created/updated Successful",
    data: result,
  });
};
const getAllUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUser();
  res.send({
    success: true,
    message: "Get All User Successful",
    data: result,
  });
};
const getSingleUser = async (req: Request, res: Response) => {
  const result = await userService.getSingleUser(parseInt(req.params.id));
  res.send({
    success: true,
    message: "Get single User Successful",
    data: result,
  });
};

export const userController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getAllUser,
  getSingleUser,
};
