import { createContext } from "react";
import Comp3 from "./comp3";
const Str = createContext()
function Comp2(){
    return(
        <>
        <Str.Provider value={"student"}>
           <Comp3/>
        </Str.Provider>
        </>
    )
}
export default Comp2
export {Str}