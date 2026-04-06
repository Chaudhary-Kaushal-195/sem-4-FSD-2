// Write a Node.Js program to sort an interger array, where all element 
// are available in a file separated by white space. Print sorted array 
// elements on node.js server.
var fs=require("fs")
d1=[34,-78,35,-5,56,12,90,-78,32]
d2=d1.join(" ")
//console.log(d2)
fs.writeFileSync("pb71.txt",d2)

// var data = fs.readFile("pb71.txt","utf-8",(err,dat)=>{
//     if(err){
//         throw err
//     }
//     //console.log(dat)
//     dat2=dat.split(" ")
//    // console.log(dat2)
//     console.log("file read successfully")
// })
console.log("------------------------------------------------------------------")
// var data2=data
//console.log("data2"+data2)

data=fs.readFileSync("pb71.txt","utf-8")
console.log(data)
data2=data.split(" ").sort()
console.log(data2)