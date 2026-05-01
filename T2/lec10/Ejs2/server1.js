expr = require("express");
app = expr();
app.set("veiw engine", "ejs");
app.use(expr.urlencoded());
app.get("/", (req, res) => {
  res.render("form.ejs");
});
app.post("/data", (req, res) => {
  fname = req.body.fname;
  marks = req.body.mark;
  res.render("out.ejs", { fname, marks });
});
app.listen(5333, () => {
  console.log("http://localhost:5333");
});
