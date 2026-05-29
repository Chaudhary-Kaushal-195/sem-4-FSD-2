import { useState } from "react";
import './ustask2.css';

export default function Ustask2() {
    const [text, settext] = useState(true);
    const ht = () => {
      settext(!text);
    }
    const bt = text ? "Hide" : "Show";
    return (
        <div className="ustask2Container">
            <div className="ustask2Content">
                {text && <p className="ustask2Text">This is the text that will be shown or hidden.</p>}
                <button className="ustask2Button" onClick={ht}>{bt} Text</button>
            </div>
        </div>
    )
}
