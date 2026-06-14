const cart = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 500 },
];

const total = cart.reduce((acc, item) => acc + item.price, 0);

function F3() {
  return (
    <div>
      <h1>Total Price: {total}</h1>
    </div>
  );
}

export default F3;
