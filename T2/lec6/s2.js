const expr = require("express");
app =expr()
sess = require('express-session')
app.use(sess({secret:'This is Key',
                resave:false,
                saveUninitialized:false
}))
app.use(expr.static('../public',{index:'form2.html'}))

app.get('/savesession',(req,res)=>{
   req.session.fname=req.query.fname
   req.session.pwd=req.query.pwd
   res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
   res.send(`welcome ${req.session.fname}
    <a href='/destroy'>logout</a>`)
})
app.get('/destroy',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})
app.listen(5557, () => {
    console.log("Server running on http://localhost:5557") 
})