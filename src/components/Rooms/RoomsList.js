import ChoresList from "../Chores/ChoreList";

export default function RoomsList({ rooms }) {
  return (
    <main className="md:flex md:flex-row md:justify-between">
      {rooms.map((room) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black mb-6 mt-8 p-3 w-80">
          <h1 className="text-3xl p-3 bg-gray-400 " key={room.id}>
            {room.name}
          </h1>
          <hr />
          <ul>
            {room.chores.map((chore) => (
              <ChoresList chore={chore} />
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
