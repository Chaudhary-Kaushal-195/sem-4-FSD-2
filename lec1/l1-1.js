var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    let obj={name:'abc',age:28}
    //res.write(JSON.stringify(obj))
    //res.send()
    //res.send(obj)
    res.json(obj.age)
})

app.listen(5612)