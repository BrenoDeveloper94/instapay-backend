/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `bank_account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `withdrawals` DROP FOREIGN KEY `withdrawals_id_bank_account_fkey`;

-- CreateIndex
CREATE UNIQUE INDEX `bank_account_id_user_key` ON `bank_account`(`id_user`);

-- AddForeignKey
ALTER TABLE `withdrawals` ADD CONSTRAINT `withdrawals_id_bank_account_fkey` FOREIGN KEY (`id_bank_account`) REFERENCES `bank_account`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
