// Task -2  Write Express JS script to request server to display json object 
// (Array of Objects) in table form on browser. 
var express=require("express")
var app=express()

let obj=[{name:"abc",age:28},
        {name:"pqr",age:24},
        {name:"xyz",age:35}]

app.get('/',(req,res)=>{
    res.type('text/html')
    res.write(`<table>
    <tr>
        <th>"Name"</th>
        <th>"Age"</th>
    </tr>
    `)
    for(i of obj ){
    res.write(`<tr>
        <td>${i.name}</td>
        <td>${i.age}</td>
    </tr>`)}
    
    res.write(`</table>`)
    


    res.end()
})

app.listen(3002,()=>{
    console.log("http://localhost:3002")
})