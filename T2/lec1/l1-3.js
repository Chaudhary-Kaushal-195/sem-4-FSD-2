var express=require("express")
var app=express()


app.get('/:id',(req,res)=>{
    
    res.send('User with id = '+req.params.id)
})
app.listen(5007,()=>{
    console.log("http://localhost:5007/69")
})