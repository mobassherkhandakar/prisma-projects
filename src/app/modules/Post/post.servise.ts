import { Post, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
  });
  return result;
};

const getAllPost = async (): Promise<Post[]> => {
  const result = await prisma.post.findMany();
  return result;
};

export const postService = {
  insertIntoDB,
  getAllPost
};
