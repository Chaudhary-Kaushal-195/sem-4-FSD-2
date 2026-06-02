// Task-2


// Use multiple contexts in a React application by creating and consuming them across different components.

// uc1.js: Creates a context for CSS styling and provides it to Comp1.

// uc2.js: Creates a context for a string value ("Students") and provides it to Comp2.

// uc3.js: Consumes both contexts and displays a message with the provided styles and string.
import { createContext } from "react";
import Comp2 from './comp2'
const mycss={backgroundColor:"lightblue",color:"darkblue",padding:"20px",borderRadius:"10px"
}
const Data= createContext()
function Comp1(){
    return(
        <Data.Provider value={mycss}>
            <Comp2/>
        </Data.Provider>
    )
}
export default Comp1
export {Data}