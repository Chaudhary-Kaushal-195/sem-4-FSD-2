import { createContext } from "react";
import Uc2 from './uc2'
const Fname = createContext()
const Lname = createContext()
const N1 = createContext()
const N2 = createContext()
function Uc1(){
    return(
        <>
        <Fname.Provider value="Gyorge">
            <Lname.Provider value="Luthar">
                <N1.Provider value={5}>
                    <N2.Provider value={10}>
                        <Uc2/>
                    </N2.Provider>
                </N1.Provider>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export default Uc1
export {Fname, Lname ,N1,N2}