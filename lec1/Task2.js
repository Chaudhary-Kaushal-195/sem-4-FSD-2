// Task -2  Write Express JS script to request server to display json object 
// (Array of Objects) in table form on browser. 
var express=require("express")
var app=express()

let obj=[{name:"abc",age:28},
        {name:"pqr",age:24},
        {name:"xyz",age:35}]

app.get('/',(req,res)=>{
    res.type('text/html')
    res.send(`<table><tr>
        <th>"Name"</th>
        <th>"age"</th>
    </tr>
    <tr>
        <td>obj.name</td>
        <td>obj.age</td>
    </tr></table>`)
    
})

app.listen(3001,()=>{
    console.log("http://localhost:3002")
})