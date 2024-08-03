/*
  Warnings:

  - You are about to drop the column `price` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_userId_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "price",
DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
