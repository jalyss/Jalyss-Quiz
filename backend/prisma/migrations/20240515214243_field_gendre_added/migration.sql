-- CreateEnum
CREATE TYPE "Gendre" AS ENUM ('Homme', 'Femme');

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "gender" "Gendre";
