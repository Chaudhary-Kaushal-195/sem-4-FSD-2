// import { useReducer } from "react";
// import './urtask2.css';

// export default function Us7() {
//     // const reducer = (state, action) => {
//     //     return state+action
//     // }
//     //   const [state, dispatch] = useReducer(reducer, {num1: 0, num2: 0, result: 0});

//   const [data, setdata] = useReducer((state, action) => ({ ...state, ...action }), {});
//   const [result, setresult] = useReducer((state, action) => action, 0);
//   const hf = (e) => {
//     const { name, value } = e.target;
//     setdata({...data,[name]:value})
//   }
//   const add=()=>{
//     setresult(parseInt(data.n1)+parseInt(data.n2))
//   }
//   const sub=()=>{
//     setresult(parseInt(data.n1)-parseInt(data.n2))
//   }
//   const mul=()=>{
//     setresult(parseInt(data.n1)*parseInt(data.n2))
//   }
//   const div=()=>{
//     setresult(parseInt(data.n1)/parseInt(data.n2))
//   }
//     return (
//         <div className="us7Container">
//             <div className="us7Content">
//                 <h1 className="us7Title">Calculator</h1>
//                 <form className="us7Form">
//                     <div className="us7InputGroup">
//                         <input type="number" name="n1" className="us7Input" onChange={hf} placeholder="Enter first number"/>
//                         <input type="number" name="n2" className="us7Input" onChange={hf} placeholder="Enter second number"/>
//                     </div>
//                     <div className="us7ButtonGroup">
//                         <button type="button" className="us7Button us7ButtonAdd" onClick={add}>Addition</button>
//                         <button type="button" className="us7Button us7ButtonSub" onClick={sub}>Subtraction</button>
//                         <button type="button" className="us7Button us7ButtonMul" onClick={mul}>Multiplication</button>
//                         <button type="button" className="us7Button us7ButtonDiv" onClick={div}>Division</button>
//                     </div>
//                 </form>
//                 <div className="us7Result">
//                     <p className="us7ResultLabel">Result</p>
//                     <p className="us7ResultValue">{result}</p>
//                 </div>
//             </div>
//         </div>
//     )

// }
import { useReducer, useState } from 'react'
import './urtask2.css';
export default function Urtask2() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        switch (action.type) {
            case "add":
                return num1 + num2
            case "subtract":
                return num1 - num2
            case "multiply":
                return num1 * num2
            case "divide":
                return num1 / num2
            default:
                return state
        }
    }
    return (
        <div className="us7Container">
            <div className="us7Content">
                <h1 className="us7Title">Calculator</h1>
                <form className="us7Form">
                    <div className="us7InputGroup">
                        <input type="number" className="us7Input" value={num1} onChange={(e) => setNum1(Number(e.target.value))} placeholder="Enter first number"/>
                        <input type="number" className="us7Input" value={num2} onChange={(e) => setNum2(Number(e.target.value))} placeholder="Enter second number"/>
                    </div>
                    <div className="us7ButtonGroup">
                        <button type="button" className="us7Button us7ButtonAdd" onClick={() => dispatch({ type: "add" })}>Add</button>
                        <button type="button" className="us7Button us7ButtonSub" onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
                        <button type="button" className="us7Button us7ButtonMul" onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
                        <button type="button" className="us7Button us7ButtonDiv" onClick={() => dispatch({ type: "divide" })}>Division</button>
                    </div>
                </form>
                <div className="us7Result">
                    <p className="us7ResultLabel">Result</p>
                    <p className="us7ResultValue">{result}</p>
                </div>
            </div>
        </div>
    )
}
