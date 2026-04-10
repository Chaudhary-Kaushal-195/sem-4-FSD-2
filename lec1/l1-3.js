var express=require("express")
var app=express()
req.params{
        userId:2,
        test:3
    }
app.get('/:id',(req,res)=>{
    
    res.send('User with id = '+req.params.id)
})
app.listen(5007,()=>{
    console.log("http://localhost:5007")
})