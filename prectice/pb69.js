// Write node.js script to copy content of one file to the other file. data 
// should be fetched from source.txt and insert to destination.txt
var fs =require("fs")
fs.writeFileSync("source.txt","hi kaushal")
fs.copyFileSync("source.txt","destination.txt")
data=fs.readFileSync("destination.txt","utf-8")
console.log(data)