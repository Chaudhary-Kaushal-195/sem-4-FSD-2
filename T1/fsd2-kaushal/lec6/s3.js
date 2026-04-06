http=require('http')
fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Hello <img src='a.png'/></h1>")
        res.end()
    }
   
    else if(req.url=='/a.png'){
        res.writeHead(200,{'Content-Type':'image/png'})
        data=fs.readFileSync('a.png')
        res.end(data)
    }
    
    else{
        res.end("Not found")
    }
   
}).listen(5292,()=>{
    console.log("http://localhost:5292")
})