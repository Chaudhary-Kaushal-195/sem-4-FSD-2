var e=require('events')
var ee= new e()
fun=()=>{
    console.log("Hello")
}
fun1=()=>{
    console.log("Hi")
}

ee.on("a",fun)
ee.on("b",fun1)


ee.emit("b")
ee.emit("a")

// ee.addListener("status",(code,msg)=>{
//     console.log(`your status code is ${code} with ${msg} message`)
// })

// ee.emit("status",200,'OR')