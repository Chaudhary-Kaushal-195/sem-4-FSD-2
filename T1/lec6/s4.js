
http=require('http')
fs=require('fs')
http.createServer((req,res)=>{
    file="."+(req.url=="/"?"/login.html":req.url)
    fs.readFile(file,(err,data)=>{
        if(err){
            res.end("file not found")
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        }
    })
}).listen(5293,()=>{
    console.log("http://localhost:5293")
})