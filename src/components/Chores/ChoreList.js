import ChoreItem from "./ChoreItem";

export default function ChoresList({ chore }) {
  return (
    <>
      <ul>
        <ChoreItem key={chore.id} name={chore.name} status={chore.finished} />
      </ul>
    </>
  );
}
