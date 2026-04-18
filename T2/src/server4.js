const expr = require("express");
const path = require("path");
const app = expr();
sp=path.join(__dirname,'/../public')
//app.use(expr.static(sp));
app.get('/',(req,res)=>{
    res.sendFile(sp+'/form1.html')
})
app.listen(5675, () => {
    console.log("Server running on http://localhost:5675");
});