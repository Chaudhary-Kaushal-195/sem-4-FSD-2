fs=require("fs")
fs.writeFile("hello.txt","Good day",(err)=>{
    if(err) 
    throw err
    console.log("Write operation enter")

fs.appendFile("hello.txt","It is great day",(err)=>{
    if(err) 
    throw err
    console.log("append data")

fs.readFile("hello.txt","utf8",(err)=>{
    if(err) 
    throw err
    console.log("Read operation enter")
})})
})
console.log("Proseess end")
