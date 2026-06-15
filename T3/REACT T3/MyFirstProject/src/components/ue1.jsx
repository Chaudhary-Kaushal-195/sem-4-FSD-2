import { useState, useEffect } from "react";
function Ue1() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  useEffect(() => {
    alert("Count A is updated");
  });

  function CA() {
    setCountA(countA + 1);
  }
  function CB() {
    setCountB(countB + 1);
  }
  return (
    <>
      <h1>Count A: {countA}</h1>
      <h1>Count B: {countB}</h1>
      <button onClick={CA}>Increment Count A</button>
      <button onClick={CB}>Increment Count B</button>
    </>
  );
}
export default Ue1;
