/*
  Warnings:

  - You are about to drop the column `LastName` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `age` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "LastName",
DROP COLUMN "firstName",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;
