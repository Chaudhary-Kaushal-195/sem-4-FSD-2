/* eslint-disable no-unused-vars */
import { useState } from "react";

function Incdec() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </>
  );
}

export default Incdec;
