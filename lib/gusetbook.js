import Prisma from "@/prisma";

export const getAllMessages = async () => {
  try {
    const messages = await Prisma.guest.findMany();
    return messages;
  } catch (error) {
    throw new Error("faile to get messages from db ");
  }
};
