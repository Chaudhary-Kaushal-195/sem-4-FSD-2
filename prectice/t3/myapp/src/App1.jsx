import Pr2 from "./Pr2";

function App1() {
  const xyz = "Computer";

  return (
    <div>
      <Pr2 Name={xyz} Price="70000" />

      <Pr2 Name="Mobile" Price="20000" />
    </div>
  );
}

export default App1;
