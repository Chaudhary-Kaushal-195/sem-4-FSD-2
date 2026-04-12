path=require("path")
fs=require("fs")

var a=path.dirname("FSD-mern/path.txt")
console.log(a)
var b=path.basename("FSD-mern/path.txt")
console.log(b)
var c= a+"/"+b
fs.mkdir(a,(err)=>{
    if(err) throw err
})
fs.writeFile(c, "Same data",(err)=>{
    if(err) throw err
})

fs.copyFile("FSD-mern/path.txt","FSD-mern/newfile.txt",(err)=>{
    if(err) throw err
})

fs.unlink("FSD-mern/path.txt",(err)=>{
    if(err) throw err
})