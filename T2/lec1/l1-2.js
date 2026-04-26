var express = require("express");
var app = express();
app.get("/", (req, res) => {
  res.type("text/html");
  res.send("<h1>Hello World</h1>");
});
app.get("/about", (req, res) => {
  res.type("text/html");
  res.send("<h1>About Page</h1>");
});

app.listen(3000, () => {
  console.log("http://localhost:3000/about");
});
