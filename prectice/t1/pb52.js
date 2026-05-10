var ps=require("fs");
ps.writeFileSync("source.txt","Hello");
ps.writeFileSync("source1.txt","World");
data=ps.readFileSync("source.txt","utf-8");
data2=JSON.stringify(data);
ps.appendFileSync("source1.txt",data2);
console.log(ps.readFileSync("source1.txt","utf-8"));