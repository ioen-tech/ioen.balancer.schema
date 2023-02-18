/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_address]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user.username_unique` ON `user`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `user.email_address_unique` ON `user`(`email_address`);
