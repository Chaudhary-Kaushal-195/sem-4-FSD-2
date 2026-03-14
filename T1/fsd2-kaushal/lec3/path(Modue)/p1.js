
path=require("path")
var a=path.dirname("D:\fsd2-kaushal")
console.log(a)
var b=path.basename("D:\fsd2-kaushal")
console.log(b)
var c=path.extname("D:\fsd2-kaushal")
console.log(c)
var d=path.parse("D:\fsd2-kaushal")
console.log(d)
if(d.ext==".txt"){
    console.log("Text file")
}
else{
    console.log("not text file")
}