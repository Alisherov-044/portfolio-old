/*
  Warnings:

  - You are about to drop the column `text` on the `SocialNetwork` table. All the data in the column will be lost.
  - Added the required column `icon` to the `SocialNetwork` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SocialNetwork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_SocialNetwork" ("id", "link") SELECT "id", "link" FROM "SocialNetwork";
DROP TABLE "SocialNetwork";
ALTER TABLE "new_SocialNetwork" RENAME TO "SocialNetwork";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
