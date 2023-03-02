-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email_address` VARCHAR(191) NOT NULL,
    `rewards_points` INTEGER NOT NULL DEFAULT 0,
    `energy_consumption` INTEGER,
    `retailer` VARCHAR(191) NOT NULL,
    `meter_hardware` VARCHAR(191) NOT NULL,
    `is_group_admin` INTEGER,
    `group_id` INTEGER,

    UNIQUE INDEX `users.username_unique`(`username`),
    UNIQUE INDEX `users.email_address_unique`(`email_address`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `min_users` INTEGER NOT NULL,
    `max_users` INTEGER NOT NULL,
    `reward_start_balance` INTEGER NOT NULL,
    `group_logo` VARCHAR(191),
    `group_energy` INTEGER,

    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_members` (
    `group_member_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,

    INDEX `fk_users1_idx`(`user_id`),
    INDEX `fk_groups1_idx`(`group_id`),
    PRIMARY KEY (`group_member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fronius_info` (
    `user_id` INTEGER NOT NULL,
    `fronius_userid` VARCHAR(191) NOT NULL,
    `fronius_password` VARCHAR(191) NOT NULL,
    `fronius_accesskey_id` VARCHAR(191) NOT NULL,
    `fronius_accesskey_value` VARCHAR(191) NOT NULL,
    `fronius_device_id` VARCHAR(191) NOT NULL,

    INDEX `fk_users1_idx`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fronius_info` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
