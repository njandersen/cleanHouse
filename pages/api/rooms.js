import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function getAllRooms(req, res) {
  if (req.method === "GET") {
    const roomFeed = await prisma.room.findMany({
      include: {
        chores: true,
      },
    });
    res.json(roomFeed);
  }
}
