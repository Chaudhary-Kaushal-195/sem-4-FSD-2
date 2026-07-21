const mg=require("mongoose")
const expr=require("express")
const cors=require("cors")
const app=expr()
app.use(cors())
app.use(expr.json())
mg.connect("mongodb://127.0.0.1:27017/student")
const myschema=new mg.Schema({
    name:String,
    rollno:Number,
    totalmarks:Number
})
const mymodel=new mg.model("Pb471",myschema)
app.post("/data",async(req,res)=>{
    try{
        const{name,rollno,totalmarks}=req.body
        const data=new mymodel({name,rollno,totalmarks})
        await data.save()
        res.send()
    }
    catch(e){
        res.send(e)
    }
})
app.listen(5000)