const http= require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("How r you?")
    res.write("<h1>Hello Server</h1>")
    res.end("Hi")
    
}).listen(5678,()=>{
    console.log("server connected")
})