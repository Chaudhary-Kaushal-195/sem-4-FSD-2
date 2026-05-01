const expr = require("express");
app =expr()
sess = require('express-session')
app.use(sess({secret:'This is Key',
                resave:false,
                saveUninitialized:false
}))

app.get('/',(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send(`you visited this page ${req.session.a} times`)
    }
    else{
        req.session.a=1
        res.send('welcome user')
    }
})
app.listen(5555, () => {
    console.log("Server running on http://localhost:5555") 
})