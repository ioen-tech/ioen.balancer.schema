-- CreateTable
CREATE TABLE `group_energy_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_time` INTEGER NOT NULL,
    `energy` INTEGER NOT NULL,
    `group_id` INTEGER,

    INDEX `fk_groups1_idx`(`group_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
