http=require('http')
url=require('url')
fs=require('fs')
const addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU #AllTheBest"

let q=url.parse(addr,true)

const   c1=q.query.c1,
        c2=q.query.c2,
        c3=q.query.c3

const hash=q.hash

const filename="."+q.pathname

const content=c1+"!\n"+c3+" "+c2+"\n"+hash

fs.writeFileSync(filename,content)

http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Text':'text/html'})   
        data=fs.readFileSync(filename,'utf-8')
        res.write("<h1 style='color:red'><pre>"+data+"</pre></h1>")
        res.end()

     }
     else{
        res.writeHead(200,{'Content-Text':'text/html'})   
        res.end("Page not found")
     }
}).listen(2345) 

