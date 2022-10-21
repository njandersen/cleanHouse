import ChoreItem from "./ChoreItem";

export default function ChoresList(props) {
  return (
    <>
      <ul>
        {props.chores.map((chore) => (
          <ChoreItem key={chore.id} name={chore.name} status={chore.finished} />
        ))}
      </ul>
    </>
  );
}
