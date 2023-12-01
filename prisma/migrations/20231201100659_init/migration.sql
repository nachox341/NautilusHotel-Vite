-- CreateTable
CREATE TABLE `Post` (
    `rut` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
