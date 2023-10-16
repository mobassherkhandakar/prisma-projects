import { Post, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const insertIntoDB = async(data: Post)=>{
  const result = await prisma.post.create({
    data
  })
  return result
}

export const postService = {
  insertIntoDB
}