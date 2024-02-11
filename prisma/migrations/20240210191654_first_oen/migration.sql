-- CreateTable
CREATE TABLE "guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "guest_pkey" PRIMARY KEY ("id")
);
