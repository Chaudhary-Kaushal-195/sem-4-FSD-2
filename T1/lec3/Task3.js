// Create JSON object  contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respecwhichtively. And object as well as calculated  data in shape.txt	
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs=require("fs")
fs.writeFileSync("shape.txt",JSON.stringify(shape))
data1=fs.readFileSync("shape.txt","utf-8")
data2=JSON.parse(data1)
console.log(data2)
console.log(data2[1])
ps=4*data2[1].side
pc=2*3.14*(data2[0].diameter)/2
console.log(ps)
console.log(pc)
fs.appendFileSync("shape.txt", "perimeter of square "+ps)
fs.appendFileSync("shape.txt", "perimeter of circle "+pc)