/*
  Warnings:

  - Added the required column `ageMax` to the `FlatmatePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageMin` to the `FlatmatePost` table without a default value. This is not possible if the table is not empty.
  - Made the column `budgetMin` on table `FlatmatePost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `budgetMax` on table `FlatmatePost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FlatmatePost" ADD COLUMN     "ageMax" INTEGER NOT NULL,
ADD COLUMN     "ageMin" INTEGER NOT NULL,
ALTER COLUMN "budgetMin" SET NOT NULL,
ALTER COLUMN "budgetMax" SET NOT NULL;
