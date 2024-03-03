import { z } from "zod";

export const guestEntrySchema = z.object({
  name: z.string().min(1, { message: " name is required" }),
  message: z.string().min(1, { message: "message is required" }),
});
