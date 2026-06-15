import { useState } from "react";
function Example() {
  const [buttonText, setbuttontext] = useState("Hide");
  const [text, setText] = useState("Hello");
  function clickButton() {
    if (buttonText === "Hide") {
      setbuttontext("Show");
      setText("");
    } else {
      setbuttontext("Hide");
      setText("Hello");
    }
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={clickButton}>Hide/show</button>{" "}
    </div>
  );
}
export default Example;
