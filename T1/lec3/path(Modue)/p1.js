
path=require("path")
var a=path.dirname("D:/fsd2-kaushal")
console.log(a)
var b=path.basename("D:/fsd2-kaushal/p1.js")
console.log(b)
var c=path.extname("D:/fsd2-kaushal/p1.js")
console.log(c)
var d=path.parse("D:/fsd2-kaushal/p1.js")
console.log(d)
if(d.ext==".js"){
    console.log("JavaScript file")
}
else{
    console.log("not a JavaScript file")
}
console.log("------------------------------------------------------------------")
var pm=require("path"); 
var path="D:/abc/def/jkl/some.txt"; 
var ans=pm.basename(path); 
console.log(ans);
var sep=ans.split("."); 
console.log("Filename="+sep[0]); 
console.log("Extension="+"."+sep[1]);