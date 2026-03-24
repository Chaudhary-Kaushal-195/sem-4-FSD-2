const http= require('http')
http.createServer((reg,res)=>{
    obj={"name":"abc","age":24}
    res.writeHead(200,{"Content-Type":"text/application/.json"})
    res.write(JSON.stringify(obj))
   
    res.end()
    
}).listen(5678,()=>{
    console.log("server connected")
})