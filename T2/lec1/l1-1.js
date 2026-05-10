var express = require("express");
var app = express();
app.get("/", (req, res) => {
  let obj = { name: "abc", age: 28 };
  // res.write(JSON.stringify(obj))
  // res.send()  //output : {"name":"abc","age":28}
  // // res.send(obj) //output : {"name":"abc","age":28}
  res.json(obj.age); //output : 28
});
app.listen(5613, () => {
  console.log("http://localhost:5613");
});
