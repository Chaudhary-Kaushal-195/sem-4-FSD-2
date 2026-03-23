var fs=require("fs")
var arr=[5,true,"hello",150,"jorld",1]
var arr1=[4,78,5,78,346,45,23,56]
fs.writeFileSync("pb75.txt",JSON.stringify(arr))
var a=JSON.stringify(arr.sort((a,b)=>a-b))
fs.appendFileSync("pb75.txt","\nSorted array is: "+a)