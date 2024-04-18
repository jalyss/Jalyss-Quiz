/*
  Warnings:

  - You are about to drop the column `Reading_Time` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "Reading_Time",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "imageUrl" DROP NOT NULL;
