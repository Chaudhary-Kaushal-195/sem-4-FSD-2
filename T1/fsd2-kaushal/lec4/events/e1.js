var EventEmitter=require('events')
var e=new EventEmitter()
e.on("sayname",()=>{
    console.log("Hello")
})
e.emit('sayname')
e.on("sayname1",()=>{
    console.log("my name is abc")
})
e.emit('sayname1')
