// Write express JS script to load in html file* having username, 
// password and submit button. On clicking of submit button,
// it should jump on check page using post method. Implement 
// an authentication middleware that checks whether the entered username is
// "admin" and the password is "1234". If the credentials are correct, the 
// application should display the message "Login Successful". For any other 
// username it should stay on same middleware to print warning 
// message in red color. 

var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`</h1>User form</h1>
        <form action='/data' method='get'> 
        Uname:<input type ='text' name='Uname'><br>
        Passwork:<input type ="pass" name='passwork'>
        <button type="submit">submit</button>
        </form>`)
})
const a=(req,res,next)=>{
    if(req.uname=='admin' && req.pass=='1234'){
        console.log(`Login Successful`)
        next()
    }
    res.send(`<p style="color:red">Warning!!</p>`)
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
app.listen(6008,()=>{
    console.log("http://localhost:6008/data")
})