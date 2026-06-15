import { useEffect, useState } from "react";
import axios from "axios";

function Ax2() {
  const [imageUrl, setImageUrl] = useState("");
  function fun() {
    axios
      .get("https://picsum.photos/200/300", {
        responseType: "blob",
      })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        setImageUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(fun, []);
  return (
    <div>
      <h1>Random Image</h1>

      {imageUrl ? <img src={imageUrl} alt="Random" /> : <p>Loading...</p>}
      <button onClick={fun}>Generate</button>
    </div>
  );
}

export default Ax2;
