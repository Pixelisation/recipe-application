/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cook_time` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discription` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prep_time` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_time` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipes" ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "cook_time" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "discription" TEXT NOT NULL,
ADD COLUMN     "favoritedById" INTEGER,
ADD COLUMN     "image" BYTEA NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "instructions" TEXT NOT NULL,
ADD COLUMN     "prep_time" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "total_time" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT,
ADD COLUMN     "emailVarified" TEXT,
ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Recipes" ADD CONSTRAINT "Recipes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipes" ADD CONSTRAINT "Recipes_favoritedById_fkey" FOREIGN KEY ("favoritedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
