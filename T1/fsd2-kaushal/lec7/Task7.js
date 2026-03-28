// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and font size must be 32px, Login page shows one HTML file from static URL having Form with detail for Username, Password, submit and reset button, Gallery page reflect one Image “hello.jpg” and any other page shows “Page Not found”. Write all necessary files to perform task. (Image already exist in same folder)

fs=require('fs')
http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Text':'text/html'})
        res.write("<h1 style='color:blue;font-size:32px'>Welcome to Log in page</h1>")
        res.write(`<a href='/'>Home</a><br>
                    <a href='/about'>About</a><br>
                    <a href='/contect'>Contect us</a><br>
                    <a href='/login'>login page</a>
                    `)
        res.end()
    }
    else if(req.url=='/login'){
        data=fs.readFileSync('login.html')
        res.write(`<head>
                        <link rel="stylesheet" href="style.css">
                    </head>
                    <body>
                        <h1 class="a">Heloo</h1>
                    </body>
                    `)
                    
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
}).listen(2345,()=>{
    console.log("http://localhost:2345")
})