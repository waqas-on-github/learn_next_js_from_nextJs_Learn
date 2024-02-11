"use server";

import Prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export const postGuest = async (data) => {
  console.log(data);
  const { name, message } = Object.fromEntries(data);

  if (!name || !message) throw new Error("no name or message provided ");

  const resp = await Prisma.guest.create({
    data: { name, message },
  });

  if (!resp) throw new Error("failed to insert record");
  revalidatePath("/guestbook");
  return resp;
};
