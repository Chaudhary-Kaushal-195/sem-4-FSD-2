import { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(0);

  const b = () => {
    setLike(like + 1);
  };

  return (
    <>
      <button onClick={b}>Like Here</button>
      <h2>Like count : {like}</h2>
    </>
  );
}
