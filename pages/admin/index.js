import RoomsList from "../../src/components/Rooms/RoomsList";
import prisma from "../../lib/prisma";
import ChoresList from "../../src/components/Chores/ChoreList";

const DUMMY_ROOMS = [
  {
    id: "r1",
    name: "Living Room",
  },
  {
    id: "r2",
    name: "Kitchen",
  },
  {
    id: "r3",
    name: "Bathroom",
  },
];

export async function getStaticProps() {
  const rooms = await prisma.room.findMany({
    include: {
      chores: true,
    },
  });

  return {
    props: { rooms },
    revalidate: 10,
  };
}

export default function AdminRooms({ rooms }) {
  return (
    <>
      <div>
        <h1 className="text-3xl">Rooms</h1>
        <RoomsList rooms={rooms} />
      </div>
    </>
  );
}
