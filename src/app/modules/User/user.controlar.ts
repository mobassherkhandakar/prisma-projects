import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async(req:Request, res:Response)=>{
  try{
    const result = await userService.insertIntoDB(req.body)
    res.send({
      success: true,
      message: "User data created Successful",
      data: result
    })

  }catch(error){
    res.send(error)
  }
}

const insertOrUpdateProfile =async (req:Request,res:Response) => {
  const result = await userService.insertOrUpdateProfile(req.body)
  res.send({
    success: true,
    message: "User profile created/updated Successful",
    data: result
  })
}


export const userController = {
  insertIntoDB,
  insertOrUpdateProfile
}