import ChoresList from "../Chores/ChoreList";

const DUMMY_CHORES = [
  {
    id: "c1",
    name: "Run Sweeper Bot",
    status: "Unfinished",
  },
  {
    id: "c2",
    name: "Swiffer",
    status: "Finished",
  },
];

export default function RoomItem(props) {
  return (
    <li className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black mb-6 ml-3 mt-8">
      <div>
        <h1 className="mb-3 text-xl">{props.name}:</h1>
      </div>
      <div>
        <ChoresList chores={DUMMY_CHORES} />
      </div>
    </li>
  );
}
