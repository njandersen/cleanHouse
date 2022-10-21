import RoomsList from "../src/components/Rooms/RoomsList";

const DUMMY_ROOMS = [
  {
    id: "r1",
    name: "Living Room",
  },
];

export default function Home() {
  return (
    <>
      <div>Welcome to cleanHouse!</div>
      <div>
        <h1 className="text-3xl">Rooms</h1>
        <RoomsList rooms={DUMMY_ROOMS} />
      </div>
    </>
  );
}
