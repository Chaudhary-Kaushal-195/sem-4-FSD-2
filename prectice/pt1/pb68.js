var p=require("path")
var filepath='/user/docs/report.txt'
var filename=p.basename(filepath)
console.log(filename)
var dirname=p.dirname(filepath)
console.log(dirname)
var extname=p.extname(filepath)
console.log(extname)