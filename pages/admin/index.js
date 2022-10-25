import RoomsList from "../../src/components/Rooms/RoomsList";
import prisma from "../../lib/prisma";

export async function getStaticProps() {
  const rooms = await prisma.room.findMany({
    include: {
      chores: true,
    },
  });

  return {
    props: { rooms: rooms },
  };
}

export default function AdminRooms({ rooms }) {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-3xl">Rooms</h1>
        <RoomsList rooms={rooms} />
      </div>
    </div>
  );
}
