import { useState } from "react";

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
        <>
            <input type="number" name="n1" onChange={hf}/>
            <input type="number" name="n2" onChange={hf}/>
            <button onClick={add}>Addition</button>
            <button onClick={sub}>Subtraction</button>
            <button onClick={mul}>Multiplication</button>
            <button onClick={div}>Division</button>
            <h1>{result}</h1>
        </>
    )

}
