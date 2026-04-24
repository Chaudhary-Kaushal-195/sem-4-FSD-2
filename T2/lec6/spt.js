const expr = require("express");
app =expr()
sess = require('express-session')
app.use(expr.urlencoded({ extended: true }))
app.use(sess({secret:'This is Key',
                resave:false,
                saveUninitialized:false
}))
app.use(expr.static('../public',{index:'form4.html'}))

app.post('/logindata',(req,res)=>{
    req.session.fname=req.body.fname
    res.redirect('/order.html')
})
app.post('/orderdata',(req,res)=>{
    req.session.item=req.body.item
    req.session.qty=req.body.qty

    res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
    res.send(`${req.session.fname} ${req.session.item}`)
})
app.listen(5558, () => {
    console.log("Server running on http://localhost:5558") 
})