import RoomItem from "./RoomItem";

export default function RoomsList(props) {
  return (
    <main>
      <div>
        <ul className="md:flex md:flex-row md:justify-between">
          {props.rooms.map((rooms) => (
            <RoomItem key={rooms.id} id={rooms.id} name={rooms.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}
