import { useState, useEffect } from "react";
import axios from "axios";
function Ax1() {
  const [pic, setpic] = useState("");
  function fun() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        setpic(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(fun, []);
  return (
    <>
      <img src={pic.message} heigth={300} width={300} />
      <button onClick={fun}>Generate</button>
    </>
  );
}
export default Ax1;
