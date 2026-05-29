import { useState } from "react";

export default function Us6() {
  const [data, setdata] = useState({});
  const hf = (e) => {
    const { name, value } = e.target;
    setdata({...data,[name]:value})
  }
    return (
        <div>
            <input type="text" name="fname" onChange={hf}/>
            <input type="text" name="lname" onChange={hf}/>
            <h1>Firstname :{data.fname}</h1>
            <h1>Lastname :{data.lname}</h1>

        </div>
    )

}
