var e=require('events')
var ee= new e()
fun=()=>{
    console.log("Hello")
}
fun1=()=>{
    console.log("Hi")
}

ee.on("conn",fun)
ee.on("conn",fun1)


ee.emit("b")
ee.emit("a")

let c=ee.listenerCount("conn")
console.log(c)
ee.emit("conn")

ee.removeListener('conn',fun)

let d=ee.listenerCount('conn')

console.log(d)
ee.emit("conn")
