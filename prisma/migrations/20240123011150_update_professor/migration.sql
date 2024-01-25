/*
  Warnings:

  - Added the required column `matricula` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professores" ADD COLUMN     "matricula" TEXT NOT NULL;
