import { useState } from "react";
import img1 from "../assets/download.jpg";
import img3 from "../assets/images.jpeg";
import './us3.css';

export default function Us3() {
  const [pic, setpic] = useState(true);
  const hs = () => {
    setpic(!pic);
  }
  const bg = pic ? img1 : img3;
    return (
        <div className="us3Container">
            <div className="us3Content">
                <img src={bg} alt="Hero" className="us3Image" />
                <button className="us3Button" onClick={hs}>Change Image</button>
            </div>
        </div>
    )

}
