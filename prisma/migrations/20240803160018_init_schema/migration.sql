/*
  Warnings:

  - Added the required column `price` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "price" INTEGER NOT NULL;
