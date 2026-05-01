const expr = require("express");
app =expr()
cp = require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('fname','abc')
    res.cookie('lname','pqr')
    res.cookie('email','abc@gmail.com',{maxAge:10000})
    res.cookie('contact','4768769')
    res.clearCookie('contact')
    res.send("cookie stored")
})
app.listen(5679, () => {
    console.log("Server running on http://localhost:5679");
});