// Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.
// a
// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.

const d={data:{a:15,b:20,c:[40,30]}}
fs=require("fs")
fs.writeFileSync("Task4.txt",JSON.stringify(d))
d1=fs.readFileSync("Task4.txt","utf-8")
console.log(d1)
d2=JSON.parse(d1)
console.log(d2)
var add=d2.data.a + d2.data.b
var sub=d2.data.c[1] - d2.data.b
var mul=d2.data.c[1]*d2.data.c[0]
console.log(add)
console.log(sub)
console.log(mul)

fs.appendFileSync("output.txt","\n Addition = "+add)
fs.appendFileSync("output.txt","\n substraction = "+sub)
fs.appendFileSync("output.txt","\n multiplection = "+mul)

