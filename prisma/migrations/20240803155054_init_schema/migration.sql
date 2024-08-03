/*
  Warnings:

  - You are about to drop the column `authorId` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `authorname` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_authorId_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "authorId",
ADD COLUMN     "authorname" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_authorname_fkey" FOREIGN KEY ("authorname") REFERENCES "User"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
