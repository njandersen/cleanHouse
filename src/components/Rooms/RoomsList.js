import RoomItem from "./RoomItem";

export default function RoomsList({ rooms }) {
  return (
    <main>
      <div>
        <ul className="md:flex md:flex-row md:justify-between">
          {rooms.map((room) => (
            <RoomItem key={room.id} id={room.id} name={room.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}
