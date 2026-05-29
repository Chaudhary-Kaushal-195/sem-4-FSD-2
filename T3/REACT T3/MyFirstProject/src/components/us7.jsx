import { useState } from "react";
import './us7.css';

export default function Us7() {
  const [data, setdata] = useState({});
  const [result, setresult] = useState(0);
  const hf = (e) => {
    const { name, value } = e.target;
    setdata({...data,[name]:value})
  }
  const add=()=>{
    setresult(parseInt(data.n1)+parseInt(data.n2))
  }
  const sub=()=>{
    setresult(parseInt(data.n1)-parseInt(data.n2))
  }
  const mul=()=>{
    setresult(parseInt(data.n1)*parseInt(data.n2))
  }
  const div=()=>{
    setresult(parseInt(data.n1)/parseInt(data.n2))
  }
    return (
        <div className="us7Container">
            <div className="us7Content">
                <h1 className="us7Title">Calculator</h1>
                <form className="us7Form">
                    <div className="us7InputGroup">
                        <input type="number" name="n1" className="us7Input" onChange={hf} placeholder="Enter first number"/>
                        <input type="number" name="n2" className="us7Input" onChange={hf} placeholder="Enter second number"/>
                    </div>
                    <div className="us7ButtonGroup">
                        <button type="button" className="us7Button us7ButtonAdd" onClick={add}>Addition</button>
                        <button type="button" className="us7Button us7ButtonSub" onClick={sub}>Subtraction</button>
                        <button type="button" className="us7Button us7ButtonMul" onClick={mul}>Multiplication</button>
                        <button type="button" className="us7Button us7ButtonDiv" onClick={div}>Division</button>
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
