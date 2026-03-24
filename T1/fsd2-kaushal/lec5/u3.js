process.noDeprecation=true
var url=require('url')
var fs=require('fs')
var addr="http://localhost:8080/data?T1=25&T2=23&T3=24"
var d= url.parse(addr,true)

var avg=(parseInt(d.query.T1)+parseInt(d.query.T2)+parseInt(d.query.T3))/3

var myurl=new URL(addr)
console.log(myurl)
fs.writeFileSync('avg.txt','Ang is = '+avg)
fs.readFileSync('avg.txt','utf-8')