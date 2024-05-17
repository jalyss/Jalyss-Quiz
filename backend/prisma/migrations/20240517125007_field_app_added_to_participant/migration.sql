/*
  Warnings:

  - A unique constraint covering the columns `[app,email]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Participant_email_key";

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "app" TEXT NOT NULL DEFAULT '7 habits';

-- CreateIndex
CREATE UNIQUE INDEX "Participant_app_email_key" ON "Participant"("app", "email");
