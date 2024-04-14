/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Level` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Participant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `wheelPropositionId` column on the `Participant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParticipantQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParticipantQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `answerId` column on the `ParticipantQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `questionId` column on the `ParticipantQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `participantId` column on the `ParticipantQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `adminId` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `levelId` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `WheelProposition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `WheelProposition` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_wheelPropositionId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantQuestion" DROP CONSTRAINT "ParticipantQuestion_answerId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantQuestion" DROP CONSTRAINT "ParticipantQuestion_participantId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantQuestion" DROP CONSTRAINT "ParticipantQuestion_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_levelId_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Level" DROP CONSTRAINT "Level_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Level_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "wheelPropositionId",
ADD COLUMN     "wheelPropositionId" INTEGER,
ADD CONSTRAINT "Participant_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParticipantQuestion" DROP CONSTRAINT "ParticipantQuestion_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "answerId",
ADD COLUMN     "answerId" INTEGER,
DROP COLUMN "questionId",
ADD COLUMN     "questionId" INTEGER,
DROP COLUMN "participantId",
ADD COLUMN     "participantId" INTEGER,
ADD CONSTRAINT "ParticipantQuestion_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "adminId",
ADD COLUMN     "adminId" INTEGER,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WheelProposition" DROP CONSTRAINT "WheelProposition_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WheelProposition_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_wheelPropositionId_fkey" FOREIGN KEY ("wheelPropositionId") REFERENCES "WheelProposition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantQuestion" ADD CONSTRAINT "ParticipantQuestion_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantQuestion" ADD CONSTRAINT "ParticipantQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantQuestion" ADD CONSTRAINT "ParticipantQuestion_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
