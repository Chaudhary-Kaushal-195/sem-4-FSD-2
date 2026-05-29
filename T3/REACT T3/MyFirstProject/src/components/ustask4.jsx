import { useState } from "react";

export default function Ustask4() {
    const [obj, setobj] = useState({brand:"bmw" ,color:"titangray" ,model:"x5", year:2020});
  const hs = () => {
    setobj({brand:"audi",color:"black",model:"a4", year:2021} );
  }
    return (
        <div>
            <h1>MY Car {obj.brand} {obj.model} {obj.year} {obj.color} </h1>
            <button onClick={hs}>Change Car</button>
        </div>
    )
}
