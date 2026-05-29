import { useState } from "react";

export default function Us2() {
  const [style, setstyle] = useState("tomato");
  const hs = () => {
    setstyle("cyan");
  }
    return (
        <div>
            <h1 style={{backgroundColor:style}}>Hello</h1>
            
            <button onClick={hs}>Change Color</button>
        </div>
    )


    
}
