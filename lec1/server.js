var express =require("express")
var app=express()
app.get('/',(req,res)=>{
    //res.type('text/html')
    res.set('content-type','text/html')
    res.send('<h1>Hello World</h1>')
})
app.listen(3000,()=>{
    console.log('server started')
})