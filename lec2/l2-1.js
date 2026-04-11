var express=require("express")
var app=express()
app.get('/data',(req,res)=>{
    name=req.query.uname
    age=req.query.age
    res.send("name = "+name+"Age = "+age)
})
app.listen(5678,()=>{
    console.log("http://localhost:5678/data?uname=abc&age=28")
})