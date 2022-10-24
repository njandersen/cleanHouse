import RoomsList from "../../src/components/Rooms/RoomsList";

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

export default function AdminRooms({}) {
  return (
    <>
      <div>
        <h1 className="text-3xl">Rooms</h1>
        <RoomsList rooms={DUMMY_ROOMS} />
      </div>
    </>
  );
}
