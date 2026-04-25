expr=require('express')
app=expr()
f=require('./api.js')
app.use('/p',f)
app.listen(5223, () => {
    console.log("Server running on http://localhost:5223/m") 
})