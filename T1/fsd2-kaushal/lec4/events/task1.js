var EventEmitter=require('events')
var e=new EventEmitter()
e.on("sayname",()=>{
    console.log("Connection successfully")
    e.on("data-received",()=>{
        console.log("Data received successfully")
    })
    e.emit('data-received')
    
})
e.emit('sayname')
console.log("Thanks")