var fs = require("fs")
var arr=[3,7,9,2,5]
var data=JSON.stringify(arr.sort())
var data3=""
for(d of data){
    var d3=d.replace(","," ")
    data3=data3.concat(d3)
}
fs.writeFileSync("array.txt",data3)




