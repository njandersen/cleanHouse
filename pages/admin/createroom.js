export default function CreateRoom() {
  return (
    <main className="flex flex-col justify-center">
      <h1>Create New Room</h1>
      <form className="flex flex-col justify-center">
        <input className="" value={""} placeholder="Name" />
        <input value={""} placeholder="Chores" />
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
