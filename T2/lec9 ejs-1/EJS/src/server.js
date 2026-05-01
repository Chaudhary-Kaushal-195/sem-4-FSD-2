expr = require("express");
app = expr();
app.set("veiw engine", "ejs");
app.get("/", (req, res) => {
  res.render("first.ejs");
});
app.listen(5688, () => {
  console.log("http://localhost:5688");
});
