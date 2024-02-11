/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `guest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "guest_name_key" ON "guest"("name");
