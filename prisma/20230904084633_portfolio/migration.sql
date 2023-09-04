-- CreateTable
CREATE TABLE "Specification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Specification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSet" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "SkillSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
