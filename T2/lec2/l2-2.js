var express=require("express")
var app=express()
app.get('/',(req,res)=>{
    res.send(`</h1>User form</h1>
        <form action='/data' method='get'> 
        Uname:<input type ='text' name='Uname'><br>
        Age:<input type ="text" name='age'>
        <button type="submit">submit</button>
        </form>`)
})
app.get('/data',(req,res)=>{
    Uname=req.query.Uname
    age=req.query.age
    res.send("name = "+Uname+" Age = "+age)
})
app.listen(5678,()=>{
    console.log("http://localhost:5678")
})