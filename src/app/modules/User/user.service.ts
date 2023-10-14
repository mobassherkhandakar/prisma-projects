import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data: data,
  });
  return result;
};


export const userService = {
  insertIntoDB
}