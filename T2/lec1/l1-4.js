var express=require("express")
var app=express()
var params={
    user:2,
    test:3
}
app.get('/flights/:from/:to',(req,res)=>{
    res.send(req.Params)
})
app.listen(5008,()=>{
    console.log("http://localhost:5008")
})