const http= require('http')
http.createServer((req,res)=>{
    obj={"name":"abc","age":24}
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write(JSON.stringify(obj))
   
    res.end()
    
}).listen(5008,()=>{
    console.log("server connected")
})