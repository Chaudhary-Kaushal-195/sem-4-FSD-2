http=require('http')

http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Text':'text/html'})
        res.write(`
                <body>
                    <p id="demo"></p>
                    <script>
                        setTimeout(()=>{
                            document.getElementById("demo").innerHTML="Welcome"
                        },5000)
                    </script>
                </body> 
        `)
        res.end()
        
    }
    else{
        res.writeHead(404,{'Content-Text':'text/html'})
        res.end("Page not found")

    }
}).listen(5679,()=>{
    console.log("http://localhost:5679")
})
