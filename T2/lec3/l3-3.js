var express=require("express")
var app=express()
//app.use(express.urlencoded({extended:true}))
const a=(req,res,next)=>{
    req.uname='abc'
    console.log(`Uname insert`)
    next()
}
b=(req,res,next)=>{
    req.mark=20+3
    console.log('mark updated')
    next()
}
app.use('/data',a,b)

app.get('/data',(req,res)=>{
   
    res.send("username = "+req.uname+" Updated Marks= "+req.mark)
})
app.listen(6007,()=>{
    console.log("http://localhost:6007/data")
})
