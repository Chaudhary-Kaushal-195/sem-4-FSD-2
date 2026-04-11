var express=require("express")
var app=express()
app.get('/user/:id',(req,res)=>{
    const uid=req.params.id
    const name=req.query.name
    const mark=req.query.mark
    // res.send("User id = "+uid+" name = "+name+" Marks = "+mark)
    res.json({
    "message":" Data Received",
    "params":{"id":uid},
    "query":{name,mark}

})
})

app.listen(3000,()=>{
    console.log("http://localhost:3000/user/44?name=test&mark=23")
})