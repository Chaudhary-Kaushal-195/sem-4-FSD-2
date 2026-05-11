// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.
expr = require("express");
app = expr();
app.use(expr.urlencoded({ extended: true }));
var a = app.use(expr.static("./", { index: "pb144.html" }));
const A = (req, res, next) => {
  uname = req.body.uname;
  if (uname == "admin") {
    next();
  } else {
    res.send("warning msg!!!");
  }
};
const B = (req, res, next) => {
  res.send("welcome… admin!!!");
  next();
};
app.use("/data1", A, B);

app.get("/data1", (req, res) => {
  res.send("username = " + req.uname + " Updated Marks= " + req.mark);
});

app.listen(5678, () => {
  console.log("http://localhost:5678");
});
