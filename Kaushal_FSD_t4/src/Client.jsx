import { useState } from "react";
import axios from  'axios'
function Client(){
    const[username,setusername]=useState("")
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/data",{username})
            alert(`Welcome ${username}`)
            setusername(" ")
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <input placeholder="Enter Username" value={username} 
                onChange={(e)=>setusername(e.target.value)}/> <br />
            <input type="submit"/>
        </form>
        <h1>Welcome {username}</h1>
        </>
    )
}
export default Client