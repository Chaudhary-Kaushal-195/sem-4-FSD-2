import { useState } from "react";
import img1 from "../assets/download.jpg";
import img3 from "../assets/images.jpeg";

export default function Us3() {
  const [pic, setpic] = useState(true);
  const hs = () => {
    setpic(!pic);
  }
  const bg = pic ? img1 : img3;
    return (
        <div>
            <img src={bg} alt="Hero" />
            
            <button onClick={hs}>Change Image</button>
        </div>
    )

}
