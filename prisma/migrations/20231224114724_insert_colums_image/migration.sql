/*
  Warnings:

  - Added the required column `file_image` to the `proposals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_image` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `proposals` ADD COLUMN `file_image` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `profile_image` VARCHAR(255) NOT NULL;
