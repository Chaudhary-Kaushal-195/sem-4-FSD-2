import { useState, useEffect } from "react";
function Ue2() {
  const [data, setData] = useState(new Date());
  const [color, setColor] = useState("blue");

  useEffect(() => {
    setInterval(() => {
      setData(new Date());
    }, 1000);
  }, []);
  function CC() {
    setColor(color === "blue" ? "red" : "blue");
  }
  return (
    <>
      <h1 style={{ color: color }}>
        Current Time: {data.toLocaleTimeString()}
      </h1>
      <button onClick={CC}>Change Color</button>
    </>
  );
}
export default Ue2;
