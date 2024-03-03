import Prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  // if we dont put request here our(GET) route will be static()
  //always

  const data = Prisma.guest.findMany();
}
