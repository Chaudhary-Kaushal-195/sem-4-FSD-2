const fruits = ["Apple", "Banana", "Mango"];

function F1() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default F1;
