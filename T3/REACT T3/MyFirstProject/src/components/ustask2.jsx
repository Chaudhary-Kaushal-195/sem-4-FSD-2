// Task-2

// Write a program having a button “show”. By clicking a button, it will display text and button 
// text will be changed as “Hide”. By clicking Hide button, 
// the text will be disappeared and button text will become “show” again. 

import { useState } from "react";

export default function Ustask2() {
    const [text, settext] = useState(true);
  const ht = () => {
    settext(!text);
  }
  const bt = text ? "show" : "hide";
    return (
        <div>
            {text && <p>This is the text that will be shown or hidden.</p>}
            <button onClick={ht}>{bt}</button>
        </div>
    )
}
