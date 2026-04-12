var url=require('url')
var addr="http://localhost:8080/data?month='March'&year=2026#Warupdate"
var d= url.parse(addr,true)

 leap=d.query.year
if(leap%4==0){
    console.log("leap year")
}
else{
    console.log("not leap year")
}
process.noDeprecation=true