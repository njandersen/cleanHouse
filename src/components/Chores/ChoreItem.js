export default function ChoreItem(props) {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.finished}</p>
    </li>
  );
}
