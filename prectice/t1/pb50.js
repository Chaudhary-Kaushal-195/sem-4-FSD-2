var ps=require("fs");
var data=ps.readFileSync("Hello.txt");
console.log(data);
ps.readFile("Hello.txt",function(err,data){
if(err){return console.error(err); }
console.log(data.toString());});
console.log("Program ended");