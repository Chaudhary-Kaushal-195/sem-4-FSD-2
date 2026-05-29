import { useState } from "react";
import './us2.css';

export default function Us2() {
  const [style, setstyle] = useState("tomato");
  const hs = () => {
    setstyle(style === "tomato" ? "cyan" : "tomato");
  }
    return (
        <div className="us2Container">
            <div className="us2Content">
                <div className="us2ColorBox" style={{backgroundColor: style}}></div>
                <h1 className="us2Title">Color Changer</h1>
                <button className="us2Button" onClick={hs}>Change Color</button>
            </div>
        </div>
    )
}
