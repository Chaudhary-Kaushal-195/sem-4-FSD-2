const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter((num) => num % 2 === 0) // [2,4,6]
  .map((num) => num * 10) // [20,40,60]
  .reduce((acc, num) => acc + num, 0); // 120

function F4() {
  return (
    <div>
      <h1>Total Price: {result}</h1>
    </div>
  );
}

export default F4;
