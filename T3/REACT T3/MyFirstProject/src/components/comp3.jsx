import { useContext } from "react";
import {Data} from "./comp1"
import {Str} from "./comp2"
function Comp3(){
    const mycss = useContext(Data)
    const str = useContext(Str)
    return(
        <>
        <h1 style={mycss}>Welcome to {str} world</h1>
        </>
    )
}
export default Comp3    
