/*
  Warnings:

  - You are about to drop the column `PhoneNumber` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "PhoneNumber",
DROP COLUMN "age",
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "work" TEXT NOT NULL;
