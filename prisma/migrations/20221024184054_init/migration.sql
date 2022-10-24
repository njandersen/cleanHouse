-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "name" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Chore" (
    "name" TEXT NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chore_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "_ChoreToRoom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ChoreToRoom_AB_unique" ON "_ChoreToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_ChoreToRoom_B_index" ON "_ChoreToRoom"("B");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoreToRoom" ADD CONSTRAINT "_ChoreToRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "Chore"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChoreToRoom" ADD CONSTRAINT "_ChoreToRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "Room"("name") ON DELETE CASCADE ON UPDATE CASCADE;
