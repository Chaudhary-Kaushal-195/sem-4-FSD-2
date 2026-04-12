http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.write('<h1>This is Home page</h1>')

        res.write(`<a href='/'>Home</a><br>
                    <a href='/about'>About</a><br>
                    <a href='/contect'>Contect us</a>`)
        res.end()
    }
   
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.end('<h1>This is about page</h1>')

    }
    else if(req.url=='/contect'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.end('<h1>This is contect page</h1>')

    }
    else{
        res.writeHead(404,{'Content-Text':'text/html'})
        res.end("Page not found")

    }
}).listen(4567,()=>{
    console.log("http://localhost:4567")
})