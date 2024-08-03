/*
  Warnings:

  - You are about to drop the column `authorname` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `authorName` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_authorname_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "authorname",
ADD COLUMN     "authorName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "User"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
