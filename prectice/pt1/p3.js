// Write node js script to fetch values from url given below and display output as asked.
// "http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” page in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.
const http= require('http')
process.noDeprecation=true
var fs = require('fs')
var url=require('url')
var addr="http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
var d= url.parse(addr,true)
process.noDeprecation=true
console.log(d)
console.log(d.query)
var a=d.query.c1
var b=d.query.c2
var c=d.query.c3
var d1=d.pathname
var d2=d1.split("/").pop()
var e= d.hash
console.log(a) //Hello
console.log(b) //FSD2 T1 Test
console.log(c) //Welcome to LJU
console.log(e)
console.log(d.hash.split("#").pop())
console.log(d1)
console.log(d2) // /exam.txt

fs.writeFileSync(d2,a+"!"+"\n"+c+" "+b+"\n"+e)

http.createServer((reg,res)=>{
    res.writeHead(200,{"Content-Type":"text/application/.json"})
    res.write((fs.readFileSync(d2,"utf-8")))
   
    res.end()
    
}).listen(5678,()=>{
    console.log("server connected")
})