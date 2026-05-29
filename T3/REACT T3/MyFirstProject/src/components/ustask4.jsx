import { useState } from "react";
import './ustask4.css';

export default function Ustask4() {
    const [obj, setobj] = useState({brand:"bmw" ,color:"titangray" ,model:"x5", year:2020});
    const hs = () => {
      setobj({brand:"audi",color:"black",model:"a4", year:2021} );
    }
    return (
        <div className="ustask4Container">
            <div className="ustask4Content">
                <h1 className="ustask4Title">My Car</h1>
                <div className="carInfo">
                    <div className="carDetails">
                        <div className="carDetail">
                            <p className="carDetailLabel">Brand</p>
                            <p className="carDetailValue">{obj.brand}</p>
                        </div>
                        <div className="carDetail">
                            <p className="carDetailLabel">Model</p>
                            <p className="carDetailValue">{obj.model}</p>
                        </div>
                        <div className="carDetail">
                            <p className="carDetailLabel">Year</p>
                            <p className="carDetailValue">{obj.year}</p>
                        </div>
                        <div className="carDetail">
                            <p className="carDetailLabel">Color</p>
                            <p className="carDetailValue">{obj.color}</p>
                        </div>
                    </div>
                </div>
                <button className="ustask4Button" onClick={hs}>Change Car</button>
            </div>
        </div>
    )
}
