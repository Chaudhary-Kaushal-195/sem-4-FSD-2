var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`</h1>User form</h1>
        <form action='/data' method='post'> 
        Uname:<input type ='text' name='Uname'><br>
        Age:<input type ="text" name='age'>
        <button type="submit">submit</button>
        </form>`)
})
app.post('/data',(req,res)=>{
    Uname=req.body.Uname
    age=req.body.age
    res.send("name = "+Uname+" Age = "+age)
})
app.listen(5679,()=>{
    console.log("http://localhost:5679")
})