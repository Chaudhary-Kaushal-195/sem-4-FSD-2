//  Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. 
// Print sorted array of these 5 elements on Node Js server.
fs=require("fs")
fs.writeFileSync("s1.txt","0 1 -9 20 33 -44 50")
data=fs.readFileSync("s1.txt","utf-8")
d=data.split(" ").sort()

console.log(d)

