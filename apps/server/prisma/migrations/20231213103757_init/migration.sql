/*
  Warnings:

  - You are about to drop the `Abis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Abis" DROP CONSTRAINT "Abis_authorId_fkey";

-- DropTable
DROP TABLE "Abis";

-- CreateTable
CREATE TABLE "Abi" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "Abi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Abi" ADD CONSTRAINT "Abi_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
