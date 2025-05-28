/*
  Warnings:

  - The values [Male,Female,Other,Any] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('MALE', 'FEMALE', 'ANY');
ALTER TABLE "User" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TABLE "Flat" ALTER COLUMN "preferredGender" TYPE "Gender_new" USING ("preferredGender"::text::"Gender_new");
ALTER TABLE "FlatmatePost" ALTER COLUMN "preferredGender" TYPE "Gender_new" USING ("preferredGender"::text::"Gender_new");
ALTER TABLE "Preference" ALTER COLUMN "preferredGender" TYPE "Gender_new" USING ("preferredGender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "Flat" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT true;
