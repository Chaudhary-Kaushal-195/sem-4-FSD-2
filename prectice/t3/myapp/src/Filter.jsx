const users = [
  { id: 1, name: "John", active: true },
  { id: 2, name: "Alice", active: false },
  { id: 3, name: "Bob", active: true },
];

function F2() {
  return (
    <div>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}

export default F2;
