-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email_address` VARCHAR(191) NOT NULL,
    `rewards_points` INTEGER,
    `energy_consumption` INTEGER,
    `retailer` VARCHAR(191) NOT NULL,
    `meter_hardware` VARCHAR(191) NOT NULL,
    `is_group_admin` INTEGER,
    `group_id` INTEGER,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `group_logo` VARCHAR(191),

    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_members` (
    `group_member_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,

    INDEX `fk_user1_idx`(`user_id`),
    INDEX `fk_group1_idx`(`group_id`),
    PRIMARY KEY (`group_member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fronius_info` (
    `user_id` INTEGER NOT NULL,
    `fronius_userid` VARCHAR(191) NOT NULL,
    `fronius_password` VARCHAR(191) NOT NULL,
    `fronius_accesskey_id` VARCHAR(191) NOT NULL,
    `fronius_accesskey_value` VARCHAR(191) NOT NULL,

    INDEX `fk_user1_idx`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fronius_info` ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
