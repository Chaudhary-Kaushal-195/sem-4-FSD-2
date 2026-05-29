import { useState } from "react";

export default function UsI() {
  const [count, setCount] = useState(0);
  const hc1 = () => {
    setCount(count + 1);
  }
  const hc2 = () => {
    setCount(count - 1);
  }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={hc1}>Increment</button>
            <button onClick={hc2}>Decrement</button>
        </div>
    )
}
