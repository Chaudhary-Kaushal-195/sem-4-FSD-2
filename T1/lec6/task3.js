http=require('http')

http.createServer((req,res)=>{
    if(req.url=='/'){
        setTimeout(()=>{
        res.writeHead(200,{'Content-Text':'text/html'})
        res.write("<h1>Welcome to Priyen sir's class</h1>")
        res.end()
        },5000)
    }
    else{
        res.writeHead(404,{'Content-Text':'text/html'})
        res.end("Page not found")

    }
}).listen(5678,()=>{
    console.log("http://localhost:5678")
})
