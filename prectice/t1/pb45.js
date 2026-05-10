var pm=require("path");
var path="D:/GitHub/sem-4-FSD-2/exam.txt";
var ans=pm.parse(path); 
console.log("Filename=" +ans.name); 
console.log("Extension=" +ans.ext);
console.log("full Filename=" +ans.base); 
console.log("ans ="+JSON.stringify(ans));
console.log("path = "+path);
