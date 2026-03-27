// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
//   1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
//           	Output:
//           	Hello!
//           	Welcome to LJU FSD2 T1 Test
//           	#AllTheBest
//   2) Read content from file “exam.txt” and send response to server and display data in “/”  page in same format as above  

//        but in H1 tag and in red color.
//   3) If any other page is requested it shows “Page not found” message in plain text.
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
