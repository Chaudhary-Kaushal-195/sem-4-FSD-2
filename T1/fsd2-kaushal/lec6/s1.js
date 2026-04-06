http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.write('<h1>Hello home Page</h1>')
        res.end()
    }
    
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.end('<h1>This is about page</h1>')

    }

    else{
        res.writeHead(404,{'Content-Text':'text/html'})
        res.end("Page not found")
    }
}).listen(5009,()=>{
    console.log("http://localhost:5009")
})