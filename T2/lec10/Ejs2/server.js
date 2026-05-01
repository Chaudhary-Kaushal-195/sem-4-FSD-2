expr = require("express");
app = expr();
app.set("veiw engine", "ejs");
app.use(expr.urlencoded());
app.get("/", (req, res) => {
  res.render("form.ejs");
});
app.post("/data", (req, res) => {
  res.send(`${req.body.fname} has ${req.body.mark} marks`);
});
app.listen(5332, () => {
  console.log("http://localhost:5332");
});
