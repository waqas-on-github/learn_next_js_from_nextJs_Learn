"use server";

import Prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { guestEntrySchema } from "../schema";

export const postGuest = async (data) => {
  console.log(data);
  const { name, message } = Object.fromEntries(data);

  const { error: zodError } = guestEntrySchema.safeParse({ name, message });
  if (zodError) {
    return { error: zodError.format() };
  }

  const resp = await Prisma.guest.create({
    data: { name, message },
  });

  if (!resp) throw new Error("failed to insert record");
  revalidatePath("/guestbook");
  return resp;
};
