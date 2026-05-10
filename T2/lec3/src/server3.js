const expr = require("express");
const app = expr();
const path = require("path");
app.use(expr.static("../public", { index: "server3.html" }));

app.get("/data", (req, res) => {
  fname = req.query.fname;
  pass = req.query.pass;
  res.send(`Welcome ${fname} year password is ${pass}`);
});
app.listen(5674, () => {
  console.log("Server running on http://localhost:5674");
});
