// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console. 

var data=[{"name":"abc","age":22},{"name":"pqr","age":32}]
fs=require("fs")
fs.writeFileSync("student.txt",JSON.stringify(data))
data1=fs.readFileSync("student.txt","utf-8")
console.log(data1)
data2=JSON.parse(data1)
console.log(data2)
fs.copyFileSync("student.txt","s2.txt")
data3=fs.readFileSync("s2.txt","utf-8")

console.log(data3)
data4=JSON.parse(data3)
console.log(data4)
