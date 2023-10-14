import { Request, Response } from "express";
import { categoryService } from "./catagory.service";

const insertIntoDB = async(req:Request,res:Response)=>{
  const result = await categoryService.insertIntoDB(req.body)
  res.send({
    success: true,
    message: "Category Created Successfully",
    data: result
  })
}

export const categoryController = {
  insertIntoDB
}