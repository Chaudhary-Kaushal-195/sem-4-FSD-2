var ps=require("fs");
var data=ps.readFileSync("Hello.txt");
console.log(data);
data1=ps.readFileSync("Hello.txt", 'utf-8')
console.log(data1);
console.log("Program ended");