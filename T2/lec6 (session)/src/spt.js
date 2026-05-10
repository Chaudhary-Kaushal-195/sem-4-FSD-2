const expr = require("express");
app = expr();
sess = require("express-session");
app.use(expr.urlencoded({ extended: true }));
app.use(
  sess({ secret: "This is Key", resave: false, saveUninitialized: false }),
);
app.use(expr.static("../public", { index: "login.html" }));
app.use(expr.static("../public", { index: "spt.html" }));

app.post("/logindata", (req, res) => {
  req.session.fname = req.body.fname;
  res.redirect("/spt.html");
});
app.post("/orderdata", (req, res) => {
  req.session.item = req.body.item;
  req.session.qty = req.body.qty;

  res.redirect("/fetch");
});
app.get("/fetch", (req, res) => {
  res.send(`Name:${req.session.fname} <br><br>
            Item: ${req.session.item} <br><br>
            Quantity: ${req.session.qty} `);
});
app.listen(5558, () => {
  console.log("Server running on http://localhost:5558");
});
