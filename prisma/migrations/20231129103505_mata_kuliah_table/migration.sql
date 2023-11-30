-- CreateTable
CREATE TABLE `MataKuliah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mataKuliah` VARCHAR(191) NOT NULL,
    `sks` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
