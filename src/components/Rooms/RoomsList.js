import RoomItem from "./RoomItem";
import ChoresList from "../Chores/ChoreList";

export default function RoomsList({ rooms }) {
  return (
    <main>
      {rooms.map((room) => (
        <div>
          <h1 key={room.id}>{room.name}</h1>
          <ul className="md:flex md:flex-row md:justify-between">
            {room.chores.map((chore, i) => (
              <li key={i}>{chore.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
