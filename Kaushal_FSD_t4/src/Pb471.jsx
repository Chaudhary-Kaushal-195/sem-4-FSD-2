// Create a React form which accepts Name,Rollno and totalmarks,on 
// submitting the form it should be saved in data table inside MongoDB 
// database named student.
import axios from "axios"
import { useState } from "react"
function Pb471(){
    const[name,setusername]=useState('')
    const[rollno,setrollno]=useState('')
    const[totalmarks,setTotalmarks]=useState('')
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/data",{name,rollno,totalmarks})
            alert(`Welcome ${name}`)
            setusername('')
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
           Username <input type="text" name="uname" value={name} onChange={(e)=>setusername(e.target.value)} />
            <br/>
           Rollno <input type="number" name='rollno' value={rollno} onChange={(e)=>setrollno(e.target.value)}/>
            <br/>
           Totalmarks <input type="number" name="marks" value={totalmarks} onChange={(e)=>setTotalmarks(e.target.value)}/>
            <br/>
            <button type="submit">Click</button>
        </form>
        </>
    )
}
export default Pb471