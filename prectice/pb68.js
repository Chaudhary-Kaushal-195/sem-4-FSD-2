// Write a Node.js program using the path module to take a file path 
// '/user/docs/report.txt' and print:
// The directory name
// The base file name
// The file extension


path=require("path")
var a=path.dirname("/user/docs/report.txt")
console.log(a)
var b=path.basename("/user/docs/report.txt")
console.log(b)
var c=path.extname("/user/docs/report.txt")
console.log(c)
