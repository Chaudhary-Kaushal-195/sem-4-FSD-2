import { useState } from "react";
import "./usi.css";

export default function UsI() {
  const [count, setCount] = useState(0);
  const hc1 = () => {
    setCount(count + 1);
  };
  const hc2 = () => {
    setCount(count - 1);
  };
  return (
    <div className="usiContainer">
      <div className="usiContent">
        <h2 className="usiTitle">Counter Application</h2>
        <div className="usiCounter">{count}</div>
        <div className="usiButtonGroup">
          <button className="usiButton usiButtonDecrement" onClick={hc2}>
            - Decrement
          </button>
          <button className="usiButton usiButtonIncrement" onClick={hc1}>
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}
